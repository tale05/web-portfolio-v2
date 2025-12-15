import { Code } from "lucide-react";
import CatPlayWithBall from "../../components/lotties/CatPlayWithBallAnimation";
import { listProject } from "../../data/listproject";
import ProjectCard from "./ProjectCard";

export default function ProjectMobile() {
  return (
    <div className="w-full h-auto mx-auto p-5 flex flex-col items-center relative">
      <div
        className="w-[300px] mx-auto my-6
            border-b-[10px] border-[#56a15a]
            shadow-[0_8px_20px_rgba(86,161,90,0.5)]"
      ></div>
      <h1
        className="relative z-1 flex items-center justify-center gap-3 p-2 w-full 
        text-xl text-white font-bold text-center 
        bg-color-for-tilte rounded-xl shadow-lg"
      >
        <Code className="w-8 h-8 text-white" />
        Projects I Have Completed
        {/* Cat nằm bên phải, hơi trồi lên trên */}
        {/* <div className="absolute -top-[103px] right-2 z-2">
          <CatPlayWithBall />
        </div> */}
      </h1>
      {/* overflow-y-scroll scrollbar-hide */}
      <div
        className="w-full h-auto
        grid grid-cols-1 gap-4 my-4 
        justify-items-center
        rounded-2xl"
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
  );
}
