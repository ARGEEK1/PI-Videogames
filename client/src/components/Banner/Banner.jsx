import React from "react";
import styles from "./Banner.module.css"

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.img}>
        <img
          src="banner1.jpg"
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;