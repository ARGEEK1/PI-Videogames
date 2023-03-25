import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = (props) => {
  const { games, currentPage, itemsPerPage } = props;

  return (
    <div className={styles.cards}>
      {
        games && games.slice(
          (currentPage - 1) * itemsPerPage,
          (currentPage - 1) * itemsPerPage + itemsPerPage
        ).map((game) => {
          return (
            <Card
              key={game.id}
              id={game.id}
              image={game.image}
              name={game.name}
              genres={game.genres}
            />
          )
        })
      }
    </div>
  );
};

export default Cards;