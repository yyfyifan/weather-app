import { DataResponse } from "../interfaces/weather-data.ts";
import React from "react";
import WeatherDetails from "./WeatherDetails.tsx";
import WeatherSummary from "./WeatherSummary.tsx";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  data: DataResponse;
}

const WeatherBox: React.FC<Props> = ({ data }) => {
  const springs = useSpring({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    delay: 100,
    config: {
      duration: 300,
    },
  });

  return (
    <animated.div style={{ ...springs }}>
      <WeatherSummary data={data} />
      <WeatherDetails data={data} />
    </animated.div>
  );
};
WeatherBox.displayName = "WeatherBox";
export default WeatherBox;
