import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
export const LANGUAGES = {
  EN: "en",
  AR: "ar",
};

export const DIRECTIONS = {
  LTR: "ltr",
  RTL: "rtl",
};

const useLanguage = () => {
  const { i18n } = useTranslation();
  const [direction, setDirection] = useState(DIRECTIONS.LTR);

  // Function to toggle between languages
  const toggleLanguage = () => {
    const newLang =
      i18n.language === LANGUAGES.EN ? LANGUAGES.AR : LANGUAGES.EN;
    i18n.changeLanguage(newLang);
    updateDirection(newLang);
  };

  // Function to update the text direction
  const updateDirection = (lang) => {
    const newDirection =
      lang === LANGUAGES.AR ? DIRECTIONS.RTL : DIRECTIONS.LTR;
    setDirection(newDirection);
    document.documentElement.dir = newDirection; // Set HTML direction
  };

  // Ensure correct direction when language changes
  useEffect(() => {
    updateDirection(i18n.language);
  }, [i18n.language]);

  return {
    currentLanguage: i18n.language,
    direction,
    toggleLanguage,
  };
};

export default useLanguage;
