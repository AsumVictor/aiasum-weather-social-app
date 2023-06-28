import MainWeatherWedge from "../components/mainWeatherWedge";
function Home() {
  return (
    <div className="w-full py-2 mt-5 flex flex-row flex-wrap gap-5">
     <MainWeatherWedge />
      <div className=" bg-dark-overlay h-[5cm] rounded-xl"></div>
    </div>
  );
}

export default Home;
