import { GanttChart, CheckCircle, ExternalLink, Timer } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ProjectCard({
  titleProject,
  name,
  status,
  link,
  viewProject,
  fullDesc,
  date,
}) {
  const { t } = useTranslation();

  return (
    <div
      className="
        group relative flex h-full w-full cursor-pointer flex-col overflow-hidden
        rounded-2xl border border-slate-200/70
        bg-white/75 p-5
        shadow-[0_10px_35px_rgba(15,23,42,0.08)]
        backdrop-blur-xl
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-cyan-400/40
        hover:bg-white hover:shadow-[0_18px_55px_rgba(15,23,42,0.14)]
        dark:border-white/10 dark:bg-white/[0.065]
        dark:shadow-[0_14px_45px_rgba(0,0,0,0.28)]
        dark:hover:border-cyan-300/30 dark:hover:bg-white/[0.095]
        dark:hover:shadow-[0_22px_70px_rgba(8,145,178,0.18)]
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
          pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full
          bg-cyan-400/10 blur-2xl transition-all duration-300
          group-hover:bg-cyan-400/20
          dark:bg-cyan-300/10 dark:group-hover:bg-cyan-300/16
        "
      />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex h-11 w-11 flex-shrink-0 items-center justify-center
              rounded-xl border border-slate-200/80
              bg-slate-50/80
              shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_22px_rgba(15,23,42,0.08)]
              dark:border-white/10 dark:bg-white/[0.08]
            "
          >
            <GanttChart className="h-5 w-5 text-cyan-600 dark:text-cyan-300" />
          </div>

          <h1
            className="
              truncate text-lg font-semibold text-slate-900
              dark:text-white sm:text-xl
            "
          >
            {titleProject}
          </h1>
        </div>
      </div>

      <div className="relative z-10 mt-5 flex flex-wrap items-center gap-2">
        <div
          className="
            inline-flex items-center gap-1.5 rounded-full
            border border-emerald-500/20 bg-emerald-500/10
            px-3 py-1 text-xs font-semibold text-emerald-700
            dark:border-emerald-400/20 dark:bg-emerald-400/10
            dark:text-emerald-300 sm:text-sm
          "
        >
          <CheckCircle className="h-4 w-4" />
          <span>{status}</span>
        </div>

        <div
          className="
            inline-flex items-center gap-1.5 rounded-full
            border border-slate-300/70 bg-slate-100/70
            px-3 py-1 text-xs font-medium text-slate-600
            dark:border-white/10 dark:bg-white/[0.07]
            dark:text-slate-300 sm:text-sm
          "
        >
          <Timer className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
          <span>{date}</span>
        </div>
      </div>

      <div className="relative z-10 mt-4 min-w-0">
        {link !== "" ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex max-w-full items-center gap-1.5
              truncate text-sm font-medium text-cyan-700
              transition-colors hover:text-cyan-600
              dark:text-cyan-300 dark:hover:text-cyan-200
            "
          >
            <span className="truncate">{link}</span>
            <ExternalLink className="h-4 w-4 flex-shrink-0" />
          </a>
        ) : (
          <p className="truncate text-sm font-medium text-cyan-700 dark:text-cyan-300">
            {name}
          </p>
        )}
      </div>

      <p
        className="
          relative z-10 mt-4 line-clamp-3 text-sm leading-relaxed
          text-slate-600 dark:text-slate-400
        "
      >
        {fullDesc}
      </p>

      {viewProject && (
        <div className="relative z-10 mt-5 flex justify-end">
          <a
            href={viewProject}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 rounded-full
              border border-cyan-500/20 bg-cyan-500/10
              px-4 py-2 text-sm font-semibold text-cyan-700
              transition-all duration-300
              hover:border-cyan-500/35 hover:bg-cyan-500/15
              dark:border-cyan-300/20 dark:bg-cyan-300/10
              dark:text-cyan-200 dark:hover:bg-cyan-300/15
            "
          >
            {t("viewProjectButton")}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      )}
    </div>
  );
}
