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
  const [countryCode, setCountryCode] = useState(
    localStorage.getItem('countryCode') || '')

  const [selectedWeather, setSelectedWeather] = useState(() => {
  return JSON.parse(localStorage.getItem("selectedWeather")) || null;
  });

  const [selectedCountryWeather, setSelectedCountryWeather] = useState(() => {
    const stored = localStorage.getItem("selectedCountryWeather");
    return stored ? JSON.parse(stored) : [];
  });


  const [countryName, setCountryName] = useState(() => 
    localStorage.getItem("countryName") || '')

  const [fetchData, setFetchData] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const handleInputChange = (e) => {
      setQuery(e.target.value);
    };
    
  
    const handleSearch = () => {
      if(query === '' ) return
  
      setFetchData(true)
      setLoading(true)
    }

    useEffect(()=> {
      console.log(query);
      
    })


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
      console.log(selectedWeather);
      
    })

    useEffect(() => {
    if (!selectedWeather) return;

    let isMounted = true; // 🔐 cancellation guard

    setCountryCode(selectedWeather.country.toLowerCase());
    const selectedCountry = Countries.find(
      cont => cont.code === countryCode.toLowerCase()
    );

    if (!selectedCountry) return;

    const countryName_ = selectedCountry.name;
    setCountryName(countryName_);
    localStorage.setItem("countryName", countryName);

    setLoading(true);
    setSelectedCountryWeather([]);

    const requests = selectedCountry.cities.map(city => {
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

    Promise.all(requests)
      .then(results => {
        if (!isMounted) return;
        setSelectedCountryWeather(results);
        setLoading(false);
      })
      .catch(err => {
        if (!isMounted) return;
        setError(err.message);
        setLoading(false);
      });

    // 🧹 cleanup
    return () => {
      isMounted = false;
    };

  }, [selectedWeather]);


  useEffect(() => {
  if (!selectedCountryWeather || selectedCountryWeather.length === 0) return;

  localStorage.setItem(
    "selectedCountryWeather",
    JSON.stringify(selectedCountryWeather)
  );
  }, [selectedCountryWeather]);

  useEffect(()=> {
    localStorage.setItem('countryCode', countryCode)
  },[countryCode])




  if(loading) return <Loading />

  return (
    <div className="p-4">
      {error && <Error message={error}/>}
      
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