import { createContext, useContext, useState } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [apiListElement, setApiListElement] = useState([]);

  const fetchApi = (term) => {
    const url = "https://api.themoviedb.org/3";

    const fetchConfig = {
      method: "GET",
      header: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTYzODBiYjhlMzgwNDAxOThmZDRhNjkzN2I0NDFkYiIsIm5iZiI6MTczNDM0NTg5OC45NTI5OTk4LCJzdWIiOiI2NzYwMDRhYTk2Y2ZkZGJmMTljY2Q3MmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1drSQJbHNTGRW1TxXeCcSwqlhNgaavFV7pkdJufDkmY",
      },
    };

    fetch(`${url}/search/movie?query=${term}` + fetchConfig)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const apiData = {
    search: fetchApi,
  };
  return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => useContext(ApiContext);
