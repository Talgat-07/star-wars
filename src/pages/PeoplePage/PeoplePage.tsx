import { FC, useEffect } from "react";
import { getPeople } from "@store/features/getPeople/getPeopleSlice.ts";
import PeopleList from "@components/PeoplePage/PeopleList";
import { useAppDispatch, useAppSelector } from "@hooks/redux-hooks.ts";
import { useQueryParams } from "@hooks/useQueryParams.ts";
import PeoplePagination from "@components/PeoplePage/PeoplePagination";
import { withErrorApi } from "@hoc-helpers/withErrorApi.tsx";
import { useUrlCategory } from "@services/getUrlCategory.ts";

let st = false;

const PeoplePage: FC = () => {
  const dispatch = useAppDispatch();
  const num: string = useQueryParams();
  const category: string = useUrlCategory();
  st = useAppSelector((state) => state.getPeople.status);

  useEffect(() => {
    dispatch(
      getPeople({
        category: category,
        num: num,
      }),
    );
  }, [dispatch, num, category]);

  const people = useAppSelector((state) => state.getPeople.people);

  return (
    <>
      <PeoplePagination count={num} />
      {people ? <PeopleList people={people} /> : ""}
    </>
  );
};

export default withErrorApi(PeoplePage, st);
