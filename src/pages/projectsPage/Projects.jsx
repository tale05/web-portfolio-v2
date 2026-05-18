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
              <Code className="h-5 w-5" />
              {t("titleProjects")}
            </h1>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-400/50" />
          </div>
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
