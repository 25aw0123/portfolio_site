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

      <div className={styles.background}>
        <svg viewBox="0 0 3387 1270">
          <path id="planePath" className={styles.planePath} d="M-226 626c439,4 636,-213 934,-225 755,-31 602,769 1334,658 562,-86 668,-698 266,-908 -401,-210 -893,189 -632,630 260,441 747,121 1051,91 360,-36 889,179 889,179" />
          <g id="plane">
            <polygon className={styles.fil1} points="-141,-10 199,0 -198,-72 -188,-61 -171,-57 -184,-57 " />
            <polygon className={styles.fil2} points="199,0 -141,-10 -163,63 -123,9 " />
            <polygon className={styles.fil3} points="-95,39 -113,32 -123,9 -163,63 -105,53 -108,45 -87,48 -90,45 -103,41 -94,41 " />
            <path className={styles.fil4} d="M-87 48l-21 -3 3 8 19 -4 -1 -1zm-26 -16l18 7 -2 -1 32 -7 -29 1 11 -4 -24 -1 -16 -18 10 23zm10 9l13 4 -4 -4 -9 0z" />
            <polygon className={styles.fil1} points="-83,28 -94,32 -65,31 -97,38 -86,49 -67,70 199,0 -123,9 -107,27 " />
          </g>
          <animateMotion xlinkHref="#plane" dur="10s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#planePath" />
          </animateMotion>
        </svg>
      </div>

    </section>
  )
}

export default Fv