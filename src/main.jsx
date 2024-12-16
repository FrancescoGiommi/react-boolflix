import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";

import * as bootstrap from "bootstrap";

import App from "./App.jsx";
import { ApiContextProvider } from "../context/ApiContext.jsx";
import { useApiContext } from "../context/ApiContext";
useApiContext();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiContextProvider>
      <App />
    </ApiContextProvider>
  </StrictMode>
);
