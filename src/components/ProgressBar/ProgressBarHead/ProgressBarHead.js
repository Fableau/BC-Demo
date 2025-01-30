import styles from './ProgressBarHead.module.scss';

const ProgressBarHead = ({ text, fillPercent }) => {
  return (
    <div className={styles['progress-bar-head']}
         style={{ left: `calc(${fillPercent}% - 1.25rem)`}}>
      <div className={`font-indicator-text 
                       ${styles['progress-bar-head-text']}`}>
        { text }
      </div>
    </div>
  )
}

export default ProgressBarHead;