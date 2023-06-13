import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import styles from './MusicPlayer.module.css';
import { ReactComponent as PauseIcon } from '../../images/pause-icon.svg';
import { ReactComponent as PlayIcon } from '../../images/play-icon.svg';
import { PulseLoader } from 'react-spinners';

function MusicPlayer({ src, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [progress, setProgress] = useState(0);
  const [hoverTime, setHoverTime] = useState(null);
  const [hoverX, setHoverX] = useState(null);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);

  const handleTogglePlay = () => {
    if (sound && isPlaying) {
      sound.pause();
      setIsPlaying(false);
    } else if (sound && !isPlaying) {
      sound.play();
      setIsPlaying(true);
    } else {
      const newSound = new Howl({
        src: [src],
        format: ['mp3'],
        onplay: () => {
          setIsPlaying(true);
        },
        onpause: () => {
          setIsPlaying(false);
        },
        onstop: () => {
          setIsPlaying(false);
          setProgress(0);
        },
        onend: () => {
          setIsPlaying(false);
          setProgress(0);
        },
      });
      setSound(newSound);
      newSound.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (sound) {
      sound.stop();
      setProgress(0);
      setIsPlaying(false);
    }
  };

  const handleSeek = e => {
    if (sound) {
      const clickPosition =
        e.nativeEvent.offsetX / progressRef.current.offsetWidth;
      sound.seek(clickPosition * sound.duration());
      setProgress(clickPosition);
    }
  };

  const handleMouseEnter = e => {
    if (sound) {
      const hoverPosition =
        e.nativeEvent.offsetX / progressRef.current.offsetWidth;
      setHoverTime(hoverPosition * sound.duration());
      setHoverX(e.nativeEvent.offsetX);
    }
  };

  const handleMouseMove = e => {
    if (sound) {
      const hoverPosition =
        e.nativeEvent.offsetX / progressRef.current.offsetWidth;
      setHoverTime(hoverPosition * sound.duration());
      setHoverX(e.nativeEvent.offsetX);
    }
  };

  const handleMouseLeave = () => {
    setHoverTime(null);
  };

  // Обновляем прогресс воспроизведения каждые 100 мс
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress(sound.seek() / sound.duration());
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, sound]);

  // Форматируем время в миллисекундах в строку "минуты:секунды"
  const formatTime = time => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const formatDuration = duration => {
    const minutes = Math.floor(duration / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(duration % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.controlsContainer}>
        <div className={styles.playContainer}>
          <button
            onClick={handleTogglePlay}
            className={
              isPlaying ? [styles.button].join(' ') : [styles.button].join(' ')
            }
          >
            {isPlaying ? (
              <PauseIcon className={styles.pause} />
            ) : (
              <PlayIcon className={styles.play} />
            )}
          </button>
          <button onClick={handleStop} className={styles.stop}>
            Stop
          </button>
        </div>
        <div
          style={{ position: 'relative', cursor: 'pointer' }}
          className={styles.progressBarContainer}
        >
          <progress
            ref={progressRef}
            onClick={handleSeek}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            value={!isNaN(progress) ? progress : 0} // передаем значение только если progress не NaN
            className={styles.progressBar}
            max={1}
            // style={{ width: '100%' }}
          />
          {hoverTime !== null && (
            <div
              style={{
                position: 'absolute',
                bottom: '100%',
                left: `${hoverX}px`,
                transform: 'translate(-50%, 0%)',
                padding: '0.5rem',
                borderRadius: '0.5rem',
              }}
              className={styles.progressInfo}
            >
              {formatTime(hoverTime)}
            </div>
          )}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
            className={styles.timeContainer}
          >
            <span className={styles.time}>
              {formatTime(sound ? sound.seek() : 0) +
                ' - ' +
                formatDuration(sound ? sound.duration() : 0)}
            </span>
          </div>
          <PulseLoader
            color="green"
            size={10}
            loading={sound && sound.duration() === 0 && isPlaying}
            className={styles.loadingSpinner}
          />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
