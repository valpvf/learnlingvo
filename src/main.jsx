import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import DataContext from "./DataContext.jsx";
import "normalize.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <DataContext>
    <BrowserRouter basename="/learnlingvo">
      <App />
    </BrowserRouter>
  </DataContext>
  // </React.StrictMode>
);
