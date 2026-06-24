import styles from './home.module.css';
import { HomeHero } from './home-hero/HomeHero';
import { HomeProjects } from './home-projects/HomeProjects';
import { HomeStats } from './home-stats/HomeStats';
import { PortfolioHelmet } from '../../features/helmet/UnlockItHelmet';
import { HomeAbout } from './home-about/HomeAbout';

function Home() {
  return (
    <div className={styles.home}>
      <PortfolioHelmet
        title="Accueil"
        description="Portfolio de développeur Full-Stack. Découvrez mes projets en React, TypeScript, NestJS, algorithmique, optimisation et architecture logicielle."
        path=""
        image="default-og-image.png"
      />

      <HomeHero />

      <HomeAbout />

      <HomeStats />

      <HomeProjects />
    </div>
  );
}

export default Home;