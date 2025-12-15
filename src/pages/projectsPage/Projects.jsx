import { useIsMobile } from "../../hooks/useIsMobile";
import { Code } from "lucide-react";
import CatPlayWithBall from "../../components/lotties/CatPlayWithBallAnimation";
import ProjectCard from "./ProjectCard";
import ProjectMobile from "./ProjectMobile";
import { listProject } from "../../data/listproject";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  return (
    <>
      {isMobile ? (
        <ProjectMobile />
      ) : (
        <div className="max-w-[1300px] h-auto mx-auto py-4 relative">
          <div
            className="w-[800px] mx-auto my-6
            border-b-[10px] border-[#56a15a]
            shadow-[0_8px_20px_rgba(86,161,90,0.5)]"
          ></div>
          <h1
            className="relative z-12 flex items-center justify-center gap-3 p-4 w-full
            text-2xl text-white font-bold text-center 
            bg-color-for-tilte rounded-xl shadow-lg"
          >
            <Code className="w-8 h-8 text-white" />
            {t("titleProjects")}
          </h1>
          {/* Cat nằm sau title */}
          {/* <div className="absolute -top-[138px] right-10 z-10">
            <CatPlayWithBall />
          </div> */}
          <div
            className="w-full 
            grid grid-cols-3 gap-6 my-4 
            justify-items-center"
          >
            {listProject.map((item) => (
              <ProjectCard
                key={item.titleProject}
                titleProject={item.titleProject}
                name={item.name}
                status={item.status}
                link={item.link}
                viewProject={item.viewProject}
                date={item.date}
                fullDesc={item.fullDesc}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
