import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

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
      className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md 
             hover:scale-110 transition flex items-center gap-2"
    >
      {theme === "light" ? (
        <>
          <FaMoon className="text-gray-800 w-4 h-4" />
          <span className="text-gray-800 font-medium text-sm">Dark Mode</span>
        </>
      ) : (
        <>
          <FaSun className="text-yellow-400 w-4 h-4" />
          <span className="text-yellow-400 font-medium text-sm">
            Light Mode
          </span>
        </>
      )}
    </button>
  );
}
