import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "normalize.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { auth } from "./firebase.js";

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context.Provider value={{ auth }}>
      <BrowserRouter basename="/learnlingvo">
        <App />
      </BrowserRouter>
    </Context.Provider>
    //{" "}
  </React.StrictMode>
);
