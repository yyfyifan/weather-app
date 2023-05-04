import { DataResponse } from "../interfaces/weather-data.ts";
import React from "react";
import WeatherDetails from "./WeatherDetails.tsx";
import WeatherSummary from "./WeatherSummary.tsx";

interface Props {
  data: DataResponse;
}

const WeatherBox: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <WeatherSummary data={data} />
      <WeatherDetails data={data} />
    </div>
  );
};
WeatherBox.displayName = "WeatherBox";
export default WeatherBox;
