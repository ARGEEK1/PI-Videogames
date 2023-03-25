import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={styles.card} key={props.id}>
      <Link className={styles.link} to={`/detail/${props.id}`}>
      <img className={styles.imgCard}src={props.image} alt={props.name} />
      <div className={styles.cardInfo}>
        <div className={styles.cardText}>
          <p className={styles.textTitle}>{props.name}</p>
          {
            props.genres.map((gem,i) => {
              return (
                <p key={i} className={styles.textSubtitle}>{gem.name}</p>
              )
            })
          }
        </div>
        <div className={styles.cardIcon}>
          <svg viewBox="0 0 28 25" width="70" height="70">
            <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" fill="#fa005a"></path>
          </svg>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;