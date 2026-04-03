import { useState } from 'react';
import { ProjectCard } from '../../components/ui/project-card/ProjectCard';
import { useInView } from '../../utils/hooks/useInView';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

export function Projects() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const allTechs = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  ).sort();

  const filteredProjects = selectedTech
    ? projects.filter((p) => p.technologies.includes(selectedTech))
    : projects;

  const { ref: headerRef, isInView: headerVisible } = useInView({ threshold: 0.3 });

  return (
    <div className={styles.projects}>
      {/* Header */}
      <section
        ref={headerRef}
        className={`${styles.header} ${headerVisible ? styles.headerVisible : ''}`}
      >
        <div className={styles.container}>
          <h1>Mes Projets</h1>
          <p>Une collection de mes travaux, expériences et explorations.</p>
        </div>
      </section>

      {/* Filters */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filters}>
            <button
              className={`${styles.filterBtn} ${selectedTech === null ? styles.active : ''}`}
              onClick={() => setSelectedTech(null)}
            >
              Tous ({projects.length})
            </button>
            {allTechs.map((tech) => {
              const count = projects.filter((p) => p.technologies.includes(tech)).length;
              return (
                <button
                  key={tech}
                  className={`${styles.filterBtn} ${selectedTech === tech ? styles.active : ''}`}
                  onClick={() => setSelectedTech(tech)}
                >
                  {tech} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          {filteredProjects.length > 0 ? (
            <div className={styles.grid}>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <p>Aucun projet trouvé pour cette technologie.</p>
              <button
                className={styles.resetBtn}
                onClick={() => setSelectedTech(null)}
              >
                Afficher tous les projets
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
