import Card from "../Card/Card";
import styles from "./Cards.module.css";


const Cards = (props) => {
  const { games } = props;

  return (
    <div className={styles.cards}>
      {
        games?.map((game) => {
          return (
            <Card key={game.id} id={game.id} image={game.image} name={game.name} genres={game.genres} />
          )
        })
      }
    </div>
  )
};

export default Cards;