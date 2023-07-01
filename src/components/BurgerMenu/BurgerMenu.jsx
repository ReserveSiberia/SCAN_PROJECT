import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import store from "../../store/store.js";
import styles from "./BurgerMenu.module.css";
import NavBar from "../NavBar/NavBar.jsx";

function BurgerMenu(props) {
  const burgerRef = useRef(null);
  const navigation = useNavigate();
  const [menuStatus, setMenuStatus] = useState(store.getState().menuStatus);

  function handleBurgerMenu() {
    store.dispatch({ type: "CHANGE_MENU_STATUS" });
    setMenuStatus(!menuStatus);
  }

  function enterHandler() {
    handleBurgerMenu();
    navigation("/auth");
  }

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
          <NavBar handler={handleBurgerMenu} />
        </nav>
        <div className={styles.mobileAuth}>
          <Link to={"#"} className={styles.mobileRegister}>
            Зарегистрироваться
          </Link>
          <button
            onClick={enterHandler}
            className={styles.mobileEnter}
            to={"/auth"}
          >
            Войти
          </button>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
