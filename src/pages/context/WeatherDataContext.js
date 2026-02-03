import { createContext } from "react";

const WeatherDataContext = createContext({
  selectedWeather: null,
  selectedCountryWeather: [],
  countryName: '',
  loading: false,
  error: false,
})


export default WeatherDataContext