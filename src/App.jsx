import Navbar from "./components/navbar/Navbar";
import Home from "./pages/homePage/Home";
import Skills from "./pages/skillsPage/Skills";
import Projects from "./pages/projectsPage/Projects";
import Education from "./pages/educationPage/Education";
import Language from "./pages/languagePage/Language";
import Certificate from "./pages/certificatePage/Certificate";

export default function App() {
  return (
    <>
      <div
        className="
        min-h-screen w-full block items-center justify-center pb-24

        /* Light mode */
        bg-white
      bg-[radial-gradient(at_82%_8%,_rgba(34,211,238,0.18)_0px,_transparent_42%),_radial-gradient(at_12%_42%,_rgba(14,165,233,0.12)_0px,_transparent_38%),_radial-gradient(at_50%_100%,_rgba(248,250,252,0.95)_0px,_transparent_45%),_linear-gradient(145deg,_#f8fafc_0%,_#eff6ff_48%,_#f8fafc_100%)]
        /* Dark mode */
        dark:bg-[#020617]
        dark:bg-[radial-gradient(at_74%_90%,_rgba(37,99,235,0.40)_0px,_transparent_44%),_radial-gradient(at_24%_18%,_rgba(14,165,233,0.22)_0px,_transparent_46%),_radial-gradient(at_0%_100%,_rgba(15,23,42,0.75)_0px,_transparent_54%),_linear-gradient(145deg,_#020617_0%,_#0f172a_52%,_#111827_100%)]        
      "
      >
        <Navbar />
        <div id="home">
          <Home />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="language">
          <Language />
        </div>
        <div id="certificate">
          <Certificate />
        </div>
      </div>
    </>
  );
}
