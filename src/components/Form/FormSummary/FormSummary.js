import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import numberToFormattedPrice from "@/library/functions/numberToFormattedPrice";
import styles from './FormSummary.module.scss';

const FormSummary = ({ selectedOptions, cost = 0 }) => {
  const formattedCost = numberToFormattedPrice(cost);

  return (
    <aside>
      <div className={styles['form-summary-list']}>
        { selectedOptions?.map((row, index) => (
          <div className={styles['form-summary-row']}
               key={index}>
            <div className={styles['form-summary-check-container']}>
              <FontAwesomeIcon icon={faCheck}
                               className={styles['form-summary-check']}/>
            </div>
            <span className={`font-summary-text
                              ${styles['form-summary-text']}`}>
              {row}
            </span>
          </div>
        ))}
      </div>

      <div className={styles['form-summary-price-container']}>
        <div className={`font-summary-text-blue`}>
          Jouw keuze
        </div>
        <div className={`font-header-large-dodger`}>
          { formattedCost }
        </div>
      </div>
    </aside>
  )
}

export default FormSummary;