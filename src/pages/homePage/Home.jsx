import myAva from "../../assets/CV_Avatar.png";
import cvEng from "../../assets/CV_PhamLeTuanAnh_ENG.pdf";
import cvDeu from "../../assets/CV_PhamLeTuanAnh_DEU.pdf";
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
        <div className="max-w-[1300px] h-auto mx-auto px-4 py-20">
          <div className="grid grid-cols-[2fr_1fr] gap-4 h-full pt-2 pb-5 items-center">
            <div className="block">
              {/* <div className="flex items-start justify-items-start">
                <RobotHiAnimation />
              </div> */}

              {/* Hiệu ứng typewriter */}
              <p
                className="text-transparent bg-clip-text bg-text-tilte
                font-extrabold font-sans text-[150px] 
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
                >
                  {/* <CatSpinAnimation /> */}
                </div>

                {/* Description 1 */}
                <div
                  className="z-1 p-4 w-full 
                  backdrop-blur-xl bg-white/30 border border-white/20 
                  rounded-2xl shadow-lg
                  hover:bg-white
                  transition duration-75"
                >
                  <p
                    className="text-green-700 text-left text-[16px] font-bold hover:text-black 
                    dark:hover:text-black dark:text-white"
                  >
                    {description1}
                  </p>
                </div>

                {/* Description 2 */}
                <div
                  className="z-1 p-4 w-full 
                  backdrop-blur-xl bg-white/30 border border-white/20 
                  rounded-2xl shadow-lg
                  hover:bg-white
                  transition duration-75"
                >
                  <p
                    className="text-green-700 text-left text-[16px] font-bold hover:text-black
                  dark:hover:text-black dark:text-white"
                  >
                    {description2}
                  </p>
                </div>

                {/* Description 3 */}
                <div
                  className="z-1 p-4 w-full 
                  backdrop-blur-xl bg-white/30 border border-white/20 
                  rounded-2xl shadow-lg
                  hover:bg-white
                  transition duration-75"
                >
                  <p
                    className="text-green-700 text-left text-[16px] font-bold hover:text-black
                  dark:hover:text-black dark:text-white"
                  >
                    {description3}
                  </p>
                </div>

                {/* Description 4 */}
                <div
                  className="z-1 p-4 w-full 
                  backdrop-blur-xl bg-white/30 border border-white/20 
                  rounded-2xl shadow-lg
                  hover:bg-white
                  transition duration-75"
                >
                  <p
                    className="text-green-700 text-left text-[16px] font-bold hover:text-black
                  dark:hover:text-black dark:text-white"
                  >
                    {description4}
                  </p>
                </div>
              </div>

              {/* Nút xem CV */}
              <div className="flex items-center justify-start gap-4 py-4">
                {/* Nút 1 */}
                <div className="relative inline-flex items-center justify-center gap-4 group">
                  <div
                    className="absolute inset-0 duration-1000 opacity-60 transition-all 
                    rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
                  ></div>
                  <a
                    role="button"
                    className="group relative inline-flex items-center justify-center 
                    text-base font-semibold text-emerald-600 
                    rounded-xl bg-white 
                    px-8 py-3
                    w-64
                    transition-all duration-200 
                  hover:bg-emerald-600 hover:text-white hover:shadow-lg 
                    hover:-translate-y-0.5 hover:shadow-emerald-500/40"
                    href={cvEng}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume (ENG)
                  </a>
                </div>

                {/* Nút 2 */}
                <div className="relative inline-flex items-center justify-center gap-4 group">
                  <div
                    className="absolute inset-0 duration-1000 opacity-60 transition-all 
                    rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
                  ></div>
                  <a
                    role="button"
                    className="group relative inline-flex items-center justify-center 
                    text-base rounded-xl bg-emerald-700 font-semibold text-white
                    px-8 py-3
                    w-64
                    transition-all duration-200 
                  hover:bg-white hover:text-black hover:shadow-lg 
                    hover:-translate-y-0.5 hover:shadow-emerald-500/40"
                    href={cvDeu}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lebenslauf (DEU)
                  </a>
                </div>
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
