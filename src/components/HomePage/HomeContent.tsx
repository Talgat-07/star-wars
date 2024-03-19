import { FC } from "react";
import { CardsItem } from "types/cards.ts";
import styles from "./HomeContent.module.sass";

const HomeContent: FC<{ card: CardsItem }> = ({ card }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={card.img} alt={card.text} />
      <p className={styles.card__text} style={{ color: card.color }}>
        {card.text}
      </p>
    </div>
  );
};

export default HomeContent;
