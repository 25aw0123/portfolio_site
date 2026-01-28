import styles from './ProfileSection.module.css';

const ProfileSection = () => {
  return (
    <section className={styles.profile}>

        <h2 className={styles.titleImg}>
          <img src='./images/about/aboutMe.png' width='502' alt='about me' />
        </h2>

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
            2001年生まれ、台湾出身。<br />
            情報が整理され、自然に操作できる画面に心地よさを感じ、Webに興味を持ちました。
            UIの動きや操作感を実装として形にできる点に魅力を感じ、フロントエンド分野を志望。
            現在はユーザーの行動を意識したUIを実装できるフロントエンドエンジニアを目指しています。
          </p>
        
        </div>
      </div>
    </section>
  )
}

export default ProfileSection