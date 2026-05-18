import { BadgeCheck, ExternalLink } from "lucide-react";

export default function CertificateCard({ name, desc, view, link }) {
  const hasLink = link && link.trim() !== "";
  const hasView = view && view.trim() !== "";

  return (
    <div
      className="
        group relative flex w-full items-start overflow-hidden
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
        sm:p-5
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
          rounded-xl border border-emerald-500/20
          bg-emerald-500/10
          shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_8px_22px_rgba(15,23,42,0.08)]
          transition-transform duration-300
          group-hover:scale-105
          dark:border-emerald-400/20 dark:bg-emerald-400/10
          sm:h-14 sm:w-14 sm:rounded-2xl
        "
      >
        <BadgeCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-300 sm:h-7 sm:w-7" />
      </div>

      <div className="relative z-10 ml-4 min-w-0 flex flex-1 flex-col">
        <span
          className="
            text-sm font-semibold leading-snug text-slate-900
            dark:text-white sm:text-lg
          "
        >
          {name}
        </span>

        <span
          className="
            mt-1 text-xs leading-relaxed text-slate-500
            dark:text-slate-400 sm:text-sm
          "
        >
          {desc}
        </span>

        {hasLink && (
          <a
            href={link}
            className="
              mt-2 inline-flex max-w-full items-center gap-1.5
              text-xs font-medium text-cyan-700 transition-colors
              hover:text-cyan-600
              dark:text-cyan-300 dark:hover:text-cyan-200 sm:text-sm
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="truncate">{link}</span>
            <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
          </a>
        )}

        {hasView && (
          <div className="mt-4 flex justify-end">
            <a
              href={view}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 rounded-full
                border border-cyan-500/20 bg-cyan-500/10
                px-4 py-2 text-xs font-semibold text-cyan-700
                transition-all duration-300
                hover:border-cyan-500/35 hover:bg-cyan-500/15
                dark:border-cyan-300/20 dark:bg-cyan-300/10
                dark:text-cyan-200 dark:hover:bg-cyan-300/15
                sm:text-sm
              "
            >
              My Certificate
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
