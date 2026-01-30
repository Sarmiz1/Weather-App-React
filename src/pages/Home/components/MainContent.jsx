import CountryWeather from "./CountryWeather";
import WeatherNews from './WeatherNews'

function MainContent({countryWeatherData, country, countryCode}) {
  return (
    <main>
      <CountryWeather 
        countryWeatherData={countryWeatherData}
        country={country}
      />
      <WeatherNews 
        countryCode={countryCode}
      />
    </main>
  );
}

export default MainContent;