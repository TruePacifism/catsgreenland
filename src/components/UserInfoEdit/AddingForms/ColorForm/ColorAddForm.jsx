import { useEffect, useState } from 'react';
import addColor from 'utils/api/colors/addColor';
import getAllColors from 'utils/api/colors/getAllColors';
import { useSelector } from 'react-redux';
import styles from './ColorAddForm.module.css';
import AddIcon from '../AddIcon/AddIcon';
import deleteColor from 'utils/api/colors/deleteColor';

function rgbToHex(rgb) {
  const { r, g, b } = rgb;
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');
  return `#${hexR}${hexG}${hexB}`;
}

function hexToRgb(hex) {
  const hexWithoutHash = hex.replace(/^#/, '');
  const [r, g, b] = hexWithoutHash
    .match(/.{1,2}/g)
    .map(value => parseInt(value, 16));
  return { r, g, b };
}

export default function ColorAddForm({ onUpdate = () => {} }) {
  const user = useSelector(store => store.currentUser);

  const AddColor = async ({ name, rgb }) => {
    if (!name) {
      return;
    }
    const newColorResponse = await addColor(user.token, { name, rgb });
    const newColor =
      typeof newColorResponse === Array
        ? newColorResponse[0]
        : newColorResponse;
    setColors(
      colors.map(color => color.name).includes(newColor.name)
        ? colors.map(color => (color.name === newColor.name ? newColor : color))
        : [...colors, newColor]
    );
  };
  const DeleteColor = async () => {
    if (!name) {
      return;
    }
    console.log(user, name);
    const editedColor = await deleteColor(user.token, name);
    setColors(
      colors.map(color =>
        color.name === editedColor.name ? editedColor : color
      )
    );
  };
  const [colors, setColors] = useState([]);
  useEffect(() => {
    const fetchColors = async () => {
      const allColors = await getAllColors();
      setColors(
        allColors.map(color => ({
          ...color,
          name: color.name,
          color: rgbToHex(color.rgb),
        }))
      );
    };
    fetchColors();
  }, []);

  const [userColors, setUserColors] = useState([]);
  useEffect(() => {
    console.log('colors', colors);
    setUserColors(
      colors.filter(color =>
        color.users.find(colorUser => user.vkId === colorUser.vkId)
      )
    );
  }, [colors, user]);

  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [format, setFormat] = useState('hex');
  const [suggestions, setSuggestions] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [isUserHasColor, setIsUserHasColor] = useState(false);
  useEffect(() => {
    setIsUserHasColor(userColors.find(userColor => userColor.name === name));
  }, [name, userColors]);

  // Функция, которая вызывается при отправке формы
  const handleSubmit = async e => {
    e.preventDefault();
    const actionName = e.nativeEvent.submitter.outerText;
    console.log('color', color);
    switch (actionName) {
      case 'Добавить':
        await AddColor({
          name,
          rgb: hexToRgb(color),
        });

        break;
      case 'Удалить':
        await DeleteColor({
          name,
        });
        break;

      default:
        break;
    }
    onUpdate();
    setName('');
    setColor('');
    setShowForm(false);
  };

  // Функция, которая вызывается при изменении поля ввода для названия цвета
  const handleNameChange = e => {
    const value = e.target.value;
    setName(value);
    // Поиск по списку цветов и вывод подсказок, если есть совпадения
    if (value) {
      const exactSuggestion = colors.find(
        color => color.name.toLowerCase() === value.toLowerCase()
      );
      if (exactSuggestion) {
        console.log('exactSuggestion', exactSuggestion);
        setIsDisabled(true);
        setName(exactSuggestion.name);
        setColor(rgbToHex(exactSuggestion.rgb));
        setSuggestions([]);
        return;
      }
      if (isDisabled) {
        setIsDisabled(false);
      }

      const matchingColors = colors.filter(
        color => color.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
      setSuggestions(matchingColors);
    } else {
      setSuggestions([]);
    }
  };

  // Функция, которая вызывается при выборе подсказки
  const handleSuggestionClick = suggestion => {
    setName(suggestion.name);
    setColor(suggestion.color);
    setSuggestions([]);
  };

  // Функция, которая вызывается при изменении радио кнопок выбора формата
  const handleFormatChange = e => {
    setFormat(e.target.value);
  };

  return (
    <div className={styles.container}>
      {showForm ? (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label className={styles.label} htmlFor="name-input">
              Название цвета:
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
          <div>
            <label className={styles.label} htmlFor="color-input">
              Оттенок:
            </label>
            <input
              className={styles.input}
              id="color-input"
              type={format === 'hex' ? 'text' : 'color'}
              value={color}
              disabled={isDisabled}
              onChange={e => setColor(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label + ' ' + styles.radioLabel}>
              <input
                className={styles.radio}
                type="radio"
                value="hex"
                checked={format === 'hex'}
                onChange={handleFormatChange}
              />
              HEX
            </label>
            <label className={styles.label + ' ' + styles.checkboxLabel}>
              <input
                className={styles.radio}
                type="radio"
                value="rgb"
                checked={format === 'rgb'}
                onChange={handleFormatChange}
              />
              RGB
            </label>
          </div>
          <div className={styles.buttonsList}>
            {isUserHasColor ? (
              <>
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
