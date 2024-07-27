import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import laungageDetecter from 'i18next-browser-languagedetector';
import uzTranslation from '../public/locals/uz.json';
import enTranslation from '../public/locals/en.json';7

i18n
.use(Backend)
.use(laungageDetecter)
.use(initReactI18next)
.init({
    fallbackLng : 'uz',
    lg: 'en',
    debug: true,
    resources: {
        uz:{translation: uzTranslation},
        en:{translation: enTranslation}
    }
})

export default i18n;