import { useEffect, useRef } from "react";
import { Languages } from "lucide-react";
import Cat from "../../components/lotties/CatAnimation";
import LanguageCard from "./LanguageCard";
import { listLanguage } from "../../data/listLanguage";

export default function SkillsMobile() {
  return (
    <div className="p-4">
      <div className="relative flex justify-center">
        <h1
          className="relative z-12 flex items-center justify-center gap-3 p-2 w-full
          text-xl text-white font-bold text-center 
          bg-color-for-tilte rounded-xl shadow-lg"
        >
          <Languages className="w-8 h-8 text-white" />
          Languages
        </h1>
        <div className="absolute -top-16 right-0 z-10">
          <Cat />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 py-3">
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
  );
}
