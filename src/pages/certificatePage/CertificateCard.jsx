import { Medal, ExternalLink } from "lucide-react";

export default function CertificateCard({ name, desc, view, link }) {
  return (
    <div
      className="
        flex items-center 
        w-full h-auto sm:h-auto
        rounded-2xl px-3 py-4
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
        <Medal className="text-black dark:text-white w-full h-10" />
      </div>

      {/* Thông tin bên phải */}
      <div className="w-full ml-2 sm:ml-4 flex flex-col justify-center">
        <span
          className="text-sm sm:text-lg 
          font-semibold text-gray-800 dark:text-gray-100
          pl-2 sm:pl-0"
        >
          {name}
        </span>
        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 pl-2 sm:pl-0">
          {desc}
        </span>
        <a
          href={link}
          className="text-xs sm:text-sm text-blue-900 dark:text-blue-600 hover:underline pl-2 sm:pl-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </a>
        <div className="w-full h-auto flex justify-end items-end">
          {view && (
            <a
              href={view}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 sm:ml-0 flex items-center 
                        text-sm text-blue-900 dark:text-blue-600 
                        hover:underline font-medium
                        pt-2 pr-2"
            >
              My Certificate <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
