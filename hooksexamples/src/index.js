import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import WeatherMoodWidget from "./WeatherMoodWidget";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherMoodWidget weather="Sunny" />
    <WeatherMoodWidget weather="Rainy" />
    <WeatherMoodWidget weather="Cloudy" />
  </React.StrictMode>
);
