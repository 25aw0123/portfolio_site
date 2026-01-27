import styles from './BackToHome.module.css'
import { Link } from 'react-router-dom'

const BackToHome = () => {
    return (
        <div className={styles.back}>
            <Link to="/" className={styles.container}>
                <svg className={styles.icon} viewBox="0 0 24 24">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.text}>ホームへ戻る</span>
            </Link>
        </div>
    )
}

export default BackToHome