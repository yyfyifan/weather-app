export interface ErrorResponse {
  cod: string; // HTTP status
  message: string;
}

export interface DataResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [{ id: number; main: string; description: string; icon: string }];
  base: string; // e.g. "stations"
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number; // e.g. 10000
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number; // e.g. 1683227154
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string; // name of the location
  cod: number; // HTTP status
}
