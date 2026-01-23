import CountryWeather from "./CountryWeather";
import WeatherNews from './WeatherNews'
import {nigeriaWeatherData} from '../home.data'

function MainContent() {
  return (
    <main>
      <CountryWeather nigeriaWeatherData={nigeriaWeatherData}/>
      <WeatherNews />
    </main>
  );
}

export default MainContent;