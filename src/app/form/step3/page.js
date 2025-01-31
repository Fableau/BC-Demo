import FormPage from "@/components/Form/FormPage/FormPage";
import FormSummary from "@/components/Form/FormSummary/FormSummary";
import DataForm from "@/components/Form/DataForm/DataForm";
import FormImage from "@/components/Form/FormImage/FormImage";

import styles from './formStepThree.module.scss';

// PAGINA INVOER PERSOONSGEGEVENS //
const FormStepThree = () => {
  // NB1) Variables hardcoded voor de demo - normaliter afhankelijk van hoe data flow is opgezet in de form (e.g. Redux)
  // NB2) Laadpaal met transparante achtergrond was niet beschikbaar om te downloaden.
  //      Custom image heeft andere dimensies dan origineel, waardoor deze niet geheel alignt. Ook zit de gradient al inbegrepen.
  
  const cost = 1658;
  const selectedOptions = ['Laden met vaste kabel', '5 meter', 'Op een paal', 'Graafwerk', 'Tot 6 meter', 'Geen'];
  const imageProps = { width: 351,
                       height: 495,
                       src: '/images/charger/u-move-transparent.png',
                       alt: 'Het gekozen laadpunt van Motorhuis.' };
  const useGradient = false;

  return (
    <FormPage topText={'Motorhuis laadpunt samenstellen'}
              middleText={'Gefeliciteerd!'}
              bottomText={'Je hebt een pracht oplaadpunt samengesteld! Vul jouw gegevens in en wij nemen graag jouw setting door. Tot snel!'}
              prevPageHref={'/form/step2'}
              currentStep={2}
              maxStep={7} 
              paddingStyle={styles['form-page-padding']}>
      
      <div className={styles['form-step-three-summary']}>
        <FormSummary selectedOptions={selectedOptions}
                     cost={cost}/>
      </div>
      <FormImage imageProps={imageProps}
                 imageStyle={styles['form-step-three-image']}
                 priority={true}
                 useGradient={useGradient}
                 gradientStyle={styles['form-step-three-gradient']} />
      <DataForm />
    </FormPage>
  )
}

export default FormStepThree;
