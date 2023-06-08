import BiograhpyListItem from 'components/BiographyListItem/BiographyListItem';
import styles from './BiographyList.module.css';
import { useSelector } from 'react-redux';

export default function BiograhpyList() {
  const bios = useSelector(store => store.bios.filter(bio => bio.text));

  return (
    <div className={styles.container}>
      {bios.map(bio => (
        <BiograhpyListItem key={bio.vkId} bio={bio} />
      ))}
    </div>
  );
}
