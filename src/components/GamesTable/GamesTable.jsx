import React, { useEffect, useState } from 'react';
import styles from './GamesTable.module.css';
import { useSelector } from 'react-redux';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import { ReactComponent as SortedUpIcon } from '../../images/sort-arrow-up.svg';
import { ReactComponent as SortedDownIcon } from '../../images/sort-arrow-down.svg';
import { ReactComponent as SearchIcon } from '../../images/search-icon.svg';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

function getStatusClass(status) {
  switch (status) {
    case 'Активно играется':
      return styles.onGoing;
    case 'Пройдено':
      return styles.completed;
    case 'Иногда играется':
      return styles.rarely;
    case 'Заброшено':
      return styles.forbidden;
    default:
      return '';
  }
}

function getUsersByGame(users) {
  const games = [];

  users.forEach(user => {
    user.games.forEach(userGame => {
      const gameIndex = games.findIndex(game => game.title === userGame.title);

      if (gameIndex === -1) {
        games.push({
          title: userGame.title,
          types: userGame.types,
          users: [
            {
              ...user,
              rating: user.games.find(game => game.title === userGame.title)
                .rating,
              status: user.games.find(game => game.title === userGame.title)
                .status,
            },
          ],
        });
      } else {
        games[gameIndex].users.push({
          ...user,
          rating: user.games.find(game => game.title === userGame.title).rating,
          status: user.games.find(game => game.title === userGame.title).status,
        });
      }
    });
  });

  return games;
}

function GamesTable() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortField, setSortField] = useState('userscount');
  const [sortOrder, setSortOrder] = useState('desc');
  const isMobile = useMediaQuery({
    maxWidth: 479,
  });
  const [checkedFilterCheckboxes, setCheckedFilterCheckboxes] = useState({
    синглплеер: true,
    мультиплеер: true,
    кооператив: true,
  });
  const typeFilter = Object.entries(checkedFilterCheckboxes)
    .filter(type => type[1])
    .map(type => type[0]);
  const [showingGame, setShowingGame] = useState(null);
  const bios = useSelector(store => store.bios);

  useEffect(() => {
    if (data.length === 0 && bios[0].pfp && bios[0].pfp.startsWith('http')) {
        const gamesWithUsers = getUsersByGame(bios.filter(bio => bio.games));
        setData(
          gamesWithUsers.map(game => ({
            title: game.title,
            users: game.users,
            types: game.types.join(', '),
            userscount: game.users.length,
          }))
        );
    }
  }, [bios, data]);

  function handleFilterCheckboxChange(handledType) {
    const updatedCheckboxes = {
      ...checkedFilterCheckboxes,
      [handledType]: !checkedFilterCheckboxes[handledType],
    };
    setCheckedFilterCheckboxes(updatedCheckboxes);
  }

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  function handleSort(field) {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  }

  const filteredData = data.filter(
    item =>
      item.title.toLowerCase().includes(filter.toLowerCase()) &&
      typeFilter.some(type => item.types.toLowerCase().includes(type))
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortField) {
      const aValue = a[sortField];
      const bValue = b[sortField];
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    } else {
      return 0;
    }
  });

  return (
    <Section>
      <Container heading={'Игры'}>
        <p className={styles.tableDescription}>
          Хотите найти тиммейтов, обсудить игру или найти что-то новое для себя?
          Смотрите и изучайте таблицу всех наших игр.
        </p>
        <p className={styles.disclaimer}>
          Данные взяты из{' '}
          <Link to={'/biographys'} className={styles.bioSpan}>
            рассказов
          </Link>{' '}
          участников и из{' '}
          <a
            href="https://vk.com/topic-213685976_49163066"
            target="_blank"
            rel="noreferrer"
            className={styles.bioSpan}
          >
            обсуждения
          </a>{' '}
          в группе. <br /> В таблице есть фильтрация, поиск, а также при нажатии
          она отобразит список всех игроков нужной вам игры. <br /> Если у
          кого-то что-то не написано - значит этот кто-то ещё не дал нам эту
          информацию. <br />
          Если в таблице есть ошибки, просьба написать{' '}
          <a
            href="https://vk.com/truepacifism"
            target="_blank"
            rel="noreferrer"
            className={styles.bioSpan}
          >
            Жене
          </a>{' '}
          и он их исправит
        </p>
        <div className={styles.searchContainer}>
          <div className={styles.totalAndSearchContainer}>
            <b className={styles.totalCounter}>
              Всего игр: {sortedData.length}
            </b>
            <div className={styles.searchField}>
              <SearchIcon className={styles.searchIcon} />
              <input
                className={styles.search}
                type="text"
                placeholder="Название игры"
                value={filter}
                onChange={handleFilterChange}
              />
            </div>
          </div>
          <div className={styles.checkboxesList}>
            <label className={styles.checkboxLabel}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="singleplayer"
                id="singleplayer"
                checked={checkedFilterCheckboxes.синглплеер}
                onChange={() => {
                  handleFilterCheckboxChange('синглплеер');
                }}
              />
              Синглплеер
            </label>
            <label className={styles.checkboxLabel}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="multiplayer"
                id="multiplayer"
                checked={checkedFilterCheckboxes.мультиплеер}
                onChange={() => {
                  handleFilterCheckboxChange('мультиплеер');
                }}
              />
              Мультиплеер
            </label>
            <label className={styles.checkboxLabel}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="cooperative"
                id="cooperative"
                checked={checkedFilterCheckboxes.кооператив}
                onChange={() => {
                  handleFilterCheckboxChange('кооператив');
                }}
              />
              Кооператив
            </label>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                <th className={styles.th} onClick={() => handleSort('title')}>
                  Название
                  {sortField === 'title' ? (
                    sortOrder === 'asc' ? (
                      <SortedUpIcon className={styles.sortedUp} />
                    ) : (
                      <SortedDownIcon className={styles.sortedDown} />
                    )
                  ) : (
                    <></>
                  )}
                </th>
                <th
                  className={styles.th}
                  onClick={() => handleSort('userscount')}
                >
                  Кол-во игроков
                  {sortField === 'userscount' ? (
                    sortOrder === 'asc' ? (
                      <SortedUpIcon className={styles.sortedUp} />
                    ) : (
                      <SortedDownIcon className={styles.sortedDown} />
                    )
                  ) : (
                    <></>
                  )}
                </th>
                {!isMobile && (
                  <th className={styles.th} onClick={() => handleSort('types')}>
                    Тип
                    {sortField === 'types' ? (
                      sortOrder === 'asc' ? (
                        <SortedUpIcon className={styles.sortedUp} />
                      ) : (
                        <SortedDownIcon className={styles.sortedDown} />
                      )
                    ) : (
                      <></>
                    )}
                  </th>
                )}
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {sortedData.map(item => (
                <tr
                  className={styles.tr}
                  onClick={() => {
                    setShowingGame(item);
                  }}
                  key={item.title}
                >
                  <td className={styles.td}>{item.title}</td>
                  <td className={styles.td}>{item.userscount}</td>
                  {!isMobile && <td className={styles.td}>{item.types}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showingGame && (
          <div className={styles.showingGameContainer}>
            <h3 className={styles.showingGameTitle}>
              Игроки в{' '}
              <span className={styles.showingGameName}>
                {showingGame.title}
              </span>
              :
            </h3>
            <ul className={styles.playersList}>
              {showingGame.users.map((user, idx) => (
                <li className={styles.playersItem} key={idx}>
                  <div className={styles.playerProfile}>
                    <img className={styles.playerPfp} src={user.pfp} alt="" />
                    <span className={styles.playerName}>{user.name} </span>
                  </div>
                  {user.rating &&
                    user.rating !== '' &&
                    !user.rating.includes('?') && (
                      <span className={styles.playerRating}>
                        Рейтинг: {user.rating}
                      </span>
                    )}
                  {user.status && (
                    <span className={getStatusClass(user.status)}>
                      Статус: {user.status}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </Section>
  );
}

export default GamesTable;
