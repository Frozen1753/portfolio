import styles from '../home.module.css';

export function HomeStats() {
    return (
        <section className={styles.stats}>
            <div className={styles.container}>
                <div className={styles.statGrid}>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>15+</div>
                        <p>Projets complétés</p>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>3+</div>
                        <p>Années d'expérience</p>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>100%</div>
                        <p>Code en TypeScript</p>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>∞</div>
                        <p>Passion pour le code</p>
                    </div>
                </div>
            </div>
        </section>
    );
}