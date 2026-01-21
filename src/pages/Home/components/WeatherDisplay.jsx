function WeatherDisplay() {
  return (
    <section 
      className=" w-full sm:w-3/4 tablet:w-[80%] 
                max-w-screen-tablet mx-auto
                h-16 flex items-center pl-4 pr-4 minor:pr-4
                bg-slate-500 dark:bg-slate-700 
                text-white rounded-lg mt-6">
      <h2 
        className="basis-9/12 font-sans font-semibold 
                dark:text-white/80">
          Lagos, Nigeria
      </h2>
      <div className="flex basis-3/12 items-center gap-[0.5rem]
        justify-end dark:text-white/80">
        <img 
          src="public/images/rainfall.png" 
          alt="icon" 
          className="object-contain w-14 h-auto"/>
        <p className="font-sans font-bold text-xl">22&#176;C</p>
      </div>
    </section>
  );
}
export default WeatherDisplay;