import Lottie from "lottie-react";
import firework from "../../assets/lotties/firework.json";

export default function FireworkAnimation() {
  return (
    <Lottie
      animationData={firework}
      loop={true}
      className="w-20 h-20 md:w-72 md:h-72"
    />
  );
}
