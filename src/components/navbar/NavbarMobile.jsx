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
} from "react-icons/fa";
import { useTypewriter } from "../../hooks/useTypewriter";

export default function NavbarMobile() {
  const [showNav, setShowNav] = useState(false);
  const displayText = useTypewriter("Le Tuan Anh Pham", 30);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // khoảng cách từ navbar, chỉnh theo chiều cao navbar của bạn
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
        className={`w-full fixed top-0 left-0 z-20 bg-transparent text-black transition-all duration-700 transform 
            ${
              showNav
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }
            ${isScrolled ? "bg-white" : "bg-transparent"} `}
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
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div
            className={`z-21 absolute left-0 top-full w-full flex flex-col gap-2 bg-white
            rounded-bl-lg rounded-br-lg 
            p-4 text-sm 
            transform transition-all duration-300
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-2 invisible"
            }`}
          >
            {/* Contact Information */}
            <div className="space-y-4 pt-4 pb-4 pl-3 pr-3">
              <p className="font-bold text-gray-700 border-b pb-1">Contact</p>
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
            <ul className="flex flex-col gap-2 border-t pt-3 w-full">
              <li>
                <button
                  onClick={() => {
                    scrollToSection("skills");
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-green-100 transition-colors duration-200"
                >
                  <FaLaptopCode className="text-green-400" /> Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("projects");
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-green-100 transition-colors duration-200"
                >
                  <FaProjectDiagram className="text-green-400" /> Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("education");
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-green-100 transition-colors duration-200"
                >
                  <FaGraduationCap className="text-green-400" /> Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("language");
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-green-100 transition-colors duration-200"
                >
                  <FaGlobe className="text-green-400" /> Languages
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("certificate");
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-green-100 transition-colors duration-200"
                >
                  <FaCertificate className="text-green-400" /> Certificates
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 z-19 w-full h-screen bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg"></div>
      )}
    </>
  );
}
