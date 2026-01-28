import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";
 function Header({handleSearch, handleInputChange, selectedWeather}) {


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