import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaProjectDiagram,
  FaGraduationCap,
  FaGlobe,
  FaCertificate,
  FaBars,
  FaUser,
  FaBirthdayCake,
  FaVenusMars,
} from "react-icons/fa";

import { useTypewriter } from "../../hooks/useTypewriter";
import { useIsMobile } from "../../hooks/useIsMobile";
import NavbarMobile from "./NavbarMobile";
import ThemeToggle from "../ThemeToggle";
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const displayText = useTypewriter(t("titleForNavbar"), 30);

  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // Hàm cuộn mượt đến phần tương ứng khi nhấn vào mục trong menu
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -60;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setShowNav(true), 200); // delay 0.2s
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isMobile ? (
        <NavbarMobile />
      ) : (
        <nav
          className={`w-full relative top-0 left-0 z-20 bg-transparent text-black transition-all duration-700 transform 
            ${
              showNav
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            } 
            ${isMenuOpen ? "bg-transparent" : "bg-transparent"}`}
        >
          <div className="max-w-[1300px] mx-auto grid grid-cols-12 gap-4 p-2">
            <div className="col-span-8">
              <p
                className={`text-2xl text-white 
                font-notosans font-semibold italic
                px-3 py-2
                rounded-lg
                w-auto
                ${isMenuOpen ? "invisible" : "visible"}`}
              >
                {displayText}
              </p>
            </div>
            <div className="col-span-4 flex justify-end items-center">
              <div
                className="relative group cursor-pointer z-20"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <button
                  className={`text-2xl p-2 hover:bg-white rounded-tl-md rounded-tr-md transition-colors
                          ${isMenuOpen ? "invisible" : "visible"}`}
                >
                  <FaBars
                    className={`${isMenuOpen ? "text-black" : "text-white"}`}
                  />
                </button>
                <div
                  className=" absolute right-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                flex flex-col gap-1 bg-white text-black shadow-lg rounded-lg p-4 text-sm transition-all duration-200
                dark:bg-gray-900"
                >
                  <div className="space-y-4 pt-4 pb-4 pl-3 pr-3">
                    <p className="font-bold text-gray-700 dark:text-white border-b pb-1">
                      {t("titleInformationMenuNavbar")}
                    </p>
                    <a
                      className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer
                    text-black dark:text-white dark:hover:text-green-400"
                    >
                      <FaUser className="text-green-600" />
                      <span>{t("nameMenuNavbar")}</span>
                    </a>
                    <a
                      className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer
                    text-black dark:text-white dark:hover:text-green-400"
                    >
                      <FaBirthdayCake className="text-green-600" />
                      <span>{t("dateOfBirthMenuNavbar")}</span>
                    </a>
                    <a
                      className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer
                    text-black dark:text-white dark:hover:text-green-400"
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
                      text-black dark:text-white dark:hover:text-green-400"
                    >
                      <FaEnvelope className="text-green-600" />
                      <span>Email: tuananhphamle051202@gmail.com</span>
                    </a>
                    <a
                      href="tel:+84901135877"
                      className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer
                      text-black dark:text-white dark:hover:text-green-400"
                    >
                      <FaPhoneAlt className="text-green-600" />
                      <span>{t("phoneNumberMenuNavbar")}</span>
                    </a>
                    <a
                      href="https://www.google.com/maps/place/Ho+Chi+Minh+City,+Vietnam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer
                      text-black dark:text-white dark:hover:text-green-400"
                    >
                      <FaMapMarkerAlt className="text-green-600" />
                      <span>{t("locationMenuNavbar")}</span>
                    </a>
                  </div>

                  {/* Menu List */}
                  <ul className="flex flex-col border-t pt-3 w-[350px]">
                    <li>
                      <button
                        onClick={() => scrollToSection("skills")}
                        className="flex items-center gap-2 w-full text-left p-3 rounded-md hover:bg-green-100 transition-colors duration-75
                        text-black dark:text-white dark:hover:text-black"
                      >
                        <FaLaptopCode className="text-green-600" />{" "}
                        {t("item1MenuNavbar")}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("projects")}
                        className="flex items-center gap-2 w-full text-left p-3 rounded-md hover:bg-green-100 transition-colors duration-100
                        text-black dark:text-white dark:hover:text-black"
                      >
                        <FaProjectDiagram className="text-green-600" />{" "}
                        {t("item2MenuNavbar")}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("education")}
                        className="flex items-center gap-2 w-full text-left p-3 rounded-md hover:bg-green-100 transition-colors duration-100
                        text-black dark:text-white dark:hover:text-black"
                      >
                        <FaGraduationCap className="text-green-600" />{" "}
                        {t("item3MenuNavbar")}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("language")}
                        className="flex items-center gap-2 w-full text-left p-3 rounded-md hover:bg-green-100 transition-colors duration-100
                        text-black dark:text-white dark:hover:text-black"
                      >
                        <FaGlobe className="text-green-600" />{" "}
                        {t("item4MenuNavbar")}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("certificate")}
                        className="flex items-center gap-2 w-full text-left p-3 rounded-md hover:bg-green-100 transition-colors duration-100
                        text-black dark:text-white dark:hover:text-black"
                      >
                        <FaCertificate className="text-green-600" />{" "}
                        {t("item5MenuNavbar")}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-auto h-auto px-4 flex flex-row items-center justify-end gap-2">
                <ThemeToggle />
                <LanguageSelector />
              </div>
            </div>
          </div>
        </nav>
      )}
      {isMenuOpen && (
        // Làm mờ nền khi hover và menu xuất hiện
        <div className="fixed inset-0 z-19 w-full h-screen bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg"></div>
      )}
    </>
  );
}
