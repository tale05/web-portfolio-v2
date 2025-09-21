import Lottie from "lottie-react";
import githubOctocat from "../../assets/lotties/git.json";

export default function GithubOctocatAnimation() {
  return (
    <Lottie
      animationData={githubOctocat}
      loop={true}
      className="w-40 h-40 md:w-44 md:h-44"
    />
  );
}
