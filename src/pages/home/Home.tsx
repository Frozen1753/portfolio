import styles from './home.module.css';
import { HomeHero } from './home-hero/HomeHero';
import { HomeProjects } from './home-projects/HomeProjects';
import { HomeStats } from './home-stats/HomeStats';
import { PortfolioHelmet } from '../../features/helmet/UnlockItHelmet';

function Home() {
  return (
    <div className={styles.home}>
      <PortfolioHelmet
        title="Accueil"
        description="Bienvenue sur mon portfolio. Découvrez mes projets, mes compétences et mon parcours en développement web moderne."
        path=""
        image="default-og-image.png"
      />

      <HomeHero />

      <HomeStats />

      <HomeProjects />
    </div>
  );
}

export default Home;