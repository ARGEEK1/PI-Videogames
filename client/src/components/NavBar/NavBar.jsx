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
          <Link to="/home" className={`${styles.logo} ${styles.navLink}`}><img src="https://lh3.googleusercontent.com/cLgvg_H9Pm4UURbSRySC6B9SUQtLs-pB1cE7V71x7m87V-eGsv2jLI-xeIF-m4toM4ipE13485OmzisiHLfVXz5Ghe26C2PdPbQ3SjyMFsve4pcMoo39SRfngSfE1gZJZNo3nrh-nv6UakxXdDQ1XTd1F2hbM26ZFCCrAUpFl8RQK4ILcugW-q2rNRGcr9y2r486BN8IKHZ96yczR48CVeLNab8lpf3qR9G1ybgBPhEJuYjzy7yu2Mvket7IW3-xg4dsFo3yKrGJWWFiO3DCwD2nz_F-_eiyOc_fFFqyzGZ_vedojQXhQZHJXRbjyi5XJglghyo1eYQCLIYUGr5TdeMUoffu5KQi8R6u3LyYDrsGA_o5tPkCav5aoYSFTLzNOaiIJ7N_JzUKaNUGReifO11KW7fjMXrWs1VgV-DYSi99U2_4t2AOa86gtFWsPd3KHB6klnnZ4j5g3FYYL2Sr9uW8cCYqMOgq-aB-p89ZtOuzDa5YAgnl8-gg_cd3hBmn0WE-VuAqT6zMGK8QABABm_ruSPNUu1nAnzzfg9HCtBwMiihNykp_pDHRidNdzQPbDSoOb5lJC0qr_m6VhQBbjsoEDWyqE9EyUFHXL-K_UyryJ25mSzPdAjCoSBKFldD0y_TaVzrpqXJOTUTeWRUVWvuyZWXOA9NXJExeRscF9VFdBHJLJFsfjk4Z6H_H1OUCfjEfI_OB1ToK_XVL6tmUpx23spWqio40wNZaX5s8ssfa7IaGI-pWgmwe7ZDHV3srZb6QIjXQN9AH_C5eXE0wIXeUQm1ratZuxsAieMJQrfC1oUIBSL4unh-kzaPJQ-pzHY0kJpHMd6rKy81QzdbIaDldNwZVpRqeFRjwFux970oCExT77Ip61CdkCjcLoLWvVRTv67oYpJcWvnoRfBs70NkuogI66b5BvqkIHMeqIE1jULiOAahHelVLD6MTKaCZA9yPEyVdN-W27GjMW8Q=w498-h148-s-no?authuser=0" alt="logo" /></Link>
          <SearchBar />
          <button onClick={() => handlerMenu()} className={styles.navToggle} aria-label="open menu">
            <svg width="256px" height="256px" viewBox="0 0 20.00 20.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#520044" strokeWidth="0.0002"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M3 11h14V9H3v2zm0 5h14v-2H3v2zM3 4v2h14V4H3z"></path> </g> </g></svg>
          </button>
          <ul className={open ? `${styles.navMenu} ${styles.navMenuVisible}` : styles.navMenu}>
            <li className={styles.navMenuIten}>
              <Link to="/about" className={`${styles.navMenuLink} ${styles.navLink}`}>About Me</Link>
            </li>
            <li className={styles.navMenuIten}>
              <Link to="/" className={`${styles.navMenuLink} ${styles.navLink}`}>Exit</Link>
            </li>
            <li className={styles.navMenuIten}>
              <Link to="/home" className={`${styles.navMenuLink} ${styles.navLink} ${styles.navMenuLinkActive}`}>HOME</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;