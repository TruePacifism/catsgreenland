import VK, { Auth } from 'react-vk';
import ReactModal from 'react-modal';
import { ReactComponent as CloseIcon } from '../../images/close-md-svgrepo-com.svg';
import styles from './VkAuth.module.css';
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from 'redux/store';
import placeholder from '../../images/bio-grid-placeholder.png';
import getPfp from 'utils/getPfp';

export default function VkAuth() {
  const dispatch = useDispatch();
  const loggedUser = useSelector(store => store.currentUser);
  useEffect(() => {
    dispatch(auth(JSON.parse(localStorage.getItem('loggedUser'))));
  }, [dispatch]);
  console.log(loggedUser);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pfp, setPfp] = useState(placeholder);
  useEffect(() => {
    getPfp(loggedUser.uid, setPfp);
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
    <>
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
        <img className={styles.authPhoto} src={pfp} alt="" />
      </button>
    </>
  );
}
