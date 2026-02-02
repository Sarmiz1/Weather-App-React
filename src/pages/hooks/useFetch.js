import { useEffect, useState } from "react";
import axios from "axios";

/* ===============================
  AXIOS INSTANCE (shared)
================================ */
const api = axios.create({
  timeout: 10000,
});

/* ===============================
  FETCH CITY WEATHER
================================ */
const useFetchCityWeather = (url) => {
  
  const [data, setData] = useState(() => {
    const stored = localStorage.getItem("selectedWeather");
    return stored ? JSON.parse(stored) : null;
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    const fetchCityWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data } = await api.get(url, {
          signal: controller.signal,
        });

        const formatted = {
          city: data.name,
          country: data.sys.country,
          description: data.weather[0].description,
          temperature: data.main.temp,
          iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        };

        setData(formatted);
        localStorage.setItem(
          "selectedWeather",
          JSON.stringify(formatted)
        );
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCityWeather();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};

/* ================================
  FETCH COUNTRY WEATHER
================================ */
const useFetchCountryWeather = ({
  apiKey,
  Countries,
  selectedWeather,
}) => {
  const [countryCode, setCountryCode] = useState("");
  const [countryName, setCountryName] = useState("");

  const [selectedCountryWeather, setSelectedCountryWeather] = useState(() => {
    const stored = localStorage.getItem("selectedCountryWeather");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    if (!selectedWeather?.country) return;

    const code = selectedWeather.country.toLowerCase();
    const country = Countries.find(
      (c) => c.code === code
    );
    if (!country) return;

    setCountryCode(code);
    setCountryName(country.name);

    const controller = new AbortController();

    const fetchCountryWeather = async () => {
      try {
        const requests = country.cities.map(
          (city) => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
              city
            )}&appid=${apiKey}&units=metric`;

            return api.get(url, {
              signal: controller.signal,
            });
          }
        );

        const responses = await Promise.all(
          requests
        );

        const formatted = responses.map(
          ({ data }) => ({
            city: data.name,
            country: data.sys.country,
            description:
              data.weather[0].description,
            temperature: data.main.temp,
            iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          })
        );

        setSelectedCountryWeather(formatted);
        localStorage.setItem(
          "selectedCountryWeather",
          JSON.stringify(formatted)
        );
      } catch (err) {
        if (!axios.isCancel(err)) {
          console.error(err.message);
        }
      }
    };

    fetchCountryWeather();

    return () => controller.abort();
  }, [selectedWeather, apiKey, Countries]);

  return {
    countryCode,
    countryName,
    selectedCountryWeather,
  };
};

/* ================================
  FETCH NEWS
================================ */
const useFetchNews = ({
  countryCode,
  apiKey,
}) => {
  
  const [newsData, setNewsData] = useState(() => {
    const stored = localStorage.getItem("newsData");
    return stored ? JSON.parse(stored) : [];
  });
  const [loading, setLoading] =
    useState(false);
  const [error, setError] = useState(
    null
  );

  useEffect(() => {
    if (!countryCode) return;

    const controller = new AbortController();

    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `https://gnews.io/api/v4/top-headlines?country=${countryCode}&lang=en&max=10&token=${apiKey}`;

        const { data } = await api.get(
          url,
          {
            signal: controller.signal,
          }
        );

        const formatted =
          data.articles.map(
            (article) => ({
              id: article.url,
              title: article.title,
              image: article.image,
              publishedAt:
                article.publishedAt,
              description:
                article.description,
            })
          );

        setNewsData(formatted);
        localStorage.setItem(
          "newsData",
          JSON.stringify(formatted)
        );
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNews();

    return () => controller.abort();
  }, [countryCode, apiKey]);

  return { loading, error, newsData };
};

/* ================================
  EXPORTS
================================ */
export {
  useFetchCityWeather,
  useFetchCountryWeather,
  useFetchNews,
};
