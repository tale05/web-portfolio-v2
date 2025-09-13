import { Award, ExternalLink } from "lucide-react";

export default function CertificateCard({ name, desc, view }) {
  return (
    <div
      className="
        flex items-center 
        w-full h-[85px] sm:h-28
        rounded-2xl px-3 py-6
        bg-white/10 backdrop-blur-lg
        border border-white/20
        shadow-lg
        transition-transform duration-300 ease-in-out
        hover:scale-105 hover:shadow-2xl hover:bg-white/20
      "
    >
      {/* Image bên trái, responsive */}
      <div
        className="flex-shrink-0 flex items-center justify-center
                      w-6 h-6 sm:w-16 sm:h-16 
                      p-0 sm:p-2"
      >
        <Award />
      </div>

      {/* Thông tin bên phải */}
      <div className="ml-2 sm:ml-4 flex flex-col justify-center">
        <span
          className="text-sm sm:text-lg 
          font-semibold text-gray-800
          pl-2 sm:pl-0"
        >
          {name}
        </span>
        <span className="text-xs sm:text-sm text-gray-600 pl-2 sm:pl-0">
          {desc}
        </span>
        {view && (
          <a
            href={view}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 sm:ml-0 flex items-center text-sm text-blue-900 hover:underline font-medium"
          >
            My Certificate <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}
