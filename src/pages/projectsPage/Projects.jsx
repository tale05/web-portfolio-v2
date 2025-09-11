import { useIsMobile } from "../../hooks/useIsMobile";
import { Code } from "lucide-react";
import CatPlayWithBall from "../../components/lotties/CatPlayWithBallAnimation";
import ProjectCard from "./ProjectCard";
import ProjectMobile from "./ProjectMobile";

export default function Projects() {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <ProjectMobile />
      ) : (
        <div className="max-w-[1300px] h-auto mx-auto px-4 pb-20 mt-24 relative">
          <h1
            className="relative z-12 flex items-center justify-center gap-3 p-4 w-full
            text-2xl text-white font-bold text-center 
            bg-color-for-tilte rounded-xl shadow-lg"
          >
            <Code className="w-8 h-8 text-white" />
            Projects I Have Completed
          </h1>
          {/* Cat nằm sau title */}
          <div className="absolute -top-60 right-10 z-10">
            <CatPlayWithBall />
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-4 justify-items-center">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      )}
    </>
  );
}
