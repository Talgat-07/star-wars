import { FC, useEffect } from "react";
import {
  getPeople,
  PeopleType,
} from "@store/features/getPeople/getPeopleSlice.ts";
import PeopleList from "@components/PeoplePage/PeopleList";
import { useAppDispatch } from "@hooks/redux-hooks.ts";
import { API_PEOPLE } from "@constants/api.ts";
import { useQueryParams } from "@hooks/useQueryParams.ts";

type AppProps = {
  people: Array<PeopleType>;
};
const PeoplePage: FC<AppProps> = ({ people }) => {
  const dispatch = useAppDispatch();
  const num: string = useQueryParams();

  useEffect(() => {
    dispatch(getPeople(API_PEOPLE + num));
  }, [dispatch, num]);

  return (
    <>
      <h1 className="header__text">People</h1>
      <PeopleList people={people} />
    </>
  );
};

export default PeoplePage;
