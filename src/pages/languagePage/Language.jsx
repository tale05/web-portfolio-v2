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
          <div className="mx-auto my-6 flex w-full max-w-[800px] items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400/50" />

            <h1
              className="
                inline-flex items-center gap-3 rounded-full
                border border-cyan-500/20 bg-cyan-500/10
                px-5 py-3 text-lg font-bold text-cyan-700
                shadow-[0_10px_30px_rgba(8,145,178,0.12)]
                backdrop-blur-xl
                dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200
                sm:text-xl
              "
            >
              <Languages className="w-8 h-8 text-cyan-700" />
              Languages
            </h1>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-400/50" />
          </div>

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
