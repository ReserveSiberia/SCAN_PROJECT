import styles from './ResultPage.module.css'
import { ResultItem } from '../../components/ResultItem'
import { ResultSlider } from '../../components/ResultSlider'
import ResultPageImg from '../../assets/images/ResultPageImg.svg'
import { mapArrFunc } from '../../utils/mapArrFunc'
import { useContext } from 'react'
import ResultContext from '../../context/createContext'

function ResultPage() {
  const context = useContext(ResultContext)
  const result = context.generalData

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
        <p className={styles.dataSum}>Найдено
          {!result
            ? ` 0`
            : ` ${mapArrFunc(result.data.data).length}`} вариантов
        </p>
        {<ResultSlider isLoading={!result} data={!result
          ? []
          : result.data.data} />}
      </div>
      <div className={styles.resultBlock}>
        <h2 className={styles.subtitle}>Список документов</h2>
        <ul className={styles.resultList}>
          {[1, 2, 3, 4] ? [1, 2, 3, 4].map(item => <ResultItem data={[1, 2, 3, 4]} />) : <p>Результаты отсутствуют</p>}
        </ul>
        <button className={styles.seeMoreBtn}>Показать больше</button>
      </div>
    </main>
  )
}

export { ResultPage }