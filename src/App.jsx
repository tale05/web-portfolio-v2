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
        min-h-screen w-full block items-center justify-center pb-24"
        style={{
          backgroundColor: "#b4e7ed",
          backgroundImage: `
            radial-gradient(at 70% 97%, #ade9f0 0px, transparent 50%), 
            radial-gradient(at 32.92025862068966% 20.625%, #b9f0b6 0px, transparent 50%), 
            radial-gradient(at 0% 100%, #DDE4C0 0px, transparent 50%)
          `,
        }}
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
