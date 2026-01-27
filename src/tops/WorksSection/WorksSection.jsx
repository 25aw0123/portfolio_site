import styles from './WorksSection.module.css';
import WorkCard from '../../components/WorkCard/WorkCard';
import { worksData } from '../../worksData';

const WorksSection = () => {
  return (
    <section className={styles.works}>
      <div className={styles.container}>

        <div className={styles.titleArea}>
          <h2 className={styles.jpText}>
            作ったもの
          </h2>
          <span className={styles.enText}>works</span>
        </div>

        <div className={styles.cardWrapper}>
          {worksData.map((item) => (
            <WorkCard
              key={item.id}
              category={item.category}
              title={item.title}
              img={item.img}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default WorksSection