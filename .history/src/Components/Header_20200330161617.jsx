import React from "react";
import styles from "../CSS Modules/Header.module.css";

export const Header = () => {
  return (
    <header>
      <h1 className={styles.headerText}>{"Kirsty McGlynn"
       <br></br>
       <p>Junior Software Developer</p>}</h1>
     
    </header>
  );
};

export default Header;
