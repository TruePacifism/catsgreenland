import React, { useEffect, useState } from 'react';
import styles from './BiographyListItem.module.css';
import placeholder from '../../images/image-placeholder.png';
import { useSearchParams } from 'react-router-dom';
import { ReactComponent as AlertIcon } from '../../images/cat-alert.svg';

export default function BiograhpyListItem({ bio }) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div
      className={
        searchParams.get('id') === bio.vkId
          ? styles.item + ' ' + styles.selected
          : styles.item
      }
      onClick={() => {
        setSearchParams(prevParams => {
          return {
            ...prevParams,
            id: bio.vkId,
          };
        });
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
    </div>
  );
}
// return (
//   <div class={styles.container}>
//     <div class={styles.item}>
//       <Link>
//         <span>Камилла</span>
//         <img src={placeholder} alt="Image 1" />
//       </Link>
//     </div>
//     <div class={styles.item}>
//       <Link>
//         <span>Евгений</span>
//         <img src={placeholder} alt="Image 2" />
//       </Link>
//     </div>
//     <div class={styles.item}>
//       <Link>
//         <span>Наталья</span>
//         <img src={placeholder} alt="Image 3" />
//       </Link>
//     </div>
//     <div class={styles.item}>
//       <Link>
//         <span>Марат</span>
//         <img src={placeholder} alt="Image 4" />
//       </Link>
//     </div>
//     <div class={styles.item}>
//       <Link>
//         <span>Галактион</span>
//         <img src={placeholder} alt="Image 5" />
//       </Link>
//     </div>
//     <div class={styles.item}>
//       <Link>
//         <span>Камилла</span>
//         <img src={placeholder} alt="Image 1" />
//       </Link>
//     </div>
//     <div class={styles.item}>
//       <Link>
//         <span>Евгений</span>
//         <img src={placeholder} alt="Image 2" />
//       </Link>
//     </div>
//     <div class={styles.item}>
//       <Link>
//         <span>Наталья</span>
//         <img src={placeholder} alt="Image 3" />
//       </Link>
//     </div>
//     <div class={styles.item}>
//       <Link>
//         <span>Марат</span>
//         <img src={placeholder} alt="Image 4" />
//       </Link>
//     </div>
//     <div class={styles.item}>
//       <Link>
//         <span>Галактион</span>
//         <img src={placeholder} alt="Image 5" />
//       </Link>
//     </div>
//   </div>
// );
