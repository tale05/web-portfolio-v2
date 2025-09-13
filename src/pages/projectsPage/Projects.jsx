import { useIsMobile } from "../../hooks/useIsMobile";
import { Code } from "lucide-react";
import CatPlayWithBall from "../../components/lotties/CatPlayWithBallAnimation";
import ProjectCard from "./ProjectCard";
import ProjectMobile from "./ProjectMobile";
import { listProject } from "../../data/listproject";

export default function Projects() {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <ProjectMobile />
      ) : (
        <div className="max-w-[1300px] h-auto mx-auto py-4 relative">
          <h1
            className="relative z-12 flex items-center justify-center gap-3 p-4 w-full
            text-2xl text-white font-bold text-center 
            bg-color-for-tilte rounded-xl shadow-lg"
          >
            <Code className="w-8 h-8 text-white" />
            Projects I Have Completed
          </h1>
          {/* Cat nằm sau title */}
          <div className="absolute -top-[138px] right-10 z-10">
            <CatPlayWithBall />
          </div>
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
