import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.bracket}>&lt;</span>
          Dev
          <span className={styles.bracket}>/&gt;</span>
        </Link>

        {/* Nav Desktop */}
        <nav className={styles.navDesktop}>
          <Link to="/">Accueil</Link>
          <Link to="/projects">Projets</Link>
        </nav>

        {/* Hamburger Button */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Nav Mobile */}
      {isOpen && (
        <nav className={styles.navMobile}>
          <Link to="/" onClick={closeMenu}>
            Accueil
          </Link>
          <Link to="/projects" onClick={closeMenu}>
            Projets
          </Link>
        </nav>
      )}
    </header>
  );
}
