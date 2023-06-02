import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Cat's Greenland</h1>
        <button type="button" className={styles.button}>
          Правила
        </button>
      </div>
    </div>
  );
}
