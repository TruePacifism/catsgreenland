import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './GameAddForm.module.css';
import AddIcon from '../AddIcon/AddIcon';
import addGame from 'utils/api/games/addGame';
import getAllGames from 'utils/api/games/getAllGames';
import editGame from 'utils/api/games/editGame';
import deleteGame from 'utils/api/games/deleteGame';

const statuses = [
  'Пройдено',
  'Активно играется',
  'Иногда играется',
  'Заброшено',
];
const typesList = ['Синглплеер', 'Мультиплеер', 'Кооператив'];

export default function GameAddForm({ onUpdate = () => {} }) {
  const user = useSelector(store => store.currentUser);

  const AddGame = async ({ game, status, rating }) => {
    const { title, types } = game;
    if (!title || !status || !types) {
      return;
    }
    const newGameResponse = await addGame(user.token, game, status, rating);
    const newGame =
      typeof newGameResponse === Array ? newGameResponse[0] : newGameResponse;
    setGames(
      games.map(game => game.title).includes(newGame.title)
        ? games.map(game => (game.title === newGame.title ? newGame : game))
        : [...games, newGame]
    );
  };
  const EditGame = async ({ game, status, rating }) => {
    const { title, types } = game;
    if (!title || !status || !types) {
      return;
    }
    const updatedGame = await editGame(user.token, game, status, rating);
    setGames(
      games.map(game => (game.title === updatedGame.title ? updatedGame : game))
    );
  };
  const DeleteGame = async ({ title }) => {
    if (!title) {
      return;
    }
    const updatedGame = await deleteGame(user.token, title);
    setGames(
      games.map(game => (game.title === updatedGame.title ? updatedGame : game))
    );
  };

  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchGames = async () => {
      const allgames = await getAllGames();
      setGames(allgames);
    };
    fetchGames();
  }, []);

  const [userGames, setUserGames] = useState([]);
  useEffect(() => {
    if (!games) {
      return;
    }
    setUserGames(
      games.filter(game =>
        game.users
          ? game.users.find(gameUser => user.vkId === gameUser.vkId)
          : false
      )
    );
  }, [games, user]);

  const [title, setTitle] = useState('');
  const [types, setTypes] = useState('');
  const [status, setStatus] = useState('');
  const [rating, setRating] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [isUserPlaying, setIsUserPlaying] = useState(false);
  useEffect(() => {
    setIsUserPlaying(userGames.find(userGame => userGame.title === title));
  }, [title, userGames]);

  // Функция, которая вызывается при отправке формы
  const handleSubmit = async e => {
    e.preventDefault();
    const actionName = e.nativeEvent.submitter.outerText;
    switch (actionName) {
      case 'Добавить':
        await AddGame({
          game: {
            title,
            types: types.join(', '),
          },
          status,
          rating,
        });
        break;
      case 'Изменить':
        await EditGame({
          game: {
            title,
            types: types.join(', '),
          },
          status,
          rating,
        });
        break;
      case 'Удалить':
        await DeleteGame({
          title,
        });
        break;

      default:
        break;
    }
    onUpdate();
    setTitle('');
    setTypes('');
    setStatus('');
    setRating('');
    setShowForm(false);
  };

  // Функция, которая вызывается при изменении поля ввода для названия цвета
  const handleTitleChange = e => {
    const value = e.target.value;
    setTitle(value);
    // Поиск по списку цветов и вывод подсказок, если есть совпадения
    if (value) {
      const exactSuggestion = games.find(
        game => game.title.toLowerCase() === value.toLowerCase()
      );
      if (exactSuggestion) {
        setIsDisabled(true);
        setTitle(exactSuggestion.title);
        setTypes(exactSuggestion.types.split(', '));
        const userInGame = exactSuggestion.users.find(
          gameUser => gameUser.vkId === user.vkId
        );
        if (userInGame) {
          setStatus(userInGame.status);
          setRating(userInGame.rating ? userInGame.rating : '');
        }
        setSuggestions([]);
        return;
      }
      if (isDisabled) {
        setIsDisabled(false);
      }
      const matchingGames = games.filter(
        game => game.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
      setSuggestions(matchingGames);
    } else {
      setSuggestions([]);
    }
  };

  // Функция, которая вызывается при выборе подсказки
  const handleSuggestionClick = suggestion => {
    setTitle(suggestion.title);
    setTypes(suggestion.types.split(', '));
    setSuggestions([]);
    setIsDisabled(true);
  };

  const handleStatusChange = e => {
    setStatus(e.target.value);
  };
  const handleTypesChange = e => {
    if (types.includes(e.target.value)) {
      setTypes(types.filter(type => type !== e.target.value));
    } else {
      setTypes([...types, e.target.value]);
    }
  };
  const handleRatingChange = e => {
    setRating(e.target.value);
  };

  return (
    <div className={styles.container}>
      {showForm ? (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label className={styles.label} htmlFor="name-input">
              Название игры:
            </label>
            <input
              className={styles.input}
              id="name-input"
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
            {suggestions.length > 0 && (
              <ul>
                {suggestions.map(suggestion => (
                  <li
                    key={suggestion.title}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.checkboxContainer}>
            {typesList.map(typeItem => (
              <label
                key={typeItem}
                className={styles.label + ' ' + styles.checkboxLabel}
              >
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  value={typeItem}
                  checked={types.includes(typeItem)}
                  disabled={isDisabled}
                  onChange={handleTypesChange}
                />
                {typeItem}
              </label>
            ))}
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
          <div>
            <label className={styles.label} htmlFor="rating-input">
              Рейтинг (опционально):
            </label>
            <input
              className={styles.input}
              id="rating-input"
              type="text"
              value={rating}
              onChange={handleRatingChange}
            />
          </div>

          <div className={styles.buttonsList}>
            {isUserPlaying ? (
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
