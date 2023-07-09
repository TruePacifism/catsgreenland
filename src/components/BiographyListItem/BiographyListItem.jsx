import React, { useEffect, useState } from 'react';
import styles from './BiographyListItem.module.css';
import placeholder from '../../images/image-placeholder.png';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as AlertIcon } from '../../images/cat-alert.svg';
import { ReactComponent as LikeIcon } from '../../images/like-icon.svg';
import toggleLike from 'utils/api/bios/toggleLike';

export default function BiograhpyListItem({ bio }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const user = useSelector(store => store.currentUser);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCounter, setLikesCounter] = useState(0);
  useEffect(() => {
    if (!bio.likes) {
      return;
    }
    if (bio.likes.some(like => like.vkId === user.vkId)) {
      setIsLiked(true);
    }
    setLikesCounter(bio.likes.length);
  }, [bio, user]);

  const likeHandler = async () => {
    await toggleLike(user.token, bio.vkId);
    setIsLiked(prevIsLiked => !prevIsLiked);
    setLikesCounter(prevCounter =>
      isLiked ? prevCounter - 1 : prevCounter + 1
    );
  };
  return (
    <div
      className={
        searchParams.get('id') === bio.vkId
          ? styles.item + ' ' + styles.selected
          : styles.item
      }
      onClick={e => {
        if (e.target === e.currentTarget) {
          setSearchParams(prevParams => {
            return {
              ...prevParams,
              id: bio.vkId,
            };
          });
        }
      }}
    >
      <span className={styles.name}>{bio.name ? bio.name : 'Загрузка...'}</span>
      {bio.pfp ? (
        <img src={bio.pfp} alt={bio.name} className={styles.image} />
      ) : (
        <img src={placeholder} alt="Загрузка..." className={styles.image} />
      )}
      {bio.alert && (
        <div className={styles.alert}>
          <span className={styles.alertText}>{bio.alert}</span>
          <AlertIcon className={styles.alertIcon}>,dfsdfsd</AlertIcon>
        </div>
      )}
      <div className={styles.likeContainer}>
        <LikeIcon
          className={isLiked ? styles.likedIcon : styles.notLikedIcon}
          onClick={likeHandler}
        />
        {bio.likes && (
          <span className={styles.likeCounter}>
            {likesCounter === 0 ? '' : likesCounter}
          </span>
        )}
      </div>
    </div>
  );
}
