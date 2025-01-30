import styles from './FormTextMiddle.module.scss';

const FormTextMiddle = ({ text }) => (
  <h1 className={`${styles['form-text-middle']} 
                  font-header-large-sapphire`}>
    { text }
  </h1>
)

export default FormTextMiddle;