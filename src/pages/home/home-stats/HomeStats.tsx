import styles from '../home.module.css';

export function HomeStats() {
    return (
        <section className={styles.stats}>
            <div className={styles.container}>
                <div className={styles.statGrid}>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>4+</div>
                        <p>Projets majeurs réalisés</p>
                    </div>

                    <div className={styles.stat}>
                        <div className={styles.statNumber}>Bac+2</div>
                        <p>Année d'étude</p>
                    </div>

                    <div className={styles.stat}>
                        <div className={styles.statNumber}>8+</div>
                        <p>Langages pratiqués</p>
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