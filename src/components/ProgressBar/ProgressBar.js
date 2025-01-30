import ProgressBarFill from './ProgressBarFill/ProgressBarFill';
import ProgressBarHead from './ProgressBarHead/ProgressBarHead';
import styles from './ProgressBar.module.scss';

const ProgressBar = ({ currentStep, maxStep }) => {
  const fillPercent = (currentStep / maxStep) * 100;
  const text = currentStep && maxStep 
               ? currentStep + '/' + maxStep 
               : '';

  return (
    <div className={styles['progress-bar']}>
      <ProgressBarFill fillPercent={fillPercent} />
      <ProgressBarHead text={text}
                       fillPercent={fillPercent} />
    </div>
  )
}

export default ProgressBar;