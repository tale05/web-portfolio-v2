import Lottie from "lottie-react";
import cat from "../../assets/lotties/cat.json";

export default function CatAnimation() {
  return (
    <Lottie
      animationData={cat}
      loop={true}
      className="w-20 h-20 md:w-32 md:h-32"
    />
  );
}
