import { ReactComponent as DeleteIcon } from '../../../../images/delete-icon.svg';
import styles from './DeleteIcon.module.css';

export default function DeleteIcon({ action }) {
  return <DeleteIcon className={styles.icon} onClick={action} />;
}
