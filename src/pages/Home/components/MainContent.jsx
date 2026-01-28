import CountryWeather from "./CountryWeather";
import WeatherNews from './WeatherNews'
import {nigeriaWeatherData} from '../home.data'

function MainContent({CountryWeatherData, country}) {
  return (
    <main>
      <CountryWeather 
        CountryWeatherData={CountryWeatherData}
        country={country}
      />
      <WeatherNews />
    </main>
  );
}

export default MainContent;