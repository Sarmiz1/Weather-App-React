import WeatherDataContext from "../../context/WeatherDataContext";
import { useContext } from "react";

function WeatherDisplay() {

  const {selectedWeather} = useContext(WeatherDataContext)

  if (!selectedWeather) return null;



  return (
    <section 
      className=" w-full sm:w-3/4 tablet:w-[80%] 
                max-w-screen-tablet mx-auto
                h-16 flex items-center pl-4 pr-4 minor:pr-4
                bg-slate-500 dark:bg-slate-700 
                text-white rounded-lg mt-6 lg:font-thin
                lg:max-h-44 lg:min-h-40 lg:w-44 lg:flex-col lg:justify-center lg:py-4 lg:items-start lg:mx-[20%] lg:gap-2  xl:mx-[27%]"
      >
        
      <h2 
        className="basis-9/12 font-sans dark:text-white/80
                  lg:flex lg:flex-col lg:text-[.8rem] capitalize"
      >
          <span className="lg:font-semibold text-2xl">
            {selectedWeather.city} 
          </span>
          <span className={`${selectedWeather ? '' : 'hidden'} lg:hidden mr-1`}>,</span> 
          {selectedWeather.country} 
      </h2>
      <div className="flex basis-3/12 items-center gap-[0.5rem]
        justify-end dark:text-white/80 lg:justify-start">
        <img 
          src={selectedWeather.iconUrl} 
          alt={selectedWeather.description} 
          className="object-contain w-14 lg:w-10 h-auto bg-blend-darken"/>
        <p className="font-sans font-bold text-xl lg:text-2xl lg:font-light">
          {selectedWeather.temperature}&#176;C</p>
      </div>
      <div className="hidden lg:flex lg:gap-4 text-[.8rem]">
        <p>{selectedWeather.description}</p>
        <p>{selectedWeather.temperature}&#176;</p>
      </div>
    </section>
  );
}
export default WeatherDisplay;