import React, { Component } from "react";
import styles from "../CSS Modules/Homepage.module.css";
import KM from "../Images/Kirsty McGlynn.png";

class Homepage extends Component {
  render() {
    return (
      <div>
        <img
          className={styles.img}
          src={KM}
          alt={"logo"}
          // width="400"
          // height="400"
        ></img>
      </div>
    );
  }
}

export default Homepage;
