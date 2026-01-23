function CityWeatherGrid({ city, condition, icon, temperature}) {


  return (
    <div 
      className=" w-full mx-auto h-16 flex items-center pl-4
                bg-[#00BFFF] dark:bg-[#00BFFF]/90 pr-4 
                dark:bg-blend-darken text-blue-950 dark:text-white/80 rounded">
      <h2 
        className="basis-9/12 font-sans font-semibold capitalize
                dark:text-white/80">
          {city}
      </h2>
      <div className="flex basis-3/12 items-center gap-[0.5rem]
        justify-end dark:text-white/80">
        <img 
          src={icon} 
          alt={condition} 
          className="object-contain w-14 h-auto"/>
        <p className="font-sans font-bold text-xl">{temperature}&#176;</p>
      </div>
    </div>
  );
} 

export default CityWeatherGrid