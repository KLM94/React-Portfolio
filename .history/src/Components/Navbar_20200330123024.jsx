import React from "React";
import styles from "../CSS Modules/NavBar.module.css";

export const NavBar = () => {
  return (
    <header>
      <p className={styles.NavBarText}>{"My Nav Bar will be here!"}</p>
      <br></br>
    </header>
  );
};

export default NavBar;
