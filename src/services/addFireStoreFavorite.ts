import { PeopleType } from "@store/features/getPeople/getPeopleSlice.ts";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.ts";

export const addFireStoreFavorite = async (item: PeopleType) => {
  try {
    await setDoc(doc(db, item.category, item.id), {
      ...item,
      name: item.name === undefined ? "" : item.name,
    });
  } catch (err) {
    console.log(err);
  }
};
