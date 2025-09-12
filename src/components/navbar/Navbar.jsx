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
} from "react-icons/fa";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useIsMobile } from "../../hooks/useIsMobile";
import NavbarMobile from "./NavbarMobile";
import GoogleTranslate from "../GoogleTranslate";

export default function Navbar() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const displayText = useTypewriter(
    "Le Tuan Anh Pham ~ Thanks for visiting my profile!",
    30
  );
  const [showNav, setShowNav] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
          <div className="max-w-[1300px] mx-auto flex justify-between items-center p-2">
            {/* Text chạy typewriter */}
            <div>
              <p
                className={`text-2xl text-white 
                font-notosans font-semibold italic
                px-3 py-2 
                bg-[#56a15a] 
                rounded-lg cursor-pointer 
                ${isMenuOpen ? "invisible" : "visible"}`}
              >
                {displayText}
              </p>
            </div>

            {/* Hamburger + thông tin ẩn */}
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

              {/* Bảng menu được show khi hover */}
              <div
                className=" absolute right-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                flex flex-col gap-1 bg-white text-black shadow-lg rounded-lg p-4 text-sm transition-all duration-200"
              >
                <div className="top-0 relative z-10">
                  <GoogleTranslate />
                </div>
                <div
                  className="relative z-11 -mt-[110px] bg-white
                space-y-4 pt-4 pb-4 pl-3 pr-3 "
                >
                  <p className="font-bold text-gray-700 border-b pb-1">
                    Contact
                  </p>
                  <a
                    href="mailto:tuananhphamle051202@gmail.com"
                    className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer"
                  >
                    <FaEnvelope className="text-green-400" />
                    <span>Email: tuananhphamle051202@gmail.com</span>
                  </a>
                  <a
                    href="tel:+84901135877"
                    className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer"
                  >
                    <FaPhoneAlt className="text-green-400" />
                    <span>Phone: +84 901 135 877</span>
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Ho+Chi+Minh+City,+Vietnam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer"
                  >
                    <FaMapMarkerAlt className="text-green-400" />
                    <span>Location: Ho Chi Minh City, Vietnam</span>
                  </a>
                </div>

                {/* Menu List */}
                <ul className="flex flex-col border-t pt-3 w-[350px]">
                  <li>
                    <button
                      onClick={() => scrollToSection("skills")}
                      className="flex items-center gap-2 w-full text-left p-3 rounded-md hover:bg-green-100 transition-colors duration-100"
                    >
                      <FaLaptopCode className="text-green-400" /> Skills
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="flex items-center gap-2 w-full text-left p-3 rounded-md hover:bg-green-100 transition-colors duration-100"
                    >
                      <FaProjectDiagram className="text-green-400" /> Projects
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("education")}
                      className="flex items-center gap-2 w-full text-left p-3 rounded-md hover:bg-green-100 transition-colors duration-100"
                    >
                      <FaGraduationCap className="text-green-400" /> Education
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("language")}
                      className="flex items-center gap-2 w-full text-left p-3 rounded-md hover:bg-green-100 transition-colors duration-100"
                    >
                      <FaGlobe className="text-green-400" /> Languages
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("certificate")}
                      className="flex items-center gap-2 w-full text-left p-3 rounded-md hover:bg-green-100 transition-colors duration-100"
                    >
                      <FaCertificate className="text-green-400" /> Certificates
                    </button>
                  </li>
                </ul>
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
