import React, { useRef, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../assets/images/Logo-image.svg";
import LogoInverted from "../../assets/images/Logo-image-inverted.svg";
import MainPage from "../../pages/MainPage/MainPage.jsx";
import Photo from "../../assets/images/Avatar4.jpg";
import Loader from "../../components/Loader/Loader.jsx";

function Header() {
  const [isAuth, setIsAuth] = useState(true);
  const [companiesUsed, setCompaniesUsed] = useState(0);
  const [companiesLimit, setCompaniesLimit] = useState(100);
  const [usersName, setUsersName] = useState("John Doe");
  const [usersAvatar, setUsersAvatar] = useState(null);
  const [menuStatus, setMenuStatus] = useState(false);
  const burgerRef = useRef(null);
  const logoRef = useRef(null);

  function handleBurgerMenu() {
    if (menuStatus === false) {
      setMenuStatus(true);
    } else {
      setMenuStatus(false);
    }
    console.log(menuStatus);
  }

  return (
    <>
      <div className={menuStatus ? styles.headerInverted : styles.header}>
        <div className={styles.logo}>
          <img
            ref={logoRef}
            className={styles.imgLogo}
            src={menuStatus ? LogoInverted : Logo}
            alt="Logo"
          ></img>
        </div>
        <div>
          <nav className={styles.nav}>
            <Link className={styles.link} to={" "}>
              Главная
            </Link>
            <Link className={styles.link} to="/tariffs">
              Тарифы
            </Link>
            <Link className={styles.link} to="/faq">
              FAQ
            </Link>
          </nav>
          {/* <Routes>
            <Route path="*" element={MainPage}></Route>
            <Route path="/tariffs" element={null}></Route>
            <Route path="/faq" element={null}></Route>
          </Routes> */}
        </div>
        {!isAuth ? (
          <div className={styles.auth}>
            <button className={styles.register}>Зарегистрироваться</button>
            <div className={styles.separator}></div>
            <Link className={styles.enter} to={""}>
              Войти
            </Link>
          </div>
        ) : (
          <div className={styles.auth}>
            {companiesUsed != null && companiesLimit != null ? (
              <div
                className={
                  menuStatus ? styles.requestsInfoHidden : styles.requestsInfo
                }
              >
                <div className={styles.info}>Использовано компаний </div>
                <div className={styles.data}>{companiesUsed}</div>
                <div className={styles.info}>Лимит по компаниям</div>
                <div className={styles.data}>{companiesLimit}</div>
              </div>
            ) : (
              <Loader />
            )}
            <div className={styles.profile}>
              <div className={styles.name}>
                <div>{usersName}</div>
                <button className={styles.exit}>Выйти</button>
              </div>
              <div className={styles.avatar}>
                <img
                  className={styles.imgProfile}
                  src={Photo}
                  alt="Avatar"
                ></img>
              </div>
            </div>
            <div
              className={
                menuStatus ? styles.menuButtonOpened : styles.menuButton
              }
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
                <button className={styles.mobileRegister}>
                  Зарегистрироваться
                </button>
                <Link className={styles.mobileEnter} to={""}>
                  Войти
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
