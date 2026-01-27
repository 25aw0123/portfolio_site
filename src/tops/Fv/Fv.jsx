import styles from './Fv.module.css';

const Fv = () => {
  return (
    <section className={styles.firstView}>
      <div className={`${styles.bgPattern} ${styles.paper}`}></div>

      <div className={styles.titleArea}>
        <h1><img src="/images/headline.png" alt="ちょう's portfolio" width="361" className={styles.headline} /></h1>
        <h2><img src='/images/subheading.png' alt='front-end engineer' width='222' className={styles.subheading} /></h2>
        <div className={styles.subTitle}>
          <img src='/images/subheading2.png' alt='使う人の行動を考え、迷わず使えるカタチをつくる。' width='442' className={styles.subheading2} />
        </div>
      </div>

      <div className={styles.scroll}>
        <span>Scroll</span>
      </div>

    </section>
  )
}

export default Fv