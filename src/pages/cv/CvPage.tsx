import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './cvPage.module.css';

const TABS = [
  { id: 'about', label: 'À propos' },
  { id: 'experience', label: 'Expérience' },
  { id: 'education', label: 'Formation' },
  { id: 'skills', label: 'Compétences' },
  { id: 'interests', label: 'Intérêts' },
  { id: 'portfolio', label: 'Portfolio', link: '/projects' }
];

export function CvPage() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section className={styles.cvPage}>
      <h1 className={styles.title}>Curriculum Vitae</h1>

      {/* Tabs */}
      <div className={styles.tabs}>
        {TABS.map(tab =>
          tab.link ? (
            <Link
              key={tab.id}
              to={tab.link}
              className={`${styles.tab} ${styles.tabLink}`}
            >
              {tab.label}
            </Link>
          ) : (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          )
        )}
      </div>

      {/* Content */}
      <div className={styles.content}>
        {activeTab === 'about' && (
          <div>
            <h2>À propos</h2>
            <p>
              Développeur Full‑Stack passionné, spécialisé en React, TypeScript et
              architectures cloud modernes. J’aime concevoir des expériences
              élégantes, performantes et maintenables.
            </p>
          </div>
        )}

        {activeTab === 'experience' && (
          <div>
            <h2>Expérience</h2>
            <p>Tu pourras détailler ici tes postes, missions, réalisations…</p>
          </div>
        )}

        {activeTab === 'education' && (
          <div>
            <h2>Formation</h2>
            <p>Diplômes, certifications, parcours académique…</p>
          </div>
        )}

        {activeTab === 'skills' && (
          <div>
            <h2>Compétences</h2>
            <p>Stack technique, outils, soft skills…</p>
          </div>
        )}

        {activeTab === 'interests' && (
          <div>
            <h2>Intérêts</h2>
            <p>Ce qui te passionne en dehors du code.</p>
          </div>
        )}
      </div>
    </section>
  );
}