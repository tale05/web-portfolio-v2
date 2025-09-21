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
import CatSpinAnimation from "../../components/lotties/CatSpinAnimation";
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

  const description3 = useTypewriter(
    "🛠 I constantly experiment with new technologies and tools to improve my coding skills and efficiency ⚡️.",
    15
  );

  const description4 = useTypewriter(
    "🌟 My goal is to create impactful software that solves problems and brings value to users worldwide 🌍.",
    15
  );

  return (
    <div
      className="w-full h-auto 
    mx-auto px-5 pt-10
    flex flex-col items-center"
    >
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
      <div className="flex items-center justify-center py-5 w-full">
        <img
          src={myAva}
          alt="Avatar"
          className="w-full h-60 object-cover
          rounded-3xl border-4 border-x-green-50
          shadow-[0px_10px_100px_5px_rgba(16,_239,_68,_0.2)]"
        />
      </div>

      <div className="relative grid grid-cols-2 grid-rows-2 gap-4">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 pointer-events-none">
          <CatSpinAnimation />
        </div>

        {/* Description 1 */}
        <div
          className="z-1 p-4 w-full h-32 overflow-y-scroll scrollbar-hide
          backdrop-blur-xl bg-white/30 border border-white/20 
          rounded-2xl shadow-lg hover:bg-white transition duration-75"
        >
          <p
            className="text-green-700 text-center text-[16px] font-bold hover:text-black
          dark:hover:text-black dark:text-green-50"
          >
            {description1}
          </p>
        </div>

        {/* Description 2 */}
        <div
          className="z-1 p-4 w-full h-32 overflow-y-scroll scrollbar-hide
          backdrop-blur-xl bg-white/30 border border-white/20 
          rounded-2xl shadow-lg hover:bg-white transition duration-75"
        >
          <p
            className="text-green-700 text-center text-[16px] font-bold hover:text-black
          dark:hover:text-black dark:text-green-50"
          >
            {description2}
          </p>
        </div>

        {/* Description 3 */}
        <div
          className="z-1 p-4 w-full h-32 overflow-y-scroll scrollbar-hide
          backdrop-blur-xl bg-white/30 border border-white/20 
          rounded-2xl shadow-lg hover:bg-white transition duration-75"
        >
          <p
            className="text-green-700 text-center text-[16px] font-bold hover:text-black
          dark:hover:text-black dark:text-green-50"
          >
            {description3}
          </p>
        </div>

        {/* Description 4 */}
        <div
          className="z-1 p-4 w-full h-32 overflow-y-scroll scrollbar-hide
          backdrop-blur-xl bg-white/30 border border-white/20 
          rounded-2xl shadow-lg hover:bg-white transition duration-75"
        >
          <p
            className="text-green-700 text-center text-[16px] font-bold hover:text-black
          dark:hover:text-black dark:text-green-50"
          >
            {description4}
          </p>
        </div>
      </div>
      {/* CV Buttons */}
      <div className="flex flex-row gap-4 w-full items-center my-5">
        {/* Nút 1 */}
        <div className="relative inline-flex items-center justify-center w-full group">
          <a
            role="button"
            className="group relative inline-flex items-center justify-center text-base rounded-xl 
              bg-white px-2 py-3 font-semibold text-emerald-600 w-full text-center
              transition-all duration-200 
              hover:bg-emerald-600 hover:text-white hover:-translate-y-0.5"
            href={cvEng}
          >
            Resume (ENG)
          </a>
        </div>

        {/* Nút 2 */}
        <div className="relative inline-flex items-center justify-center w-full group">
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
        <div className="col-span-8 p-4 rounded-2xl border border-white/20 shadow-lg">
          <div className="flex flex-wrap justify-center gap-4">
            <GithubButton />
            <WhatsappButton />
            <GmailButton />
            <FacebookButton />
            <InstagramButton />
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
        style={{ borderRadius: "12px", margin: "0 auto", padding: "0 auto" }}
        className="text-color-for-tilte"
      ></iframe>
    </div>
  );
}
