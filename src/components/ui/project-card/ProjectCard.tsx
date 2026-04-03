import { Link } from 'react-router-dom';
import { type Project } from '../../../types/project';
import { formatDateShort } from '../../../utils/formatters/dateFormatter';
import { useInView } from '../../../utils/hooks/useInView';
import styles from './projectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <Link to={`/projects/${project.slug}`} className={styles.link}>
      <div ref={ref} className={`${styles.card} ${isInView ? styles.visible : ''}`}>
        <div className={styles.imageWrapper}>
          <img src={project.image} alt={project.title} className={styles.image} />
          <div className={styles.overlay}>
            <span className={styles.viewButton}>Voir plus</span>
          </div>
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.shortDescription}</p>

          <div className={styles.footer}>
            <div className={styles.tags}>
              {project.technologies.slice(0, 2).map((tech) => (
                <span key={tech} className={styles.tag}>
                  {tech}
                </span>
              ))}
              {project.technologies.length > 2 && (
                <span className={styles.tag}>+{project.technologies.length - 2}</span>
              )}
            </div>
            {project.dateUpdated && (
              <span className={styles.date}>{formatDateShort(project.dateUpdated)}</span>
            )}
          </div>

          {project.status && (
            <div className={`${styles.status} ${styles[project.status]}`}>
              {project.status === 'completed' && '✓ Complété'}
              {project.status === 'in-progress' && '⚙ En cours'}
              {project.status === 'archived' && '⏸ Archivé'}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
