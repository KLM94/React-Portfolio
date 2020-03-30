import React from "react";
import styles from "../CSS Modules/Header.module.css";

export const Header = () => {
  return (
    <header>
      <p className={styles.headerText}>{"Kirsty's Portfolio"}</p>
      <br></br>
    </header>
  );
};

export default Header;
