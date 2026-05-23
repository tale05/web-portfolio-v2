import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState("light");
  const isLight = theme === "light";

  // Khi mount, đọc theme từ localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Hàm toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isLight ? t("themeSwitchToDark") : t("themeSwitchToLight")}
      className="
        group inline-flex h-10 min-w-[132px] items-center justify-center gap-2
        rounded-full border border-cyan-500/20 bg-white/75
        px-4 py-2 text-sm font-semibold text-slate-800
        shadow-[0_10px_30px_rgba(8,145,178,0.10)]
        backdrop-blur-xl
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white
        hover:shadow-[0_14px_40px_rgba(15,23,42,0.12)]
        focus:outline-none focus:ring-2 focus:ring-cyan-400/25
        dark:border-cyan-300/20 dark:bg-white/[0.065]
        dark:text-cyan-50 dark:shadow-[0_14px_45px_rgba(0,0,0,0.24)]
        dark:hover:border-cyan-300/35 dark:hover:bg-white/[0.095]
        dark:focus:ring-cyan-300/20
      "
    >
      {isLight ? (
        <>
          <Moon
            className="
              h-4 w-4 text-cyan-700 transition-colors duration-300
              group-hover:text-cyan-600
            "
          />
          <span>{t("themeDarkMode")}</span>
        </>
      ) : (
        <>
          <Sun
            className="
              h-4 w-4 text-cyan-200 transition-colors duration-300
              group-hover:text-cyan-100
            "
          />
          <span>{t("themeLightMode")}</span>
        </>
      )}
    </button>
  );
}
