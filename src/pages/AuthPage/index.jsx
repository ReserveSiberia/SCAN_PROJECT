import * as React from "react";
import Characters from "../../assets/images/Characters.svg";
import lock from "../../assets/images/lock.svg";
import Google from "../../assets/images/Google.svg";
import facebook from "../../assets/images/facebook.svg";
import yandex from "../../assets/images/yandex.svg";
import { Button, Container } from "react-bootstrap";
import styles from "./Auth.module.css";

const Auth = () => {
  return (
    <Container>
      <div className={styles.displayForm}>
        <div className={styles.Authorization}>
          <h1>
            ДЛЯ ОФОРМЛЕНИЯ ПОДПИСКИ
            <br />
            НА ТАРИФ, НЕОБХОДИМО
            <br />
            АВТОРИЗОВАТЬСЯ.
          </h1>
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
                        placeholder=""
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
                      />
                    </label>
                  </div>
                  <Button className={styles.btnSubmit}>Войти</Button>
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
  );
};

export { Auth };