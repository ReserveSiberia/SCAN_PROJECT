import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Logo from "../../assets/images/Logo-image.svg";
import LogoInverted from "../../assets/images/Logo-image-inverted.svg";
import Photo from "../../assets/images/Avatar4.jpg";
import Loader from "../../components/Loader/Loader.jsx";

function Header() {
  const [isAuth, setIsAuth] = useState(false);
  const [companiesUsed, setCompaniesUsed] = useState(1);
  const [companiesLimit, setCompaniesLimit] = useState(1);
  const [usersName, setUsersName] = useState("John Doe");
  const [usersAvatar, setUsersAvatar] = useState(null);
  const [menuStatus, setMenuStatus] = useState(false);
  const logoRef = useRef(null);

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