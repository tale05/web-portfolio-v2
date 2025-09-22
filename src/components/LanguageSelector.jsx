import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", label: "English" },
    { code: "vi", label: "Tiếng Việt" },
    { code: "de", label: "Deutsch" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <div className="relative inline-block">
      <select
        className="px-4 py-[10px] rounded-full border border-gray-300 dark:border-gray-700 
                   bg-white dark:bg-gray-900 
                   text-sm font-medium text-black dark:text-white
                   shadow-sm cursor-pointer 
                   transition-colors duration-300 
                   hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        {languages.map((lang) => (
          <option
            key={lang.code}
            value={lang.code}
            className="bg-white dark:bg-gray-900 text-black dark:text-white"
          >
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
