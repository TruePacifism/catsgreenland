import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import styles from './ColorsChart.module.css';
import throttle from 'lodash.throttle';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import { Link } from 'react-router-dom';
import getFullColorInfo from 'utils/api/colors/getFullColorInfo';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ColorsChart({ colors, hideDescription = false }) {
  const [showingColor, setShowingColor] = useState();
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    const refreshShowingColor = async () => {
      const refreshedShowingColor = async prevShowingColor => {
        if (prevShowingColor) {
          const fullColorInfo = await getFullColorInfo(prevShowingColor.name);
          return fullColorInfo;
        } else {
          return null;
        }
      };
      setShowingColor(await refreshedShowingColor());
    };
    refreshShowingColor();
  }, [colors]);
  const isDarkTheme = useSelector(store => store.isDarkTheme);
  useEffect(() => {
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
  }, [colors, isDarkTheme]);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    onClick: throttle(async (event, chartElement) => {
      if (chartElement && chartElement[0]) {
        // здесь вы можете вызвать функцию, которая будет рендерить объекты
        if (showingColor !== colors[chartElement[0].index]) {
          const showingColorInfo = await getFullColorInfo(
            colors[chartElement[0].index].name
          );
          setShowingColor(showingColorInfo);
        }
      }
    }, 100),
  };
  return (
    <Section>
      <Container heading={'Любимые цвета'}>
        {!hideDescription && (
          <>
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
          </>
        )}
        {colors ? (
          <>
            <div className={styles.chart}>
              <Pie
                data={chartData}
                options={options}
                height={400}
                width={400}
              />
            </div>
          </>
        ) : (
          <LoadingSpinner />
        )}
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
