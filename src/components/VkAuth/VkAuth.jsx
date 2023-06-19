import VK, { Auth } from 'react-vk';
import ReactModal from 'react-modal';
import { ReactComponent as CloseIcon } from '../../images/close-icon.svg';
import styles from './VkAuth.module.css';
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from 'redux/store';
import placeholder from '../../images/image-placeholder.png';
import getPfp from 'utils/getPfp';
import getGroupMembers from 'utils/checkOnGroupMember';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle';

export default function VkAuth({ onModalOpen }) {
  const dispatch = useDispatch();
  const loggedUser = useSelector(store => store.currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(auth(JSON.parse(localStorage.getItem('loggedUser'))));
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pfp, setPfp] = useState(placeholder);
  useEffect(() => {
    setTimeout(() => {
      getPfp(loggedUser.uid, setPfp);
    }, 100);
  }, [loggedUser]);
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
    onModalOpen();
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
    <div className={styles.container}>
      <ThemeToggle />
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
        <div className={styles.userInfo}>
          <img
            src={loggedUser ? pfp : placeholder}
            alt=""
            className={styles.loggedPfp}
          />
          <h3 className={styles.name}>
            {loggedUser
              ? loggedUser.first_name + ' ' + loggedUser.last_name
              : 'НН какой-то'}
          </h3>
        </div>
        {loggedUser ? (
          <p className={styles.authMessage}>
            Вы можете сменить аккаунт ВК с помощью виджета ниже
          </p>
        ) : (
          <p className={styles.authMessage}>
            Вы можете войти через ВК с помощью виджета ниже
          </p>
        )}
        <div className={styles.widgetContainer}>
          <VK apiId={51666098}>
            <Auth
              options={{
                onAuth: async user => {
                  console.log(user);
                  const groupMembers = await getGroupMembers();
                  console.log(groupMembers);
                  if (
                    groupMembers.items.map(user => user.id).includes(user.uid)
                  ) {
                    console.log('проверка пройдена');
                    dispatch(auth(user));
                    navigate('/');
                  }
                },
              }}
            />
          </VK>
        </div>
      </ReactModal>
      <button className={styles.authButton} onClick={openModal}>
        <img className={styles.authPhoto} src={pfp} alt="" />
      </button>
    </div>
  );
}
