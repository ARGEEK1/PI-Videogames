import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = (props) => {

  
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to='/home' className={styles.navlink}><img className={styles.logo} src='/images/logo.png' alt="logo" /></Link>
          <div className={styles.search}>
            <SearchBar onSearch={props.onSearch} />
          </div>
          <div>
          </div>
          <Link to='/'><button className={styles.navBtn}>Create</button></Link>
          <Link to='/home'><button className={styles.navBtn}>Home</button></Link>
        </nav>
      </header>
    </div>
  )
};

export default NavBar;