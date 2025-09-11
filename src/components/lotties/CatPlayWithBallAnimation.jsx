import Lottie from "lottie-react";
import catPlayWithBall from "../../assets/lotties/cat-play-with-ball.json";

export default function CatPlayWithBallAnimation() {
  return (
    <Lottie
      animationData={catPlayWithBall}
      loop={true}
      className="w-40 h-40 md:w-96 md:h-96"
    />
  );
}
