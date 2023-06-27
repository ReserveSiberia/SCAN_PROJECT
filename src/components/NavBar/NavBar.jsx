import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <Link className={styles.link} to={"/"}>
        Главная
      </Link>
      <Link className={styles.link} to="#">
        Тарифы
      </Link>
      <Link className={styles.link} to="#">
        FAQ
      </Link>
    </>
  );
}

export default NavBar;
