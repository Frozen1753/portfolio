import { Link } from 'react-router-dom';
import { useInView } from '../../../utils/hooks/useInView';
import styles from '../home.module.css';
import { useEffect, useState } from 'react';
import { CodeBlock, type CodeBlockProps } from '../../../components/ui/code-block/CodeBlock';
import snippetsData from './snippets.json' with { type: "json" };

const SNIPPETS = (snippetsData as { snippets: CodeBlockProps[] }).snippets;

export function HomeHero() {
  const { ref: heroRef, isInView: heroVisible } = useInView({ threshold: 0.3 });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % SNIPPETS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={heroRef} className={`${styles.hero} ${heroVisible ? styles.heroVisible : ''}`}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Développeur Full-Stack & Architecte Logiciel<span className={styles.highlight}>.</span>
          </h1>
          <p className={styles.subtitle}>
            J’aime construire des projets complets : applications web, API,
            algorithmes, simulations et outils interactifs. Mon objectif n’est pas
            seulement de faire fonctionner un logiciel, mais de comprendre comment
            le concevoir proprement, le faire évoluer et l’optimiser.
          </p>
          <div className={styles.ctas}>
            <Link to="/projects" className={styles.ctaPrimary}>
              Voir mes projets →
            </Link>
            <Link to="/cv" className={styles.ctaSecondary}>
              Mon parcours
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.glow}></div>

          <div className={styles.codeCarousel}>
            <div key={index} className={styles.codeAnimated}>
              <CodeBlock
                code={SNIPPETS[index].code}
                language={SNIPPETS[index].language as any}
                title={SNIPPETS[index].title}
                height="260px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}