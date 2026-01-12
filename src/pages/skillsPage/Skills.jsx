import GitHubCalendar from "react-github-calendar";
import { Code, Rocket, Database, Wrench } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import GithubOctocatAnimation from "../../components/lotties/GithubOctocatAnimation";
import Cat from "../../components/lotties/CatAnimation";
import SkillsMobile from "./SkillsMobile";
import SkillCard from "./SkillCard";
import { useIsMobile } from "../../hooks/useIsMobile";
import {
  logoIconSkill,
  listSkillLevel,
  listDb,
  listTools,
} from "../../data/logoicon";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <div>
          <SkillsMobile />
        </div>
      ) : (
        <div className="max-w-[1300px] h-auto mx-auto px-4 py-2 relative">
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
            {t("titleSkills")}
          </h1>
          {/* Cat nằm sau title */}
          {/* <div className="absolute -top-20 right-10 z-10">
            <Cat />
          </div> */}

          <div
            className="my-8 block p-4 rounded-2xl
                    bg-white/10 backdrop-blur-lg
                      border border-white/20
                      shadow-lg"
          >
            <div className="flex items-center justify-center">
              <div>
                <GithubOctocatAnimation />
              </div>
              <div>
                <GitHubCalendar
                  username="tale05"
                  blockSize={15}
                  blockMargin={5}
                  fontSize={16}
                  theme={{
                    light: [
                      "#ffffff", // ô trống (0 contributions)
                      "#bbf7d0", // green-200
                      "#4ade80", // green-400
                      "#22c55e", // green-500
                      "#15803d", // green-700
                    ],
                    dark: [
                      "#eff5f2", // ô trống (dark mode, đen xám)
                      "#166534", // green-800
                      "#22c55e", // green-500
                      "#4ade80", // green-400
                      "#86efac", // green-300
                    ],
                  }}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="flex items-center justify-center my-4 gap-4">
              {/* <div>
                <img
                  src="https://github-readme-stats.vercel.app/api?username=tale05&show_icons=true&theme=transparent"
                  alt="GitHub Stats"
                  className="w-[800px] h-auto"
                />
              </div> */}
              <div className="flex items-center justify-center gap-8 flex-wrap mt-4">
                {logoIconSkill.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="w-auto h-12"
                  />
                ))}
              </div>
            </div>
            <div className="w-full flex justify-end p-3">
              <a
                href="https://github.com/tale05"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-gray-900 text-white font-medium rounded-xl shadow-md 
                hover:bg-gray-800 hover:shadow-lg transition duration-300 ease-in-out 
                  flex items-center gap-2"
              >
                <FaGithub className="w-5 h-5" />
                View My Github
              </a>
            </div>
          </div>
          <h3 className="flex items-center gap-3 text-2xl font-bold mb-6">
            <Rocket className="w-7 h-7 text-emerald-600" />
            <span className="bg-gradient-to-r from-emerald-500 to-green-700 bg-clip-text text-transparent">
              {t("title1Skills")}
            </span>
          </h3>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-4 justify-items-center">
            {listSkillLevel.map((skill) => (
              <SkillCard
                key={skill.alt}
                imgSrc={skill.src}
                imgAlt={skill.alt}
                skillName={skill.name}
                skillLevel={skill.level}
              />
            ))}
          </div>
          <h3 className="flex items-center gap-3 text-2xl font-bold my-6">
            <Database className="w-7 h-7 text-emerald-600" />
            <span className="bg-gradient-to-r from-emerald-500 to-green-700 bg-clip-text text-transparent">
              {t("title2Skills")}
            </span>
          </h3>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-4 justify-items-center">
            {listDb.map((db) => (
              <SkillCard
                key={db.alt}
                imgSrc={db.src}
                imgAlt={db.alt}
                skillName={db.name}
                skillLevel={db.level}
              />
            ))}
          </div>
          <h3 className="flex items-center gap-3 text-2xl font-bold my-6">
            <Wrench className="w-7 h-7 text-emerald-600" />
            <span className="bg-gradient-to-r from-emerald-500 to-green-700 bg-clip-text text-transparent">
              {t("title3Skills")}
            </span>
          </h3>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-4 justify-items-center">
            {listTools.map((tool) => (
              <SkillCard
                key={tool.alt}
                imgSrc={tool.src}
                imgAlt={tool.alt}
                skillName={tool.name}
                skillLevel={tool.level}
              />
            ))}
          </div>
          <div />
        </div>
      )}
    </>
  );
}
