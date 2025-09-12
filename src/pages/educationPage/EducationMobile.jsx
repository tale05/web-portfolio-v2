import { GraduationCap } from "lucide-react";
import GraduationHatAnimation from "../../components/lotties/GraduationHatAnimation";
import { listEducation } from "../../data/listEducation";
import EducationCard from "./EducationCard";

export default function EducationMobile() {
  return (
    <div className="w-full h-auto mx-auto p-5 flex flex-col items-center relative">
      <h1
        className="relative z-1 flex items-center justify-center gap-3 p-2 w-full 
        text-xl text-white font-bold text-center 
        bg-color-for-tilte rounded-xl shadow-lg"
      >
        <GraduationCap className="w-8 h-8 text-white" />
        Education
        {/* Cat nằm bên phải, hơi trồi lên trên */}
        <div className="absolute -top-[95px] left-1 z-2">
          <GraduationHatAnimation />
        </div>
      </h1>

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
            more={item.more}
          />
        ))}
      </div>
    </div>
  );
}
