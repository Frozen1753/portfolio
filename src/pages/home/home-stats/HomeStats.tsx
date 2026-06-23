import styles from '../home.module.css';

export function HomeStats() {
    return (
        <section className={styles.stats}>
            <div className={styles.container}>
                <div className={styles.statGrid}>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>X</div>
                        <p>Projets complétés</p>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>2</div>
                        <p>Années d'étude et apprantissage</p>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>Y</div>
                        <p>Laguages de programmation a mon répertoire</p>
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