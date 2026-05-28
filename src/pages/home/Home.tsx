import styles from './home.module.css';
import { HomeHero } from './home-hero/HomeHero';
import { HomeProjects } from './home-projects/HomeProjects';
import { HomeStats } from './home-stats/HomeStats';

export function Home() {
  return (
    <div className={styles.home}>
      <HomeHero />

      <HomeProjects />

      <HomeStats />
    </div>
  );
}
