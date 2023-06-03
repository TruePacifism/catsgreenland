import React, { useState, useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Icon } from '../../cat-logo.svg';
import VK, { Auth } from 'react-vk';
import { useDispatch, useSelector } from 'react-redux';
import ReactModal from 'react-modal';
import { auth } from 'redux/store';
import { ReactComponent as CloseIcon } from '../../images/close-md-svgrepo-com.svg';
import placeholder from '../../images/bio-grid-placeholder.png';

export default function Header() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const loggedUser = useSelector(store => store.currentUser);
  useEffect(() => {
    dispatch(auth(JSON.parse(localStorage.getItem('loggedUser'))));
  }, [dispatch]);
  console.log(loggedUser);

  const onEscEvent = useCallback(
    e => {
      if (e.code === 'Escape' && isModalOpen) {
        closeModal();
      }
    },
    [isModalOpen]
  );
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', onEscEvent);
    } else {
      window.removeEventListener('keydown', onEscEvent);
    }
    return () => {
      window.removeEventListener('keydown', onEscEvent);
    };
  }, [isModalOpen, onEscEvent]);

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
        <ReactModal
          isOpen={isModalOpen}
          closeTimeoutMS={250}
          appElement={document.querySelector('#root')}
          onRequestClose={closeModal}
          className={styles.modalContent}
          overlayClassName={styles.modalOverlay}
          overlayElement={(props, contentElement) => (
            <div {...props}>
              {contentElement}
              <button onClick={closeModal} className={styles.closeButton}>
                <CloseIcon className={styles.closeIcon} />
              </button>
            </div>
          )}
        >
          <VK apiId={51666098}>
            <Auth
              options={{
                onAuth: user => {
                  dispatch(auth(user));
                },
              }}
            />
          </VK>
        </ReactModal>

        <button className={styles.authButton} onClick={openModal}>
          <img
            className={styles.authPhoto}
            src={loggedUser ? loggedUser.photo : placeholder}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
