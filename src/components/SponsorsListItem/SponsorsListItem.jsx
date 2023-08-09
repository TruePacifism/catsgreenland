import styles from './SponsorsListItem.module.css';

export default function SponsorsListItem({ sponsor }) {
  const { name, pfp } = sponsor;
  return (
    <li className={styles.container}>
      <img className={styles.pfp} src={pfp} alt={name} />
      <h3 className={styles.name}>{name}</h3>
    </li>
  );
}
