import Lottie from "lottie-react";
import robotHi from "../../assets/lotties/robot-hi.json";

export default function RobotHiAnimation() {
  return (
    <Lottie
      animationData={robotHi}
      loop={true}
      className="w-20 h-20 md:w-44 md:h-44"
    />
  );
}
