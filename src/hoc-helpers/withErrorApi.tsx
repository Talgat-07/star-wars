import React from "react";
import { useAppSelector } from "@hooks/redux-hooks.ts";
import { PeopleType } from "@store/features/getPeople/getPeopleSlice.ts";
import ErrorMessage from "@components/ErrorMessage";

type AppProps = {
  people: Array<PeopleType>;
};

export const withErrorApi = (View: React.FC<AppProps>) => {
  return (props: object) => {
    const people = useAppSelector((state) => state.getPeople.people);
    return (
      <>{people ? <View people={people} {...props} /> : <ErrorMessage />}</>
    );
  };
};
