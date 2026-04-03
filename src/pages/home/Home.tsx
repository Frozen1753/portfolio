import { Link } from 'react-router-dom';
import { ProjectCard } from '../../components/ui/project-card/ProjectCard';
import { useInView } from '../../utils/hooks/useInView';
import { projects } from '../../data/projects';
import styles from './home.module.css';

export function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const { ref: heroRef, isInView: heroVisible } = useInView({ threshold: 0.3 });
  const { ref: projectsRef, isInView: projectsVisible } = useInView({ threshold: 0.1 });

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section ref={heroRef} className={`${styles.hero} ${heroVisible ? styles.heroVisible : ''}`}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Développeur Full-Stack<span className={styles.highlight}>.</span>
            </h1>
            <p className={styles.subtitle}>
              Je crée des expériences numériques modernes et performantes. Spécialisé en React,
              TypeScript et architecture cloud.
            </p>
            <div className={styles.ctas}>
              <Link to="/projects" className={styles.ctaPrimary}>
                Voir mes projets →
              </Link>
              <a href="mailto:hello@example.com" className={styles.ctaSecondary}>
                Me contacter
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.glow}></div>
            <div className={styles.codeBlock}>
              <div className={styles.codeLine}>
                <span className={styles.keyword}>const</span> portfolio = {'{'}
              </div>
              <div className={styles.codeLine}>
                <span className={styles.property}>skills</span>: [
                <span className={styles.string}>'React'</span>,{' '}
                <span className={styles.string}>'TypeScript'</span>, ...]
              </div>
              <div className={styles.codeLine}>
                <span className={styles.property}>passion</span>: Infinity
              </div>
              <div className={styles.codeLine}>{'}'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section ref={projectsRef} className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Projets en avant</h2>
            <p>Une sélection de mes meilleurs travaux</p>
          </div>

          <div className={`${styles.grid} ${projectsVisible ? styles.gridVisible : ''}`}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className={styles.viewMore}>
            <Link to="/projects" className={styles.viewMoreLink}>
              Découvrir tous les projets →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
    </div>
  );
}
