import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaLaptopCode,
  FaProjectDiagram,
  FaGraduationCap,
  FaGlobe,
  FaCertificate,
  FaBars,
  FaTimes,
  FaBirthdayCake,
  FaVenusMars,
} from "react-icons/fa";
import { useTypewriter } from "../../hooks/useTypewriter";
import ThemeToggle from "../ThemeToggle";
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "react-i18next";

export default function NavbarMobile() {
  const { t } = useTranslation();
  const [showNav, setShowNav] = useState(false);
  const displayText = useTypewriter("Le Tuan Anh Pham", 30);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setShowNav(true), 200); // delay 0.2s
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-20 text-black transition-all duration-200 transform
        ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
        ${
          isMenuOpen
            ? "bg-white dark:bg-gray-900"
            : isScrolled
            ? "bg-white dark:bg-gray-900"
            : "bg-transparent dark:bg-transparent"
        }
      `}
      >
        <div className="min-w-full mx-auto flex justify-between items-center px-4 py-2 z-30 relative">
          {/* Text chạy typewriter */}
          <div>
            <p
              className="text-lg font-playwrite font-semibold italic 
              bg-gradient-to-tr from-emerald-600 via-emerald-600 to-green-700 bg-clip-text text-transparent 
              px-3 py-2 
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
            >
              {displayText}
            </p>
          </div>
          {/* Hamburger + thông tin ẩn */}
          <button
            className="text-2xl p-2 rounded-tl-lg rounded-tr-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="text-black dark:text-white" />
            ) : (
              <FaBars className="text-black dark:text-white" />
            )}
          </button>
          <div
            className={`z-21 absolute left-0 top-full w-full flex flex-col gap-2 bg-white
            rounded-bl-lg rounded-br-lg 
            p-4 text-sm 
            transform transition-all duration-300
            dark:bg-gray-900
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0 visible -mt-1"
                : "opacity-0 -translate-y-2 invisible"
            }`}
          >
            {/* Contact Information */}
            <div className="space-y-4 pt-4 pb-4 pl-3 pr-3">
              <p className="font-bold text-gray-700 dark:text-white border-b pb-1">
                {t("titleInformationMenuNavbar")}
              </p>
              <a
                className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer
              dark:text-white dark:hover:text-green-400"
              >
                <FaUser className="text-green-600" />
                <span>{t("nameMenuNavbar")}</span>
              </a>
              <a
                className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer
              dark:text-white dark:hover:text-green-400"
              >
                <FaBirthdayCake className="text-green-600" />
                <span>{t("dateOfBirthMenuNavbar")}</span>
              </a>
              <a
                className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer
              dark:text-white dark:hover:text-green-400"
              >
                <FaVenusMars className="text-green-600" />
                <span>{t("genderMenuNavbar")}</span>
              </a>
              <p className="font-bold text-gray-700 dark:text-white border-b pb-1">
                {t("titleContactMenuNavbar")}
              </p>
              <a
                href="mailto:tuananhphamle051202@gmail.com"
                className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer
              dark:text-white dark:hover:text-green-400"
              >
                <FaEnvelope className="text-green-600" />
                <span>Email: tuananhphamle051202@gmail.com</span>
              </a>
              <a
                href="tel:+84901135877"
                className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer
                dark:text-white dark:hover:text-green-400"
              >
                <FaPhoneAlt className="text-green-600" />
                <span>{t("phoneNumberMenuNavbar")}</span>
              </a>
              <a
                href="https://www.google.com/maps/place/Ho+Chi+Minh+City,+Vietnam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer
                dark:text-white dark:hover:text-green-400"
              >
                <FaMapMarkerAlt className="text-green-600" />
                <span>{t("locationMenuNavbar")}</span>
              </a>
            </div>

            {/* Menu List */}
            <ul className="flex flex-col gap-2 border-t pt-3 w-full">
              <li>
                <button
                  onClick={() => {
                    scrollToSection("skills");
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-green-100 transition-colors duration-200
                  dark:text-white dark:hover:text-black"
                >
                  <FaLaptopCode className="text-green-600" />{" "}
                  {t("item1MenuNavbar")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("projects");
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-green-100 transition-colors duration-200
                  dark:text-white dark:hover:text-black"
                >
                  <FaProjectDiagram className="text-green-600" />{" "}
                  {t("item2MenuNavbar")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("education");
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-green-100 transition-colors duration-200
                  dark:text-white dark:hover:text-black"
                >
                  <FaGraduationCap className="text-green-600" />{" "}
                  {t("item3MenuNavbar")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("language");
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-green-100 transition-colors duration-200
                  dark:text-white dark:hover:text-black"
                >
                  <FaGlobe className="text-green-600" /> {t("item4MenuNavbar")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("certificate");
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-green-100 transition-colors duration-200
                  dark:text-white dark:hover:text-black"
                >
                  <FaCertificate className="text-green-600" />{" "}
                  {t("item5MenuNavbar")}
                </button>
              </li>
            </ul>
            <div className="w-full flex justify-end items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed inset-0 z-19 w-full h-screen bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg"
        ></div>
      )}
    </>
  );
}
