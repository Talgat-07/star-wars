import { useAppDispatch, useAppSelector } from "@hooks/redux-hooks.ts";
import CategoryList from "@components/CategoryPage/CategoryList";
import { useEffect } from "react";
import { getCategory } from "@store/features/getCategory/getCategorySlice.ts";
import { HTTPS, SWAPI_ROOT } from "@constants/api.ts";
import { withErrorApi } from "@hoc-helpers/withErrorApi.tsx";

let st = false;

const CategoryPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategory(HTTPS + SWAPI_ROOT));
  }, [dispatch]);
  st = useAppSelector((state) => state.getCategory.status);
  const { category, categoryData } = useAppSelector(
    (state) => state.getCategory,
  );
  console.log(categoryData, category);

  return (
    <>
      <p className="header__text">Category</p>
      <CategoryList people={categoryData} />
    </>
  );
};

export default withErrorApi(CategoryPage, st);
