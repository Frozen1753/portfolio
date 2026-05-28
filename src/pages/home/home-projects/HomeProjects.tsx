import { Link } from 'react-router-dom';
import { ProjectCard } from '../../../components/ui/project-card/ProjectCard';
import { useInView } from '../../../utils/hooks/useInView';
import { projects } from '../../../data/projects';
import styles from '../home.module.css';

export function HomeProjects() {
    const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
    const { ref: projectsRef, isInView: projectsVisible } = useInView({ threshold: 0.1 });

    return (
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
    );
}