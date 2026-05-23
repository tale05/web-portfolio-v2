import { Code } from "lucide-react";
import CatPlayWithBall from "../../components/lotties/CatPlayWithBallAnimation";
import { listProject } from "../../data/listproject";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

export default function ProjectMobile() {
  const { t } = useTranslation();
  const getProjectText = (item, field) =>
    t(`projects.${item.translationKey}.${field}`, item[field]);

  return (
    <div className="w-full h-auto mx-auto p-5 flex flex-col items-center relative">
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
      {/* overflow-y-scroll scrollbar-hide */}
      <div
        className="w-full h-auto
        grid grid-cols-1 gap-4 my-4 
        justify-items-center
        rounded-2xl"
      >
        {listProject.map((item) => (
          <ProjectCard
            key={item.translationKey}
            titleProject={getProjectText(item, "titleProject")}
            name={getProjectText(item, "name")}
            status={getProjectText(item, "status")}
            link={item.link}
            viewProject={item.viewProject}
            date={getProjectText(item, "date")}
            fullDesc={getProjectText(item, "fullDesc")}
          />
        ))}
      </div>
    </div>
  );
}
