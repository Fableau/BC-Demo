import styles from './FormTextBottom.module.scss';

const FormTextBottom = ({ text }) => (
  <p className={`${styles['form-text-bottom']}
                 font-text`}>
    { text }
  </p>
)

export default FormTextBottom;