import numberToFormattedPrice from '@/library/functions/numberToFormattedPrice';
import styles from './FormSubtotal.module.scss';

const FormSubtotal = ({ subtotal }) => {
  const formattedSubtotal = numberToFormattedPrice(subtotal);

  return (
    <div className={styles['form-subtotal']}>
      Jouw keuze { formattedSubtotal }
    </div>
  )
}

export default FormSubtotal;