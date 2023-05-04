import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { DataResponse } from "../interfaces/weather-data.ts";

const determineImagePath = (weather: string) => {
  let imageSrc = "";
  switch (weather) {
    case "Clear":
      imageSrc = "/clear.png";
      break;
    case "Rain":
      imageSrc = "/rain.png";
      break;
    case "Snow":
      imageSrc = "/snow.png";
      break;
    case "Clouds":
      imageSrc = "/cloud.png";
      break;
    case "Haze":
      imageSrc = "/mist.png";
      break;
    default:
      imageSrc = "";
  }
  return imageSrc;
};

const WeatherImage: React.FC<{ weather: string }> = ({ weather }) => {
  const [weatherImage, setWeatherImage] = useState("");

  // Import the image based on the weather description keyword.
  useEffect(() => {
    setWeatherImage(determineImagePath(weather));
  }, [weather]);

  return (
    <img
      src={weatherImage}
      alt="weather main"
      css={css`
        width: 60%;
        margin-top: 30px;
      `}
    />
  );
};
const Temperature: React.FC<{ temperature: number }> = ({ temperature }) => {
  return (
    <p
      css={css`
        position: relative;
        color: #06283d;
        font-size: 4rem;
        font-weight: 800;
        margin-top: 30px;
        margin-left: -16px;
      `}>
      {temperature}
      <span
        css={css`
          position: absolute;
          margin-left: 4px;
          font-size: 1.5rem;
        `}>
        °C
      </span>
    </p>
  );
};
const Description: React.FC<{ desc: string }> = ({ desc }) => {
  return (
    <p
      css={css`
        color: #06283d;
        font-size: 22px;
        font-weight: 500;
        text-transform: capitalize;
      `}>
      {desc}
    </p>
  );
};
const WeatherSummary: React.FC<{ data: DataResponse }> = ({ data }) => {
  return (
    <div
      css={css`
        text-align: center;
      `}>
      <WeatherImage weather={data.weather[0].main} />
      <Temperature temperature={data.main.temp} />
      <Description desc={data.weather[0].description} />
    </div>
  );
};
WeatherSummary.displayName = "WeatherSummary";
export default WeatherSummary;
