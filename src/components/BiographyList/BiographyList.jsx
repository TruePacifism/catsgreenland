import BiograhpyListItem from 'components/BiographyListItem/BiographyListItem';
import styles from './BiographyList.module.css';

export default function BiograhpyList({ bios }) {
  return (
    <div className={styles.container}>
      {bios.map(bio => (
        <BiograhpyListItem key={bio.vkId} bio={bio} />
      ))}
    </div>
  );
}
