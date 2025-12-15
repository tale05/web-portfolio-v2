import { useIsMobile } from "../../hooks/useIsMobile";
import { GraduationCap } from "lucide-react";
import GraduationHatAnimation from "../../components/lotties/GraduationHatAnimation";
import EducationCard from "./EducationCard";
import EducationMobile from "./EducationMobile";
import { listEducation } from "../../data/listEducation";

export default function Education() {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <EducationMobile />
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
            <GraduationCap className="w-8 h-8 text-white" />
            Education
          </h1>
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
                key={item.name}
                name={item.name}
                yearGraduated={item.yearGraduated}
                typeGraduated={item.typeGraduated}
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
