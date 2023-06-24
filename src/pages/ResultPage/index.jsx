import styles from './ResultPage.module.css'
import { ResultItem } from '../../components/ResultItem'
import ResultPageImg from '../../assets/images/ResultPageImg.svg'
// Когда придут данные по запросу рендерим данный компонент и передаем в него данные.
function ResultPage({ data }) {
  return (
    <main className={styles.resultPage}>
      <div className={styles.soonResult}>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>Ищем. Скоро будут результаты</h1>
          <p className={styles.text}>Поиск может занять некоторое время, просим сохранять терпение.</p>
        </div>
        <img className={styles.resultImg} src={ResultPageImg} alt="soon result" />
      </div>
      <div className={styles.summaryBlock}>
        <h2 className={styles.subtitle}>Общая сводка</h2>
        {/* блок с общей сводкой */}
      </div>
      <div className={styles.resultBlock}>
        <h2 className={styles.subtitle}>Список документов</h2>
        <ul className={styles.resultList}>
          {data ? data.map(item => <ResultItem />) : <p>Результаты отсутствуют</p>}
        </ul>
        <button className={styles.seeMoreBtn}>Показать больше</button>
      </div>

    </main>
  )
}

export { ResultPage }