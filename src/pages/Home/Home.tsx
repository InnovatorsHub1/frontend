import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation('login'); // Load `common.json`

  return (
    <div className='size-full p-6'>
      <LanguageSwitcher />
      <h1>{t('welcomeMessage')}</h1>
      <Button variant='contained'>Contained</Button>
      <Button variant='contained' disabled>
        Disabled
      </Button>
      <Button variant='contained' href='#contained-buttons'>
        Link
      </Button>
    </div>
  );
}

import React, { useEffect } from 'react';
import i18n from 'i18next';

const LanguageSwitcher: React.FC = () => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Change the language
  };
  useEffect(() => {
    console.log('Current language:', i18n.language);
  }, []);
  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('he')}>עברית</button>
    </div>
  );
};
