import { ShortDescription } from "./weatherToolKits"
import LottiePlayer from "./LottiePlayer"
import rainyDay from "../assets/animations/rainy day.json";

function MainWeatherWedge() {
  return (
    <div className=" bg-dark-overlay w-full md:w-[10cm] rounded-xl px-4 py-3">
    <div className="flex justify-between">
      <h3 className="font-bold text-dark-text-primary text-2xl">Today</h3>
      <h3 className="font-bold text-dark-text-primary-dim text-[16px]">
        Sat, 3 Aug
      </h3>
    </div>
    <div className="grid grid-cols-2 w-full">
      <div className="flex justify-center flex-col">
        <p className="flex items-start gap-2">
          <span className="font-bold text-dark-text-primary text-5xl">
            40
          </span>
          <span className="font-bold text-dark-text-active text-2xl">
            {"\u00b0"}C
          </span>
        </p>
      </div>
      <LottiePlayer
        animationData={rainyDay}
        customClass={"h-[3cm] w-[3cm] mt-5 self-end"}
      />
    </div>
    <ShortDescription />
    
    <div className="h-[2px] w-full bg-dark-text-primary-dim rounded-full mt-2"></div>
   <ShortDescription />
    <ShortDescription />
  </div>
  )
}

export default MainWeatherWedge