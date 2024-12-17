import { createContext, useContext, useState } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  /* Fetch film */
  const fetchMovie = (term) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${term}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTYzODBiYjhlMzgwNDAxOThmZDRhNjkzN2I0NDFkYiIsIm5iZiI6MTczNDM0NTg5OC45NTI5OTk4LCJzdWIiOiI2NzYwMDRhYTk2Y2ZkZGJmMTljY2Q3MmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1drSQJbHNTGRW1TxXeCcSwqlhNgaavFV7pkdJufDkmY",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setApiData({ ...apiData, movies: data.results }));
  };

  /* Fetch series */
  const fetchSeries = (term) => {
    const url = `https://api.themoviedb.org/3/search/tv?query=${term}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTYzODBiYjhlMzgwNDAxOThmZDRhNjkzN2I0NDFkYiIsIm5iZiI6MTczNDM0NTg5OC45NTI5OTk4LCJzdWIiOiI2NzYwMDRhYTk2Y2ZkZGJmMTljY2Q3MmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1drSQJbHNTGRW1TxXeCcSwqlhNgaavFV7pkdJufDkmY",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setApiData({ ...apiData, series: data.results }));
  };

  const [apiData, setApiData] = useState({
    movies: [],
    searchMovie: fetchMovie,
    searchSeries: fetchSeries,
    series: [],
  });
  return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => useContext(ApiContext);
