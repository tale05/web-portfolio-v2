import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // tự phát hiện ngôn ngữ từ localStorage, browser
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
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
          locationMenuNavbar: "Location: Ho Chi Minh City, Vietnam",
          item1MenuNavbar: "Skills",
          item2MenuNavbar: "Projects",
          item3MenuNavbar: "Education",
          item4MenuNavbar: "Languages",
          item5MenuNavbar: "Certifications",

          // Home
          titleHome: "My Profile",
          des1: "💡 I'm Tuan Anh, a passionate developer who loves exploring new knowledge and applying it to real-world projects.",
          des2: "🎯 I enjoy crafting modern, user-friendly interfaces to deliver smooth and engaging experiences.",
          des3: "⚡️ I constantly experiment with new technologies and tools to improve my coding skills and efficiency.",
          des4: "🤝 I'm always eager to learn and share knowledge with the developer community to grow together.",

          // Skills
          titleSkills: "Technical Skills",
          title1Skills: "Programming Languages & Frameworks",
          title2Skills: "Database and Backend",
          title3Skills: "Tools & Platforms",

          // Projects
          titleProjects: "Projects I Have Completed",
        },
      },
      vi: {
        translation: {
          // Navbar
          titleForNavbar:
            "Phạm Lê Tuấn Anh ~ Cảm ơn bạn đã ghé thăm hồ sơ của tôi!",
          titleInformationMenuNavbar: "Thông tin của tôi",
          nameMenuNavbar: "Họ tên: Phạm Lê Tuấn Anh",
          dateOfBirthMenuNavbar: "Ngày sinh: 5 tháng 12 năm 2002",
          genderMenuNavbar: "Giới tính: Nam",
          titleContactMenuNavbar: "Liên hệ",
          phoneNumberMenuNavbar: "Điện thoại: +49 176 447 68052",
          locationMenuNavbar: "Địa điểm: Thành phố Hồ Chí Minh, Việt Nam",
          item1MenuNavbar: "Kỹ năng",
          item2MenuNavbar: "Dự án",
          item3MenuNavbar: "Giáo dục",
          item4MenuNavbar: "Ngôn ngữ",
          item5MenuNavbar: "Chứng chỉ",

          // Home
          titleHome: "Hồ sơ của tôi",
          des1: "💡 Tôi là Tuấn Anh, một nhà phát triển đam mê khám phá kiến thức mới và áp dụng nó vào các dự án thực tế.",
          des2: "🎯 Tôi thích tạo ra các giao diện hiện đại, thân thiện với người dùng để mang lại trải nghiệm mượt mà và hấp dẫn.",
          des3: "⚡️ Tôi không ngừng thử nghiệm với các công nghệ và công cụ mới để nâng cao kỹ năng lập trình và hiệu quả công việc của mình.",
          des4: "🤝 Tôi luôn sẵn sàng học hỏi và chia sẻ kiến thức với cộng đồng phát triển để cùng nhau tiến bộ hơn nữa.",

          // Skills
          titleSkills: "Kỹ năng kỹ thuật",
          title1Skills: "Ngôn ngữ lập trình & Framework",
          title2Skills: "Cơ sở dữ liệu và Backend",
          title3Skills: "Công cụ & Nền tảng",

          // Projects
          titleProjects: "Các dự án tôi đã hoàn thành",
        },
      },
      de: {
        translation: {
          // Navbar
          titleForNavbar:
            "Le Tuan Anh Pham ~ Danke, dass Sie mein Profil besucht haben!",
          titleInformationMenuNavbar: "Meine Informationen",
          nameMenuNavbar: "Vollständiger Name: Le Tuan Anh Pham",
          dateOfBirthMenuNavbar: "Geburtsdatum: 5. Dezember 2002",
          genderMenuNavbar: "Geschlecht: Männlich",
          titleContactMenuNavbar: "Kontakt",
          phoneNumberMenuNavbar: "Telefon: +49 176 447 68052",
          locationMenuNavbar: "Standort: Ho-Chi-Minh-Stadt, Vietnam",
          item1MenuNavbar: "Fähigkeiten",
          item2MenuNavbar: "Projekte",
          item3MenuNavbar: "Bildung",
          item4MenuNavbar: "Sprachen",
          item5MenuNavbar: "Zertifikate",

          // Home
          titleHome: "Mein Profil",
          des1: "💡 Ich bin Tuan Anh, ein leidenschaftlicher Entwickler, der es liebt, neues Wissen zu erkunden und es in realen Projekten anzuwenden.",
          des2: "🎯 Ich genieße es, moderne, benutzerfreundliche Schnittstellen zu gestalten, um reibungslose und ansprechende Erlebnisse zu bieten.",
          des3: "⚡️ Ich experimentiere ständig mit neuen Technologien und Tools, um meine Programmierfähigkeiten und Effizienz zu verbessern.",
          des4: "🤝 Ich bin immer bestrebt, zu lernen und Wissen mit der Entwicklergemeinschaft zu teilen, um gemeinsam zu wachsen.",

          // Skills
          titleSkills: "Technische Fähigkeiten",
          title1Skills: "Programmiersprachen & Frameworks",
          title2Skills: "Datenbank und Backend",
          title3Skills: "Tools & Plattformen",

          // Projects
          titleProjects: "Projekte, die ich abgeschlossen habe",
        },
      },
    },
  });

export default i18n;
