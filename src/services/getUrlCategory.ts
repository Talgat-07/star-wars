import { useLocation } from "react-router-dom";

export const useUrlCategory = () => {
  const a = new URLSearchParams(useLocation().search).get("https://");
  console.log(a);
};
