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

export default function Navbar() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const displayText = useTypewriter(
    "Le Tuan Anh Pham - 'Thanks for visiting my portfolio!'",
    30
  );
  const [showNav, setShowNav] = useState(false);

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
          className={`w-full fixed top-0 left-0 z-20 bg-[#80bcbd] text-black transition-all duration-700 transform 
            ${
              showNav
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            } 
            ${
              isMenuOpen
                ? "bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg"
                : "bg-[#80bcbd]"
            }`}
        >
          <div className="max-w-[1300px] mx-auto flex justify-between items-center p-4">
            {/* Text chạy typewriter */}
            <div>
              <p
                className="
                  text-lg font-playwrite font-semibold italic
                  bg-gradient-to-tr from-red-400 via-yellow-200 to-gray-100
                  bg-clip-text text-transparent px-3 py-2
                "
              >
                {displayText}
              </p>
            </div>

            {/* Hamburger + thông tin ẩn */}
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <button
                className={`text-2xl p-2 hover:bg-white rounded-tl-lg rounded-tr-lg transition-colors ${
                  isMenuOpen ? "bg-white" : ""
                }`}
              >
                <FaBars />
              </button>
              <div
                className="z-21 absolute right-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible 
             flex flex-col gap-2 bg-white text-black shadow-lg rounded-bl-lg rounded-br-lg rounded-tl-lg p-4 text-sm transition-all duration-200"
              >
                {/* Contact Information */}
                <div className="space-y-4 pt-4 pb-4 pl-3 pr-3">
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
                <ul className="flex flex-col gap-2 border-t pt-3 w-[350px]">
                  <li>
                    <button className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-green-100 transition-colors duration-200">
                      <FaLaptopCode className="text-green-400" /> Skills
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-green-100 transition-colors duration-200">
                      <FaProjectDiagram className="text-green-400" /> Projects
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-green-100 transition-colors duration-200">
                      <FaGraduationCap className="text-green-400" /> Education
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-green-100 transition-colors duration-200">
                      <FaGlobe className="text-green-400" /> Languages
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-green-100 transition-colors duration-200">
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
        <div className="fixed inset-0 z-19 w-full h-screen bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg"></div>
      )}
    </>
  );
}
