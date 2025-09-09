import Lottie from "lottie-react";
import welcomeAnimation from "../../assets/lotties/welcome.json";

export default function WelcomeAnimation() {
  return (
    <Lottie
      animationData={welcomeAnimation}
      loop={true}
      className="w-auto h-20"
    />
  );
}
