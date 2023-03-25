import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <h3>
          By 🚀 Antonio Rodríguez.
        </h3>
        <a target="_blank" href="https://github.com/ARGEEK1">
          <svg width="256px" height="256px" viewBox="0 0 16.00 16.00" xmlns="http://www.w3.org/2000/svg" fill="#fa005a" stroke="#fa005a" stroke-width="0.00016"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"></path></g></svg>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/antonio-rodr%C3%ADguez-toro/">
          <svg fill="#fa005a" width="256px" height="256px" viewBox="0 0 24.00 24.00" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" stroke="#fa005a" stroke-width="0.43200000000000005"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8 19h-3v-10h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165v6.262h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03v5.647z"></path><ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5"></ellipse></g></svg>
        </a>
      </div>
      <div className={styles.footer}>
        <p>
          &copy; 2023 <b> Gamer wiki</b> - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;