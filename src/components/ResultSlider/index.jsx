import styles from './ResultSlider.module.css'
import chevron from '../../assets/images/chevron.png'
import { useRef } from 'react'

function ResultSlider({ data }) {

  const dataListRef = useRef(null)

  const slideLeft = () => {
    dataListRef.current.scrollLeft += 133

    if (window.innerWidth <= 600) {
      dataListRef.current.scrollLeft += 298
    }
  }

  const slideRight = () => {
    dataListRef.current.scrollLeft -= 133
    if (window.innerWidth <= 600) {
      dataListRef.current.scrollLeft -= 298
    }
  }

  return (
    <div className={styles.resultSlider}>
      <button onClick={slideLeft} className={styles.controller + " " + styles.controllerLeft} type='button'><img src={chevron} /></button>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div>Период</div>
          <div>Всего</div>
          <div>Риски</div>
        </div>
        <ul ref={dataListRef} className={styles.dataList}>
          <li className={styles.dataItem}>
            <div>10.09.2021</div>
            <div>5</div>
            <div>0</div>
          </li><li className={styles.dataItem}>
            <div>10.09.2021</div>
            <div>5</div>
            <div>0</div>
          </li><li className={styles.dataItem}>
            <div>10.09.2021</div>
            <div>5</div>
            <div>0</div>
          </li><li className={styles.dataItem}>
            <div>10.09.2021</div>
            <div>5</div>
            <div>0</div>
          </li><li className={styles.dataItem}>
            <div>10.09.2021</div>
            <div>5</div>
            <div>0</div>
          </li><li className={styles.dataItem}>
            <div>10.09.2021</div>
            <div>5</div>
            <div>0</div>
          </li><li className={styles.dataItem}>
            <div>10.09.2021</div>
            <div>5</div>
            <div>0</div>
          </li><li className={styles.dataItem}>
            <div>10.09.2021</div>
            <div>5</div>
            <div>0</div>
          </li><li className={styles.dataItem}>
            <div>10.09.2021</div>
            <div>5</div>
            <div>0</div>
          </li><li className={styles.dataItem}>
            <div>10.09.2021</div>
            <div>5</div>
            <div>0</div>
          </li><li className={styles.dataItem}>
            <div>10.09.2021</div>
            <div>5</div>
            <div>0</div>
          </li><li className={styles.dataItem}>
            <div>10.09.2021</div>
            <div>5</div>
            <div>0</div>
          </li><li className={styles.dataItem}>
            <div>10.09.2021</div>
            <div>5</div>
            <div>0</div>
          </li><li className={styles.dataItem}>
            <div>10.09.2021</div>
            <div>5</div>
            <div>0</div>
          </li><li className={styles.dataItem}>
            <div>10.09.2021</div>
            <div>5</div>
            <div>0</div>
          </li>
        </ul>
      </div>
      <button onClick={slideRight} className={styles.controller + " " + styles.controllerRight} type='button'><img src={chevron} /></button>
    </div>
  )
}

export { ResultSlider }