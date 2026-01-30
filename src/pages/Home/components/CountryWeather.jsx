import { RightArrow } from "../../../assets/Icons/RightArrow"
import CityWeatherGrid from "./CityWeatherGrid"

function CountryWeather({countryWeatherData, country}) {
  
  if(!countryWeatherData) return null;

  return(
    <section className="mt-8 flex flex-col">
      <div className="flex mb-2 items-center gap-1">
        <h1 className="text-[.9rem] uppercase">
          {country} WEATHER CONDITIONS
        </h1>
        <div className="cursor-pointer flex ml-auto gap-2 items-center">
          <p className=" font-thin text-[.9rem]">
            See more
          </p>
          <RightArrow size={18}/>
        </div> 
      </div>

      <ul className="grid grid-cols-1 gap-1  lg:grid-cols-2">
        {countryWeatherData.map(city => (
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