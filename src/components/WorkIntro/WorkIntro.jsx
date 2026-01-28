import styles from './WorkIntro.module.css';

const WorkIntro = ({ worksData }) => {
    if (!worksData) return null;

    return (
        <article className={styles.workIntro}>
            <div className={styles.container}>
                <h2 className={styles.title}>{worksData.title}</h2>
                <div className={styles.tagArea}>
                    <p>{worksData.tags}</p>
                    <p>{worksData.inCharge}</p>
                </div>

                <div className={styles.thumbnail}>
                    <img src={worksData.thumbnail} alt={worksData.title} />
                </div>

                <p className={styles.summary}>{worksData.summary}</p>

                <p className={styles.disclaimer}>{worksData.disclaimer}</p>

                <div className={styles.linkArea}>
                    <a href={worksData.siteUrl} target="_blank" rel="noopener noreferrer" className={styles.siteUrl}>
                        <span className={styles.linkText}>サイトをみる</span>
                        <div className={styles.iconCircle}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
            <div className={styles.wrap}>
                <section className={styles.section}>
                    <h3>課題</h3>
                    <ul className={styles.list}>
                        {worksData.issue.map((text, index) => (
                            <li key={index}>{text}</li>
                        ))}
                    </ul>
                </section>

                <section className={styles.section}>
                    <h3>ターゲット</h3>
                    <p>{worksData.target}</p>
                </section>

                <section className={styles.section}>
                    <h3>目的</h3>
                    <ul className={styles.list}>
                        {worksData.purpose.map((text, index) => (
                            <li key={index}>{text}</li>
                        ))}
                    </ul>
                </section>

                <section className={styles.section}>
                    <h3>情報設計</h3>
                    <div className={styles.iaContent}>
                        {worksData.IA.map((paragraph, index) => (
                            <p key={index} className={styles.paragraph}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h3>使用技術</h3>
                    <p className={styles.usedTech}>{worksData.used}</p>
                </section>

                <section className={styles.section}>
                    <h3>ツール選定理由</h3>
                    <p className={styles.reason}>{worksData.reason}</p>
                </section>

                <section className={styles.section}>
                    <h3>工夫点</h3>
                    <div className={styles.effortContent}>
                        {worksData.effort.map((item, index) => (
                            <p key={index} className={styles.effortItem}>
                                {item}
                            </p>
                        ))}
                    </div>
                </section>

                <section className={`${styles.section} ${styles.reflectionSection}`}>
                    <h3>振り返り</h3>
                    <p className={styles.reflectionText}>{worksData.reflection}</p>
                </section>
            </div>
        </article>
    )
}

export default WorkIntro