import styles from './ResultItem.module.css'
import cardImgPlaceholder from '../../assets/images/cardImgPlaceholder.svg'

function ResultItem() {
  return (
    <li className={styles.resultItem}>
      <div className={styles.cardHeader}>
        <div className={styles.sourceBlock}>
          <span className={styles.date}>13.09.2021</span><span className={styles.source}>Комсомольская правда KP.RU</span>
        </div>
        <h1 className={styles.cardTitle}>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</h1>
        <div className={styles.cardCategory}>Технические новости</div>
      </div>
      <div><img src={cardImgPlaceholder} alt="cardBanner" /></div>
      <div className={styles.cardText}>
        <p>
          SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
        </p>
        <p>
          Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
        </p>
      </div>
      <div className={styles.cardFooter}>
        <a className={styles.readMore} href="#">Читать в источнике</a>
        <div className={styles.wordCount}>2543 слова</div>
      </div>
    </li>
  )
}

export { ResultItem }