import React from 'react';
import styles from './Container.module.css';

export default function Container({ children, heading }) {
  return (
    <div className={styles.container}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      {children}
    </div>
  );
}
