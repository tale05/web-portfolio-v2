import { GanttChart, CheckCircle, ExternalLink } from "lucide-react";

export default function EducationCard({
  name,
  yearGraduated,
  typeGraduated,
  linkMyDegree,
  linkMyDegree_inDEU,
  more,
}) {
  return (
    <div
      className="relative flex flex-col space-y-4 w-full h-auto rounded-2xl 
                 px-6 pb-6 pt-5 bg-white/10 backdrop-blur-lg 
                 border border-white/20 shadow-lg 
                 transition-transform duration-300 ease-linear
                 hover:scale-105 hover:shadow-2xl hover:bg-white/20
                 cursor-pointer"
    >
      {/* Header: Name */}
      <div className="flex flex-row items-center space-x-3">
        <GanttChart className="h-6 w-6 text-blue-600" />
        <h1 className="text-xl font-bold text-blue-700 dark:text-blue-100">
          {name}
        </h1>
      </div>

      {/* Year Graduated */}
      <div className="flex flex-row items-center space-x-2">
        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
        <h2 className="text-base font-medium text-green-700 dark:text-green-400">
          {yearGraduated}
        </h2>
      </div>

      {/* Type of Degree */}
      <div className="text-blue-800 dark:text-blue-400 text-sm">
        <p>{typeGraduated}</p>
      </div>

      {/* Footer Links */}
      <div className="flex flex-row justify-end space-x-4 mt-2">
        {/* My Degree */}
        <a
          href={linkMyDegree && linkMyDegree.trim() !== "" ? linkMyDegree : "#"}
          target={linkMyDegree ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className={`flex items-center text-sm font-medium ${
            linkMyDegree
              ? "text-blue-900 dark:text-blue-300 hover:underline"
              : "text-gray-500 cursor-not-allowed"
          }`}
        >
          My Degree <ExternalLink className="ml-1 h-4 w-4" />
        </a>

        {/* Translated to German */}
        <a
          href={
            linkMyDegree_inDEU && linkMyDegree_inDEU.trim() !== ""
              ? linkMyDegree_inDEU
              : "#"
          }
          target={linkMyDegree_inDEU ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className={`flex items-center text-sm font-medium ${
            linkMyDegree_inDEU
              ? "text-blue-900 dark:text-blue-300 hover:underline"
              : "text-gray-500 cursor-not-allowed"
          }`}
        >
          Translated to German <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
      <div className="w-full h-auto flex items-end justify-end">
        {more && (
          <a
            href={more}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-blue-500 hover:underline font-medium"
          >
            More <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}
