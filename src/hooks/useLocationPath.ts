import { useLocation } from "react-router-dom";

export const useLocationPath = () => {
  const urlLocation = useLocation();
  return decodeURI(urlLocation.pathname.substring(1));
};
