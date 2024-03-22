import styles from "./Header.module.sass";
import { Link } from "react-router-dom";
import HeaderList from "@components/Header/HeaderList";

const Header = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img__container}
        src="https://letscode-dev.github.io/react-star-wars/static/media/droid.e59cd9ff.svg"
        alt="logo"
      />
      <HeaderList />
      <div className={styles.bookmark}>
        <Link to="/">
          <span>0</span>
          <img
            src="https://letscode-dev.github.io/react-star-wars/static/media/bookmark.b17a5944.svg"
            alt="bookmark"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
