import styles from "./Header.module.sass";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img__container}
        src="https://letscode-dev.github.io/react-star-wars/static/media/droid.e59cd9ff.svg"
        alt="logo"
      />
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="search">Search</NavLink>
        </li>
        <li>
          <NavLink to="not-found">Not Found</NavLink>
        </li>
        <li>
          <NavLink to="fail">Fail</NavLink>
        </li>
      </ul>
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
