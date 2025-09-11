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
  const playlistId = "4KnqE3eR03vCvhZ2ByfxzQ";
  const title = useTypewriter("My Portfolio", 100);
  const description1 = useTypewriter(
    "💡 I'm Tuan Anh, a passionate developer who loves exploring new knowledge and applying it to real-world projects 🚀.",
    15
  );
  const description2 = useTypewriter(
    "🎯 I enjoy crafting modern, user-friendly interfaces 🌐📱 to deliver smooth and engaging experiences.",
    15
  );

  return (
    <div className="w-full h-auto mx-auto p-5 flex flex-col items-center">
      <div className="grid grid-cols-12 items-center gap-2 w-full h-auto px-4 pt-4 border-b-2 border-gray-300">
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
          className="w-72 h-72 rounded-3xl border-4 border-x-green-50
          shadow-[0px_10px_100px_5px_rgba(16,_239,_68,_0.2)]"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 items-stretch">
        {/* Description 1 */}
        <div className="w-full backdrop-blur-xl bg-white/30 border border-white/20 p-4 rounded-2xl shadow-lg">
          <p className="text-green-700 text-left text-[16px] font-bold">
            {description1}
          </p>
        </div>

        {/* Description 2 */}
        <div className="w-full backdrop-blur-xl bg-white/30 border border-white/20 p-4 rounded-2xl shadow-lg">
          <p className="text-green-700 text-left text-[16px] font-bold">
            {description2}
          </p>
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
        style={{ borderRadius: "12px", margin: "0 auto", padding: "0 auto" }}
        className="text-color-for-tilte pt-4"
      ></iframe>
      {/* CV Buttons */}
      <div className="flex flex-row gap-4 w-full items-center my-5">
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
              bg-white px-2 py-3 font-semibold text-emerald-600 w-full text-center
              transition-all duration-200 
              hover:bg-emerald-600 hover:text-white hover:shadow-lg 
              hover:-translate-y-0.5 hover:shadow-emerald-500/40"
            href={cvEng}
          >
            Resume (ENG)
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
              px-2 py-3 bg-emerald-700 font-semibold text-white w-full text-center
              transition-all duration-200 
              hover:bg-white hover:text-black hover:shadow-lg 
              hover:-translate-y-0.5 hover:shadow-emerald-500/40"
            href={cvDeu}
          >
            Lebenslauf (DEU)
          </a>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-2 items-center pb-7">
        <div className="col-span-4 flex items-center justify-end">
          <MyAnimation />
        </div>
        <div
          className="col-span-8 p-4 rounded-2xl border border-white/20 
        shadow-lg shadow-green-700/70"
        >
          <div className="flex flex-wrap justify-center gap-4">
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
