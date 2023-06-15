import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';
import styles from './HobbiesChart.module.css';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import { Link } from 'react-router-dom';
import { TagCloud } from 'react-tagcloud';

ChartJS.register(ArcElement, Tooltip, Legend);

function getStatusClass(status) {
  switch (status) {
    case 'Заброшено':
      return styles.forbidden;
    case 'Не что-то серьезное':
      return styles.notSerious;
    case 'Развивается':
      return styles.onGoing;
    case 'Зарабатывает':
      return styles.moneytised;
    case 'Профессионал':
      return styles.professional;
    default:
      return '';
  }
}

function getUsersByHobby(users) {
  const hobbies = [];

  users.forEach(user => {
    user.hobbies.forEach(userHobby => {
      const hobbyIndex = hobbies.findIndex(
        hobby => hobby.name === userHobby.name
      );

      if (hobbyIndex === -1) {
        hobbies.push({
          name: userHobby.name,
          users: [{ ...user, hobbyStatus: userHobby.status }],
        });
      } else {
        hobbies[hobbyIndex].users.push({
          ...user,
          hobbyStatus: userHobby.status,
        });
      }
    });
  });

  return hobbies;
}
export default function HobbiesChart() {
  const bios = useSelector(store => store.bios);
  const [showingHobby, setShowingHobby] = useState();
  const [hobbies, setHobbies] = useState();
  useEffect(() => {
    if (!hobbies && bios[0].pfp && bios[0].pfp.startsWith('http')) {
      const hobbiesWithUsers = getUsersByHobby(bios.filter(bio => bio.hobbies));
      setHobbies(hobbiesWithUsers);
    }
  }, [bios, hobbies]);
  return (
    <Section>
      <Container heading={'Наши любимые дела'}>
        <p className={styles.chartDescription}>
          А вот они - наши любимые занятия. <br />
          Здесь собраны все наши увлечения: от стандартных и повседневных, до
          самых непопулярных и интересных. <br />
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
        {hobbies && (
          <TagCloud
            minSize={15}
            maxSize={35}
            randomSeed={3213}
            style={{ textAlign: 'center' }}
            tags={hobbies.map(hobby => ({
              value: hobby.name,
              count: hobby.users.length,
            }))}
            className={styles.chart}
            colorOptions={{ luminosity: 'dark', hue: 'green' }}
            onClick={tag =>
              setShowingHobby(hobbies.find(hobby => hobby.name === tag.value))
            }
            props={{ className: styles.chartItem }}
          />
        )}
        {showingHobby && (
          <div className={styles.infoContainer}>
            <div className={styles.colorInfoContainer}>
              <h3 className={styles.colorName}>{showingHobby.name}:</h3>
              <span className={styles.percentage}>
                {Math.floor((showingHobby.users.length / bios.length) * 100)}%
              </span>
            </div>
            <ul className={styles.colorUsersList}>
              {showingHobby.users.map((user, idx) => (
                <li key={idx} className={styles.colorUsersItem}>
                  <div className={styles.userProfile}>
                    <img className={styles.userPfp} src={user.pfp} alt="" />
                    <span className={styles.userName}>{user.name}</span>
                  </div>{' '}
                  <span className={getStatusClass(user.hobbyStatus)}>
                    Статус: {user.hobbyStatus}
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
