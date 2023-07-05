import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';
import styles from './HobbiesChart.module.css';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import { Link } from 'react-router-dom';
import { TagCloud } from 'react-tagcloud';
import randomColor from 'randomcolor';
import getFullHobbyInfo from 'utils/api/hobbies/getFullHobbyInfo';

ChartJS.register(ArcElement, Tooltip, Legend);

function getStatusClass(status) {
  switch (status) {
    case 'Заброшено':
      return styles.forbidden;
    case 'Не что-то серьезное':
      return styles.notSerious;
    case 'Фанат':
      return styles.onGoing;
    case 'Зарабатывает':
      return styles.moneytised;
    case 'Профессионал':
      return styles.professional;
    default:
      return '';
  }
}

export default function HobbiesChart({ hobbies, hideDescription = false }) {
  const [showingHobby, setShowingHobby] = useState();
  const isDarkTheme = useSelector(store => store.isDarkTheme);
  return (
    <Section>
      <Container heading={'Увлечения'}>
        {!hideDescription && (
          <>
            <p className={styles.chartDescription}>
              А вот они - наши любимые занятия. <br />
              Здесь собраны все наши увлечения: от стандартных и повседневных,
              до самых непопулярных и интересных. <br />
              Чем больше название - тем популярнее это занятие у нас
            </p>
            <p className={styles.disclaimer}>
              Данные взяты из{' '}
              <Link to={'/biographys'} className={styles.bioSpan}>
                рассказов
              </Link>{' '}
              участников
              <br />
              При нажатии на название увлечения внизу покажет всех его любителей
            </p>
          </>
        )}
        {hobbies && (
          <TagCloud
            minSize={15}
            maxSize={35}
            randomSeed={3213}
            style={{ textAlign: 'center' }}
            tags={hobbies.map(hobby => ({
              value: hobby.name,
              count: hobby.users.length,
              color: randomColor({
                hue: '#AAFFAA',
                luminosity: isDarkTheme ? 'light' : 'dark',
                alpha: 1,
                brightness: 'min',
                saturation: 'max',
              }),
            }))}
            className={styles.chart}
            onClick={async tag => {
              setShowingHobby(await getFullHobbyInfo(tag.value));
            }}
            props={{ className: styles.chartItem }}
          />
        )}
        {showingHobby && (
          <div className={styles.infoContainer}>
            <div className={styles.colorInfoContainer}>
              <h3 className={styles.colorName}>{showingHobby.name}:</h3>
              {/* <span className={styles.percentage}>
                {Math.floor((showingHobby.users.length / bios.length) * 100)}%
              </span> */}
            </div>
            <ul className={styles.colorUsersList}>
              {showingHobby.users.map((user, idx) => (
                <li key={idx} className={styles.colorUsersItem}>
                  <div className={styles.userProfile}>
                    <img className={styles.userPfp} src={user.pfp} alt="" />
                    <span className={styles.userName}>{user.name}</span>
                  </div>{' '}
                  <span className={getStatusClass(user.status)}>
                    Статус: {user.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </Section>
  );
}
