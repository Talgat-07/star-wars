import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { useAppSelector } from "@hooks/redux-hooks.ts";
import styles from "./PeoplePagination.module.sass";

type AppProps = {
  count: string;
};

const PeoplePagination: FC<AppProps> = ({ count }) => {
  const nuv = useNavigate();
  const next = useAppSelector((state) => state.getPeople.next);
  const previous = useAppSelector((state) => state.getPeople.previous);

  return (
    <div className={styles.pagination}>
      <button
        {...(!previous ? { disabled: true } : "")}
        onClick={() => nuv(`/people/?page=${+count - 1}`)}
      >
        Previous
      </button>
      <button
        {...(!next ? { disabled: true } : "")}
        onClick={() => nuv(`/people/?page=${+count + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default PeoplePagination;
