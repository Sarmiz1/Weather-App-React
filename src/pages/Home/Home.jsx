import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../features/Loading";
import Error from "../../features/Error";
import Countries from "../../Data/CountriesData";

function Home() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [selectedWeather, setSelectedWeather] = useState(() => {
    const stored = localStorage.getItem("selectedWeather");
    return stored ? JSON.parse(stored) : null;
  });

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
  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        query
      )}&appid=${apiKey}&units=metric`;

      const { data } = await axios.get(url);

      const weatherData = {
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        temperature: data.main.temp,
        iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      };

      setSelectedWeather(weatherData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------
  // SAVE SELECTED WEATHER
  // ---------------------------
  useEffect(() => {
    if (!selectedWeather) return;

    localStorage.setItem(
      "selectedWeather",
      JSON.stringify(selectedWeather)
    );
  }, [selectedWeather]);

  // ---------------------------
  // FETCH COUNTRY WEATHER
  // ---------------------------
  useEffect(() => {
    if (!selectedWeather) return;

    const code = selectedWeather.country.toLowerCase();
    setCountryCode(code);
    localStorage.setItem("countryCode", code);

    const selectedCountry = Countries.find(
      (c) => c.code === code
    );

    if (!selectedCountry) return;

    setCountryName(selectedCountry.name);
    localStorage.setItem("countryName", selectedCountry.name);

    const fetchCountryWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const requests = selectedCountry.cities.map((city) => {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
          )}&appid=${apiKey}&units=metric`;

          return axios.get(url).then(({ data }) => ({
            city: data.name,
            country: data.sys.country,
            description: data.weather[0].description,
            temperature: data.main.temp,
            iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          }));
        });

        const results = await Promise.all(requests);
        setSelectedCountryWeather(results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryWeather();
  }, [selectedWeather, apiKey]);

  // ---------------------------
  // SAVE COUNTRY WEATHER
  // ---------------------------
  useEffect(() => {
    if (!selectedCountryWeather.length) return;

    localStorage.setItem(
      "selectedCountryWeather",
      JSON.stringify(selectedCountryWeather)
    );
  }, [selectedCountryWeather]);

  // ---------------------------
  // UI
  // ---------------------------
  if (loading) return <Loading />;

  return (
    <div className="p-4">
      {error && <Error message={error} />}

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
