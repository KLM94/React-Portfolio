import React from "react";
import Homepage from "./Components/Homepage";
import { Router } from "@reach/router";
import styles from "./CSS Modules/App.module.css";

class App extends React {
  render() {
    // return <div className={styles.appGrid}>Test.</div>;
    return (
      // <NavBar />
      // <Header />
      <Router>
        <Homepage path="/" />
      </Router>
    );
  }
}

export default App;
