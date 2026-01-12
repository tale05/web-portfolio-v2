import { useEffect, useRef } from "react";
import GitHubCalendar from "react-github-calendar";
import { Code, Rocket, Database, Wrench } from "lucide-react";
import GithubOctocatAnimation from "../../components/lotties/GithubOctocatAnimation";
import Cat from "../../components/lotties/CatAnimation";
import SkillCard from "./SkillCard";
import {
  logoIconSkill,
  listSkillLevel,
  listDb,
  listTools,
} from "../../data/logoicon";
import { useTranslation } from "react-i18next";

export default function SkillsMobile() {
  const { t } = useTranslation();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      requestAnimationFrame(() => {
        scrollRef.current.scrollTo({
          left: scrollRef.current.scrollWidth,
          behavior: "smooth",
        });
      });
    }
  }, []);

  //=========================================================================================================================================

  return (
    <div className="p-4">
      <div
        className="w-[300px] mx-auto my-6
            border-b-[10px] border-[#56a15a]
            shadow-[0_8px_20px_rgba(86,161,90,0.5)]"
      ></div>
      <div className="relative flex justify-center">
        <h1
          className="relative z-12 flex items-center justify-center gap-3 p-2 w-full
          text-xl text-white font-bold text-center 
          bg-color-for-tilte rounded-xl shadow-lg"
        >
          <Code className="w-8 h-8 text-white" />
          {t("titleSkills")}
        </h1>
        {/* <div className="absolute -top-16 right-0 z-10">
          <Cat />
        </div> */}
      </div>
      <div
        className="my-4 p-4 rounded-2xl flex flex-col items-center gap-4
                      bg-white/10 backdrop-blur-lg
                      border border-white/20
                      shadow-lg"
      >
        <div className="grid grid-cols-12 items-center w-full">
          <div className="col-span-3 flex justify-center">
            <GithubOctocatAnimation />
          </div>
          <div className="col-span-9">
            <div
              className="w-full overflow-x-auto rounded-lg whitespace-nowrap"
              ref={scrollRef}
            >
              <div className="inline-block min-w-max">
                <GitHubCalendar
                  username="tale05"
                  blockSize={12}
                  blockMargin={3}
                  fontSize={12}
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
                  style={{
                    backgroundColor: "transparent",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <img
          src="https://github-readme-stats.vercel.app/api?username=tale05&show_icons=true&theme=transparent"
          alt="GitHub Stats"
          className="w-full h-auto max-w-md"
        /> */}
        <div className="flex flex-wrap justify-center gap-4 my-5 mx-0">
          {logoIconSkill.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="w-9 h-9 object-contain"
            />
          ))}
        </div>
      </div>
      <h3 className="flex items-center gap-3 text-2xl font-bold my-6">
        <Rocket className="w-7 h-7 text-emerald-600" />
        <span className="bg-gradient-to-r from-emerald-500 to-green-700 bg-clip-text text-transparent">
          {t("title1Skills")}
        </span>
      </h3>
      <div className="grid grid-cols-2 gap-4">
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
      <div className="grid grid-cols-2 gap-4">
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
      <div className="grid grid-cols-2 gap-4">
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
    </div>
  );
}
