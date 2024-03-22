import { FC, useEffect } from "react";
import { getPeople } from "@store/features/getPeople/getPeopleSlice.ts";
import PeopleList from "@components/PeoplePage/PeopleList";
import { useAppDispatch, useAppSelector } from "@hooks/redux-hooks.ts";
import { API_PEOPLE } from "@constants/api.ts";
import { useQueryParams } from "@hooks/useQueryParams.ts";
import PeoplePagination from "@components/PeoplePage/PeoplePagination";
import { withErrorApi } from "@hoc-helpers/withErrorApi.tsx";
import { useUrlCategory } from "@services/getUrlCategory.ts";

let st = false;

const PeoplePage: FC = () => {
  const dispatch = useAppDispatch();
  const num: string = useQueryParams();
  console.log(useUrlCategory());
  st = useAppSelector((state) => state.getPeople.status);

  useEffect(() => {
    dispatch(getPeople(API_PEOPLE + num));
  }, [dispatch, num]);

  const people = useAppSelector((state) => state.getPeople.people);

  return (
    <>
      <PeoplePagination count={num} />
      {people ? <PeopleList people={people} /> : ""}
    </>
  );
};

export default withErrorApi(PeoplePage, st);
