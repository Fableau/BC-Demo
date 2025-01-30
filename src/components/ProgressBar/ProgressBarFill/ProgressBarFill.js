import styles from './ProgressBarFill.module.scss';

const ProgressBarFill = ({ fillPercent }) => (
  <div className={styles['progress-bar-fill']}
       style={{ width: `${fillPercent}%` }} />
)

export default ProgressBarFill;