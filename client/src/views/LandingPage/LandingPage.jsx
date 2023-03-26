import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.mainLanding}>
      <div className={styles.titleLanding}>
        <h1>GAMER</h1>
        <h2>WIKI</h2>
      </div>
      <div className={styles.wellcome}>
        Welcome to Gamer Wiki, where you can find information about thousands of video games, you can also add your own games to our growing collection!
      </div>
      <Link to="/home" className={styles.btnStart}>
        <button type="button" className={styles.startButton}>
          <strong>👾PRESS START👾</strong>
          <div className={styles.containerStars}>
            <div className={styles.stars}></div>
          </div>
          <div className={styles.glow}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;