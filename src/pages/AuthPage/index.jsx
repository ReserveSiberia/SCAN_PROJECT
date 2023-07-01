import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Characters from "../../assets/images/Characters.svg";
import lock from "../../assets/images/lock.svg";
import Google from "../../assets/images/Google.svg";
import facebook from "../../assets/images/facebook.svg";
import yandex from "../../assets/images/yandex.svg";
import { Button, Container } from "react-bootstrap";
import styles from "./Auth.module.css";
// import store from "../../store/store.js";
import { logIn } from "../../api/authService";

const Auth = () => {
  const [userName, setUsersName] = useState(localStorage.getItem("User"));
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  function authControl(token, expireDate) {
    if (token && expireDate) {
      const now = new Date();
      if (Date.parse(expireDate) > Date.parse(now)) {
        localStorage.setItem("AuthStatus", true);
        console.log("Access granted");
        navigate("/");
      }
    } else {
      localStorage.setItem("AuthStatus", false);
      setIsAuth(localStorage.getItem("AuthStatus"));
      localStorage.setItem("TOKEN", "");
      localStorage.setItem("EXPIRE", "");
      console.log("Access denied");
      navigate("/error");
    }
  }

  function handleAuth() {
    localStorage.setItem("User", userName);
    logIn(userName, password).then(() => {
      return authControl(
        localStorage.getItem("TOKEN"),
        localStorage.getItem("EXPIRE")
      );
    });
    // Cleaning input fields after submitting
    setUsersName("");
    setPassword("");
  }
  return (
    <main>
      <Container>
        <div className={styles.displayForm}>
          <div className={styles.Authorization}>
            {isAuth === 2 ? (
              <h1>wrong data</h1>
            ) : (
              <h1>
                ДЛЯ ОФОРМЛЕНИЯ ПОДПИСКИ
                <br />
                НА ТАРИФ, НЕОБХОДИМО
                <br />
                АВТОРИЗОВАТЬСЯ.
              </h1>
            )}

            <img
              className={styles.Characters}
              src={Characters}
              alt="Characters"
            />
          </div>
          <div className={styles.form}>
            <div className={styles.loginContainer}>
              <div className={styles.row}>
                <div className={styles.loginForm}>
                  <form>
                    <img className={styles.lock} src={lock} alt="lock" />
                    <div className={styles.loginsignup}>
                      <Button className={styles.login}>Войти</Button>
                      <Button className={styles.signup}>
                        Зарегистрироваться
                      </Button>
                    </div>
                    <div className={styles.formGroup}>
                      <label>
                        Логин или номер телефона:
                        <input
                          type="text"
                          className={styles.FormControl}
                          placeholder={userName}
                          value={userName}
                          onChange={(e) => {
                            setUsersName(e.target.value);
                          }}
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label>
                        Пароль:
                        <input
                          type="password"
                          className={styles.FormControl}
                          placeholder=""
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </label>
                    </div>
                    <Button onClick={handleAuth} className={styles.btnSubmit}>
                      Войти
                    </Button>
                    <div className={styles.formGroup}>
                      <a href="#" className={styles.recoverPwd}>
                        Восстановить пароль
                      </a>
                      <label>Войти через:</label>
                      <div className={styles.imgsvg}>
                        <img
                          className={styles.Google}
                          src={Google}
                          alt="Geogle"
                        />
                        <img
                          className={styles.facebook}
                          src={facebook}
                          alt="facebook"
                        />
                        <img
                          className={styles.yandex}
                          src={yandex}
                          alt="yandex"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export { Auth };