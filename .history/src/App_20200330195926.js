import React, { Component } from "react";
import Homepage from "./Components/Homepage";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import { Router } from "@reach/router";
import styles from "./CSS Modules/App.module.css";

class App extends Component {
  render() {
    // return <div className={styles.appGrid}>Test.</div>;
    return (
      <main className={styles.body}>
        {/* <div className={styles.pictures}>
          <img
            className={styles.img}
            src={HorizontalColours}
            alt={"background"}
            width="400"
            height="400"
          ></img>
        </div> */}
        <Homepage path="/" />
        <NavBar />
        <Router>
          <Homepage path="/" />
          <Projects path="/projects" />
          {/* <Contact path="/contact" /> */}
        </Router>
      </main>
    );
  }
}

export default App;
