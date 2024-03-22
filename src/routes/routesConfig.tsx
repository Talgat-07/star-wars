import { ReactNode } from "react";
import HomePage from "@pages/HomePage";
import PeoplePage from "@pages/PeoplePage";
import NotFoundPage from "@pages/NotFoundPage";
import CategoryPage from "@pages/CategoryPage";

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
  {
    path: "planets",
    element: <PeoplePage />,
  },
  {
    path: "films",
    element: <PeoplePage />,
  },
  {
    path: "species",
    element: <PeoplePage />,
  },
  {
    path: "starships",
    element: <PeoplePage />,
  },
  {
    path: "vehicles",
    element: <PeoplePage />,
  },
  {
    path: "not-found",
    element: <NotFoundPage />,
  },
  {
    path: "category",
    element: <CategoryPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
