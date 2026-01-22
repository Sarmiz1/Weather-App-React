import { useState } from "react"
import {  HiArrowRight } from "react-icons/hi";
import CityWeatherGrid from "./CityWeatherGrid"

function CountryWeather() {
  const [country, setCountry] = useState('NIGERIA')

  return(
    <section className="mt-8 flex flex-col">
      <div className="flex mb-2 items-center gap-1">
        <h1 className="text-[.9rem]">{country} WEATHER CONDITIONS</h1>
        <p className="ml-auto font-thin text-[.9rem]">
          See more
        </p>
        <HiArrowRight size={18}/> 
      </div>
      
      <ul className="grid grid-cols-1 gap-1  lg:grid-cols-2">
        <li>
          <CityWeatherGrid city="Aba"/>
        </li>
        <li>
          <CityWeatherGrid city="Enugu"/>
        </li>
        <li>
          <CityWeatherGrid city="Port Harcourt"/>
        </li>
        <li>
          <CityWeatherGrid city="Ino"/>
        </li>
        <li>
          <CityWeatherGrid city="Anambra"/>
        </li>
        <li>
          <CityWeatherGrid city="Delta"/>
        </li>
      </ul>
    </section>
  )
}

export default CountryWeather;