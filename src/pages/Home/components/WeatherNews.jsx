import { HiArrowRight } from "react-icons/hi";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../../features/Loading";
import Error from "../../../features/Error";

function WeatherNews({countryCode}) {

  const apiKey = import.meta.env.VITE_NEWS_API_KEY2;

  const [newsData, setNewsData] = useState(() => {
    const stored = localStorage.getItem("newsData");
    return stored ? JSON.parse(stored) : [];
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if(countryCode === '' || countryCode === undefined) return;

    const url = `https://gnews.io/api/v4/top-headlines?country=${countryCode}&lang=en&max=10&token=${apiKey}`;

    axios
      .get(url)
      .then(({ data }) => {
        const formatted = data.articles.map(article => ({
          id: article.url, // stable key
          title: article.title,
          image: article.image,
          publishedAt: article.publishedAt,
          description: article.description,
        }));

        setNewsData(formatted);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [countryCode, apiKey]);

  useEffect(() => {
    localStorage.setItem("newsData", JSON.stringify(newsData));
  }, [newsData]);


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
