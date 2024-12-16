import { createContext, useContext, useState } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const handleData = () => {};
  return <ApiContext.Provider>{children}</ApiContext.Provider>;
};

export const useApiContext = () => useContext(ApiContext);

/*
  const fetchApi = () => {
    fetch(REACT_APP_API_URL)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };*/
