import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";
import {nigeriaWeatherData} from '../home.data'
import { useState } from "react";

function Header() {

  const [query, setQuery] = useState('');
  const [selectedWeather, setSelectedWeather] = useState(null);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality here
    const found = nigeriaWeatherData.states.find( item => 
        item.state.toLowerCase() === query.trim().toLowerCase()
    )

    if (!found) {
      return;
    }

    setSelectedWeather(found);
  }

  return (
    <header>
      <h1 
        className="text-[1.2rem] dark:text-[#FF8C00]/80 text-[#9b2611] font-sans
        font-semibold mb-4 text-center">
          Predict Today, Prepare for Tomorrow...
        </h1>
        <SearchBar 
          handleSearch={handleSearch}
          handleInputChange={handleInputChange}
        />
        {selectedWeather && <WeatherDisplay weatherData={selectedWeather} />}

    </header>
  )
}

export default Header;