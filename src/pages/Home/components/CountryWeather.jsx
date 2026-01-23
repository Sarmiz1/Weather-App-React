import { RightArrow } from "../../../assets/Icons/RightArrow"
import CityWeatherGrid from "./CityWeatherGrid"

function CountryWeather({nigeriaWeatherData}) {
  if(!nigeriaWeatherData) return null;

  const {country, states} = nigeriaWeatherData

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
        {states.map(state => (
          <li key ={state.state}>
            <CityWeatherGrid 
              city={state.state}
              condition={state.current.condition} 
              icon={state.current.icon}
              temperature={state.current.temperature}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CountryWeather;