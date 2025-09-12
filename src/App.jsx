import Home from "./pages/homePage/Home";
import Skills from "./pages/skillsPage/Skills";
import Projects from "./pages/projectsPage/Projects";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <>
      <div
        className="min-h-screen w-full block items-center justify-center"
        style={{
          backgroundColor: "#99B898",
          backgroundImage: `
            radial-gradient(at 70% 97%, #C1EB96 0px, transparent 50%), 
            radial-gradient(at 32.92025862068966% 20.625%, #b5e792 0px, transparent 50%), 
            radial-gradient(at 0% 100%, #DDE4C0 0px, transparent 50%)
          `,
        }}
      >
        <Navbar />
        <Home />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
