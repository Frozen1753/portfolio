import styles from '../home.module.css';

export function HomeAbout() {
    return (
        <section className={styles.aboutPreview}>
            <div className={styles.container}>
                <h2>Ma façon de développer</h2>

                <p>
                    Je m'intéresse particulièrement à la conception de systèmes complexes,
                    à l'architecture logicielle et à l'optimisation des performances.
                    Mes projets vont de plateformes web complètes à des simulations
                    algorithmiques en passant par le développement d'outils et de moteurs.
                </p>

                <p>
                    Au-delà du développement frontend, j'apprécie la modélisation de bases
                    de données, la création d'API, les tests automatisés et l'amélioration
                    continue de la qualité logicielle.
                </p>
            </div>
        </section>
    );
}