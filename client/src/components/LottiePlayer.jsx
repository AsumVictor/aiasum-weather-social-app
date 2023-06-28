import Lottie from "lottie-react";

function LottiePlayer({animationData, speed,customClass}) {
  return (
    <div className="flex flex-col">
        <Lottie animationData={animationData} speed={0.5} loop={true} className={`${customClass}`} />
    </div>
  )
}

export default LottiePlayer