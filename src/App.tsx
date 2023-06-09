import { useEffect, useReducer } from "react";
import GlobalStyle from "./GlobalStyle.tsx";
import LocationSearchBox from "./components/LocationSearchBox.tsx";
import Container from "./components/layouts/Container.tsx";
import { initialState, reducer } from "./stores/weather-data.ts";
import NotFound from "./components/NotFound.tsx";
import { DataResponse, ErrorResponse } from "./interfaces/weather-data.ts";
import WeatherBox from "./components/WeatherBox.tsx";
import { useLocationPath } from "./hooks/useLocationPath.ts";

function App() {
  // TODO: Move the weather data into the 'WeatherBox' component.
  const [state, dispatch] = useReducer(reducer, initialState);
  const locationPath = useLocationPath();

  async function fetchWeatherData(location: string) {
    if (location.trim().length === 0) {
      dispatch({ type: "clear", location: location });
      return;
    }

    const response = await fetch(
      // TODO: Hide the API key with a backend service.
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=fefc711a78ac0b1e0a87dda4633cc9d8`
    );
    const data = await response.json();
    if (data.cod === 200) {
      dispatch({ type: "data", payload: data as DataResponse, location: location });
    } else {
      dispatch({ type: "error", payload: data as ErrorResponse, location: location });
    }
  }

  useEffect(() => {
    fetchWeatherData(locationPath);
  }, [locationPath]);

  return (
    <Container>
      <GlobalStyle />

      <LocationSearchBox />
      {state.error && <NotFound location={state.location} />}
      {state.data && <WeatherBox data={state.data} />}
    </Container>
  );
}

export default App;
