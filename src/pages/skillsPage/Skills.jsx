import GitHubCalendar from "react-github-calendar";

import GithubOctocatAnimation from "../../components/lotties/GithubOctocatAnimation";
import Cat from "../../components/lotties/CatAnimation";

import SkillsMobile from "./SkillsMobile";
import SkillCard from "./SkillCard";

import { useIsMobile } from "../../hooks/useIsMobile";
import { logoIconSkill, listSkillLevel } from "../../data/logoicon";

export default function Skills() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <div>
          <SkillsMobile />
        </div>
      ) : (
        <div className="max-w-[1300px] h-auto mx-auto px-4 pb-10 mt-24 relative">
          <h1 className="relative z-12 text-3xl text-white font-bold text-center p-4 bg-emerald-600 rounded-2xl shadow-lg">
            Technical Skills
          </h1>
          {/* Cat nằm sau title */}
          <div className="absolute -top-32 right-10 z-10">
            <Cat />
          </div>

          <div className="my-8 block p-4 backdrop-blur-xl bg-white/30 rounded-2xl">
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
              <div>
                <img
                  src="https://github-readme-stats.vercel.app/api?username=tale05&show_icons=true&theme=transparent"
                  alt="GitHub Stats"
                  className="w-[800px] h-auto"
                />
              </div>
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
          </div>
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
        </div>
      )}
    </>
  );
}
