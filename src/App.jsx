import Home from "./pages/homePage/Home";
import Skills from "./pages/skillsPage/Skills";
import Projects from "./pages/projectsPage/Projects";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <>
      <div
        className="min-h-screen w-full block items-center justify-center pt-4"
        style={{
          backgroundColor: "#80bcbd",
          backgroundImage:
            "radial-gradient(at 89% 6%, #80bcbd 0%, transparent 60%), radial-gradient(at 38% 56%, #aad9bb 0%, transparent 50%), radial-gradient(at 2% 54%, #d5f0c1 0%, transparent 40%), radial-gradient(at 13% 70%, #f9f7c9 0%, transparent 30%)",
        }}
      >
        <Navbar />
        {/* Trang chủ */}
        <Home />
        {/* Trang danh sách skills */}
        <Skills />
        {/* Trang danh sách dự án */}
        <Projects />
      </div>
    </>
  );
}
