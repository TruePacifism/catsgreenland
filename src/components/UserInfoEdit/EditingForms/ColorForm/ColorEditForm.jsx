import { useEffect, useState } from 'react';
import addColor from 'utils/api/colors/addColor';
import getAllColors from 'utils/api/colors/getAllColors';
import { useSelector } from 'react-redux';
import styles from './ColorEditForm.module.css';
import EditIcon from '../EditIcon/EditIcon';

function rgbToHex(r, g, b) {
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

export default function ColorEditForm({ onUpdate = () => {}, isShowing }) {
  const user = useSelector(store => store.currentUser);

  const onSubmit = async color => {
    addColor(user.token, {
      name: color.name,
      rgb: hexToRgb(color.color),
    });
    onUpdate();
  };

  const [colors, setColors] = useState([]);
  useEffect(() => {
    const fetchColors = async () => {
      const allColors = await getAllColors();
      setColors(
        allColors.map(color => ({
          name: color.name,
          color: rgbToHex(...Object.values(color.rgb)),
        }))
      );
    };
    fetchColors();
  }, []);

  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [format, setFormat] = useState('hex');
  const [suggestions, setSuggestions] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Функция, которая вызывается при отправке формы
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, color });
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
          <button className={styles.button} type="submit">
            Добавить цвет
          </button>
        </form>
      ) : (
        <EditIcon action={() => setShowForm(true)} />
      )}
    </div>
  );
}
