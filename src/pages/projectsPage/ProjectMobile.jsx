import { Code } from "lucide-react";
import CatPlayWithBall from "../../components/lotties/CatPlayWithBallAnimation";

export default function ProjectMobile() {
  return (
    <div className="w-full h-auto mx-auto p-5 flex flex-col items-center relative">
      <h1
        className="relative z-1 flex items-center justify-center gap-3 p-2 w-full 
        text-xl text-white font-bold text-center 
        bg-color-for-tilte rounded-xl shadow-lg"
      >
        <Code className="w-8 h-8 text-white" />
        Projects I Have Completed
        {/* Cat nằm bên phải, hơi trồi lên trên */}
        <div className="absolute -top-[103px] right-2 z-2">
          <CatPlayWithBall />
        </div>
      </h1>
    </div>
  );
}
