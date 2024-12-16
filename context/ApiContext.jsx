import { createContext, useContext } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const pageTitle = {
    title: "Booflix",
  };

  return (
    <ApiContext.Provider value={pageTitle}>{children}</ApiContext.Provider>
  );
};
