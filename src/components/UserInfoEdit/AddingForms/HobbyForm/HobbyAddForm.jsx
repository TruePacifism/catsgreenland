import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './HobbyAddForm.module.css';
import AddIcon from '../AddIcon/AddIcon';
import addHobby from 'utils/api/hobbies/addHobby';
import getAllHobbies from 'utils/api/hobbies/getAllHobbies';
import editHobby from 'utils/api/hobbies/editHobby';
import deleteHobby from 'utils/api/hobbies/deleteHobby';

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

  const AddHobby = async ({ name, status }) => {
    if (!name || !status) {
      return;
    }
    const newHobbyResponse = await addHobby(user.token, name, status);
    const newHobby =
      typeof newHobbyResponse === Array
        ? newHobbyResponse[0]
        : newHobbyResponse;
    setHobbies(
      hobbies.map(hobby => hobby.name).includes(newHobby.name)
        ? hobbies.map(hobby =>
            hobby.name === newHobby.name ? newHobby : hobby
          )
        : [...hobbies, newHobby]
    );
  };
  const EditHobby = async ({ name, status }) => {
    if (!name || !status) {
      return;
    }
    const updatedHobby = await editHobby(user.token, name, status);
    setHobbies(
      hobbies.map(hobby =>
        hobby.name === updatedHobby.name ? updatedHobby : hobby
      )
    );
  };
  const DeleteHobby = async ({ name }) => {
    if (!name) {
      return;
    }
    const updatedHobby = await deleteHobby(user.token, name);
    setHobbies(
      hobbies.map(hobby =>
        hobby.name === updatedHobby.name ? updatedHobby : hobby
      )
    );
  };

  const [hobbies, setHobbies] = useState([]);
  useEffect(() => {
    const fetchColors = async () => {
      const allHobbies = await getAllHobbies();
      setHobbies(allHobbies);
    };
    fetchColors();
  }, []);

  const [userHobbies, setUserHobbies] = useState([]);
  useEffect(() => {
    setUserHobbies(
      hobbies.filter(hobby =>
        hobby.users.find(hobbyUser => user.vkId === hobbyUser.vkId)
      )
    );
  }, [hobbies, user]);

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [isUsersHobby, setIsUsersHobby] = useState(false);
  useEffect(() => {
    setIsUsersHobby(userHobbies.find(userHobby => userHobby.name === name));
  }, [name, userHobbies]);

  // Функция, которая вызывается при отправке формы
  const handleSubmit = async e => {
    e.preventDefault();
    const actionName = e.nativeEvent.submitter.outerText;
    switch (actionName) {
      case 'Добавить':
        await AddHobby({ name, status });
        break;
      case 'Изменить':
        await EditHobby({ name, status });
        break;
      case 'Удалить':
        await DeleteHobby({ name });
        break;

      default:
        break;
    }
    onUpdate();
    setName('');
    setStatus('');
    setShowForm(false);
  };

  // Функция, которая вызывается при изменении поля ввода для названия цвета
  const handleNameChange = e => {
    const value = e.target.value;
    setName(value);
    // Поиск по списку цветов и вывод подсказок, если есть совпадения
    if (value) {
      const exactSuggestion = hobbies.find(
        hobby => hobby.name.toLowerCase() === value.toLowerCase()
      );
      if (exactSuggestion) {
        setName(exactSuggestion.name);
        const userInHobby = exactSuggestion.users.find(
          hobbyUser => hobbyUser.vkId === user.vkId
        );
        if (userInHobby) {
          setStatus(userInHobby.status);
        }

        setSuggestions([]);
        return;
      }

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
          <div className={styles.buttonsList}>
            {isUsersHobby ? (
              <>
                <button className={styles.button} type="submit">
                  Изменить
                </button>
                <button
                  className={styles.button + ' ' + styles.dangerButton}
                  type="submit"
                >
                  Удалить
                </button>
              </>
            ) : (
              <button className={styles.button} type="submit">
                Добавить
              </button>
            )}
          </div>
        </form>
      ) : (
        <AddIcon action={() => setShowForm(true)} />
      )}
    </div>
  );
}
