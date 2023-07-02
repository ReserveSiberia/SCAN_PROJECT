import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import store from "../../store/store.js";
import styles from "./Header.module.css";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Logo from "../../assets/images/Logo-image.svg";
import LogoInverted from "../../assets/images/Logo-image-inverted.svg";
import Photo from "../../assets/images/Avatar4.jpg";
import Loader from "../../components/Loader/Loader.jsx";
import { accountInfo } from "../../api/authService";

function Header({ isAuth, setIsAuth }) {
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
  const logoRef = useRef(null);
  const location = useLocation();
  const navigation = useNavigate();

  useEffect(() => {
    setUserName(localStorage.getItem("User"));
    authControl(localStorage.getItem("TOKEN"), localStorage.getItem("EXPIRE"));
    if (isAuth) {
      getInfoData(token);
    }
    setUserName(localStorage.getItem("User"));
  }, [isAuth, userName, location]);

  function authControl(token, expireDate) {
    if (token && expireDate) {
      const now = new Date();
      if (Date.parse(expireDate) > Date.parse(now)) {
        localStorage.setItem("AuthStatus", true);
        setIsAuth(true);
      }
    } else {
      localStorage.setItem("AuthStatus", false);
      setIsAuth(false);
      localStorage.setItem("TOKEN", "");
      localStorage.setItem("EXPIRE", "");
    }
  }

  async function getInfoData() {
    await accountInfo(token)
      .then((res) => {
        localStorage.setItem("CompaniesUsed", res.usedCompanyCount);
        localStorage.setItem("CompaniesLimit", res.companyLimit);
        setCompaniesUsed(res.usedCompanyCount);
        setCompaniesLimit(res.companyLimit);
        console.log(companiesUsed);
        console.log(companiesLimit);
      })
      .catch((e) => {
        console.log("Impossible to receive account data :", e);
      });
  }

  function handleAuthDrop() {
    localStorage.setItem("TOKEN", "");
    localStorage.setItem("EXPIRE", "");
    localStorage.setItem("AuthStatus", false);
    localStorage.setItem("CompaniesUsed", "");
    localStorage.setItem("CompaniesLimit", "");
    console.log("Logging out...");
    setIsAuth(false);
  }
  function redirectMain() {
    navigation("/");
  }
  store.subscribe(() => {
    setMenuStatus(store.getState().menuStatus);
  });

  return (
    <>
      <header className={menuStatus ? styles.headerInverted : styles.header}>
        <Link to={"/"} className={styles.logo}>
          <img
            ref={logoRef}
            className={styles.imgLogo}
            src={menuStatus ? LogoInverted : Logo}
            alt="Logo"
          ></img>
        </Link>
        <div>
          <nav className={styles.nav}>
            <button onClick={redirectMain} className={styles.link}>
              Главная
            </button>
            <button className={styles.link}>Тарифы</button>
            <button className={styles.link}>FAQ</button>
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
            {companiesUsed !== "" && companiesLimit !== "" ? (
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
