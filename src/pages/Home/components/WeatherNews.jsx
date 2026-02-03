import { HiArrowRight } from "react-icons/hi";
import Loading from "../../features/Loading";
import Error from "../../features/Error";
import { useFetchNews } from "../../hooks/useFetch";
import { useContext } from "react";
import WeatherDataContext from "../../context/WeatherDataContext";

function WeatherNews() {

  const apiKey = import.meta.env.VITE_NEWS_API_KEY2;
  const { selectedWeather } = useContext(WeatherDataContext)
  const countryCode = selectedWeather?.country || ''



  /* ================================
  FETCH NEWS DATA
  ================================ */
  const {loading, error, newsData} = useFetchNews({
    countryCode: countryCode,
    apiKey: apiKey,
  })


  /* ================================
          UI
  ================================ */
  
  if (loading) return <Loading message="Loading News" />;

  if (!newsData) {
    if(error) return
    return (
      <div className="mt-8">
        <Error message={error} />
      </div>
    );
  }

  return (
    <section className="mt-8 flex flex-col">
      <div className="flex mb-2 items-center gap-1">
        <h1 className="text-base">Weather News</h1>
        <p className="ml-auto font-thin text-[.9rem]">See more</p>
        <HiArrowRight size={18} />
      </div>

      <ul 
        className="flex gap-3 overflow-x-auto scrollbar-hide no-scrollbar scroll-smooth"
        onWheel={(e) => {
        e.currentTarget.scrollLeft += e.deltaY; // scroll horizontally on mouse wheel
        }}
      >
        {newsData.map(news => (
          <li
            key={news.id}
            className="flex flex-col rounded-2xl bg-slate-300 
            h-60 w-52 shrink-0 pb-4 dark:bg-slate-500"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-32 object-cover rounded-t-2xl"
            />

            <p className="mt-3 mx-4 text-sm line-clamp-3">
              {news.title}
            </p>

            <p className="mt-auto text-[.8rem] mx-4 opacity-70">
              {new Date(news.publishedAt).toDateString()}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WeatherNews;
