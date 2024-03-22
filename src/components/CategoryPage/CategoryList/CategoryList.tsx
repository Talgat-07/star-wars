import { FC } from "react";
import styles from "@components/PeoplePage/PeopleList/PeopleList.module.sass";
import { PeopleType } from "@store/features/getPeople/getPeopleSlice.ts";

type AppProps = {
  people: Array<PeopleType>;
};

const CategoryList: FC<AppProps> = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ img, id, name, url }) => (
        <li key={id} className={styles.list__item}>
          <a href={url}>
            <img className={styles.person__photo} src={img} alt={name} />
            <p>{name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
