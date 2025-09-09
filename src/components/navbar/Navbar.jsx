import { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function Navbar() {
  const isMobile = useIsMobile();
  const displayText = useTypewriter(
    "Hi there. Thanks for visiting my portfolio!",
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
        <div></div>
      ) : (
        <nav
          className={`w-full fixed top-0 left-0 z-50 bg-[#80bcbd] text-black transition-all duration-700 transform ${
            showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="max-w-[1300px] mx-auto flex justify-between items-center p-4">
            <div className="text-green-950 font-bold text-2xl">
              Le Tuan Anh Pham
            </div>
            <div>
              <p
                className="
              text-lg font-playwrite font-semibold italic
              bg-gradient-to-tr from-cyan-300 via-neutral-200 to-gray-100
              bg-clip-text text-transparent px-3 py-2
            "
              >
                {displayText}
              </p>
            </div>
            <div className="flex gap-6 items-center text-sm text-gray-950">
              <div className="flex items-center gap-1 hover:text-green-400 transition-colors">
                <FaEnvelope /> tuananhphamle051202@gmail.com
              </div>
              <div className="flex items-center gap-1 hover:text-green-400 transition-colors">
                <FaPhoneAlt /> +84 901 135 877
              </div>
              <div className="flex items-center gap-1 hover:text-green-400 transition-colors">
                <FaMapMarkerAlt /> Ho Chi Minh City
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
