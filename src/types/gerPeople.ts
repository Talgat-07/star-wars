import { PeopleT } from "types/people.ts";

export type GerPeopleType = {
  people: Array<PeopleT>;
  previous: string | null;
  next: string | null;
  category: string;
};
