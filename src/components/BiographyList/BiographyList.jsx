import BiograhpyListItem from 'components/BiographyListItem/BiographyListItem';
import styles from './BiographyList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getUsers from 'utils/getUser';
import actions from 'redux/user-actions';

export default function BiograhpyList() {
  const bios = useSelector(store => store.bios);

  return (
    <div className={styles.container}>
      {bios.map(bio => (
        <BiograhpyListItem key={bio.vkId} bio={bio} />
      ))}
    </div>
  );
}
