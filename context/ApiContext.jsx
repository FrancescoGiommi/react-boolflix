import { createContext, useContext } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const title = "Booflix";

  return <ApiContext.Provider value={title}>{children}</ApiContext.Provider>;
};
