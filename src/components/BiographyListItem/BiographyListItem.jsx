// import store from '../../redux/store';
import BiographyText from 'components/BiographyText/BiographyText';
import styles from './BiographyListItem.module.css';

export default function BiograhpyListItem({ bio }) {
  const { number, name, vkId, text, imagesUrl } = bio;
  return (
    <li key={vkId} className={styles.bioItem}>
      <h3 className={styles.heading}>
        <span className={styles.number}>{number}. </span>
        <a href="" className={styles.name}>
          {name}
        </a>
      </h3>
      <BiographyText className={styles.text} text={text} />
      {imagesUrl.map(image => (
        <img src={image} alt="" className={styles.image} />
      ))}
    </li>
  );
}
