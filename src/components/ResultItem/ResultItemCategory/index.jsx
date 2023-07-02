import styles from './ResultItemCategories.module.css'

export function ResultItemCategories({ isAnnouncement, isDigest, isTechNews }) {
  return (
    <ul className={styles.cardCategories}>
      {[isAnnouncement, isDigest, isTechNews].map((attr) =>
        attr && attr === isAnnouncement
          ? <li className={styles.cardCategory}>Анонсы и события</li>
          : attr && attr === isDigest
            ? <li className={styles.cardCategory}>Новости</li>
            : attr && attr === isTechNews
              ? <li className={styles.cardCategory}>Технические новости</li>
              : ''
      )}
    </ul>
  )
}