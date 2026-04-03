import styles from './footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>&copy; {currentYear} Mon Portfolio. Tous droits réservés.</p>
          <div className={styles.links}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:hello@example.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
