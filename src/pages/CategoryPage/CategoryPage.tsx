import { useAppDispatch, useAppSelector } from "@hooks/redux-hooks.ts";
import CategoryList from "@components/CategoryPage/CategoryList";
import { useEffect } from "react";
import { getCategory } from "@store/features/getCategory/getCategorySlice.ts";
import { HTTPS, SWAPI_ROOT } from "@constants/api.ts";

const CategoryPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategory(HTTPS + SWAPI_ROOT));
  }, [dispatch]);
  const { categoryData } = useAppSelector((state) => state.getCategory);

  return (
    <>
      <p className="header__text">Category</p>
      <CategoryList people={categoryData} />
    </>
  );
};

export default CategoryPage;
