import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BurgerMenu.module.css";

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
          <Link className={styles.linkMobile} to={" "}>
            Главная
          </Link>
          <Link className={styles.linkMobile} to="/tariffs">
            Тарифы
          </Link>
          <Link className={styles.linkMobile} to="/faq">
            FAQ
          </Link>
        </nav>
        <div className={styles.mobileAuth}>
          <button className={styles.mobileRegister}>Зарегистрироваться</button>
          <Link className={styles.mobileEnter} to={""}>
            Войти
          </Link>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
