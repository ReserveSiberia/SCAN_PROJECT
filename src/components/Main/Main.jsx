import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";
import MainImage from "../../assets/images/Main-image.svg";
import AdvertImage from "../../assets/images/Advert-image.svg";
import AdvertImageMobile from "../../assets/images/Advert-image-mobile.svg";
import TariffCard from "../TariffCard/TariffCard.jsx";
import Bulb from "../../assets/images/Bulb-image.svg";
import Target from "../../assets/images/Target-image.svg";
import Note from "../../assets/images/Note-image.svg";

function Main() {
  const [screenSize, setScreenSize] = useState(window.screen.width);
  console.log(screenSize);
  useEffect(() => {
    setScreenSize(window.screen.width);
  }, [screenSize]);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainInfo}>
          <div className={styles.mainContent}>
            <div className={styles.mainTitle}>
              сервис по поиску публикаций о компании по его ИНН
            </div>
            <div className={styles.mainDescription}>
              Комплексный анализ публикаций, получение данных в формате PDF на
              электронную почту.
            </div>
            <nav className={styles.nav}>
              <Link className={styles.requestData} to={""}>
                Запросить данные
              </Link>
            </nav>
          </div>
          <div className={styles.mainImage}>
            <img src={MainImage} alt="MainImage" />
          </div>
        </div>
        <div className={styles.advertisementBar}>
          <div>Почему именно мы</div>
          <span style={{ color: "red", fontSize: "40px" }}>
            Gonna be Carousel component here...
          </span>
        </div>
        <div className={styles.advertImage}>
          {screenSize > 992 ? (
            <img
              className={styles.advertImageDesktop}
              src={AdvertImage}
              alt="AdvertisingPicture"
            />
          ) : (
            <img
              className={styles.advertImageMobile}
              src={AdvertImageMobile}
              alt="AdvertisingPicture"
            />
          )}
        </div>
        <div className={styles.tariffTitle}>наши тарифы</div>
        <div className={styles.tariffs}>
          <TariffCard
            title={["Beginner", "Для небольшого исследования", { icon: Bulb }]}
            prices={[
              "799 ₽",
              "1 200 ₽",
              "или 150 ₽/мес. при рассрочке на 24 мес.",
            ]}
            details={[
              "Безлимитная история запросов",
              "Безопасная сделка",
              "Поддержка 24/7",
            ]}
            isPurchased={true}
            color={{
              primaryColor: "rgba(255, 182, 79, 1)",
              secondaryColor: "rgba(0, 0, 0, 1)",
            }}
          />
          <TariffCard
            title={["Pro", "Для HR и фрилансеров", { icon: Target }]}
            prices={[
              "1 299 ₽",
              "2 600 ₽",
              "или 279 ₽/мес. при рассрочке на 24 мес.",
            ]}
            details={[
              "Все пункты тарифа Beginner",
              "Экспорт истории",
              "Рекомендации по приоритетам",
            ]}
            isPurchased={false}
            color={{
              primaryColor: "rgba(124, 227, 225, 1)",
              secondaryColor: "rgba(0, 0, 0, 1)",
            }}
          />
          <TariffCard
            title={["Business", "Для корпоративных клиентов", { icon: Note }]}
            prices={["2 379 ₽", "3 700 ₽", ""]}
            details={[
              "Все пункты тарифа Pro",
              "Безлимитное количество запросов",
              "Приоритетная поддержка",
            ]}
            isPurchased={false}
            color={{
              primaryColor: "rgba(0, 0, 0, 1)",
              secondaryColor: "rgba(255, 255, 255, 1)",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Main;
