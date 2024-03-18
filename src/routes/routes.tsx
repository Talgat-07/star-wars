import { ReactNode } from "react";
import HomePage from "../pages/HomePage";
import PeoplePage from "../pages/PeoplePage";

type RouteType = {
  path: string;
  element: ReactNode;
};

export const routes: Array<RouteType> = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "people",
    element: <PeoplePage />,
  },
];
