import {  HiArrowRight } from "react-icons/hi";


function WeatherNews() {


  return (
    <section className="mt-8 flex flex-col">
      <div className="flex mb-2 items-center gap-1">
        <h1 className="text-base">Weather News</h1>
        <p className="ml-auto font-thin text-[.9rem]">
          See more
        </p>
        <HiArrowRight size={18}/> 
      </div>
      
      <ul className="flex gap-3 overflow-auto">
        <li className="flex flex-col rounded-2xl bg-slate-300 
            h-60 w-52 shrink-0 pb-4 dark:bg-slate-500">
          <img
            src="/test.webp"
            alt="img"
            className="w-full h-32 object-cover rounded-t-2xl"
          />
          <p className="mt-3 mx-4 text-sm">
            Feet of Snow bury Russia's Kamchatka Peninsula
          </p>
          <p className="mt-auto text-[.8rem] mx-4">1 day ago</p>
        </li>

        <li className="flex flex-col rounded-2xl bg-slate-300 
            h-60 w-52 shrink-0 pb-4 dark:bg-slate-500">
          <img
            src="/test.webp"
            alt="img"
            className="w-full h-32 object-cover rounded-t-2xl"
          />
          <p className="mt-3 mx-4 text-sm">
            Feet of Snow bury Russia's Kamchatka Peninsula
          </p>
          <p className="mt-auto text-[.8rem] mx-4">1 day ago</p>
        </li>
        <li className="flex flex-col rounded-2xl bg-slate-300 
            h-60 w-52 shrink-0 pb-4 dark:bg-slate-500">
          <img
            src="/test.webp"
            alt="img"
            className="w-full h-32 object-cover rounded-t-2xl"
          />
          <p className="mt-3 mx-4 text-sm">
            Feet of Snow bury Russia's Kamchatka Peninsula
          </p>
          <p className="mt-auto text-[.8rem] mx-4">1 day ago</p>
        </li>

      </ul>
    </section>
  )
}

export default WeatherNews