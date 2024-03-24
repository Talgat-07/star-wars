import { collection, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../firebase.ts";
import { PeopleType } from "@store/features/getPeople/getPeopleSlice.ts";

const arr = ["films", "people", "planets", "species", "starships", "vehicles"];

export const getTestFireBase = async () => {
  const array: Array<PeopleType> = [];
  await Promise.all(
    arr.map(async (el) => {
      const querySnapshot = await getDocs(collection(db, el));
      querySnapshot.forEach((doc) => {
        const data = doc.data() as DocumentData;
        if (data.ifFavorite) {
          const peopleData = data as PeopleType;
          // console.log(peopleData);
          array.push(peopleData);
        }
      });
    }),
  );
  console.log(array);
};
