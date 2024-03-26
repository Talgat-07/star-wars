import { useAppDispatch, useAppSelector } from "@hooks/redux-hooks.ts";
import { useEffect } from "react";
import { getFavorite } from "@store/features/getFavorite/getFavoriteSlice.ts";
import FavoriteList from "@components/FavoritePage/favoriteList";

const FavoritePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavorite());
  }, [dispatch]);

  const people = useAppSelector((state) => state.getFavorite.people);
  return (
    <>
      <FavoriteList items={people} />
    </>
  );
};

export default FavoritePage;
