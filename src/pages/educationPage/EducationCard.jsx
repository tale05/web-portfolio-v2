import { GanttChart, CheckCircle, ExternalLink } from "lucide-react";

export default function EducationCard({
  name,
  yearGraduated,
  typeGraduated,
  linkMyDegree,
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
        <h1 className="text-xl font-bold text-blue-700">{name}</h1>
      </div>

      {/* Year Graduated */}
      <div className="flex flex-row items-center space-x-2">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <h2 className="text-base font-medium text-green-700">
          {yearGraduated}
        </h2>
      </div>

      {/* Type of Degree */}
      <div className="text-blue-800 text-sm">
        <p>{typeGraduated}</p>
      </div>

      {/* Footer Links */}
      <div className="flex flex-row justify-end space-x-4 mt-2">
        {linkMyDegree && (
          <a
            href={linkMyDegree}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-blue-900 hover:underline font-medium"
          >
            My Degree <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
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
