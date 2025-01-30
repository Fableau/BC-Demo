import FormTextTop from './FormTextTop/FormTextTop';
import FormTextMiddle from './FormTextMiddle/FormTextMiddle';
import FormTextBottom from './FormTextBottom/FormTextBottom';
import styles from './FormText.module.scss';

const FormText = ({ topText, middleText, bottomText }) => (
  <div className={styles['form-text-container']}>
    <FormTextTop text={topText} />
    <FormTextMiddle text={middleText} />
    <FormTextBottom text={bottomText} />
  </div>
)

export default FormText;