import React from "react";
import styles from "../CSS Modules/Homepage.module.css";
import NavBar from "./NavBar";

export const Homepage = () => {
  return (
    <header>
      <h1 className={styles.headerText}>
        {"Kirsty McGlynn"}
        <br></br>
        <div className={styles.subheading}>Junior Software Developer</div>
        <div className={styles.nav}>
          <NavBar />
        </div>
      </h1>

      {/* <h2>Junior Software Developer</h2> */}
    </header>
  );
};

export default Homepage;
