import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Icon } from '../../cat-logo.svg';
import VkAuth from 'components/VkAuth/VkAuth';

export default function Header() {
  return (
    <div>
      <div className={styles.container}>
        <Icon className={styles.icon} />
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
        <VkAuth />
      </div>
    </div>
  );
}
