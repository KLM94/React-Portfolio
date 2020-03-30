import React from "react";
import styles from "../CSS Modules/Header.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <p className={styles.headerText}>{"<Kirsty's NC News/>"}</p>
        <br></br>
        <p className={styles.headerCaption}>
          Bringing you the most weird and wonderful news on the net!
        </p>
      </div>

      <div className={styles.greeting}>
        <em>
          <div>
            Logged In: <b>{props.loggedInUser}</b>
          </div>
        </em>
      </div>
    </header>
  );
};

export default Header;
