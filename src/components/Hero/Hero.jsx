import React, { useState, useEffect, useCallback } from 'react';
import styles from './Hero.module.css';
import ReactModal from 'react-modal';
import Rules from 'components/Rules/Rules';
import { ReactComponent as CloseIcon } from '../../images/close-icon.svg';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const onEscEvent = useCallback(
    e => {
      if (e.code === 'Escape' && isOpen) {
        closeModal();
      }
    },
    [isOpen]
  );
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onEscEvent);
    } else {
      window.removeEventListener('keydown', onEscEvent);
    }
    return () => {
      window.removeEventListener('keydown', onEscEvent);
    };
  }, [isOpen, onEscEvent]);

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Cat's Greenland</h1>
        <button type="button" className={styles.button} onClick={openModal}>
          Правила
        </button>
      </div>
      <ReactModal
        isOpen={isOpen}
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
        <Rules />
      </ReactModal>
    </div>
  );
}
