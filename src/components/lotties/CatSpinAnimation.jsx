import Lottie from "lottie-react";
import catSpin from "../../assets/lotties/cat-spin.json";

export default function CatSpinAnimation() {
  return (
    <Lottie
      animationData={catSpin}
      loop={true}
      className="w-20 h-20 md:w-24 md:h-24"
    />
  );
}
