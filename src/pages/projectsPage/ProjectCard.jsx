import React from "react";
import { GanttChart, CheckCircle } from "lucide-react";

export default function ProjectCard() {
  return (
    <div
      className="
        flex flex-col space-y-4
        w-full h-auto sm:h-auto
        rounded-2xl p-4
        bg-white/10 backdrop-blur-lg
        border border-white/20
        shadow-lg
        transition-transform duration-300 ease-linear
        hover:scale-105 hover:shadow-2xl hover:bg-white/20"
    >
      <div className="flex flex-row">
        <GanttChart />
        <h1 className="text-xl px-3">Tiêu đề 1</h1>
      </div>
      <div className="flex flex-row">
        <CheckCircle className="h-5 w-5" />
        <h2 className="text-base px-3">Tiêu đề 1</h2>
      </div>
      <div className="flex flex-col">
        This is the official website of H.A.T Travel Company, designed to
        promote tourism and provide customers with detailed information about
        our tours. The platform showcases a wide range of tours across Vietnam
        and features articles related to travel and destinations.
      </div>
    </div>
  );
}
