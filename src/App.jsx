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
        // className="
        //   min-h-screen w-full block items-center justify-center pb-24

        //   /* Light mode */
        //   bg-[#b4e7ed]
        //   bg-[radial-gradient(at_70%_97%,_#ade9f0_0px,_transparent_50%),_radial-gradient(at_32.92%_20.625%,_#b9f0b6_0px,_transparent_50%),_radial-gradient(at_0%_100%,_#dde4c0_0px,_transparent_50%)]

        //   /* Dark mode */
        //   dark:bg-[#0f172a]
        //   dark:bg-[radial-gradient(at_70%_97%,_#1e293b_0px,_transparent_50%),_radial-gradient(at_32.92%_20.625%,_#334155_0px,_transparent_50%),_radial-gradient(at_0%_100%,_#020617_0px,_transparent_50%)]
        // "
        className="
        pb-20

        /* Light mode */
        bg-[url('/images/background1.jpg')]
        bg-cover bg-center bg-no-repeat bg-fixed

        /* Dark mode */
        dark:bg-[url('/images/background2.jpg')]
        dark:bg-cover dark:bg-center dark:bg-no-repeat dark:bg-fixed
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
