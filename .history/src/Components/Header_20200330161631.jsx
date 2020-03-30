import React from "react";
import styles from "../CSS Modules/Header.module.css";

export const Header = () => {
  return (
    <header>
      <h1 className={styles.headerText}>
        {"Kirsty McGlynn"}Junior Software Developer
      </h1>
      <br></br>
      {/* <h2>Junior Software Developer</h2> */}
    </header>
  );
};

export default Header;
