import Lottie from "lottie-react";
import aiAnimation from "../../assets/lotties/ai-powered.json";

function MyAnimation() {
  return (
    <Lottie animationData={aiAnimation} loop={true} className="w-42 h-42" />
  );
}
export default MyAnimation;
