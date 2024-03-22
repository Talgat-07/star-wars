import HomeContent from "@components/HomePage/HomeContent";
import { Cards } from "types/cards.ts";
import styles from "./HomePage.module.sass";

const HomePage = () => {
  const cards: Cards = [
    {
      img: "https://letscode-dev.github.io/react-star-wars/static/media/light-side.eebc5217.jpg",
      text: "Light Side",
      color: "var(--color-light)",
    },
    {
      img: "https://letscode-dev.github.io/react-star-wars/static/media/dark-side.e0f8cab7.jpg",
      text: "Dark Side",
      color: "var(--color-dark)",
    },
    {
      img: "https://letscode-dev.github.io/react-star-wars/static/media/falcon.c1d0a8d1.jpg",
      text: "I'm Han Solo",
      color: "var(--color-neitral)",
    },
  ];
  return (
    <>
      <h1 className="header__text">Choose your side</h1>
      <div className={styles.content}>
        {cards.map((el) => (
          <HomeContent key={el.text} card={el} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
