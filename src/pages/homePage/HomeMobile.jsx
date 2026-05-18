import myAva from "../../assets/CV_Avatar_mobile.jpg";
import cvEng from "../../assets/CV_LeTuanAnhPham_ENG.pdf";
import cvDeu from "../../assets/CV_LeTuanAnhPham_IT.pdf";
import cvDeuPflege from "../../assets/CV_LeTuanAnhPham_Pflege.pdf";
import InstagramButton from "../../components/social-button/InstagramButton";
import GithubButton from "../../components/social-button/GithubButton";
import FacebookButton from "../../components/social-button/FacebookButton";
import WhatsappButton from "../../components/social-button/WhatsappButton";
import GmailButton from "../../components/social-button/GmailButton";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useTranslation } from "react-i18next";
import { Download, ExternalLink } from "lucide-react";

export default function HomeMobile() {
  const { t } = useTranslation();

  const title = useTypewriter(t("titleHome"), 200);
  const description1 = useTypewriter(t("des1"), 15);
  const description2 = useTypewriter(t("des2"), 15);
  const description3 = useTypewriter(t("des3"), 15);
  const description4 = useTypewriter(t("des4"), 15);

  const descriptions = [description1, description2, description3, description4];

  const cvButtons = [
    {
      label: "Resume (ENG)",
      href: cvEng,
      primary: true,
    },
    {
      label: "Lebenslauf IT (DEU)",
      href: cvDeu,
    },
    {
      label: "Lebenslauf Pflege (DEU)",
      href: cvDeuPflege,
    },
  ];

  return (
    <div className="mx-auto flex min-h-screen w-full flex-col items-center px-4 pt-24">
      <div className="w-full max-w-md space-y-5">
        <div
          className="
            group relative overflow-hidden rounded-[28px]
            border border-slate-200/70 bg-white/75 p-3
            shadow-[0_10px_35px_rgba(15,23,42,0.08)]
            backdrop-blur-xl transition-all duration-300 ease-out
            dark:border-white/10 dark:bg-white/[0.065]
            dark:shadow-[0_14px_45px_rgba(0,0,0,0.28)]
          "
        >
          <div
            className="
              pointer-events-none absolute inset-0
              bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_45%,rgba(14,165,233,0.08))]
              dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_45%,rgba(14,165,233,0.10))]
            "
          />

          <img
            src={myAva}
            alt="Avatar"
            className="
              relative z-10 h-[285px] w-full rounded-[22px]
              object-cover object-center
              shadow-[0_16px_45px_rgba(15,23,42,0.16)]
            "
          />

          <div className="relative z-10 px-2 pb-2 pt-4">
            <h1
              className="
                font-playwrite
                text-2xl font-bold leading-tight text-slate-950
                dark:text-white
              "
            >
              {title}
            </h1>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-3">
          {descriptions.map((desc, index) => (
            <div
              key={index}
              className="
                group relative z-10 w-full overflow-hidden rounded-2xl
                border border-slate-200/70 bg-white/75 px-4 py-4
                shadow-[0_10px_35px_rgba(15,23,42,0.08)]
                backdrop-blur-xl transition-all duration-300 ease-out
                active:scale-[0.99]
                dark:border-white/10 dark:bg-white/[0.065]
                dark:shadow-[0_14px_45px_rgba(0,0,0,0.28)]
              "
            >
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-[linear-gradient(135deg,rgba(255,255,255,0.5),transparent_44%,rgba(14,165,233,0.08))]
                  dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_44%,rgba(14,165,233,0.1))]
                "
              />

              <div className="relative z-10 flex gap-3">
                <span
                  className="
                    flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full
                    border border-cyan-500/20 bg-cyan-500/10
                    text-[11px] font-bold text-cyan-700
                    dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-left text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid w-full grid-cols-1 gap-3">
          {cvButtons.map((button) => (
            <a
              key={button.label}
              role="button"
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group inline-flex min-h-12 w-full items-center justify-center gap-2
                rounded-full px-5 py-3 text-sm font-semibold
                shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                backdrop-blur-xl transition-all duration-300 ease-out
                active:scale-[0.98]
                ${
                  button.primary
                    ? "border border-cyan-500/20 bg-cyan-500/10 text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200"
                    : "border border-slate-200/70 bg-white/75 text-slate-800 dark:border-white/10 dark:bg-white/[0.07] dark:text-white"
                }
              `}
            >
              <Download className="h-4 w-4" />
              <span className="truncate">{button.label}</span>
              <ExternalLink className="h-4 w-4 opacity-70" />
            </a>
          ))}
        </div>

        <div
          className="
            mb-7 rounded-2xl border border-slate-200/70
            bg-white/75 p-4
            shadow-[0_10px_35px_rgba(15,23,42,0.08)]
            backdrop-blur-xl
            dark:border-white/10 dark:bg-white/[0.065]
            dark:shadow-[0_14px_45px_rgba(0,0,0,0.28)]
          "
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <GithubButton />
            <WhatsappButton />
            <GmailButton />
            <FacebookButton />
            <InstagramButton />
          </div>
        </div>
      </div>
    </div>
  );
}
