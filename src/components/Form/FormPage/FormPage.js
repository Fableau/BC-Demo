import FormText from '@/components/Form/FormText/FormText';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import SecondaryButton from '@/components/Button/SecondaryButton/SecondaryButton';
import PrimaryButton from '@/components/Button/PrimaryButton/PrimaryButton';

import styles from './FormPage.module.scss';

const FormPage = ({ children, topText, middleText, bottomText, prevPageHref, nextPageHref, currentStep, maxStep, paddingStyle = {}}) => (
  <main className={styles['form-page']}>
    <div className={`${styles['form-page-content']}
                     ${paddingStyle}`}>
      <div className={styles['form-progress-bar-container']}>
        <ProgressBar currentStep={currentStep}
                     maxStep={maxStep} />
      </div>
      <div className={styles['form-text-container']}>
        <FormText topText={topText}
                  middleText={middleText}
                  bottomText={bottomText} />
      </div>

      { children } 

      { prevPageHref &&
        <div className={styles['previous-button-container']}>
          <SecondaryButton text={'Vorige'}
                           href={prevPageHref} />
        </div>}

      { nextPageHref &&
        <div className={styles['next-button-container']}>
          <PrimaryButton text={'Volgende'}
                         href={nextPageHref} />
        </div>}
    </div>
  </main>
)

export default FormPage;