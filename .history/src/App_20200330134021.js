import React, { Component } from "react";
import Homepage from "./Components/Homepage";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import { Router } from "@reach/router";
import styles from "./CSS Modules/App.module.css";
import HorizontalColours from "./Images/HorizontalColours.jpeg";

class App extends Component {
  render() {
    // return <div className={styles.appGrid}>Test.</div>;
    return (
      <main className={styles.body}>
        <div className={styles.container}></div>
        {/* <div className={styles.pictures}>
          <img
            className={styles.img}
            src={HorizontalColours}
            alt={"background"}
            width="400"
            height="400"
          ></img>
        </div> */}
        <Header />
        <NavBar />
        <Router>
          <Homepage path="/" />
        </Router>
      </main>
    );
  }
}

export default App;
