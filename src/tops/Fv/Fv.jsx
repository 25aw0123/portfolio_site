import styles from './Fv.module.css';

const Fv = () => {
  return (
    <section className={styles.firstView}>

      <div className={styles.titleArea}>
        <h1><img src="/images/headline.png" alt="ちょう's portfolio" width="361" className={styles.headline} /></h1>
        <h2><img src='/images/subheading.png' alt='front-end engineer' width='222' className={styles.subheading} /></h2>
        <div className={styles.subTitle}>
          <img src='/images/subheading2.png' alt='どんな状況でも迷わせないUI' width='645' className={styles.subheading2} />
        </div>
      </div>

      <div className={styles.scroll}>
        <span>Scroll</span>
      </div>

    </section>
  )
}

export default Fv