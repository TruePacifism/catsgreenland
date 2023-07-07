import { useSelector } from 'react-redux';
import styles from './Biography.module.css';
import BiographyText from 'components/BiographyText/BiographyText';
import musicPlaceholder from '../../images/music-placeholder.jpg';
import { Track, PlayerInterface } from 'react-material-music-player';
import { ReactComponent as AddMusicIcon } from '../../images/add-music-icon.svg';
import { ReactComponent as PlayMusicIcon } from '../../images/play-icon.svg';
import { Tooltip } from '@mui/material';

export default function Biograhpy({ bioRef, bio }) {
  const music = useSelector(store => store.bioMusic[bio.vkId]);
  return (
    <div ref={bioRef} className={styles.container}>
      <h3 className={styles.name}>{bio.name}</h3>
      <BiographyText className={styles.text} text={bio.text} />
      {bio.imagesUrl.map((image, idx) => (
        <img key={idx} src={image} alt="" className={styles.image} />
      ))}
      {music && (
        <>
          <ul className={styles.playlistContainer}>
            {music.map((musicItem, idx) => (
              <li
                key={`${bio.vkId}-${idx}`}
                className={styles.playlistItemContainer}
              >
                <span className={styles.title}>
                  {musicItem.artist} - {musicItem.title}
                </span>
                <Tooltip title={'Воспроизвести (очистит плейлист)'}>
                  <PlayMusicIcon
                    className={styles.addMusicIcon}
                    onClick={() =>
                      PlayerInterface.play([
                        new Track(
                          `${bio.vkId}-${idx}`,
                          musicPlaceholder,
                          musicItem.title,
                          musicItem.artist,
                          musicItem.music.default
                            ? musicItem.music.default
                            : musicItem.music
                        ),
                      ])
                    }
                  />
                </Tooltip>
                <Tooltip title={'Добавить в плейлист'}>
                  <AddMusicIcon
                    className={styles.addMusicIcon}
                    onClick={() =>
                      PlayerInterface.playLater([
                        new Track(
                          `${bio.vkId}-${idx}`,
                          musicPlaceholder,
                          musicItem.title,
                          musicItem.artist,
                          musicItem.music.default
                            ? musicItem.music.default
                            : musicItem.music
                        ),
                      ])
                    }
                  />
                </Tooltip>
              </li>
            ))}
          </ul>
          <div
            className={styles.playAllContainer}
            onClick={() =>
              PlayerInterface.play(
                music.map(
                  (musicItem, idx) =>
                    new Track(
                      `${bio.vkId}-${idx}`,
                      musicPlaceholder,
                      musicItem.title,
                      musicItem.artist,
                      musicItem.music.default
                        ? musicItem.music.default
                        : musicItem.music
                    )
                )
              )
            }
          >
            <span className={styles.playAllTitle}>Воспроизвести все</span>
            <PlayMusicIcon className={styles.playAllIcon} />
          </div>
        </>
      )}
    </div>
  );
}
