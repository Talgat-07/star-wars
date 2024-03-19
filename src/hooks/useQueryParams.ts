import { useLocation } from "react-router-dom";

export const useQueryParams = (): string => {
  const a = new URLSearchParams(useLocation().search).get("page");
  if (!a) return "1";
  return a;
};
