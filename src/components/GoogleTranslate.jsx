import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    // Tạo function global để Google gọi
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    // Tạo script để load Google Translate
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

    script.async = true;
    document.body.appendChild(script);

    // Cleanup khi component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="google_translate_element"></div>;
}
