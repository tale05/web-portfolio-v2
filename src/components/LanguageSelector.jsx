import React from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Languages } from "lucide-react";

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage =
    i18n.resolvedLanguage?.split("-")[0] ||
    i18n.language?.split("-")[0] ||
    "en";

  const languages = [
    { code: "en", label: "English" },
    // { code: "vi", label: "Tiếng Việt" },
    { code: "de", label: "Deutsch" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    document.documentElement.lang = lng;
  };

  return (
    <div className="group relative inline-flex items-center">
      <Languages
        className="
          pointer-events-none absolute left-3 z-10 h-4 w-4
          text-cyan-700 transition-colors duration-300
          group-hover:text-cyan-600
          dark:text-cyan-200 dark:group-hover:text-cyan-100
        "
      />

      <select
        className="
          h-10 min-w-[124px] cursor-pointer appearance-none rounded-full
          border border-cyan-500/20 bg-white/75
          py-2 pl-9 pr-9 text-sm font-semibold text-slate-800
          shadow-[0_10px_30px_rgba(8,145,178,0.10)]
          outline-none backdrop-blur-xl
          transition-all duration-300 ease-out
          hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white
          hover:shadow-[0_14px_40px_rgba(15,23,42,0.12)]
          focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/25
          dark:border-cyan-300/20 dark:bg-white/[0.065]
          dark:text-cyan-50 dark:shadow-[0_14px_45px_rgba(0,0,0,0.24)]
          dark:hover:border-cyan-300/35 dark:hover:bg-white/[0.095]
          dark:focus:ring-cyan-300/20
        "
        onChange={(e) => changeLanguage(e.target.value)}
        value={currentLanguage}
        aria-label={t("languageSelectorLabel")}
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

      <ChevronDown
        className="
          pointer-events-none absolute right-3 h-4 w-4
          text-cyan-700 transition-transform duration-300
          group-hover:translate-y-0.5
          dark:text-cyan-200
        "
      />
    </div>
  );
};

export default LanguageSelector;
