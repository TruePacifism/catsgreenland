import React, { useEffect, useState } from 'react';
import styles from './GamesTable.module.css';

function GamesTable() {
  // State для хранения данных таблицы и параметров фильтрации, сортировки и поиска
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      { id: 1, name: 'John', age: 25, gender: 'Male' },
      { id: 2, name: 'Mary', age: 30, gender: 'Female' },
      { id: 3, name: 'Bob', age: 40, gender: 'Male' },
      { id: 4, name: 'Alice', age: 20, gender: 'Female' },
    ]);
  }, []);
  const [filter, setFilter] = useState('');
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

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
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.gender.toLowerCase().includes(filter.toLowerCase())
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
    <div>
      <input
        type="text"
        placeholder="Filter"
        value={filter}
        onChange={handleFilterChange}
      />
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th} onClick={() => handleSort('id')}>
              ID
            </th>
            <th className={styles.th} onClick={() => handleSort('name')}>
              Name
            </th>
            <th className={styles.th} onClick={() => handleSort('age')}>
              Age
            </th>
            <th className={styles.th} onClick={() => handleSort('gender')}>
              Gender
            </th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {sortedData.map(item => (
            <tr className={styles.tr} key={item.id}>
              <td className={styles.td}>{item.id}</td>
              <td className={styles.td}>{item.name}</td>
              <td className={styles.td}>{item.age}</td>
              <td className={styles.td}>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GamesTable;
