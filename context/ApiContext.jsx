import { createContext, useContext, useState } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [apiListElement, setApiListElement] = useState([]);

  const url = "https://api.themoviedb.org/3";
  const header = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTYzODBiYjhlMzgwNDAxOThmZDRhNjkzN2I0NDFkYiIsIm5iZiI6MTczNDM0NTg5OC45NTI5OTk4LCJzdWIiOiI2NzYwMDRhYTk2Y2ZkZGJmMTljY2Q3MmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1drSQJbHNTGRW1TxXeCcSwqlhNgaavFV7pkdJufDkmY",
  };

  const fetchApi = () => {
    fetch(url + header)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const apiData = {
    search: fetchApi,
  };
  return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => useContext(ApiContext);
