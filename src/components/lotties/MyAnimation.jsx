import Lottie from "lottie-react";
import aiAnimation from "../../assets/lotties/ai-powered.json";

function MyAnimation() {
  return (
    <Lottie
      animationData={aiAnimation}
      loop={true}
      className="w-32 h-32 md:w-42 md:h-42"
    />
  );
}
export default MyAnimation;
