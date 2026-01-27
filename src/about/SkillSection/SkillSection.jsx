import styles from './SkillSection.module.css';

const SkillSection = () => {
  return (
    <section className={styles.skill}>

      <div className={styles.titleArea}>
        <h2 className={styles.jpText}>できること</h2>
        <span className={styles.enText}>skills</span>
      </div>

      <div className={styles.container}>

        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>Frontend</h3>
          <ul className={styles.list}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        <hr className={styles.separator} />

        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>Design</h3>
          <ul className={styles.list}>
            <li>Figma</li>
            <li>Adobe Illustrator</li>
          </ul>
        </div>

      </div>

    </section>
  )
}

export default SkillSection