import myAva from "../../assets/myAva.jpg";
import cvEng from "../../assets/CV_PhamLeTuanAnh_ENG.pdf";
import cvDeu from "../../assets/CV_PhamLeTuanAnh_DEU.pdf";

import InstagramButton from "../../components/social-button/InstagramButton";
import GithubButton from "../../components/social-button/GithubButton";
import FacebookButton from "../../components/social-button/FacebookButton";
import WhatsappButton from "../../components/social-button/WhatsappButton";
import GmailButton from "../../components/social-button/GmailButton";
import MyAnimation from "../../components/lotties/MyAnimation";
import RobotHiAnimation from "../../components/lotties/RobotHiAnimation";

import HomeMobile from "./HomeMobile";

import { useTypewriter } from "../../hooks/useTypewriter";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function Home() {
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
        <div className="max-w-[1300px] min-h-screen mx-auto p-4 pt-12">
          <div className="grid grid-cols-[2fr_1fr] gap-4 h-full pt-2 pb-5 items-center">
            <div className="block">
              <div className="flex items-start justify-items-start">
                <RobotHiAnimation />
              </div>

              {/* Hiệu ứng typewriter */}
              <p className="text-[#EEF6F6] font-extrabold font-playwrite italic text-[110px] pb-10 m-0 text-shadow-lg typewriter">
                {title}
              </p>
              <div className="mt-7 grid grid-cols-3 gap-6 items-center">
                {/* Cột trái: 2 đoạn text */}
                <div className="col-span-2">
                  <div className="w-full backdrop-blur-xl bg-white/30 border border-white/20 p-4 rounded-2xl shadow-lg">
                    <p className="text-green-700 text-justify text-[18px] font-bold">
                      {description1}
                    </p>
                  </div>
                  <div className=" w-full backdrop-blur-xl bg-white/30 border border-white/20 p-4 rounded-2xl shadow-lg mt-5">
                    <p className="text-green-700 text-justify text-[18px] font-bold">
                      {description2}
                    </p>
                  </div>
                </div>
                {/* Cột phải: MyAnimation */}
                <div className="flex justify-center">
                  <div className="w-full">
                    <MyAnimation />
                  </div>
                </div>
              </div>

              {/* Nút xem CV */}
              <div className="flex items-center justify-start gap-4 mt-10">
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
              <div className="flex items-center justify-start gap-4 mt-10">
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
