import React from "react";
import styles from "../CSS Modules/NavBar.module.css";

export const NavBar = () => {
  return (
    <main className={styles.nav}>
      <div className={styles.about}>{"About Me"}</div>
      <div className={styles.projects}>{"Projects"}</div>
      <div className={styles.contact}>{"Contact"}</div>
    </main>
  );
};

export default NavBar;
