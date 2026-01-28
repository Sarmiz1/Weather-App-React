import { RightArrow } from "../../../assets/Icons/RightArrow"
import CityWeatherGrid from "./CityWeatherGrid"

function CountryWeather({CountryWeatherData, country}) {
  if(!CountryWeatherData) return null;

  return(
    <section className="mt-8 flex flex-col">
      <div className="flex mb-2 items-center gap-1">
        <h1 className="text-[.9rem] uppercase">{country} WEATHER CONDITIONS</h1>
        <p className="ml-auto font-thin text-[.9rem]">
          See more
        </p>
        <RightArrow size={18}/> 
      </div>

      <ul className="grid grid-cols-1 gap-1  lg:grid-cols-2">
        {CountryWeatherData.map(city => (
          <li key ={city.city}>
            <CityWeatherGrid 
              city={city.city}
              condition={city.description} 
              icon={city.iconUrl}
              temperature={city.temperature}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CountryWeather;