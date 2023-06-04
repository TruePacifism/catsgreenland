import React from 'react';
import styles from './BiographyListItem.module.css';
import placeholder from '../../images/image-placeholder.png';
import { useSearchParams } from 'react-router-dom';

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
      <div className={styles.image}>
        {bio.pfp ? (
          <img src={bio.pfp} alt={bio.name} />
        ) : (
          <img src={placeholder} alt="Загрузка..." />
        )}
      </div>
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
