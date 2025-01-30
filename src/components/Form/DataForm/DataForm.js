'use client'

import { useState } from 'react';
import Link from 'next/link';

import DataFormField from './DataFormField/DataFormField';
import DataFormTextInput from './DataFormTextInput/DataFormTextInput';
import PrimaryButton from '@/components/Button/PrimaryButton/PrimaryButton';

import styles from './DataForm.module.scss';

const DataForm = () => {
  const [voornaam, setVoornaam] = useState('');
  const [achternaam, setAchternaam] = useState('Ik ben aan het typen….');
  const [telefoon, setTelefoon] = useState('');
  const [email, setEmail] = useState('');
  const [adres, setAdres] = useState('');
  const [postcode, setPostcode] = useState('');
  const [plaats, setPlaats] = useState('');

  return (
    <form className={styles['data-form']}>
      <DataFormField caption={'Naam'}
        // Marge tussen inputs lijkt hier inconsistent tov andere fieldsets - styleOverride voor handmatige aanpassingen
                     styleOverride={{ gap: '1.625rem'}}>
        <DataFormTextInput displayName={'Voornaam'}
                           value={voornaam}
                           handleChange={setVoornaam} />
        <DataFormTextInput displayName={'Achternaam'}
                           value={achternaam}
                           handleChange={setAchternaam} />
      </DataFormField>

      <DataFormField caption={'Contact'}>
        <DataFormTextInput displayName={'Telefoonnummer'}
                           value={telefoon}
                           handleChange={setTelefoon}
                           type='tel' />
        <DataFormTextInput displayName={'E-mail'}
                           value={email}
                           handleChange={setEmail} 
                           type='email'/>
      </DataFormField>

      <DataFormField caption={'Adres'}>
        <DataFormTextInput displayName={'Straatnaam + huisnr.'}
                           value={adres}
                           handleChange={setAdres} />
        <div className={styles['data-form-horizontal-box']}>
          <DataFormTextInput displayName={'Postcode'}
                             value={postcode}
                             handleChange={setPostcode} 
                             styleOverride={{ minWidth: '9.5rem', 
                                              flex: '0' }}/>
          <DataFormTextInput displayName={'Plaats'}
                             value={plaats}
                             handleChange={setPlaats} />
        </div>
      </DataFormField>
      
      <div className={styles['data-form-actions']}>
        <PrimaryButton text='Direct betalen'
                       href='/form/betalen/' 
                       styleOverride={{ width: '14.125rem'}} />
         
        <Link className={styles['data-form-offerte']}
              href='/offerte/'>
          Stuur een offerte
        </Link>
      </div>
      <div className={styles['data-form-payment-comment']}>
        Betalen via iDEAL, Creditcard… etc.
      </div>
    </form>
  )
}

export default DataForm;