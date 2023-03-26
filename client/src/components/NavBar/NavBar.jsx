import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {

  const [open, setOpen] = useState(false);

  const handlerMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/home" className={`${styles.logo} ${styles.navLink}`}><img src="gamer.jpg" alt="logo" /></Link>
          <SearchBar />
          <button onClick={() => handlerMenu()} className={styles.navToggle} aria-label="open menu">
            <svg width="256px" height="256px" viewBox="0 0 20.00 20.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#520044" strokeWidth="0.0002"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M3 11h14V9H3v2zm0 5h14v-2H3v2zM3 4v2h14V4H3z"></path> </g> </g></svg>
          </button>
          <ul className={open ? `${styles.navMenu} ${styles.navMenuVisible}` : styles.navMenu}>
            <li className={styles.navMenuIten}><Link to="/" className={`${styles.navMenuLink} ${styles.navLink}`}>Exit</Link>
            </li>
            <li className={styles.navMenuIten}><Link to="/home" className={`${styles.navMenuLink} ${styles.navLink} ${styles.navMenuLinkActive}`}>HOME</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;