import React from "react";
import { css } from "@emotion/react";
import { DataResponse } from "../interfaces/weather-data.ts";
import { FaWind, FaWater } from "react-icons/all";

const childBase = css`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100px;

  svg {
    color: #06283d;
    font-size: 26px;
    margin-right: 10px;
    margin-top: 6px;
  }

  span {
    color: #06283d;
    font-size: 22px;
    font-weight: 500;
  }

  p {
    color: #06283d;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Humidity: React.FC<{ humidity: number }> = ({ humidity }) => {
  return (
    <div
      css={css`
        ${childBase};
        padding-left: 20px;
        justify-content: flex-start;
      `}>
      <FaWater />
      <div className="text">
        <span>{humidity}</span>
        <p>Humidity</p>
      </div>
    </div>
  );
};

const Wind: React.FC<{ speed: number }> = ({ speed }) => {
  return (
    <div
      css={css`
        ${childBase};
        padding-right: 20px;
        justify-content: flex-end;
      `}>
      <FaWind />
      <div className="text">
        <span>{speed}</span>
        <p>Wind Speed</p>
      </div>
    </div>
  );
};

const WeatherDetails: React.FC<{ data: DataResponse }> = ({ data }) => {
  return (
    <div
      className="weather-details"
      css={css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
      `}>
      <Humidity humidity={data.main.humidity} />
      <Wind speed={data.wind.speed} />
    </div>
  );
};
WeatherDetails.displayName = "WeatherDetails";
export default WeatherDetails;
