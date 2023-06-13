import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/user-actions';

function ThemeToggle() {
  const isDark = useSelector(state => state.isDarkTheme);
  const dispatch = useDispatch();

  const handleToggleClick = () => {
    dispatch(actions.toggleTheme());
  };

  return (
    <button onClick={handleToggleClick}>
      {isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    </button>
  );
}

export default ThemeToggle;
