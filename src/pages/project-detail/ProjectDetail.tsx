import { useParams, Link } from 'react-router-dom';
import { useInView } from '../../utils/hooks/useInView';
import { formatDate } from '../../utils/formatters/dateFormatter';
import { projects } from '../../data/projects';
import styles from './ProjectDetail.module.css';
import { PortfolioHelmet } from '../../features/helmet/UnlockItHelmet';
import { NotFound } from '../../features/not-found/NotFound';

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  const { ref: contentRef, isInView: contentVisible } = useInView({ threshold: 0.1 });

  if (!project) {
    return (
      <NotFound />
    );
  }

  return (
    <div className={styles.detail}>
      <PortfolioHelmet
        title="Projet introuvable"
        description="Le projet demandé n'existe pas ou a été supprimé."
        path="projects/not-found"
        image={null}
        robots="noindex, nofollow"
      />

      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link to="/projects">Projets</Link>
          <span> / </span>
          <span>{project.title}</span>
        </div>
      </nav>

      {/* Hero Image */}
      <section className={styles.heroImage}>
        <img src={import.meta.env.BASE_URL + project.image.replace(/^\//, "")} alt={project.title} />
        <div className={styles.gradient}></div>
      </section>

      {/* Content */}
      <section
        ref={contentRef}
        className={`${styles.content} ${contentVisible ? styles.contentVisible : ''}`}
      >
        <div className={styles.container}>
          <div className={styles.main}>
            {/* Header */}
            <header className={styles.projectHeader}>
              <h1>{project.title}</h1>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.meta}>
                {project.dateCreated && (
                  <div className={styles.metaItem}>
                    <span className={styles.label}>Créé</span>
                    <span>{formatDate(project.dateCreated)}</span>
                  </div>
                )}
                {project.dateUpdated && (
                  <div className={styles.metaItem}>
                    <span className={styles.label}>Mise à jour</span>
                    <span>{formatDate(project.dateUpdated)}</span>
                  </div>
                )}
                {project.status && (
                  <div className={styles.metaItem}>
                    <span className={styles.label}>Statut</span>
                    <span
                      className={`${styles.status} ${styles[project.status]}`}
                    >
                      {project.status === 'completed' && '✓ Complété'}
                      {project.status === 'in-progress' && '⚙ En cours'}
                      {project.status === 'archived' && '⏸ Archivé'}
                    </span>
                  </div>
                )}
              </div>

              <div className={styles.actions}>
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                    Voir la démo →
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                    Code source →
                  </a>
                )}
              </div>
            </header>

            {/* Description longue */}
            {project.fullDescription && (
              <section className={styles.fullDescription}>
                <h2>À propos du projet</h2>
                <p>{project.fullDescription}</p>
              </section>
            )}

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <section className={styles.screenshots}>
                <h2>Galerie</h2>
                <div className={styles.screenshotGrid}>
                  {project.screenshots.map((screenshot, index) => (
                    <img key={index} src={import.meta.env.BASE_URL + screenshot.replace(/^\//, "")} alt={`${project.title} - Screenshot ${index + 1}`} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Technologies */}
            <div className={styles.card}>
              <h3>Technologies</h3>
              <div className={styles.techList}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Projects */}
            <div className={styles.card}>
              <h3>Autres projets</h3>
              <div className={styles.relatedList}>
                {projects
                  .filter((p) => p.id !== project.id && p.featured)
                  .slice(0, 3)
                  .map((p) => (
                    <Link key={p.id} to={`/projects/${p.slug}`} className={styles.relatedItem}>
                      {p.title}
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Vous avez un projet en tête ?</h2>
          <p>Contactez-moi pour discuter de vos idées</p>
          <a href="mailto:hello@example.com" className={styles.ctaBtn}>
            Me contacter →
          </a>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;