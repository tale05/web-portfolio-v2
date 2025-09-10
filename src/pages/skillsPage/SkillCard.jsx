export default function SkillCard({ imgSrc, imgAlt, skillName, skillLevel }) {
  return (
    <div
      className="flex items-center w-full h-28 backdrop-blur-xl bg-white/30 rounded-2xl p-4 shadow-md
                 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-white/50"
    >
      {/* Image bên trái, responsive */}
      <div
        className="flex-shrink-0 flex items-center justify-center
                      w-6 h-6 sm:w-24 sm:h-24"
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Thông tin skill bên phải */}
      <div className="ml-2 sm:ml-4 flex flex-col justify-center">
        <span className="text-sm sm:text-lg font-semibold text-gray-800">
          {skillName}
        </span>
        <span className="text-xs sm:text-sm text-gray-600">{skillLevel}</span>
      </div>
    </div>
  );
}
