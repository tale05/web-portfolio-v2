import Lottie from "lottie-react";
import graduationHat from "../../assets/lotties/graduation-hat.json";

export default function GraduationHatAnimation() {
  return (
    <Lottie
      animationData={graduationHat}
      loop={true}
      className="w-32 h-32 md:w-40 md:h-40"
    />
  );
}
