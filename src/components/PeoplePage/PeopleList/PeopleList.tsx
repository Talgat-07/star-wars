import { FC } from "react";
import { PeopleType } from "../../../features/getPeople/getPeopleSlice.ts";
import styles from "./PeopleList.module.sass";

type AppProps = {
  people: Array<PeopleType>;
};

const PeopleList: FC<AppProps> = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ img, id, name }) => (
        <li key={id} className={styles.list__item}>
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
