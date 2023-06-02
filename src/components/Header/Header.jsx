import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
// import Icon from '../../svgIcons/cat-logo.svg';
import vars from '../../utils/vars';
import { ReactSVG } from 'react-svg';

export default function Header() {
  return (
    <div>
      <div className={styles.container}>
        <span>
          <ReactSVG
            src="./cat-logo.svg"
            className={styles.icon}
            fallback={() => <span>Error!</span>}
            loading={() => <span>Loading</span>}
          />
          {/* <Icon width={50} height={50} fill={vars.accentColor} /> */}
        </span>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? [styles.navLink, styles.navLinkActive].join(' ')
                  : styles.navLink
              }
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
            >
              Газета
            </NavLink>
          </li>
        </ul>
        <button className={styles.placeholder}>Тут что-то будет</button>
      </div>
    </div>
  );
}
