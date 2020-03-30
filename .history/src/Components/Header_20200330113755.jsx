import React from "react";
import styles from "../CSS Modules/Header.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <p className={styles.headerText}>{"Kirsty's Portfolio"}</p>
        <br></br>
      </div>

      <div className={styles.greeting}></div>
    </header>
  );
};

export default Header;
