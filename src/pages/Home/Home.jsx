import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useState, useEffect } from "react";
import Countries from "../../Data/CountriesData";
import { useFetchCityWeather, useFetchCountryWeather,} from "../hooks/useFetch";

function Home() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const [query, setQuery] = useState("");
  const [queryUrl, setQueryUrl] = useState(null);

  // ---------------------------
  // CITY WEATHER
  // ---------------------------
  const {
    data: selectedWeather,
    loading,
    error,
  } = useFetchCityWeather(queryUrl);

  // ---------------------------
  // INPUT HANDLER
  // ---------------------------
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // ---------------------------
  // SEARCH HANDLER
  // ---------------------------
  const handleSearch = () => {
    if (!query.trim()) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      query
    )}&appid=${apiKey}&units=metric`;

    setQueryUrl(url); // triggers fetch
  };

  
  // --------------------------
  // COUNTRY WEATHER
  // ---------------------------
  const {
    countryCode,
    countryName,
    selectedCountryWeather,
  } = useFetchCountryWeather({
    apiKey,
    Countries,
    selectedWeather,
  });

  // ---------------------------
  // UI
  // ---------------------------
  return (
    <div className="p-4">
      {loading && (
        <p className="flex justify-center">Loading...</p>
      )}

      {error && (
        <p className="text-red-500 flex justify-center">
          {error}
        </p>
      )}

      <Header
        selectedWeather={selectedWeather}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />

      <MainContent
        country={countryName}
        countryWeatherData={selectedCountryWeather}
        countryCode={countryCode}
      />
    </div>
  );
}

export default Home;
