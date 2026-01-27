import styles from './StrengthSection.module.css';
import StrengthCard from '../../components/StrengthCard/StrengthCard';
import { strengthData } from '../../strengthData'

const StrengthSection = () => {
  return (
    <section className={styles.strength}>
      <div className={styles.container}>
        <div className={styles.titleArea}>
          <h2 className={styles.jpText}>強み</h2>
          <span className={styles.enText}>strengths</span>
        </div>

        <div className={styles.cardWrapper}>
          {strengthData.map((item) => (
            <StrengthCard
              key={item.id}
              number={item.number}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StrengthSection