import { useSelector } from 'react-redux';
import styles from './Biography.module.css';
import BiographyText from 'components/BiographyText/BiographyText';
import MusicPlayer from 'components/MusicPlayer/MusicPlayer';

export default function Biograhpy({ bioRef, bio }) {
  const music = useSelector(store => store.bioMusic[bio.vkId]);

  return (
    <div ref={bioRef} className={styles.container}>
      <h3 className={styles.name}>{bio.name}</h3>
      <BiographyText className={styles.text} text={bio.text} />
      {bio.imagesUrl.map((image, idx) => (
        <img key={idx} src={image} alt="" className={styles.image} />
      ))}
      {music &&
        music.map((musicItem, idx) => (
          <MusicPlayer
            key={idx}
            src={
              musicItem.music.default
                ? musicItem.music.default
                : musicItem.music
            }
            title={musicItem.name}
          />
        ))}
    </div>
  );
}
