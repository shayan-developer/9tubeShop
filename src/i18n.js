import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./locales/en/translationEn.json"
import translationfa from "./locales/fa/translationFa.json"

const resources={
    en:{translation:translationEn},
    fa:{translation:translationfa}
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "fa", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });