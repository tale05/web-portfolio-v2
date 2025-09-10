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

import { useTypewriter } from "../../hooks/useTypewriter";

export default function HomeMobile() {
  const title = useTypewriter("My Portfolio", 100);
  const description1 = useTypewriter(
    "I'm Tuan Anh, and this is where my work lives. 💡 A highly passionate individual with a strong desire to explore new knowledge in software and web development 💻🌐, and to apply it in real-world projects 🚀.",
    15
  );
  const description2 = useTypewriter(
    "🎯 Always eager to create modern and user-friendly interfaces for websites and applications 📱.",
    15
  );

  return (
    <div className="w-full h-auto mx-auto pl-5 pr-5 pt-6 pb-10 flex flex-col items-center">
      <div className="grid grid-cols-12 items-center gap-2 w-full h-auto px-4 pt-4">
        <div className="col-span-3 flex justify-center">
          <RobotHiAnimation />
        </div>
        <div className="col-span-9">
          <p className="text-[#EEF6F6] font-extrabold font-playwrite italic text-3xl text-shadow-lg text-left">
            {title}
          </p>
        </div>
      </div>

      {/* Avatar */}
      <div className="flex p-4 items-center justify-center">
        <img
          src={myAva}
          alt="Avatar"
          className="w-72 h-72 p-4 rounded-full border-4 border-green-900 hover:shadow-[0px_10px_100px_5px_rgba(16,_239,_68,_0.2)]"
        />
      </div>

      {/* Description 1 */}
      <div className="w-full h-min backdrop-blur-xl bg-white/30 border border-white/20 p-4 rounded-2xl shadow-lg mt-5 mb-3">
        <p className="text-green-700 text-left text-[16px] font-bold">
          {description1}
        </p>
      </div>

      {/* Description 2 */}
      <div className="w-full h-[100px] backdrop-blur-xl bg-white/30 border border-white/20 p-4 rounded-2xl shadow-lg mb-6">
        <p className="text-green-700 text-right text-[16px] font-bold">
          {description2}
        </p>
      </div>

      {/* CV Buttons */}
      <div className="flex flex-col gap-4 w-full items-center mt-8 mb-8">
        {/* Nút 1 */}
        <div className="relative inline-flex items-center justify-center w-full group">
          <div
            className="absolute inset-0 duration-1000 opacity-60 transition-all 
              bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 
              rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
          ></div>
          <a
            role="button"
            className="group relative inline-flex items-center justify-center text-base rounded-xl 
              bg-white px-8 py-3 font-semibold text-emerald-600 w-full text-center
              transition-all duration-200 
              hover:bg-emerald-600 hover:text-white hover:shadow-lg 
              hover:-translate-y-0.5 hover:shadow-emerald-500/40"
            href={cvEng}
          >
            English Resume
          </a>
        </div>

        {/* Nút 2 */}
        <div className="relative inline-flex items-center justify-center w-full group">
          <div
            className="absolute inset-0 duration-1000 opacity-60 transition-all 
              bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 
              rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
          ></div>
          <a
            role="button"
            className="group relative inline-flex items-center justify-center text-base rounded-xl 
              px-8 py-3 bg-emerald-700 font-semibold text-white w-full text-center
              transition-all duration-200 
              hover:bg-white hover:text-black hover:shadow-lg 
              hover:-translate-y-0.5 hover:shadow-emerald-500/40"
            href={cvDeu}
          >
            German Lebenslauf
          </a>
        </div>
      </div>

      {/* MyAnimation */}
      <div className="w-full flex items-center justify-center mb-8 px-20">
        <MyAnimation />
      </div>

      {/* Social Buttons */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <GithubButton />
        <WhatsappButton />
        <GmailButton />
        <FacebookButton />
        <InstagramButton />
      </div>
    </div>
  );
}
