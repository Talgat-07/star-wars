import { useLocation } from "react-router-dom";

export const useUrlCategory = () => {
  const a = useLocation().pathname;
  return a.replace(/\//g, "");
};
