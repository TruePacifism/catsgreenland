import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './HobbyAddForm.module.css';
import AddIcon from '../AddIcon/AddIcon';
import addHobby from 'utils/api/hobbies/addHobby';
import getAllHobbies from 'utils/api/hobbies/getAllHobbies';

const statuses = [
  'Заброшено',
  'Не что-то серьезное',
  'Фанат',
  'Зарабатывает',
  'Профессионал',
  'Есть в планах',
];

export default function HobbyAddForm({ onUpdate = () => {} }) {
  const user = useSelector(store => store.currentUser);

  const onSubmit = async ({ name, status }) => {
    if (!name || !status) {
      return;
    }
    addHobby(user.token, name, status);
    onUpdate();
    setName('');
    setStatus('');
    setShowForm(false);
  };

  const [hobbies, setHobbies] = useState([]);
  useEffect(() => {
    const fetchColors = async () => {
      const allHobbies = await getAllHobbies();
      setHobbies(allHobbies);
    };
    fetchColors();
  }, []);

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Функция, которая вызывается при отправке формы
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, status });
  };

  // Функция, которая вызывается при изменении поля ввода для названия цвета
  const handleNameChange = e => {
    const value = e.target.value;
    setName(value);
    // Поиск по списку цветов и вывод подсказок, если есть совпадения
    if (value) {
      const matchingHobbies = hobbies.filter(
        hobby => hobby.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
      setSuggestions(matchingHobbies);
    } else {
      setSuggestions([]);
    }
  };

  // Функция, которая вызывается при выборе подсказки
  const handleSuggestionClick = suggestion => {
    setName(suggestion.name);
    setStatus(suggestion.hobby);
    setSuggestions([]);
  };

  const handleStatusChange = e => {
    setStatus(e.target.value);
  };

  return (
    <div className={styles.container}>
      {showForm ? (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label className={styles.label} htmlFor="name-input">
              Название хобби:
            </label>
            <input
              className={styles.input}
              id="name-input"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
            {suggestions.length > 0 && (
              <ul>
                {suggestions.map(suggestion => (
                  <li
                    key={suggestion.name}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.radioContainer}>
            {statuses.map(statusItem => (
              <label
                key={statusItem}
                className={styles.label + ' ' + styles.radioLabel}
              >
                <input
                  className={styles.radio}
                  type="radio"
                  value={statusItem}
                  checked={status === statusItem}
                  onChange={handleStatusChange}
                />
                {statusItem}
              </label>
            ))}
          </div>
          <button className={styles.button} type="submit">
            Добавить хобби
          </button>
        </form>
      ) : (
        <AddIcon action={() => setShowForm(true)} />
      )}
    </div>
  );
}
