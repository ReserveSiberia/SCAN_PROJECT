import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import store from "../../store/store.js";
import styles from "./Header.module.css";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Logo from "../../assets/images/Logo-image.svg";
import LogoInverted from "../../assets/images/Logo-image-inverted.svg";
import Photo from "../../assets/images/Avatar4.jpg";
import Loader from "../../components/Loader/Loader.jsx";
import { accountInfo } from "../../api/authService";

function Header() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("AuthStatus"));
  const [companiesUsed, setCompaniesUsed] = useState(
    localStorage.getItem("CompaniesUsed")
  );
  const [companiesLimit, setCompaniesLimit] = useState(
    localStorage.getItem("CompaniesLimit")
  );
  const [userName, setUserName] = useState(localStorage.getItem("User"));
  // temporary solution (photo goes from server url???)
  const [userAvatar, setUsersAvatar] = useState(Photo);
  const [menuStatus, setMenuStatus] = useState(store.getState().menuStatus);
  const [token, setToken] = useState(localStorage.getItem("TOKEN"));
  const [renderer, setRenderer] = useState(false);
  const logoRef = useRef(null);
  const location = useLocation();
  console.log("my auth", isAuth);
  console.log("my name", userName);
  console.log("my tries", companiesUsed);
  console.log("my companiesLimit", companiesLimit);

  useEffect(() => {
    authControl(localStorage.getItem("TOKEN"), localStorage.getItem("EXPIRE"));
    if (isAuth) {
      getInfoData(token);
      console.log("nice");
    }
  }, [isAuth, location]);

  function authControl(token, expireDate) {
    if (token && expireDate) {
      const now = new Date();
      if (Date.parse(expireDate) > Date.parse(now)) {
        localStorage.setItem("AuthStatus", true);
        setIsAuth(true);
        console.log("Access granted");
      }
    } else {
      localStorage.setItem("AuthStatus", false);
      setIsAuth(false);
      localStorage.setItem("TOKEN", "");
      localStorage.setItem("EXPIRE", "");
      console.log("Access denied");
    }
  }

  async function getInfoData() {
    await accountInfo(token)
      .then((res) => {
        localStorage.setItem("CompaniesUsed", res.usedCompanyCount);
        localStorage.setItem("CompaniesLimit", res.companyLimit);
        setRenderer(!renderer);
      })
      .catch((e) => {
        console.log("Impossible to receive account data :", e);
      });
  }

  function handleAuthDrop() {
    localStorage.setItem("TOKEN", "");
    localStorage.setItem("EXPIRE", "");
    localStorage.setItem("AuthStatus", false);
    setIsAuth(false);
  }

  store.subscribe(() => {
    setMenuStatus(store.getState().menuStatus);
  });

  return (
    <>
      <header className={menuStatus ? styles.headerInverted : styles.header}>
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
            <NavBar />
          </nav>
        </div>
        {!isAuth ? (
          <div>
            <div className={styles.auth}>
              <Link className={styles.register} to={"#"}>
                Зарегистрироваться
              </Link>
              <div className={styles.separator}></div>
              <Link className={styles.enter} to={"/auth"}>
                Войти
              </Link>
            </div>
            <div className={styles.burger}>
              <BurgerMenu />
            </div>
          </div>
        ) : (
          <div className={styles.authData}>
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
              <div className={styles.loaderContainer}>
                <Loader />
              </div>
            )}
            <div className={styles.profile}>
              <div className={styles.name}>
                <div>{userName}</div>
                <button onClick={handleAuthDrop} className={styles.exit}>
                  Выйти
                </button>
              </div>
              <div className={styles.avatar}>
                <img
                  className={styles.imgProfile}
                  src={userAvatar}
                  alt="Avatar"
                ></img>
              </div>
            </div>
            <div className={styles.burger}>
              <BurgerMenu />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
