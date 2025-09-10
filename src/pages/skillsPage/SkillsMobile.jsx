import React from "react";
import GitHubCalendar from "react-github-calendar";

import GithubOctocatAnimation from "../../components/lotties/GithubOctocatAnimation";
import Cat from "../../components/lotties/CatAnimation";
import SkillCard from "./SkillCard";

import { logoIconSkill, listSkillLevel } from "../../data/logoicon";

export default function SkillsMobile() {
  return (
    <div className="px-4 pt-24 pb-10">
      <div className="relative flex justify-center">
        <h1 className="w-full relative z-11 text-xl text-white font-bold text-center p-3 bg-emerald-600 rounded-lg shadow-lg">
          Technical Skills
        </h1>

        {/* Cat nằm phía trên, bên phải, đằng sau h1 */}
        <div className="absolute -top-16 right-0 z-10">
          <Cat />
        </div>
      </div>

      {/* GitHub section */}
      <div className="my-6 p-4 backdrop-blur-xl bg-white/30 rounded-2xl flex flex-col items-center gap-4">
        <GithubOctocatAnimation />

        <div className="w-full overflow-x-auto">
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
              width: "100%",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              borderRadius: "8px",
              padding: "12px",
              backgroundColor: "#ffffff", // nền chung trắng
            }}
          />
        </div>

        <img
          src="https://github-readme-stats.vercel.app/api?username=tale05&show_icons=true&theme=transparent"
          alt="GitHub Stats"
          className="w-full h-auto max-w-md"
        />
      </div>

      {/* Logos */}
      {/* <div className="flex flex-wrap justify-center gap-4 my-4">
        {logoIconSkill.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="w-9 h-9 object-contain"
          />
        ))}
      </div> */}

      {/* Skill cards */}
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
    </div>
  );
}
