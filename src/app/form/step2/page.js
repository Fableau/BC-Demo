'use client'

import { useState } from "react";
import FormPage from "@/components/Form/FormPage/FormPage";
import FormSubtotal from "@/components/Form/FormSubtotal/FormSubtotal";
import SelectableCard from "@/components/SelectableCard/SelectableCard";
import styles from './formStepTwo.module.scss';

// PAGINA LAADPUNTKEUZE //
const FormStepTwo = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const selectCard = index => setSelectedCard(index);
  const subtotal = 1519;

  return (
    <FormPage topText={'Motorhuis laadpunt samenstellen'}
              middleText={`Wat voor
                           laadpunt wil je?`}
              bottomText={'Tekst'}
              prevPageHref={'/form/step1'}
              nextPageHref={'/form/step3'}
              currentStep={1}
              maxStep={7} 
              paddingStyle={styles['form-page-padding']}>

      <SelectableCard title='Hidden'
                      selectCard={selectCard}
                      isSelected={selectedCard === 0} 
                      index={0}
                      imageSrc={'/images/charger/hidden@3x.png'}
                      imageSrcSet={['/images/charger/hidden@2x.png 2x',
                                    '/images/charger/hidden@3x.png 3x']} 
                      imageStyleOverride={{ width: '285px',
                                            height: '395px',
                                            top:'-.5rem',
                                            right: '-.93rem' }} 
                      alt='Hidden laadpunt.' />

      <SelectableCard title='U:Move'
                      selectCard={selectCard}
                      isSelected={selectedCard === 1}
                      index={1}
                      imageSrc={'/images/charger/u-move@3x.png'}
                      imageSrcSet={['/images/charger/u-move@2x.png 2x',
                                    '/images/charger/u-move@3x.png 3x']} 
                      titleOffsetLeft={'0.125rem'} 
                      gradientStart='32%'
                      alt='U:MOVE laadpunt.' />
                      
      <div className={styles['form-step-two-subtotal']}>
        <FormSubtotal subtotal={subtotal} />
      </div>
    </FormPage>
  )
}

export default FormStepTwo;
