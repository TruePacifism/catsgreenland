import styles from './AdminListItem.module.css';

export default function AdminListItem({ admin }) {
  const { name, pfp, description } = admin;
  return (
    <li className={styles.container}>
      <img className={styles.pfp} src={pfp} alt={name} />
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
}
