import styles from './NavMenu.module.css';
import { NavLink } from 'react-router-dom';

export default function NavMenu({ closeMenu }) {
  return (
    <ul className={styles.navList}>
      <li className={styles.navListItem}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? [styles.navLink, styles.navLinkActive].join(' ')
              : styles.navLink
          }
          onClick={closeMenu}
        >
          На главную
        </NavLink>
      </li>
      <li className={styles.navListItem}>
        <NavLink
          to="/biographys"
          className={({ isActive }) =>
            isActive
              ? [styles.navLink, styles.navLinkActive].join(' ')
              : styles.navLink
          }
          onClick={closeMenu}
        >
          Рассказы
        </NavLink>
      </li>
      <li className={styles.navListItem}>
        <NavLink
          to="/newspaper"
          className={({ isActive }) =>
            isActive
              ? [styles.navLink, styles.navLinkActive].join(' ')
              : styles.navLink
          }
          onClick={closeMenu}
        >
          Газета
        </NavLink>
      </li>
    </ul>
  );
}
