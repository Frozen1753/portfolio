import { Link } from "react-router-dom";
import { PortfolioHelmet } from "../helmet/UnlockItHelmet";
import styles from "./notFound.module.css";

export function NotFound() {

    return (
        <div className={styles.notFound}>
            <PortfolioHelmet
                title="Projet introuvable"
                description="Le projet demandé n'existe pas ou a été supprimé."
                path="projects/not-found"
                image={null}
                robots="noindex, nofollow"
            />

            <div className={styles.container}>
                <h1>Projet non trouvé</h1>
                <p>Le projet que vous cherchez n'existe pas ou a été supprimé.</p>
                <Link to="/projects" className={styles.backLink}>
                    ← Retour aux projets
                </Link>
            </div>
        </div>
    );
}