export default function LanguageCard({ icon, imgAlt, name, desc }) {
  return (
    <div
      className="
        group relative flex h-[82px] w-full items-center overflow-hidden
        rounded-2xl border border-slate-200/70
        bg-white/75 p-4
        shadow-[0_10px_35px_rgba(15,23,42,0.08)]
        backdrop-blur-xl
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-cyan-400/40
        hover:bg-white hover:shadow-[0_18px_55px_rgba(15,23,42,0.14)]
        dark:border-white/10 dark:bg-white/[0.065]
        dark:shadow-[0_14px_45px_rgba(0,0,0,0.28)]
        dark:hover:border-cyan-300/30 dark:hover:bg-white/[0.095]
        dark:hover:shadow-[0_22px_70px_rgba(8,145,178,0.18)]
        sm:h-24
      "
    >
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_42%,rgba(14,165,233,0.08))]
          opacity-70 transition-opacity duration-300
          group-hover:opacity-100
          dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_42%,rgba(14,165,233,0.12))]
        "
      />

      <div
        className="
          pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full
          bg-cyan-400/10 blur-2xl transition-all duration-300
          group-hover:bg-cyan-400/20
          dark:bg-cyan-300/10 dark:group-hover:bg-cyan-300/16
        "
      />

      <div
        className="
          relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center
          rounded-xl border border-slate-200/80
          bg-slate-50/80 p-2.5
          shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_22px_rgba(15,23,42,0.08)]
          transition-transform duration-300
          group-hover:scale-105
          dark:border-white/10 dark:bg-white/[0.08]
          sm:h-16 sm:w-16 sm:rounded-2xl sm:p-3
        "
      >
        <img src={icon} alt={imgAlt} className="h-full w-full object-contain" />
      </div>

      <div className="relative z-10 ml-4 min-w-0 flex flex-1 flex-col justify-center">
        <span
          className="
            truncate text-sm font-semibold text-slate-900
            dark:text-white sm:text-lg
          "
        >
          {name}
        </span>

        <span
          className="
            mt-0.5 truncate text-xs font-medium text-slate-500
            dark:text-slate-400 sm:text-sm
          "
        >
          {desc}
        </span>
      </div>

      <div
        className="
          relative z-10 ml-3 hidden h-8 w-1 rounded-full
          bg-gradient-to-b from-cyan-300 to-blue-500
          opacity-70 shadow-[0_0_18px_rgba(34,211,238,0.45)]
          transition-all duration-300
          group-hover:h-10 group-hover:opacity-100
          sm:block
        "
      />
    </div>
  );
}
