import styles from './AddIcon.module.css';
import { ReactComponent as Icon } from '../../../images/edit-icon.svg';

export default function EditIcon({ action }) {
  return (
    <div className={styles.container} onClick={action}>
      <Icon className={styles.icon} />
      <span className={styles.text}>Добавить</span>
    </div>
  );
}
