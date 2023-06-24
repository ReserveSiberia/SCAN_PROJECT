import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BurgerMenu.module.css";
import NavBar from "../NavBar/NavBar.jsx";

function BurgerMenu(props) {
  const burgerRef = useRef(null);
  const [menuStatus, setMenuStatus] = useState(false);

  function handleBurgerMenu() {
    if (menuStatus === false) {
      setMenuStatus(true);
    } else {
      setMenuStatus(false);
    }
  }
  console.log(menuStatus);
  return (
    <>
      <div
        className={menuStatus ? styles.menuButtonOpened : styles.menuButton}
        onClick={handleBurgerMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        ref={burgerRef}
        className={
          menuStatus ? styles.mobileMenuVisible : styles.mobileMenuHidden
        }
      >
        <nav className={styles.navMobile}>
          <NavBar />
        </nav>
        <div className={styles.mobileAuth}>
          <Link to={"#"} className={styles.mobileRegister}>
            Зарегистрироваться
          </Link>
          <Link className={styles.mobileEnter} to={"#"}>
            Войти
          </Link>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
