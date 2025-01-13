import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./locales/en/login.json"
import he from "./locales/he/login.json"

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en', // fallback language if detection fails
        supportedLngs: ['en', 'he'], // supported languages
        ns: ['login'], // namespaces used for translations
        defaultNS: 'login', // default namespace
        resources: {
            en: { translation: en },
            he: { translation: he }
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator'], // order of language detection
            caches: ['cookie', 'localStorage'], // where to store the detected language
            lookupQuerystring: 'lng', // query string parameter to look for language
            lookupCookie: 'i18next', // cookie name for storing the language
            lookupLocalStorage: 'i18nextLng', // local storage key for storing the language
            // excludeCacheFor: ['cimode'], // languages to exclude from caching
        },
        interpolation: {
            escapeValue: false, // react already escapes values by default
            format: (value, format, lng) => { // custom formatter for values
                if (format === 'uppercase') return value.toUpperCase();
                return value;
            },
        },
        saveMissing: true, // enable saving of missing keys
        missingKeyHandler: (lng, ns, key) => { // handler for missing keys
            console.log(`%c Innovation Alert ⚠️: Missing translation: ${key} in namespace: ${ns} for language: ${lng}`, 'color: yellow');
        },
        // debug: true, // enable debug mode to log issues and missing keys
    });

export default i18next;
