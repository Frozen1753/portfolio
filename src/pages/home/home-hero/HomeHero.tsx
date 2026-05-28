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