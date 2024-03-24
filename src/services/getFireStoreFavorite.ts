import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.ts";

type AppType = {
  c: string;
  id: string;
};
export const getFireStoreFavorite = async ({ c, id }: AppType) => {
  console.log(db);
  const docRef = doc(db, c, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};
