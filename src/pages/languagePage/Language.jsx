import LanguageMobile from "./LanguageMobile";
import LanguageCard from "./LanguageCard";
import { useIsMobile } from "../../hooks/useIsMobile";
import { listLanguage } from "../../data/listLanguage";
import { Languages } from "lucide-react";

export default function Language() {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <div>
          <LanguageMobile />
        </div>
      ) : (
        <div className="max-w-[1300px] h-auto mx-auto py-4 relative">
          <div
            className="w-[800px] mx-auto my-6
            border-b-[10px] border-[#56a15a]
            shadow-[0_8px_20px_rgba(86,161,90,0.5)]"
          ></div>
          <h1
            className="relative z-1 flex items-center justify-center gap-3 p-4 w-full
            text-2xl text-white font-bold text-center 
            bg-color-for-tilte rounded-xl shadow-lg"
          >
            <Languages className="w-8 h-8 text-white" />
            Languages
          </h1>
          {/* Graduation Hat nằm sau title */}
          {/* <div className="absolute -top-24 right-10 z-2">
            <GraduationHatAnimation />
          </div> */}

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-4 justify-items-center">
            {listLanguage.map((language) => (
              <LanguageCard
                key={language.name}
                icon={language.icon}
                alt={language.alt}
                name={language.name}
                desc={language.desc}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
