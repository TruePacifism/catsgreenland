import { useSelector } from 'react-redux';
import styles from './Biography.module.css';
import BiographyText from 'components/BiographyText/BiographyText';

export default function Biograhpy({ bioRef, vkId }) {
  const bio = useSelector(store =>
    store.bios.find(bio => bio.vkId.toString() === vkId)
  );
  return (
    <div ref={bioRef} className={styles.container}>
      <h3 className={styles.name}>{bio.name}</h3>
      <BiographyText className={styles.text} text={bio.text} />
      {bio.imagesUrl.map((image, idx) => (
        <img key={idx} src={image} alt="" className={styles.image} />
      ))}
    </div>
  );
}
