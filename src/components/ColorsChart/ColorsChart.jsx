import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import styles from './ColorsChart.module.css';
import throttle from 'lodash.throttle';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import { Link } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

function getUsersByColor(users) {
  const colors = [];

  users.forEach(user => {
    user.colors.forEach(userColor => {
      const colorIndex = colors.findIndex(
        color => color.name === userColor.name
      );

      if (colorIndex === -1) {
        colors.push({
          name: userColor.name,
          rgb: userColor.rgb,
          users: [user],
        });
      } else {
        colors[colorIndex].users.push(user);
      }
    });
  });

  return colors;
}
const initChartData = {
  labels: [],
  datasets: [
    {
      label: '# of Votes',
      data: [],
      backgroundColor: [],
      borderColor: [],
      borderWidth: 1,
    },
  ],
};
export default function ColorsChart() {
  const bios = useSelector(store => store.bios);
  const [showingColor, setShowingColor] = useState();
  const [colors, setColors] = useState();
  const [chartData, setChartData] = useState(initChartData);
  const isDarkTheme = useSelector(store => store.isDarkTheme);
  useEffect(() => {
    if (
      chartData === initChartData &&
      bios[0].pfp &&
      bios[0].pfp.startsWith('http')
    ) {
      const colorsWithUsers = getUsersByColor(bios.filter(bio => bio.colors));
      setColors(colorsWithUsers);
      if (colors) {
        setChartData({
          labels: colors.map(color => color.name),
          datasets: [
            {
              label: 'Количество любителей',
              data: colors.map(color => color.users.length),
              backgroundColor: colors.map(
                color =>
                  `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 0.5)`
              ),
              borderColor: colors.map(color => {
                switch (color.name) {
                  case 'Белый':
                    return !isDarkTheme
                      ? `rgba(128, 128, 128, 1)`
                      : `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 1)`;
                  case 'Черный':
                    return !isDarkTheme
                      ? `rgba(128, 128, 128, 1)`
                      : `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 1)`;
                  default:
                    return `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 1)`;
                }
              }),
              borderWidth: 1,
            },
          ],
        });
      }
    }
  }, [bios, colors, chartData, isDarkTheme]);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    onClick: throttle((event, chartElement) => {
      if (chartElement && chartElement[0]) {
        // здесь вы можете вызвать функцию, которая будет рендерить объекты
        if (showingColor !== colors[chartElement[0].index]) {
          setShowingColor(colors[chartElement[0].index]);
        }
      }
    }, 100),
  };
  return (
    <Section>
      <Container heading={'Наши любимые цвета'}>
        <p className={styles.chartDescription}>
          Какой цвет у нас самый любимый? Здесь вы сможете это узнать
        </p>
        <p className={styles.disclaimer}>
          Данные взяты из{' '}
          <Link to={'/biographys'} className={styles.bioSpan}>
            рассказов
          </Link>{' '}
          участников
          <br />
          При нажатии на кусочек с цветом внизу покажет всех его любителей
        </p>
        <div className={styles.chart}>
          <Pie data={chartData} options={options} height={400} width={400} />
        </div>
        {showingColor && (
          <div className={styles.infoContainer}>
            <div className={styles.colorInfoContainer}>
              <h3 className={styles.colorName}>{showingColor.name}:</h3>
              <span className={styles.percentage}>
                {Math.floor(
                  (showingColor.users.length /
                    chartData.datasets[0].data.reduce(
                      (sum, data) => sum + data,
                      0
                    )) *
                    100
                )}
                %
              </span>
            </div>
            <ul className={styles.colorUsersList}>
              {showingColor.users.map((user, idx) => (
                <li key={idx} className={styles.colorUsersItem}>
                  <img className={styles.userPfp} src={user.pfp} alt="" />
                  <span className={styles.userName}>{user.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </Section>
  );
}
