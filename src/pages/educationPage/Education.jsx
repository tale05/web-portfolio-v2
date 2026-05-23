import { useIsMobile } from "../../hooks/useIsMobile";
import { GraduationCap } from "lucide-react";
import GraduationHatAnimation from "../../components/lotties/GraduationHatAnimation";
import EducationCard from "./EducationCard";
import EducationMobile from "./EducationMobile";
import { listEducation } from "../../data/listEducation";
import { useTranslation } from "react-i18next";

export default function Education() {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const getEducationText = (item, field) =>
    t(`education.${item.translationKey}.${field}`, item[field]);

  return (
    <>
      {isMobile ? (
        <EducationMobile />
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
              <GraduationCap className="w-8 h-8 text-cyan-700" />
              {t("titleEducation")}
            </h1>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-400/50" />
          </div>
          {/* Cat nằm sau title */}
          {/* <div className="absolute -top-[70px] right-10 z-2">
            <GraduationHatAnimation />
          </div> */}
          <div
            className="w-full 
            grid grid-cols-2 gap-6 my-4 
            justify-items-center"
          >
            {listEducation.map((item) => (
              <EducationCard
                key={item.translationKey}
                name={getEducationText(item, "name")}
                yearGraduated={getEducationText(item, "yearGraduated")}
                typeGraduated={getEducationText(item, "typeGraduated")}
                linkMyDegree={item.linkMyDegree}
                linkMyDegree_inDEU={item.linkMyDegree_inDEU}
                more={item.more}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
