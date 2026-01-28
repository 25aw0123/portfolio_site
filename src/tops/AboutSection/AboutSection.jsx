import styles from './AboutSection.module.css';
import { Link } from 'react-router-dom'

const AboutSection = () => {

  return (
    <section id="about" className={styles.about}>

      <div className={styles.titleArea}>
        <h2 className={styles.jpText}>
          私のこと
        </h2>
        <span className={styles.enText}>about</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.photo}>
          <div className={styles.imageFrame}>
          <img src='./images/chang_tzuchien.png' alt='張子謙の写真' width='334' />
          </div>
        </div>

        <div className={styles.profileInfo}>
          <h3 className={styles.name}>張 子謙</h3>
          <h4 className={styles.reading}>ちょう ずちぇん</h4>
          <p className={styles.description}>
            台湾出身。<br />
            情報が整理され、自然に操作できる画面に心地よさを感じ、Webに興味を持ちました。
            UIの動きや操作感を形にできるフロントエンドに惹かれ、日本に留学し、フロントエンドエンジニアを目指して学んでいます。
          </p>

          <Link to="/about" className={styles.linkButton}>
            ABOUT ME<span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSection