import React, { useEffect, useState } from 'react';
import styles from './GamesTable.module.css';
import { useSelector } from 'react-redux';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import { ReactComponent as SortedUpIcon } from '../../images/sort-arrow-up.svg';
import { ReactComponent as SortedDownIcon } from '../../images/sort-arrow-down.svg';
import { ReactComponent as SearchIcon } from '../../images/search-icon.svg';

function getUsersByGame(users) {
  const games = [];

  users.forEach(user => {
    user.games.forEach(userGame => {
      const gameIndex = games.findIndex(game => game.title === userGame.title);

      if (gameIndex === -1) {
        games.push({
          title: userGame.title,
          isMultiplayer: userGame.isMultiplayer,
          users: [user],
          rating: userGame.rating,
        });
      } else {
        games[gameIndex].users.push(user);
      }
    });
  });

  return games;
}

function GamesTable() {
  // State для хранения данных таблицы и параметров фильтрации, сортировки и поиска
  const [data, setData] = useState([]);
  const bios = useSelector(store => store.bios);
  useEffect(() => {
    console.log(data);
    console.log(data.length === 0);
    if (data.length === 0) {
      console.log(bios);
      setTimeout(() => {
        const gamesWithUsers = getUsersByGame(bios.filter(bio => bio.games));
        setData(
          gamesWithUsers.map(game => ({
            Название: game.title,
            'Кол-во игроков': game.users.length,
            Мультиплеер: game.isMultiplayer ? 'Мультиплеер' : 'Одиночная',
          }))
        );
        console.log(gamesWithUsers);
      }, 500);
      // if (data) {
      //   setChartData({
      //     labels: colors.map(color => color.name),
      //     datasets: [
      //       {
      //         label: '# of Votes',
      //         data: colors.map(color => color.users.length),
      //         backgroundColor: colors.map(
      //           color =>
      //             `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 0.5)`
      //         ),
      //         borderColor: colors.map(color =>
      //           color.name === 'Белый'
      //             ? `rgba(128, 128, 128, 1)`
      //             : `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 1)`
      //         ),
      //         borderWidth: 1,
      //       },
      //     ],
      //   });
      // }
    }
  }, [bios, data]);

  // useEffect(() => {
  //   setData([
  //     { id: 1, name: 'John', age: 25, gender: 'Male' },
  //     { id: 2, name: 'Mary', age: 30, gender: 'Female' },
  //     { id: 3, name: 'Bob', age: 40, gender: 'Male' },
  //     { id: 4, name: 'Alice', age: 20, gender: 'Female' },
  //   ]);
  // }, []);
  const [filter, setFilter] = useState('');
  const [sortField, setSortField] = useState('Кол-во игроков');
  const [sortOrder, setSortOrder] = useState('desc');

  // Функция для обработки изменения значения фильтра
  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  // Функция для обработки нажатия на заголовок столбца для сортировки
  function handleSort(field) {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  }

  // Функция для фильтрации данных таблицы по заданному фильтру
  const filteredData = data.filter(
    item =>
      item['Название'].toLowerCase().includes(filter.toLowerCase()) ||
      item['Мультиплеер'].toLowerCase().includes(filter.toLowerCase())
  );

  // Функция для сортировки данных таблицы по заданному полю и порядку сортировки
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

  // JSX разметка таблицы
  return (
    <Section>
      <Container heading={'Игры'}>
        <div className={styles.tableContainer}>
          <div className={styles.searchContainer}>
            <SearchIcon className={styles.searchIcon} />
            <input
              className={styles.filter}
              type="text"
              placeholder="Filter"
              value={filter}
              onChange={handleFilterChange}
            />
          </div>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                <th
                  className={styles.th}
                  onClick={() => handleSort('Название')}
                >
                  Название
                  {sortField === 'Название' ? (
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
                  onClick={() => handleSort('Кол-во игроков')}
                >
                  Кол-во игроков
                  {sortField === 'Кол-во игроков' ? (
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
                  onClick={() => handleSort('Мультиплеер')}
                >
                  Мультиплеер
                  {sortField === 'Мультиплеер' ? (
                    sortOrder === 'asc' ? (
                      <SortedUpIcon className={styles.sortedUp} />
                    ) : (
                      <SortedDownIcon className={styles.sortedDown} />
                    )
                  ) : (
                    <></>
                  )}
                </th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {sortedData.map(item => (
                <tr className={styles.tr} key={item['Название']}>
                  <td className={styles.td}>{item['Название']}</td>
                  <td className={styles.td}>{item['Кол-во игроков']}</td>
                  <td className={styles.td}>{item['Мультиплеер']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}

export default GamesTable;
