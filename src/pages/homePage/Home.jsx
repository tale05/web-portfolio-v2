import myAva from "../../assets/CV_Avatar.png";
import cvEng from "../../assets/CV_LeTuanAnhPham_ENG.pdf";
import cvDeu from "../../assets/CV_LeTuanAnhPham_IT.pdf";
import cvDeuPflege from "../../assets/CV_LeTuanAnhPham_Pflege.pdf";
import InstagramButton from "../../components/social-button/InstagramButton";
import GithubButton from "../../components/social-button/GithubButton";
import FacebookButton from "../../components/social-button/FacebookButton";
import WhatsappButton from "../../components/social-button/WhatsappButton";
import GmailButton from "../../components/social-button/GmailButton";
import CatSpinAnimation from "../../components/lotties/CatSpinAnimation";
import FireWork from "../../components/lotties/FireworkAnimation";
import HomeMobile from "./HomeMobile";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useTranslation } from "react-i18next";
import { Download, ExternalLink } from "lucide-react";

export default function Home() {
  const { t } = useTranslation();

  const playlistId = "4KnqE3eR03vCvhZ2ByfxzQ";
  const isMobile = useIsMobile();
  const title = useTypewriter(t("titleHome"), 200);
  const description1 = useTypewriter(t("des1"), 15);
  const description2 = useTypewriter(t("des2"), 15);
  const description3 = useTypewriter(t("des3"), 15);
  const description4 = useTypewriter(t("des4"), 15);

  return (
    <>
      {isMobile ? (
        <div>
          <HomeMobile />
        </div>
      ) : (
        <div className="max-w-[1300px] h-[700px] mx-auto px-4">
          <div className="grid grid-cols-[2fr_1fr] gap-4 h-full pt-2 pb-5 items-center">
            <div className="block">
              {/* Hiệu ứng typewriter */}
              <p
                className="text-black dark:text-white text-left
                font-black font-playwrite text-[90px] 
                pb-10 m-0 text-shadow-lg h-full"
              >
                {title}
              </p>

              <div className="relative grid grid-cols-2 grid-rows-2 gap-4">
                {/* Animation overlay */}
                <div
                  className="absolute top-1/2 left-1/2
                  transform -translate-x-1/2 -translate-y-1/2
                  z-2 
                  pointer-events-none"
                ></div>

                {[description1, description2, description3, description4].map(
                  (desc, index) => (
                    <div
                      key={index}
                      className="
                        group relative z-10 w-full overflow-hidden rounded-2xl
                        border border-slate-200/70 bg-white/75 px-5 py-5
                        shadow-[0_10px_35px_rgba(15,23,42,0.08)]
                        backdrop-blur-xl transition-all duration-300 ease-out
                        hover:-translate-y-1 hover:border-cyan-400/40
                        hover:bg-white hover:shadow-[0_18px_55px_rgba(15,23,42,0.14)]
                        dark:border-white/10 dark:bg-white/[0.065]
                        dark:shadow-[0_14px_45px_rgba(0,0,0,0.28)]
                        dark:hover:border-cyan-300/30 dark:hover:bg-white/[0.095]
                        dark:hover:shadow-[0_22px_70px_rgba(8,145,178,0.18)]
                        sm:px-6 sm:py-6
                      "
                    >
                      <div
                        className="
                          pointer-events-none absolute inset-0
                          bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_42%,rgba(14,165,233,0.08))]
                          opacity-70 transition-opacity duration-300 group-hover:opacity-100
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

                      <div className="relative z-10 flex gap-4">
                        <span
                          className="
                            flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full
                            border border-cyan-500/20 bg-cyan-500/10
                            text-xs font-bold text-cyan-700
                            dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-left text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>

              {/* Nút xem CV */}
              <div className="flex flex-wrap items-center justify-start gap-3 py-4">
                <a
                  role="button"
                  href={cvEng}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group relative inline-flex min-h-12 w-full items-center justify-center gap-2
                    overflow-hidden rounded-full border border-cyan-500/20
                    bg-cyan-500/10 px-5 py-3
                    text-sm font-semibold text-cyan-700
                    shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                    backdrop-blur-xl transition-all duration-300 ease-out
                    hover:-translate-y-0.5 hover:border-cyan-500/35 hover:bg-cyan-500/15
                    hover:shadow-[0_16px_40px_rgba(8,145,178,0.16)]
                    dark:border-cyan-300/20 dark:bg-cyan-300/10
                    dark:text-cyan-200 dark:hover:bg-cyan-300/15
                    sm:w-64
                  "
                >
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  Resume (ENG)
                  <ExternalLink className="h-4 w-4 opacity-70" />
                </a>

                <a
                  role="button"
                  href={cvDeu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group relative inline-flex min-h-12 w-full items-center justify-center gap-2
                    overflow-hidden rounded-full border border-cyan-500/20
                    bg-cyan-500/10 px-5 py-3
                    text-sm font-semibold text-cyan-700
                    shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                    backdrop-blur-xl transition-all duration-300 ease-out
                    hover:-translate-y-0.5 hover:border-cyan-500/35 hover:bg-cyan-500/15
                    hover:shadow-[0_16px_40px_rgba(8,145,178,0.16)]
                    dark:border-cyan-300/20 dark:bg-cyan-300/10
                    dark:text-cyan-200 dark:hover:bg-cyan-300/15
                    sm:w-64
                  "
                >
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  Lebenslauf IT (DEU)
                  <ExternalLink className="h-4 w-4 opacity-70" />
                </a>

                <a
                  role="button"
                  href={cvDeuPflege}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group relative inline-flex min-h-12 w-full items-center justify-center gap-2
                    overflow-hidden rounded-full border border-cyan-500/20
                    bg-cyan-500/10 px-5 py-3
                    text-sm font-semibold text-cyan-700
                    shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                    backdrop-blur-xl transition-all duration-300 ease-out
                    hover:-translate-y-0.5 hover:border-cyan-500/35 hover:bg-cyan-500/15
                    hover:shadow-[0_16px_40px_rgba(8,145,178,0.16)]
                    dark:border-cyan-300/20 dark:bg-cyan-300/10
                    dark:text-cyan-200 dark:hover:bg-cyan-300/15
                    sm:w-64
                  "
                >
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  Lebenslauf Pflege (DEU)
                  <ExternalLink className="h-4 w-4 opacity-70" />
                </a>
              </div>
              {/* <iframe
                title="Spotify Embed: Recommendation Playlist"
                src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
                width="450"
                height="170"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: "12px" }}
                className="text-color-for-tilte py-2"
              ></iframe> */}
            </div>

            {/* Avatar với FireWork */}
            <div
              className="relative flex flex-col 
              px-4 py-32
              self-start justify-start items-center 
              w-full h-full"
            >
              {/* FireWork ở trên ảnh */}
              <div className="z-1 absolute top-0 left-1/2 -translate-x-1/2">
                {/* <FireWork /> */}
              </div>

              {/* Ảnh avatar */}
              <img
                src={myAva}
                alt="Avatar"
                className="z-2
                w-full h-[475px] object-cover 
                rounded-2xl"
              />

              {/* Nút social (dưới ảnh) */}
              <div className="flex items-center justify-center gap-4 py-3">
                <GithubButton />
                <WhatsappButton />
                <GmailButton />
                <FacebookButton />
                <InstagramButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
