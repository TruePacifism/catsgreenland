import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Icon } from '../../cat-logo.svg';
import VK, { Auth } from 'react-vk';

const responseVk = response => {
  console.log(response);
};

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
        <VK apiId={51666098}>
          <Auth
            options={{
              onAuth: user => {
                console.log(user);
              },
            }}
          />
        </VK>
        <button className={styles.placeholder}>Тут что-то будет</button>
      </div>
    </div>
  );
}
