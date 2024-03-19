import notFoundImg from "@assets/image/not-found.png";
import { useLocation } from "react-router-dom";
import styles from "./NotFoundPage.module.sass";

const NotFoundPage = () => {
  const location = useLocation();
  return (
    <>
      <img className={styles.img} src={notFoundImg} alt="Not Found" />
      <p className={styles.text}>
        No match for <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;
