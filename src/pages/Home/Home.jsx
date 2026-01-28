import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from '../../features/Loading'
import Error from '../../features/Error'
import Countries from '../../Data/CountriesData'

function Home() {
  
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const [query, setQuery] = useState('');
  const [selectedWeather, setSelectedWeather] = useState(() => {
  return JSON.parse(localStorage.getItem("selectedWeather")) || null;
  });

  const [selectedCountryWeather, setSelectedCountryWeather] = useState(() => {
  return JSON.parse(localStorage.getItem("selectedCountryWeather")) || null;
  });

  const [country, setCountry] = useState(() => 
    localStorage.getItem("selectedWeather") || '')

  const [fetchData, setFetchData] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const handleInputChange = (e) => {
      setQuery(e.target.value);
    };
    
  
    const handleSearch = () => {
      if(query === '' ) return
  
      setFetchData(prev => !prev)
      setLoading(true)
    }


  useEffect(() => {
    if (!fetchData) return;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&appid=${apiKey}&units=metric`;

    axios.get(url).then(({ data: {
      name: city,
      sys: { country },
      main: { temp },
      weather: [{ description, icon }]
      }}) => {
      setSelectedWeather({
      city,
      country,
      description,
      temperature: temp,
      iconUrl: `https://openweathermap.org/img/wn/${icon}@2x.png`
      });
      setLoading(false)
    })
    .catch(err => {
      setError(err.message)
      setLoading(false)
    });

  }, [fetchData]);

  useEffect(() => {
  if (!selectedWeather) return;

    localStorage.setItem(
      "selectedWeather",
      JSON.stringify(selectedWeather)
    );
  }, [selectedWeather]);


  useEffect(()=> {
    if(!selectedWeather) return

    const country = selectedWeather.country
    const selectedCountry  = Countries.find((cont) => cont.code === country) || ''
    const countryName = selectedCountry.name

    if(!selectedCountry) return

    selectedCountry.cities.forEach(city => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    
    axios.get(url).then(({ data: {
      name: city,
      sys: { country },
      main: { temp },
      weather: [{ description, icon }]
      }}) => {
      setSelectedCountryWeather(prev => [...prev,{
      city,
      country,
      description,
      temperature: temp,
      iconUrl: `https://openweathermap.org/img/wn/${icon}@2x.png`
      }]);
      setLoading(false)
      setCountry(countryName)
    })
    .catch(err => {
      setError(err.message)
      setLoading(false)
      });
    })

  }, [selectedWeather])


  useEffect(() => {
  if (!selectedCountryWeather) return;

    localStorage.setItem(
      "selectedCountryWeather",
      JSON.stringify(selectedCountryWeather)
    );
  }, [selectedCountryWeather]);
  



  return (
    <div className="p-4">
      {loading && <Loading />}
      {error && <Error />}
      
      <Header 
        selectedWeather={selectedWeather}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />

      <MainContent 
        country={country}
        CountryWeatherData={selectedCountryWeather}
      />
    </div>
  );

}

export default Home;