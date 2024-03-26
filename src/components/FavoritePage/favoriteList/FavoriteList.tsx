import styles from "@components/PeoplePage/PeopleList/PeopleList.module.sass";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { PeopleType } from "@store/features/getPeople/getPeopleSlice.ts";
import { FC } from "react";
import { addFireStoreFavorite } from "@services/addFireStoreFavorite.ts";
import { useAppDispatch } from "@hooks/redux-hooks.ts";
import { removeFavoriteState } from "@store/features/getFavorite/getFavoriteSlice.ts";

type AppProps = {
  items: Array<PeopleType>;
};
const FavoriteList: FC<AppProps> = ({ items }) => {
  const dispatch = useAppDispatch();
  const handleFavoriteToggle = async (id: string, category: string) => {
    const r = items.filter((el) => el.id === id && el.category === category);
    dispatch(removeFavoriteState(r[0]));
    await addFireStoreFavorite({ ...r[0], ifFavorite: !r[0].ifFavorite });
  };
  return (
    <ul className={styles.list__container}>
      {items.map(({ img, id, name, category, ifFavorite }, index) => (
        <li key={index} className={styles.list__item}>
          {ifFavorite ? (
            <IconHeartFilled
              color="red"
              onClick={() => handleFavoriteToggle(id, category)}
              size={40}
            />
          ) : (
            <IconHeart
              color="red"
              onClick={() => handleFavoriteToggle(id, category)}
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

export default FavoriteList;
