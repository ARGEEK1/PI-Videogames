import React from "react";
import styles from "./AboutMe.module.css"

const AboutMe = () => (

  <div className={styles.mainAboutMe}>
    <div className={styles.titleAboutMe}>
      <h1>About Me</h1>
    </div>
    <div className={styles.presentationContainer}>
      <div className={styles.imgProfileContainer}>
        <img src="picture.jpg" alt="Profile" />
      </div>
      <div className={styles.presentation}>
        I'm Antonio Rodriguez, a Full Stack developer in constant evolution and learning. I am passionate about working in a team to achieve common goals and I enjoy facing challenges and solving problems. I am open and receptive to constructive criticism that allows me to correct mistakes and continue to evolve in my career as a developer. I am committed to excellence and always seek to improve my skills and knowledge to create innovative and effective solutions.
      </div>
    </div>
  </div>
);

export default AboutMe;