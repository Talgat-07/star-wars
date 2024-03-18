import { FC, useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks.ts";
import {
  getPeople,
  PeopleType,
} from "../../features/getPeople/getPeopleSlice.ts";
import PeopleList from "../../components/PeoplePage/PeopleList";

type AppProps = {
  people: Array<PeopleType>;
};
const PeoplePage: FC<AppProps> = ({ people }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  return (
    <>
      <h1>hello</h1>
      <PeopleList people={people} />
    </>
  );
};

export default PeoplePage;
