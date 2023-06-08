import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import styles from './GenderChart.module.css';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

function getGenderPercentage(bios, gender) {
  return Math.floor(
    (bios.filter(bio => bio.gender === gender).length / bios.length) * 100
  );
}
function getAverageAge(ages) {
  const averageAge = Math.floor(
    ages.reduce((sum, age) => sum + age, 0) / ages.length
  );
  let suffix = '';
  switch (averageAge % 10) {
    case 1:
      suffix = averageAge % 100 === 11 ? 'лет' : 'год';
      break;
    case 2:
    case 3:
    case 4:
      suffix =
        averageAge % 100 >= 12 && averageAge % 100 <= 14 ? 'лет' : 'года';
      break;
    default:
      suffix = 'лет';
      break;
  }
  return `${averageAge} ${suffix}`;
}
function getAgeRanges(data) {
  // получаем минимальный и максимальный возраст среди всех
  const minAge = Math.min(...data.flat());
  const maxAge = Math.max(...data.flat());

  // вычисляем размер каждого промежутка, кроме последнего
  const rangeSize = Math.floor((maxAge - minAge + 5) / 5);

  // вычисляем границы промежутков
  const ranges = [];
  for (let i = 0; i < 5; i++) {
    const start = minAge + i * rangeSize;
    const end = start + rangeSize - 1;
    ranges.push({ start, end });
  }
  ranges.push({ start: ranges[ranges.length - 1].end + 1, end: maxAge });

  // сортируем возрасты и группируем их по промежуткам и полу
  const ageGroups = data.reduce(
    (groups, ages, gender) => {
      ages
        .sort((a, b) => a - b)
        .forEach(age => {
          const range = ranges.find(
            range => age >= range.start && age <= range.end
          );
          if (range) {
            const key = gender === 0 ? 'male' : 'female';
            groups[range.start + '-' + range.end][key]++;
          }
        });
      return groups;
    },
    ranges.reduce(
      (obj, range) => ({
        ...obj,
        [range.start + '-' + range.end]: { male: 0, female: 0 },
      }),
      {}
    )
  );

  // преобразуем группы возрастов в массив
  const ageRanges = Object.entries(ageGroups).map(
    ([range, { male, female }]) => ({ range, male, female })
  );
  if (
    ageRanges[ageRanges.length - 1].female === 0 &&
    ageRanges[ageRanges.length - 1].male === 0
  ) {
    ageRanges.pop();
    ranges.pop();
  }

  // возвращаем объект с массивом возрастов и массивом промежутков
  return { ageRanges, ranges };
}
function getDatasets(bios) {
  const agesByGender = [
    bios.filter(bio => bio.gender === 'Мужской' && bio.age).map(bio => bio.age),
    bios.filter(bio => bio.gender === 'Женский' && bio.age).map(bio => bio.age),
  ];
  return agesByGender;
}
export function GenderChart() {
  const bios = useSelector(store => store.bios);
  const [ranges, setRanges] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    const ageRanges = getAgeRanges(getDatasets(bios));
    setRanges(ageRanges.ranges.map(range => `${range.start} - ${range.end}`));
    setData(
      ageRanges.ageRanges.reduce(
        (result, range) => [
          [...result[0], range.male],
          [...result[1], range.female],
        ],
        [[], []]
      )
    );
  }, [bios]);

  return (
    <Section>
      <Container heading={'Пол и возраст'}>
        {data && ranges && (
          <div className={styles.chart}>
            <Bar
              options={options}
              data={{
                labels: ranges,
                datasets: [
                  {
                    label: 'Мужской',
                    data: data[0],
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                  },
                  {
                    label: 'Женский',
                    data: data[1],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  },
                ],
              }}
              width={400}
            />
          </div>
        )}
        <span>Соотношение М/Ж в %: </span>
        <span>
          {getGenderPercentage(bios, 'Мужской')}
          %/
          {getGenderPercentage(bios, 'Женский')}
          %,{' '}
        </span>
        <span>Средний возраст: </span>
        <span>
          {getAverageAge(bios.filter(bio => bio.age).map(bio => bio.age))}
        </span>
      </Container>
    </Section>
  );
}
