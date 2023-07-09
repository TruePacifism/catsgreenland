import { ReactComponent as Icon } from '../../../../images/delete-icon.svg';
import styles from './DeleteIcon.module.css';

export default function DeleteIcon({ action }) {
  return <Icon className={styles.icon} onClick={action} />;
}
