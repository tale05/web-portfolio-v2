export default function SkillCard({ imgSrc, imgAlt, skillName, skillLevel }) {
  return (
    <div
      className="
        flex items-center 
        w-full h-[75px] sm:h-24
        rounded-2xl p-4
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
        <img
          src={imgSrc}
          alt={imgAlt}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Thông tin skill bên phải */}
      <div className="ml-2 sm:ml-4 flex flex-col justify-center">
        <span
          className="text-sm sm:text-lg 
          font-semibold text-gray-800
          pl-2 sm:pl-0"
        >
          {skillName}
        </span>
        <span className="text-xs sm:text-sm text-gray-600 pl-2 sm:pl-0">
          {skillLevel}
        </span>
      </div>
    </div>
  );
}
