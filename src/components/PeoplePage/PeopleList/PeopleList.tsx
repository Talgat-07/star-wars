import { FC } from "react";
import styles from "./PeopleList.module.sass";
import {
  favoriteFunc,
  PeopleType,
} from "@store/features/getPeople/getPeopleSlice.ts";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useAppDispatch } from "@hooks/redux-hooks.ts";

type AppProps = {
  people: Array<PeopleType>;
};

const PeopleList: FC<AppProps> = ({ people }) => {
  const dispatch = useAppDispatch();

  return (
    <ul className={styles.list__container}>
      {people.map(({ img, id, name, ifFavorite }) => (
        <li key={id} className={styles.list__item}>
          {ifFavorite ? (
            <IconHeartFilled
              color="red"
              onClick={() => dispatch(favoriteFunc(id))}
              size={40}
            />
          ) : (
            <IconHeart
              color="red"
              onClick={() => dispatch(favoriteFunc(id))}
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
