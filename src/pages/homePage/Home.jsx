import myAva from "../../assets/myAva.jpg";
import cvEng from "../../assets/CV_PhamLeTuanAnh_ENG.pdf";
import cvDeu from "../../assets/CV_PhamLeTuanAnh_DEU.pdf";

import InstagramButton from "../../components/social-button/InstagramButton";
import GithubButton from "../../components/social-button/GithubButton";
import FacebookButton from "../../components/social-button/FacebookButton";
import WhatsappButton from "../../components/social-button/WhatsappButton";
import GmailButton from "../../components/social-button/GmailButton";
import MyAnimation from "../../components/lotties/MyAnimation";

import HomeMobile from "./HomeMobile";

import { useTypewriter } from "../../hooks/useTypewriter";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function Home() {
  const playlistId = "4KnqE3eR03vCvhZ2ByfxzQ";
  const isMobile = useIsMobile();
  const title = useTypewriter("My Portfolio", 200);
  const description1 = useTypewriter(
    "I'm Tuan Anh, and this is where my work lives. 💡 A highly passionate individual with a strong desire to explore new knowledge in software and web development 💻🌐, and to apply it in real-world projects 🚀.",
    15
  );
  const description2 = useTypewriter(
    "🎯 Always eager to create modern and user-friendly interfaces for websites and applications 📱.",
    15
  );
  return (
    <>
      {isMobile ? (
        <div>
          <HomeMobile />
        </div>
      ) : (
        <div className="max-w-[1300px] h-auto mx-auto px-4 pt-16 pb-28">
          <div className="grid grid-cols-[2fr_1fr] gap-4 h-full pt-2 pb-5 items-center">
            <div className="block">
              {/* <div className="flex items-start justify-items-start">
                <RobotHiAnimation />
              </div> */}

              {/* Hiệu ứng typewriter */}
              <p
                className="text-transparent bg-clip-text bg-color-for-tilte
                font-extrabold font-playwrite italic text-[110px] 
                pb-10 m-0 text-shadow-lg"
              >
                {title}
              </p>
              <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-9 w-full backdrop-blur-xl bg-white/30 border border-white/20 p-4 rounded-2xl shadow-lg">
                  <p className="text-green-700 text-left text-[18px] font-bold">
                    {description1}
                  </p>
                </div>
                <div className="col-span-3 flex justify-center">
                  <div className="w-full p-4">
                    <MyAnimation />
                  </div>
                </div>
              </div>
              <iframe
                title="Spotify Embed: Recommendation Playlist"
                src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
                width="100%"
                height="170"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: "12px" }}
                className="text-color-for-tilte py-2"
              ></iframe>
              {/* Nút xem CV */}
              <div className="flex items-center justify-start gap-4 py-4">
                {/* Nút 1 */}
                <div className="relative inline-flex items-center justify-center gap-4 group">
                  <div
                    className="absolute inset-0 duration-1000 opacity-60 transition-all 
                  bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 
                  rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
                  ></div>
                  <a
                    role="button"
                    className="group relative inline-flex items-center justify-center text-base rounded-xl 
                  bg-white px-8 py-3 font-semibold text-emerald-600 
                  transition-all duration-200 
                  hover:bg-emerald-600 hover:text-white hover:shadow-lg 
                  hover:-translate-y-0.5 hover:shadow-emerald-500/40"
                    href={cvEng}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    English Resume
                  </a>
                </div>

                {/* Nút 2 */}
                <div className="relative inline-flex items-center justify-center gap-4 group">
                  <div
                    className="absolute inset-0 duration-1000 opacity-60 transition-all 
                  bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 
                  rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
                  ></div>
                  <a
                    role="button"
                    className="group relative inline-flex items-center justify-center text-base rounded-xl 
                  px-8 py-3 bg-emerald-700 font-semibold text-white 
                  transition-all duration-200 
                  hover:bg-white hover:text-black hover:shadow-lg 
                  hover:-translate-y-0.5 hover:shadow-emerald-500/40"
                    href={cvDeu}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    German Lebenslauf
                  </a>
                </div>
              </div>

              {/* Nút social */}
              <div className="flex items-center justify-start gap-4 py-5">
                <GithubButton />
                <WhatsappButton />
                <GmailButton />
                <FacebookButton />
                <InstagramButton />
              </div>
            </div>

            {/* Avatar */}
            <div className="flex items-center justify-center p-4">
              <img
                src={myAva}
                alt="Avatar"
                className="w-full h-full rounded-full border-4 border-green-400 hover:shadow-[0px_20px_207px_10px_rgba(16,_239,_68,_0.2)]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
