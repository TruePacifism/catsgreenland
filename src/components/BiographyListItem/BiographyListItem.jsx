import styles from './BiographyListItem.module.css';
import placeholder from '../../images/bio-grid-placeholder.png';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const vkToken =
  'vk1.a.KApbhgVtf9XmrO1auTa2gwdCXkaQX6tELizt4wm2Gxh6prqcqaNUnP-nHxQcerPiulaFi8bnveAesTBl7I9_5L6nrhWYQUjl06AWWGxvJx6mjAZFKrAyHAaR10eWMHJkl8PRY2ZDgEGJPOOF8cdElvI4ykxgo8MpSHQsMaOdYySkD_GPJbueK6HKf95-hMY7USTdYLdZqfo32jF7K8MrBg';
export default function BiograhpyListItem({ bio }) {
  const { name, vkId } = bio;
  const [pfpUrl, setPfpUrl] = useState(placeholder);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    axios
      .get(
        `https://api.vk.com/method/users.get?user_ids=${vkId}&fields=photo_max&access_token=${vkToken}&v=5.131`
      )
      .then(response => {
        setPfpUrl(response.data.response[0].photo_max);
      });
  }, [vkId]);
  return (
    <div
      className={
        searchParams.get('id') === vkId.toString()
          ? styles.item + ' ' + styles.selected
          : styles.item
      }
      onClick={() => {
        setSearchParams(prevParams => {
          return {
            ...prevParams,
            id: vkId,
          };
        });
      }}
    >
      <span>{name}</span>
      <img src={pfpUrl} alt={name} />
    </div>
  );
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
}
