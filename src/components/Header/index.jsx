import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Logo from "../../assets/images/Logo-image.svg";
import LogoInverted from "../../assets/images/Logo-image-inverted.svg";
import Photo from "../../assets/images/Avatar4.jpg";
import Loader from "../../components/Loader/Loader.jsx";
import { logIn, accountInfo } from "../../api/service";

function Header() {
  // temporary solution (isAuth goes from ?)
  const [isAuth, setIsAuth] = useState(true);
  // temporary solution (companiesUsed, companiesLimit goes from server data)
  const [companiesUsed, setCompaniesUsed] = useState(null);
  const [companiesLimit, setCompaniesLimit] = useState(null);
  // // temporary solution (name goes from ?)
  const [userName, setUsersName] = useState("sf_student1");
  const [password, setPassword] = useState("4i2385j");
  // temporary solution (photo goes from server url)
  const [userAvatar, setUsersAvatar] = useState(Photo);
  const [menuStatus, setMenuStatus] = useState(store.getState().menuStatus);
  const [token, setToken] = useState(localStorage.getItem("TOKEN"));
  const logoRef = useRef(null);

  // temporary api tests
  // useEffect(() => {
  //   authControl(localStorage.getItem("TOKEN"), localStorage.getItem("EXPIRE"));
  // }, [token, companiesUsed, companiesLimit, isAuth]);

  // function authControl(token, expireDate) {
  //   if (token && expireDate) {
  //     const now = new Date();
  //     if (Date.parse(expireDate) > Date.parse(now)) {
  //       setIsAuth(true);
  //       console.log("Access granted");
  //     }
  //   } else {
  //     console.log("Access denied");
  //     setIsAuth(false);
  //     localStorage.setItem("TOKEN", "");
  //     localStorage.setItem("EXPIRE", "");
  //     setToken(localStorage.getItem("TOKEN"));
  //   }
  // }

  // function loggingIn() {
  //   logIn(userName, password)
  //     .then(() => {
  //       return authControl(
  //         localStorage.getItem("TOKEN"),
  //         localStorage.getItem("EXPIRE")
  //       );
  //     })
  //     .then(async () => {
  //       await accountInfo(token)
  //         .then((res) => {
  //           setCompaniesUsed(res.usedCompanyCount);
  //           setCompaniesLimit(res.companyLimit);
  //         })
  //         .catch((e) => {
  //           setCompaniesUsed(companiesUsed);
  //           setCompaniesLimit(companiesLimit);
  //           console.log(e);
  //         });
  //     });

  //   console.log("logging in");
  // }

  // async function getInfoData() {
  //   await accountInfo(token)
  //     .then((res) => {
  //       setCompaniesUsed(res.usedCompanyCount);
  //       setCompaniesLimit(res.companyLimit);
  //     })
  //     .catch((e) => {
  //       setCompaniesUsed(companiesUsed);
  //       setCompaniesLimit(companiesLimit);
  //       console.log(e);
  //     });
  // }

  function handleAuthDrop() {
    localStorage.setItem("TOKEN", "");
    localStorage.setItem("EXPIRE", "");
    setIsAuth(false);
  }

  store.subscribe(() => {
    setMenuStatus(store.getState().menuStatus);
  });

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
            <NavBar />
          </nav>
        </div>
        {!isAuth ? (
          <div>
            <div className={styles.auth}>
              {/* testing logging in (add onClick={loggingIn})*/}
              <Link className={styles.register} to={"#"}>
                Зарегистрироваться
              </Link>
              <div className={styles.separator}></div>
              <Link className={styles.enter} to={"#"}>
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
            <div className={styles.burger}>
              <BurgerMenu />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
