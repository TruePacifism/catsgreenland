import React from 'react';
import styles from './Section.module.css';

export default function Section({ children, className }) {
  return <div className={styles.section + ' ' + className}>{children}</div>;
}
