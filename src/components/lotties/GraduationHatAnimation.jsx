import Lottie from "lottie-react";
import graduationHat from "../../assets/lotties/graduation-hat.json";

export default function GraduationHatAnimation() {
  return (
    <Lottie
      animationData={graduationHat}
      loop={true}
      className="w-40 h-40 md:w-48 md:h-48"
    />
  );
}
