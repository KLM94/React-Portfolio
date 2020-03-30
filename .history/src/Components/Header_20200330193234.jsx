import React from "react";
import styles from "../CSS Modules/Header.module.css";
import NavBar from "./NavBar";

export const Header = () => {
  return (
    <header>
      <h1 className={styles.headerText}>
        {"Kirsty McGlynn"}
        <br></br>
        <div className={styles.subheading}>Junior Software Developer</div>
        <NavBar />
      </h1>

      {/* <h2>Junior Software Developer</h2> */}
    </header>
  );
};

export default Header;
