import { useSelector, useDispatch } from 'react-redux';
import styles from './ThemeToggle.module.css';
import { CSSTransition } from 'react-transition-group';
import actions from 'redux/user-actions';
import { ReactComponent as MoonIcon } from '../../images/moon-icon.svg';
import { ReactComponent as SunIcon } from '../../images/sun-icon.svg';

function ThemeToggle() {
  const isDark = useSelector(state => state.isDarkTheme);
  const dispatch = useDispatch();

  const handleToggleClick = () => {
    dispatch(actions.toggleTheme());
  };

  return (
    <CSSTransition
      in={true}
      classNames={{
        enter: styles['slide-enter'],
        enterActive: styles['slide-enter-active'],
        enterDone: styles['slide-enter-done'],
        exitDone: styles['slide-exit-done'],
        exitActive: styles['slide-exit-active'],
      }}
      timeout={300}
      children={
        <div className={styles.switchesContainer}>
          <SunIcon
            className={
              isDark ? styles.switch : [styles.switch, styles.showing].join(' ')
            }
            onClick={handleToggleClick}
          >
            {'Switch to Dark Theme'}
          </SunIcon>
          <MoonIcon
            className={
              !isDark
                ? styles.switch
                : [styles.switch, styles.showing].join(' ')
            }
            onClick={handleToggleClick}
          >
            {'Switch to Light Theme'}
          </MoonIcon>
        </div>
      }
    />
  );
}

export default ThemeToggle;
