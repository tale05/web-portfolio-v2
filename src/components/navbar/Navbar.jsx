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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setShowNav(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  const infoItems = [
    {
      icon: FaUser,
      label: t("nameMenuNavbar"),
    },
    {
      icon: FaBirthdayCake,
      label: t("dateOfBirthMenuNavbar"),
    },
    {
      icon: FaVenusMars,
      label: t("genderMenuNavbar"),
    },
  ];

  const contactItems = [
    {
      icon: FaEnvelope,
      label: "Email: tuananhphamle051202@gmail.com",
      href: "mailto:tuananhphamle051202@gmail.com",
    },
    {
      icon: FaPhoneAlt,
      label: t("phoneNumberMenuNavbar"),
      href: "tel:+84901135877",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Sandhofen, Mannheim, Deutschland",
      href: "https://maps.app.goo.gl/c4Bq5e7bfvmssj3t7",
    },
  ];

  const menuItems = [
    {
      icon: FaLaptopCode,
      label: t("item1MenuNavbar"),
      section: "skills",
    },
    {
      icon: FaProjectDiagram,
      label: t("item2MenuNavbar"),
      section: "projects",
    },
    {
      icon: FaGraduationCap,
      label: t("item3MenuNavbar"),
      section: "education",
    },
    {
      icon: FaGlobe,
      label: t("item4MenuNavbar"),
      section: "language",
    },
    {
      icon: FaCertificate,
      label: t("item5MenuNavbar"),
      section: "certificate",
    },
  ];

  return (
    <>
      {isMobile ? (
        <NavbarMobile />
      ) : (
        <nav
          className={`
            fixed left-0 top-0 z-30 w-full px-4 pt-4
            transition-all duration-700 ease-out
            ${
              showNav ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }
          `}
        >
          <div
            className="
              mx-auto grid max-w-[1300px] grid-cols-12 items-center gap-4
              rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3
              shadow-[0_10px_35px_rgba(15,23,42,0.08)]
              backdrop-blur-xl
              dark:border-white/10 dark:bg-white/[0.065]
              dark:shadow-[0_14px_45px_rgba(0,0,0,0.28)]
            "
          >
            <div className="col-span-8 min-w-0">
              <p
                className={`
                  truncate px-2 text-xl font-semibold italic text-slate-900
                  transition-opacity duration-300 dark:text-white
                  ${isMenuOpen ? "opacity-40" : "opacity-100"}
                `}
              >
                {displayText}
              </p>
            </div>

            <div className="col-span-4 flex items-center justify-end gap-3">
              <div
                className="relative z-40"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <button
                  type="button"
                  aria-label="Open navigation menu"
                  className="
                    inline-flex h-11 w-11 items-center justify-center rounded-xl
                    border border-slate-200/70 bg-white/75 text-slate-800
                    shadow-[0_8px_22px_rgba(15,23,42,0.08)]
                    backdrop-blur-xl transition-all duration-300
                    hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white
                    dark:border-white/10 dark:bg-white/[0.08]
                    dark:text-white dark:hover:border-cyan-300/30
                    dark:hover:bg-white/[0.12]
                  "
                >
                  <FaBars className="h-5 w-5" />
                </button>

                <div
                  className={`
                    absolute right-0 top-full mt-3 w-[390px] overflow-hidden
                    rounded-2xl border border-slate-200/70 bg-white/85 p-4
                    text-sm text-slate-800
                    shadow-[0_24px_80px_rgba(15,23,42,0.18)]
                    backdrop-blur-2xl transition-all duration-300
                    dark:border-white/10 dark:bg-slate-950/85 dark:text-white
                    ${
                      isMenuOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }
                  `}
                >
                  <div
                    className="
                      pointer-events-none absolute inset-0
                      bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_42%,rgba(14,165,233,0.08))]
                      dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%,rgba(14,165,233,0.10))]
                    "
                  />

                  <div
                    className="
                      pointer-events-none absolute -right-12 -top-14 h-40 w-40
                      rounded-full bg-cyan-400/10 blur-3xl
                      dark:bg-cyan-300/10
                    "
                  />

                  <div className="relative z-10 space-y-5">
                    <div>
                      <p
                        className="
                          mb-3 border-b border-slate-200/70 pb-2
                          text-xs font-bold uppercase tracking-[0.12em]
                          text-slate-500 dark:border-white/10 dark:text-slate-400
                        "
                      >
                        {t("titleInformationMenuNavbar")}
                      </p>

                      <div className="space-y-2">
                        {infoItems.map((item) => {
                          const Icon = item.icon;

                          return (
                            <div
                              key={item.label}
                              className="
                                flex items-center gap-3 rounded-xl px-3 py-2
                                text-slate-700 transition-colors duration-300
                                hover:bg-cyan-500/10 hover:text-cyan-700
                                dark:text-slate-300 dark:hover:text-cyan-200
                              "
                            >
                              <Icon className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                              <span className="truncate">{item.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <p
                        className="
                          mb-3 border-b border-slate-200/70 pb-2
                          text-xs font-bold uppercase tracking-[0.12em]
                          text-slate-500 dark:border-white/10 dark:text-slate-400
                        "
                      >
                        {t("titleContactMenuNavbar")}
                      </p>

                      <div className="space-y-2">
                        {contactItems.map((item) => {
                          const Icon = item.icon;

                          return (
                            <a
                              key={item.label}
                              href={item.href}
                              target={
                                item.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                item.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="
                                flex items-center gap-3 rounded-xl px-3 py-2
                                text-slate-700 transition-colors duration-300
                                hover:bg-cyan-500/10 hover:text-cyan-700
                                dark:text-slate-300 dark:hover:text-cyan-200
                              "
                            >
                              <Icon className="h-4 w-4 flex-shrink-0 text-cyan-600 dark:text-cyan-300" />
                              <span className="truncate">{item.label}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>

                    <ul className="border-t border-slate-200/70 pt-3 dark:border-white/10">
                      {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                          <li key={item.section}>
                            <button
                              type="button"
                              onClick={() => scrollToSection(item.section)}
                              className="
                                flex w-full items-center gap-3 rounded-xl px-3 py-3
                                text-left font-medium text-slate-800
                                transition-all duration-300
                                hover:bg-cyan-500/10 hover:text-cyan-700
                                dark:text-slate-200 dark:hover:text-cyan-200
                              "
                            >
                              <Icon className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                              {item.label}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="
                  flex items-center gap-2
                  bg-transparent px-2 py-1.5
                "
              >
                <ThemeToggle />
                <LanguageSelector />
              </div>
            </div>
          </div>
        </nav>
      )}

      {isMenuOpen && !isMobile && (
        <div
          className="
            fixed inset-0 z-20 h-screen w-full
            bg-white/25 backdrop-blur-md
            dark:bg-slate-950/35
          "
        />
      )}
    </>
  );
}
