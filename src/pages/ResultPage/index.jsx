import styles from './ResultPage.module.css'
import { ResultItem } from '../../components/ResultItem'
import { ResultSlider } from '../../components/ResultSlider'
import ResultPageImg from '../../assets/images/ResultPageImg.svg'
import { mapArrFunc } from '../../utils/mapArrFunc'
import { useContext, useEffect, useState } from 'react'
import ResultContext from '../../context/createContext'
import { getDetailData } from '../../api/dataService'

function ResultPage() {
  const context = useContext(ResultContext)
  const [countDocs, setCountDocs] = useState(4)

  const resultGeneralData = context.generalData
  const resultData = context.data

  const detailsData = context.detailsData
  const setDetailsData = context.setDetailsData

  useEffect(() => {
    console.log('hello useEff')
    if (resultData) {
      const arrForRequest = []
      for (let i = 0; i < countDocs; i++) {
        arrForRequest.push(resultData.data.items[i].encodedId)
      }
      const req = async () => {
        setDetailsData(await getDetailData(arrForRequest))
      }
      req()
    }
  }, [resultData, countDocs])

  const moreBtnHandler = () => {
    const countDocsIterator = 4 // число на которое увеличивается количество записей
    if ((countDocs + countDocsIterator) < (+resultData.data.items.length)) {
      setCountDocs(countDocs + countDocsIterator)
    }

    const docsRest = (+resultData.data.items.length) - countDocs

    if (docsRest < countDocsIterator) {
      setCountDocs(countDocs + docsRest)
    }
  }

  console.log(detailsData)

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
          {!resultGeneralData
            ? ` 0`
            : ` ${mapArrFunc(resultGeneralData.data.data).length}`} вариантов
        </p>
        {<ResultSlider isLoading={!resultGeneralData} data={!resultGeneralData
          ? []
          : resultGeneralData.data.data} />}
      </div>
      <div className={styles.resultBlock}>
        <h2 className={styles.subtitle}>Список документов</h2>
        <ul className={styles.resultList}>
          {[1, 2, 3, 4] ? [1, 2, 3, 4].map(item => <ResultItem data={[1, 2, 3, 4]} />) : <p>Результаты отсутствуют</p>}
        </ul>
        <button onClick={moreBtnHandler} className={resultData && ((countDocs) >= +resultData.data.items.length) ? styles.seeMoreBtnHidden : styles.seeMoreBtn}>Показать больше</button>
      </div>
    </main>
  )
}

export { ResultPage }