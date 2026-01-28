import styles from './WorksSection.module.css';
import WorkCard from '../../components/WorkCard/WorkCard';
import { worksData } from '../../worksData';

const WorksSection = () => {
  return (
    <section id="works" className={styles.works}>
      <div className={styles.container}>

        <div className={styles.titleArea}>
          <h2 className={styles.jpText}>
            作ったもの
          </h2>
          <span className={styles.enText}>works</span>
        </div>

        <p className={styles.update}>※作品は追加・更新していく予定です。</p>

        <div className={styles.cardWrapper}>
          {worksData.map((item) => (
            <WorkCard
              key={item.id}
              id={item.id}
              category={item.category}
              title={item.title}
              thumbnail={item.thumbnail}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default WorksSection