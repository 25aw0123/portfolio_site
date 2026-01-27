import { useState } from 'react';
import styles from './StrengthCard.module.css';

const StrengthCard = ({ number, title, text }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDetail = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.card}>

            <div className={styles.headArea}>
                <div className={styles.number}>{number}</div>
                <h3 className={styles.title}>{title}</h3>
            </div>

            <div className={`${styles.textWrapper} ${isOpen ? styles.open : ''}`}>
                <p className={styles.text}>{text}</p>
            </div>

            <div className={styles.btnArea}>
                <button onClick={toggleDetail} className={styles.readMoreBtn}>
                    {isOpen ? '閉じる' : '続きを読む'}
                    <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ''}`}>▼</span>
                </button>
            </div>
        </div>
    )
}

export default StrengthCard