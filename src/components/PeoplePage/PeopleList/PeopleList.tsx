import { FC } from "react";
import styles from "./PeopleList.module.sass";
import {
  favoriteFunc,
  PeopleType,
} from "@store/features/getPeople/getPeopleSlice.ts";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "@hooks/redux-hooks.ts";
import {
  addFavoriteState,
  removeFavoriteState,
} from "@store/features/getFavorite/getFavoriteSlice.ts";

type AppProps = {
  people: Array<PeopleType>;
};

const PeopleList: FC<AppProps> = ({ people }) => {
  const dispatch = useAppDispatch();
  const people2 = useAppSelector((state) => state.getPeople.people);

  const handleFavoriteToggle = (id: string) => {
    dispatch(favoriteFunc(id));
    const item = people2.find((el) => el.id === id);
    if (item) {
      item.ifFavorite
        ? dispatch(removeFavoriteState(item))
        : dispatch(addFavoriteState(item));
    }
  };

  return (
    <ul className={styles.list__container}>
      {people.map(({ img, id, name, ifFavorite }) => (
        <li key={id} className={styles.list__item}>
          {ifFavorite ? (
            <IconHeartFilled
              color="red"
              onClick={() => handleFavoriteToggle(id)}
              size={40}
            />
          ) : (
            <IconHeart
              color="red"
              onClick={() => handleFavoriteToggle(id)}
              size={40}
            />
          )}
          <a href="#">
            <img className={styles.person__photo} src={img} alt={name} />
            <p>{name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
