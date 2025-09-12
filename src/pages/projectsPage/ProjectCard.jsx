import { GanttChart, CheckCircle, ExternalLink } from "lucide-react";

export default function ProjectCard({
  titleProject,
  name,
  status,
  link,
  viewProject,
  fullDesc,
}) {
  return (
    <div
      className="relative flex flex-col space-y-4 
      w-full h-auto 
      rounded-2xl 
      px-6 pb-16 pt-5
    bg-white/10 backdrop-blur-lg border border-white/20 
      shadow-lg transition-transform duration-300 ease-linear
      hover:scale-105 hover:shadow-2xl hover:bg-white/20
      cursor-pointer"
    >
      {/* Header: Title */}
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-3">
          <GanttChart className="h-6 w-6 text-black" />
          <h1 className="text-xl font-semibold text-black">{titleProject}</h1>
        </div>
      </div>

      {/* Status */}
      <div className="flex flex-row items-center space-x-2">
        <CheckCircle className="h-5 w-5 text-green-800" />
        <h2 className="text-base text-green-800">{status}</h2>
      </div>

      {/* Link or Name */}
      {link !== "" ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-blue-600 hover:underline"
        >
          {link}
        </a>
      ) : (
        <p className="flex items-center text-sm text-blue-600">{name}</p>
      )}

      {/* Full Description */}
      <div className="text-black text-sm">
        <p>{fullDesc}</p>
      </div>

      {/* Button View Project ở góc dưới bên phải */}
      {viewProject && (
        <a
          href={viewProject}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4
               flex items-center 
               text-sm text-blue-900 hover:underline"
        >
          View Project <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      )}
    </div>
  );
}
