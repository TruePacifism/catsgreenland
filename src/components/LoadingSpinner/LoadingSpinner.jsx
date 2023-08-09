import { Vortex } from 'react-loader-spinner';
import vars from 'utils/vars';
import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner({ ref }) {
  return (
    <div className={styles.spinner} ref={ref}>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass={styles.spinner}
        colors={[
          '#aed581',
          vars.accentColor,
          '#aed581',
          vars.accentColor,
          vars.accentColor,
          '#aed581',
        ]}
      />
    </div>
  );
}
