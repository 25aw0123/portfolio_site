import styles from './WorkCard.module.css';
import { Link } from 'react-router-dom'

const WorkCard = ({ id, title, category, thumbnail }) => {

    const categoryColors = {
        '学校課題': '#7CABC5', 
        '自主制作': '#7CC5B5', 
    };

    const tagColor = categoryColors[category];

    return (
        <Link to={`/work/${id}`} className={styles.linkButton}>
            <div className={styles.card}>

                <div className={styles.content}>
                    <p className={styles.category} style={{ color: tagColor, borderColor: tagColor }}>{category}</p>
                    <h3 className={styles.title}>{title}</h3>
                </div>

                <div className={styles.thumbnail}>
                    <img src={thumbnail} alt={title} />
                </div>

                <span className={styles.arrow}>→</span>
            </div>
        </Link>

    )
}

export default WorkCard