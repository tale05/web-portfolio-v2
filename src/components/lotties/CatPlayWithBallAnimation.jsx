import Lottie from "lottie-react";
import catPlayWithBall from "../../assets/lotties/cat-play-with-ball.json";

export default function CatPlayWithBallAnimation() {
  return (
    <Lottie
      animationData={catPlayWithBall}
      loop={true}
      className="w-20 h-20 md:w-96 md:h-96"
    />
  );
}
