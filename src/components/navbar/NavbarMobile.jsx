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
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setShowNav(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const infoItems = [
    { icon: FaUser, label: t("nameMenuNavbar") },
    { icon: FaBirthdayCake, label: t("dateOfBirthMenuNavbar") },
    { icon: FaVenusMars, label: t("genderMenuNavbar") },
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
      href: "tel:+4917644768052",
    },
    {
      icon: FaMapMarkerAlt,
      label: t("locationMenuNavbar"),
      href: "https://maps.app.goo.gl/c4Bq5e7bfvmssj3t7",
    },
  ];

  const menuItems = [
    { icon: FaLaptopCode, label: t("item1MenuNavbar"), section: "skills" },
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
    { icon: FaGlobe, label: t("item4MenuNavbar"), section: "activity" },
    {
      icon: FaGlobe,
      label: t("item5MenuNavbar"),
      section: "language",
    },
    {
      icon: FaCertificate,
      label: t("item6MenuNavbar"),
      section: "certificate",
    },
  ];

  return (
    <>
      <nav
        className={`
          fixed inset-x-0 top-0 z-30 px-3 pt-3
          transition-all duration-500 ease-out
          ${showNav ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}
        `}
      >
        <div
          className={`
            relative mx-auto flex w-full max-w-full items-center justify-between gap-3
            overflow-hidden rounded-2xl border px-3 py-2.5
            shadow-[0_10px_35px_rgba(15,23,42,0.08)]
            backdrop-blur-xl transition-all duration-300
            ${
              isScrolled || isMenuOpen
                ? "border-slate-200/70 bg-white/80 dark:border-white/10 dark:bg-slate-950/80"
                : "border-white/40 bg-white/45 dark:border-white/10 dark:bg-white/[0.055]"
            }
          `}
        >
          <p
            className="
              min-w-0 flex-1 truncate px-1 text-base font-semibold italic
              text-slate-900 dark:text-white
            "
          >
            {displayText}
          </p>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="
              inline-flex h-10 w-10 flex-shrink-0 items-center justify-center
              rounded-xl border border-slate-200/70 bg-white/75
              text-slate-800 shadow-[0_8px_22px_rgba(15,23,42,0.08)]
              backdrop-blur-xl transition-all duration-300
              active:scale-95
              dark:border-white/10 dark:bg-white/[0.08] dark:text-white
            "
          >
            {isMenuOpen ? (
              <FaTimes className="h-4 w-4" />
            ) : (
              <FaBars className="h-4 w-4" />
            )}
          </button>
        </div>

        <div
          className={`
            fixed left-3 right-3 top-[85px] z-40
            max-h-[calc(100vh-92px)] overflow-y-auto overflow-x-hidden
            rounded-2xl bg-white/90 p-4
            text-sm text-slate-800
            transition-all duration-300
           dark:bg-slate-950/90 dark:text-white
            ${
              isMenuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-3 opacity-0"
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
              pointer-events-none absolute -right-10 -top-12 h-36 w-36
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
                        flex w-full min-w-0 items-center gap-3 rounded-xl px-3 py-2.5
                        text-slate-700 transition-colors duration-300
                        active:bg-cyan-500/10 dark:text-slate-300
                      "
                    >
                      <Icon className="h-4 w-4 flex-shrink-0 text-cyan-600 dark:text-cyan-300" />
                      <span className="min-w-0 flex-1 truncate">
                        {item.label}
                      </span>
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
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="
                        flex w-full min-w-0 items-center gap-3 rounded-xl px-3 py-2.5
                        text-slate-700 transition-colors duration-300
                        active:bg-cyan-500/10 dark:text-slate-300
                      "
                    >
                      <Icon className="h-4 w-4 flex-shrink-0 text-cyan-600 dark:text-cyan-300" />
                      <span className="min-w-0 flex-1 truncate">
                        {item.label}
                      </span>
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
                        flex w-full min-w-0 items-center gap-3 rounded-xl px-3 py-3
                        text-left font-medium text-slate-800
                        transition-colors duration-300
                        active:bg-cyan-500/10 active:text-cyan-700
                        dark:text-slate-200 dark:active:text-cyan-200
                      "
                    >
                      <Icon className="h-4 w-4 flex-shrink-0 text-cyan-600 dark:text-cyan-300" />
                      <span className="min-w-0 flex-1 truncate">
                        {item.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div
              className="
                flex w-full min-w-0 items-center justify-end gap-2
              "
            >
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
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
