import BiograhpyListItem from 'components/BiographyListItem/BiographyListItem';
import styles from './BiographyList.module.css';
import { useSelector } from 'react-redux';
import getAllBios from 'utils/api/bios/getAllBios';
import { useEffect, useState } from 'react';

export default function BiograhpyList({ bios }) {
  return (
    <div className={styles.container}>
      {bios.map(bio => (
        <BiograhpyListItem key={bio.vkId} bio={bio} />
      ))}
    </div>
  );
}
