import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // Navbar
      titleForNavbar: "Le Tuan Anh Pham ~ Thanks for visiting my profile!",
      titleInformationMenuNavbar: "My Information",
      nameMenuNavbar: "Full Name: Le Tuan Anh Pham",
      dateOfBirthMenuNavbar: "Date of Birth: 5 December 2002",
      genderMenuNavbar: "Gender: Male",
      titleContactMenuNavbar: "Contact",
      phoneNumberMenuNavbar: "Phone: +49 176 447 68052",
      locationMenuNavbar: "Location: Sandhofen, Mannheim, Germany",
      item1MenuNavbar: "Skills",
      item2MenuNavbar: "Projects",
      item3MenuNavbar: "Education",
      item4MenuNavbar: "Activities",
      item5MenuNavbar: "Languages",
      item6MenuNavbar: "Certifications",

      // Controls
      languageSelectorLabel: "Select language",
      themeDarkMode: "Dark Mode",
      themeLightMode: "Light Mode",
      themeSwitchToDark: "Switch to dark mode",
      themeSwitchToLight: "Switch to light mode",

      // Shared buttons
      viewProjectButton: "View Project",
      viewMyGithub: "View My GitHub",
      myDegreeButton: "My Degree",
      germanTranslationButton: "German Translation",
      certificationButton: "Recognition in Germany",
      moreButton: "More",
      myCertificateButton: "My Certificate",

      // Home
      titleHome: "My Profile",
      des1: "I'm Tuan Anh, a passionate developer who loves exploring new knowledge and applying it to real-world projects.",
      des2: "I enjoy crafting modern, user-friendly interfaces to deliver smooth and engaging experiences.",
      des3: "I constantly experiment with new technologies and tools to improve my coding skills and efficiency.",
      des4: "I'm always eager to learn and share knowledge with the developer community to grow together.",

      // Skills
      titleSkills: "Technical Skills",
      title1Skills: "Programming Languages & Frameworks",
      title2Skills: "Database and Backend",
      title3Skills: "Tools & Platforms",
      skillLevels: {
        advanced: "Advanced",
        intermediate: "Intermediate",
        basic: "Basic",
      },

      // Projects
      titleProjects: "Projects I Have Completed",
      projects: {
        webTourHat: {
          titleProject: "web-tour-hat",
          name: "H.A.T Website",
          status: "In Use",
          date: "01/2025 - 04/2025",
          fullDesc:
            "This is the official website of H.A.T Travel Company, designed to promote tourism and provide customers with detailed information about tours. The platform showcases a wide range of tours across Vietnam and features articles related to travel and destinations.",
        },
        ccahAppStrain: {
          titleProject: "ccah-app-strain",
          name: "CCAH App",
          status: "In Use",
          date: "03/2024 - 06/2024",
          fullDesc:
            "This application system was designed to manage microorganism products for the Culture Collection of Algae in Ho Chi Minh City (CCAH). It supports product management, approval workflows for market distribution, and additional operational features.",
        },
        ccahWebStrain: {
          titleProject: "ccah-web-strain",
          name: "CCAH Website",
          status: "In Use",
          date: "03/2024 - 06/2024",
          fullDesc:
            "This website promotes microorganism products from the Culture Collection of Algae in Ho Chi Minh City (CCAH), under Ho Chi Minh City University of Industry and Trade, and highlights research in biodiversity, biotechnology, and microalgae applications.",
        },
        hotelManagement: {
          titleProject: "app-hotel-management",
          name: "Hotel Management App",
          status: "Demo",
          date: "09/2022 - 12/2022",
          fullDesc:
            "A smart hotel management solution that simplifies daily operations, including room booking, check-in and check-out, room changes, customer management, staff management, services, and equipment. Built-in invoicing and reporting help users stay in control and make data-driven decisions.",
        },
        toyStoreManagement: {
          titleProject: "app-toy-store-management",
          name: "Toy Store Management App",
          status: "Demo",
          date: "09/2022 - 01/2023",
          fullDesc:
            "MYKINGDOM is a toy store management app that simplifies store operations. It supports order creation, sales tracking, inventory management, invoice and stock receipt printing, role-based login, product management, customer management, staff management, reporting, and revenue statistics.",
        },
        more: {
          titleProject: "More",
          name: "More Projects",
          status: "Demo",
          date: "2020 - now",
          fullDesc:
            "Explore more projects and repositories on my GitHub profile. You will find applications, experiments, and works in progress that show different skills and technologies I have been working with.",
        },
      },

      // Education
      titleEducation: "Education",
      education: {
        university: {
          name: "Ho Chi Minh City University of Industry and Trade",
          yearGraduated: "Year: 2020 - 2024",
          typeGraduated:
            "Graduated - Bachelor of Engineering in Software Engineering",
        },
        highSchool: {
          name: "Marie Curie High School",
          yearGraduated: "Year: 2017 - 2020",
          typeGraduated: "Graduated - High School Diploma",
        },
      },

      // Activities
      titleActivities: "Activities",
      activities: {
        socialActivities: {
          title: "Social Activities",
          items: [
            "Joined the voluntary Green Summer campaign to help clean and beautify Ho Chi Minh City, including street cleaning, collecting trash around my university and in public parks, and gathering plastic bottles and other waste.",
            "Participated in voluntary blood donation programs at my university to support the Blood Transfusion Center and the University Medical Center in Ho Chi Minh City.",
          ],
        },
        experience: {
          title: "Experience",
          items: [
            "Accompanied my grandparents to monthly medical appointments and supported them with taking medication according to doctors' instructions.",
            "Cared for my grandparents every summer by helping in the garden and taking care of everyday tasks to support them.",
            "During my stays with my grandparents, I supported them in daily life, regularly measured their blood pressure, and checked their blood sugar levels.",
            "During regular doctor visits, I documented my grandparents' medical information and created a suitable nutrition plan based on their health needs.",
          ],
        },
      },

      // Languages
      titleLanguage: "Languages",
      languages: {
        vietnamese: {
          name: "Vietnamese",
          desc: "Native",
        },
        german: {
          name: "German",
          desc: "B1",
        },
        english: {
          name: "English",
          desc: "Intermediate",
        },
      },

      // Certificates
      titleCertificates: "Certificates",
      certificates: {
        goetheA1: {
          name: "GOETHE CERTIFICATE A1",
          desc: "Goethe-Institut",
        },
        telcB1: {
          name: "TELC CERTIFICATE B1",
          desc: "telc",
        },
        toeic: {
          name: "TOEIC 605",
          desc: "Educational Testing Service (ETS)",
        },
        appreciation: {
          name: "CERTIFICATE OF APPRECIATION",
          desc: "H.A.T Tours and Service Company Limited",
        },
      },
    },
  },
  de: {
    translation: {
      // Navbar
      titleForNavbar:
        "Le Tuan Anh Pham ~ Danke, dass Sie mein Profil besuchen!",
      titleInformationMenuNavbar: "Meine Informationen",
      nameMenuNavbar: "Vollständiger Name: Le Tuan Anh Pham",
      dateOfBirthMenuNavbar: "Geburtsdatum: 5. Dezember 2002",
      genderMenuNavbar: "Geschlecht: Männlich",
      titleContactMenuNavbar: "Kontakt",
      phoneNumberMenuNavbar: "Telefon: +49 176 447 68052",
      locationMenuNavbar: "Standort: Sandhofen, Mannheim, Deutschland",
      item1MenuNavbar: "Fähigkeiten",
      item2MenuNavbar: "Projekte",
      item3MenuNavbar: "Ausbildung",
      item4MenuNavbar: "Aktivitäten",
      item5MenuNavbar: "Sprachen",
      item6MenuNavbar: "Zertifikate",

      // Controls
      languageSelectorLabel: "Sprache auswählen",
      themeDarkMode: "Dunkelmodus",
      themeLightMode: "Hellmodus",
      themeSwitchToDark: "Zum Dunkelmodus wechseln",
      themeSwitchToLight: "Zum Hellmodus wechseln",

      // Shared buttons
      viewProjectButton: "Projekt ansehen",
      viewMyGithub: "Mein GitHub ansehen",
      myDegreeButton: "Mein Abschluss",
      germanTranslationButton: "Deutsche Übersetzung",
      certificationButton: "Anerkennung",
      moreButton: "Mehr",
      myCertificateButton: "Mein Zertifikat",

      // Home
      titleHome: "Mein Profil",
      des1: "Ich bin Tuan Anh, ein leidenschaftlicher Entwickler, der gerne neues Wissen entdeckt und es in realen Projekten anwendet.",
      des2: "Ich gestalte gerne moderne, benutzerfreundliche Oberflächen, um reibungslose und ansprechende Erlebnisse zu schaffen.",
      des3: "Ich experimentiere kontinuierlich mit neuen Technologien und Tools, um meine Programmierkenntnisse und meine Effizienz zu verbessern.",
      des4: "Ich lerne gerne dazu und teile Wissen mit der Entwicklergemeinschaft, damit wir gemeinsam wachsen können.",

      // Skills
      titleSkills: "Technische Fähigkeiten",
      title1Skills: "Programmiersprachen & Frameworks",
      title2Skills: "Datenbanken und Backend",
      title3Skills: "Tools & Plattformen",
      skillLevels: {
        advanced: "Fortgeschritten",
        intermediate: "Mittelstufe",
        basic: "Grundkenntnisse",
      },

      // Projects
      titleProjects: "Abgeschlossene Projekte",
      projects: {
        webTourHat: {
          titleProject: "web-tour-hat",
          name: "H.A.T Website",
          status: "In Nutzung",
          date: "01/2025 - 04/2025",
          fullDesc:
            "Dies ist die offizielle Website des Reiseunternehmens H.A.T. Sie wurde entwickelt, um Tourismusangebote zu präsentieren und Kunden detaillierte Informationen über Reisen bereitzustellen. Die Plattform zeigt verschiedene Touren in Vietnam und enthält Beiträge zu Reisen und Reisezielen.",
        },
        ccahAppStrain: {
          titleProject: "ccah-app-strain",
          name: "CCAH App",
          status: "In Nutzung",
          date: "03/2024 - 06/2024",
          fullDesc:
            "Dieses Anwendungssystem wurde entwickelt, um Mikroorganismenprodukte der Culture Collection of Algae in Ho-Chi-Minh-Stadt (CCAH) zu verwalten. Es unterstützt Produktverwaltung, Freigabeprozesse für die Markteinführung und weitere operative Funktionen.",
        },
        ccahWebStrain: {
          titleProject: "ccah-web-strain",
          name: "CCAH Website",
          status: "In Nutzung",
          date: "03/2024 - 06/2024",
          fullDesc:
            "Diese Website präsentiert Mikroorganismenprodukte der Culture Collection of Algae in Ho-Chi-Minh-Stadt (CCAH) an der Ho Chi Minh City University of Industry and Trade und hebt Forschung in Biodiversität, Biotechnologie und Mikroalgenanwendungen hervor.",
        },
        hotelManagement: {
          titleProject: "app-hotel-management",
          name: "Hotelverwaltungs-App",
          status: "Demo",
          date: "09/2022 - 12/2022",
          fullDesc:
            "Eine intelligente Lösung für die Hotelverwaltung, die tägliche Abläufe vereinfacht, darunter Zimmerbuchung, Check-in und Check-out, Zimmerwechsel, Kundenverwaltung, Personalverwaltung, Dienstleistungen und Ausstattung. Integrierte Rechnungsstellung und Berichte unterstützen kontrollierte, datenbasierte Entscheidungen.",
        },
        toyStoreManagement: {
          titleProject: "app-toy-store-management",
          name: "Spielwarengeschäft-Verwaltungs-App",
          status: "Demo",
          date: "09/2022 - 01/2023",
          fullDesc:
            "MYKINGDOM ist eine Verwaltungs-App für Spielwarengeschäfte, die den Ladenbetrieb vereinfacht. Sie unterstützt Auftragserstellung, Verkaufsverfolgung, Lagerverwaltung, das Drucken von Rechnungen und Wareneingangsbelegen, rollenbasierte Anmeldung, Produkt-, Kunden- und Personalverwaltung sowie Berichte und Umsatzstatistiken.",
        },
        more: {
          titleProject: "Mehr",
          name: "Weitere Projekte",
          status: "Demo",
          date: "2020 - heute",
          fullDesc:
            "Entdecken Sie weitere Projekte und Repositories auf meinem GitHub-Profil. Dort finden Sie Anwendungen, Experimente und laufende Arbeiten, die verschiedene Fähigkeiten und Technologien zeigen, mit denen ich gearbeitet habe.",
        },
      },

      // Education
      titleEducation: "Ausbildung",
      education: {
        university: {
          name: "Ho Chi Minh City University of Industry and Trade",
          yearGraduated: "Zeitraum: 2020 - 2024",
          typeGraduated:
            "Abgeschlossen - Bachelor of Engineering in Software Engineering",
        },
        highSchool: {
          name: "Marie Curie High School",
          yearGraduated: "Zeitraum: 2017 - 2020",
          typeGraduated: "Abgeschlossen - Abitur",
        },
      },

      // Activities
      titleActivities: "Aktivitäten",
      activities: {
        socialActivities: {
          title: "Soziale Aktivitäten",
          items: [
            "Teilnahme an der freiwilligen Kampagne „Grüner Sommer“ zur Sauberhaltung und Verschönerung von Ho-Chi-Minh-Stadt, einschließlich Straßenreinigung, Müllsammeln rund um meine Universität und in Parks sowie Sammeln von Plastikflaschen und anderen Abfällen.",
            "Teilnahme an freiwilligen Blutspendeaktionen an der Universität zur Unterstützung des Bluttransfusionszentrums und des Universitätsklinikums für Medizin und Pharmazie in Ho-Chi-Minh-Stadt.",
          ],
        },
        experience: {
          title: "Erfahrungen",
          items: [
            "Monatliche Begleitung meiner Großeltern zu Arztterminen sowie Unterstützung bei der Medikamenteneinnahme gemäß ärztlicher Verordnung.",
            "Ich habe mich jeden Sommer um meine Großeltern gekümmert, im Garten geholfen und alltägliche Aufgaben übernommen, um sie zu unterstützen.",
            "Während meiner Aufenthalte bei meinen Großeltern habe ich sie im Alltag unterstützt, regelmäßig ihren Blutdruck gemessen und den Blutzucker kontrolliert.",
            "Bei regelmäßigen Arztbesuchen habe ich die medizinischen Informationen meiner Großeltern dokumentiert und einen passenden Ernährungsplan entsprechend ihren gesundheitlichen Bedürfnissen erstellt.",
          ],
        },
      },

      // Languages
      titleLanguage: "Sprachen",
      languages: {
        vietnamese: {
          name: "Vietnamesisch",
          desc: "Muttersprache",
        },
        german: {
          name: "Deutsch",
          desc: "B1",
        },
        english: {
          name: "Englisch",
          desc: "Mittelstufe",
        },
      },

      // Certificates
      titleCertificates: "Zertifikate",
      certificates: {
        goetheA1: {
          name: "GOETHE ZERTIFIKAT A1",
          desc: "Goethe-Institut",
        },
        telcB1: {
          name: "TELC ZERTIFIKAT B1",
          desc: "telc",
        },
        toeic: {
          name: "TOEIC 605",
          desc: "Educational Testing Service (ETS)",
        },
        appreciation: {
          name: "ANERKENNUNGSZERTIFIKAT",
          desc: "H.A.T Tours and Service Company Limited",
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "de"],
    load: "languageOnly",
    debug: false,
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "lang",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

if (typeof document !== "undefined") {
  const setDocumentLanguage = (lng) => {
    document.documentElement.lang = lng?.split("-")[0] || "en";
  };

  setDocumentLanguage(i18n.resolvedLanguage || i18n.language);
  i18n.on("languageChanged", setDocumentLanguage);
}

export default i18n;
