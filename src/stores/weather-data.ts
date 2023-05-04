import { ErrorResponse, DataResponse } from "../interfaces/weather-data.ts";

type State = { location: string } & (
  | {
      error: null;
      data: DataResponse;
    }
  | {
      error: ErrorResponse;
      data: null;
    }
  | {
      error: null;
      data: null;
    }
);

type Action = { location: string } & (
  | {
      type: "data";
      payload: DataResponse;
    }
  | {
      type: "error";
      payload: ErrorResponse;
    }
  | {
      type: "clear";
    }
);

export const initialState: State = {
  location: "",
  error: null,
  data: null,
};

export function reducer(_: State, action: Action): State {
  switch (action.type) {
    case "data":
      return { location: action.location, error: null, data: action.payload };
    case "error":
      return { location: action.location, error: action.payload, data: null };
    case "clear":
      return { location: action.location, error: null, data: null };
    default:
      throw new Error("Unknown action type");
  }
}
