import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import styles from './CheckCircle.module.scss';

const CheckCircle = ({ isSelected }) => (
  <div className={`${styles['check-circle']} 
                   ${isSelected
                     ? styles['check-circle-selected']
                     : styles['check-circle-unselected']}`}>

    { isSelected &&
      <FontAwesomeIcon icon={faCheck}
                       className={styles['check-circle-icon-selected']} />}

    { !isSelected &&
      <FontAwesomeIcon icon={faX}
                       className={styles['check-circle-icon-unselected']} />}
  </div>
)

export default CheckCircle;