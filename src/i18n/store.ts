import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { EnglishLanguage } from "./english";
import { PersianLanguage } from "./persian";
i18n.use(initReactI18next).init({
  resources: {
    en: EnglishLanguage.en,
    fa: PersianLanguage.fa,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
