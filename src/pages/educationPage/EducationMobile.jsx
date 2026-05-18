import { GraduationCap } from "lucide-react";
import GraduationHatAnimation from "../../components/lotties/GraduationHatAnimation";
import { listEducation } from "../../data/listEducation";
import EducationCard from "./EducationCard";

export default function EducationMobile() {
  return (
    <div className="w-full h-auto mx-auto p-5 flex flex-col items-center relative">
      <div className="mx-auto flex w-full max-w-[800px] items-center gap-4">
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
          Education
        </h1>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-400/50" />
      </div>

      <div
        className="w-full h-auto
        grid grid-cols-1 gap-4 my-4 
        justify-items-center
        rounded-2xl
        py-3"
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
  );
}
