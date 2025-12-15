import React, { useState, useEffect } from "react";

import sunnyImg from "./sunny.png";
import rainyImg from "./rainy.png";
import cloudyImg from "./cloudy.png";

function WeatherMoodWidget(props) {
  const [count, setCount] = useState(0);
  const [img, setImg] = useState(sunnyImg);

  useEffect(() => {
    if (props.weather === "Sunny") setImg(sunnyImg);
    else if (props.weather === "Rainy") setImg(rainyImg);
    else if (props.weather === "Cloudy") setImg(cloudyImg);
  }, [props.weather]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div
      style={{
        margin: "30px auto",
        padding: "20px",
        width: "300px",
        textAlign: "center",
        border: "1px solid gray",
        borderRadius: "10px",
      }}
    >
      <h2>{props.weather}</h2>

      {/* Weather Image */}
      <img
        src={img}
        alt={props.weather}
        style={{ width: "80px", marginBottom: "15px" }}
      />

      {/* Click Counter Button */}
      <button
        onClick={handleClick}
        style={{
          fontSize: "16px",
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        Clicked {count} times
      </button>
    </div>
  );
}

export default WeatherMoodWidget;
