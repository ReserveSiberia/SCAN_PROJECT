import React from "react";
import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import styles from "./MainPage.module.css";

function MainPage() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Header />
        <Main />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default MainPage;
