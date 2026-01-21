function WeatherDisplay({city = "Lagos"}) {
  return (
    <section 
      className=" w-full sm:w-3/4 tablet:w-[80%] 
                max-w-screen-tablet mx-auto
                h-16 flex items-center pl-4 pr-4 minor:pr-4
                bg-slate-500 dark:bg-slate-700 
                text-white rounded-lg mt-6 lg:font-thin
                lg:h-36 lg:w-44 lg:flex-col lg:justify-center lg:py-4 lg:items-start lg:mx-[20%] lg:gap-2  xl:mx-[27%]">
      <h2 
        className="basis-9/12 font-sans dark:text-white/80
                  lg:flex lg:flex-col lg:text-[.8rem]">
          <span className="lg:font-semibold text-2xl">
            {city}
          </span>
          <span className="lg:hidden">,</span> 
          Nigeria
      </h2>
      <div className="flex basis-3/12 items-center gap-[0.5rem]
        justify-end dark:text-white/80 lg:justify-start">
        <img 
          src="public/images/rainfall.png" 
          alt="icon" 
          className="object-contain w-14 lg:w-10 h-auto"/>
        <p className="font-sans font-bold text-xl lg:text-2xl lg:font-light">
          22&#176;C</p>
      </div>
      <div className="hidden lg:flex lg:gap-4 text-[.8rem]">
        <p>Real Feel</p>
        <p>36&#176;</p>
      </div>
    </section>
  );
}
export default WeatherDisplay;