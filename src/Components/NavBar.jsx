import React from "react";
import styles from "../CSS Modules/NavBar.module.css";
import { Link } from "@reach/router";

export const NavBar = () => {
  return (
    // <main className={styles.nav}>
    //   <div className={styles.about}>{"About Me"}</div>
    //   <div className={styles.projects}>{"Projects"}</div>
    //   <div className={styles.contact}>{"Contact"}</div>
    // </main>

    <nav id="nav">
      <div className={styles.btnContainer}>
        <Link to="/">
          <button className={styles.navBtn}>About Me</button>
        </Link>
        <Link to="/projects">
          <button className={styles.navBtn}>Projects</button>
        </Link>
        <Link to="/contact">
          <button className={styles.navBtn}>Contact</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
