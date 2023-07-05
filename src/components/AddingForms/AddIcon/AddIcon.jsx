import styles from './AddIcon.module.css';
import { ReactComponent as Icon } from '../../../images/add-button.svg';

export default function AddIcon({ action }) {
  return (
    <div className={styles.container} onClick={action}>
      <Icon className={styles.icon} />
      <span className={styles.text}>Добавить</span>
    </div>
  );
}
