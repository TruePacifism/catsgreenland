import placeholder from '../../images/image-placeholder.png';
import styles from './ChatListItem.module.css';

export default function ChatListItem({ chat }) {
  const { image, link, name, text } = chat;
  return (
    <li className={styles.item}>
      <img src={image ? image : placeholder} alt="" className={styles.image} />
      <div className={styles.container}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.textContainer}>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.linkContainer}>
          {link ? (
            <a
              target="_blank"
              rel="noreferrer"
              href={link}
              className={styles.link}
            >
              Присоединиться
            </a>
          ) : (
            <p className={styles.noLink}>Обращаться к админам</p>
          )}
        </div>
      </div>
    </li>
  );
}
