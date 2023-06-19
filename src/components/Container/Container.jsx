import React from 'react';
import styles from './Container.module.css';

export default function Container({ children, heading, className }) {
  return (
    <div
      className={
        className ? [styles.container, className].join(' ') : styles.container
      }
    >
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      {children}
    </div>
  );
}
