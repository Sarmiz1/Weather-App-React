import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useState, useEffect } from "react";
import Countries from "../../Data/CountriesData";
import useFetch from "../../hooks/useFetch";

function Home() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const [query, setQuery] = useState("");
  const [queryUrl, setQueryUrl] = useState(null); // URL for fetching

  const { data: selectedWeather, loading, error } = useFetch(queryUrl);

  const [countryCode, setCountryCode] = useState(
    localStorage.getItem("countryCode") || ""
  );
  const [countryName, setCountryName] = useState(
    localStorage.getItem("countryName") || ""
  );
  const [selectedCountryWeather, setSelectedCountryWeather] = useState(() => {
    const stored = localStorage.getItem("selectedCountryWeather");
    return stored ? JSON.parse(stored) : [];
  });

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

    setQueryUrl(url); // trigger fetch via hook
  };

  // ---------------------------
  // SAVE SELECTED WEATHER
  // ---------------------------
  useEffect(() => {
    if (!selectedWeather) return;

    localStorage.setItem("selectedWeather", JSON.stringify(selectedWeather));
  }, [selectedWeather]);

  // ---------------------------
  // FETCH COUNTRY WEATHER
  // ---------------------------
  useEffect(() => {
    if (!selectedWeather) return;

    const code = selectedWeather.country.toLowerCase();
    setCountryCode(code);
    localStorage.setItem("countryCode", code);

    const selectedCountry = Countries.find((c) => c.code === code);
    if (!selectedCountry) return;

    setCountryName(selectedCountry.name);
    localStorage.setItem("countryName", selectedCountry.name);

    const fetchCountryWeather = async () => {
      try {
        const requests = selectedCountry.cities.map((city) => {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
          )}&appid=${apiKey}&units=metric`;

          return fetch(url)
            .then((res) => res.json())
            .then((d) => ({
              city: d.name,
              country: d.sys.country,
              description: d.weather[0].description,
              temperature: d.main.temp,
              iconUrl: `https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`,
            }));
        });

        const results = await Promise.all(requests);
        setSelectedCountryWeather(results);
        localStorage.setItem(
          "selectedCountryWeather",
          JSON.stringify(results)
        );
      } catch (err) {
        console.error(err);
      }
    };

    fetchCountryWeather();
  }, [selectedWeather, apiKey]);

  // ---------------------------
  // UI
  // ---------------------------
  return (
    <div className="p-4">
      {loading && 
        <p 
          className="flex items-center justify-center">
          Loading...
        </p>
      }

      {error && 
        <p className="text-red-500 flex items-center justify-center">   {error}
        </p>
      }

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
