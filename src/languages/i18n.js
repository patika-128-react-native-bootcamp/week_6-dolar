import i18next from 'i18next';
import english from './english.json';
import italian from './italian.json';
import french from './french.json';
import turkish from './turkish.json';
import {initReactI18next} from 'react-i18next';

i18next.init({
  compatibilityJSON: 'v3'
});

i18next.use(initReactI18next).init({
  lng: 'tr',
  resources: {
    en: english,
    it: italian,
    fr: french,
    tr: turkish,
  },
  react: {
    useSuspense: false,
  },

 
});

export default i18next;
