import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './cvPage.module.css';
import { PortfolioHelmet } from '../../features/helmet/UnlockItHelmet';

const TABS = [
  { id: 'about', label: 'À propos' },
  { id: 'experience', label: 'Expérience' },
  { id: 'education', label: 'Formation' },
  { id: 'skills', label: 'Compétences' },
  { id: 'interests', label: 'Intérêts' },
  { id: 'portfolio', label: 'Portfolio →', link: '/projects' }
];

function CvPage() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section className={styles.cvPage}>
      <PortfolioHelmet
        title="CV"
        description="Mon parcours, mes compétences techniques, mes expériences professionnelles et ma formation en développement web."
        path="cv"
        image="default-og-image.png"
      />

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
              Étudiant en deuxième année de BUT Informatique, je m'oriente vers le
              développement Full-Stack avec une forte sensibilité pour l'architecture
              logicielle, les performances et la qualité du code.
            </p>

            <p>
              J'aime concevoir des applications complètes, depuis la modélisation de la
              base de données jusqu'au déploiement, en passant par le développement
              d'API REST et d'interfaces modernes avec React et TypeScript.
            </p>

            <p>
              Curieux de nature, je prends plaisir à explorer aussi bien le développement
              web que les algorithmes, les simulations ou encore les moteurs graphiques.
              J'accorde une importance particulière à la maintenabilité, aux tests
              automatisés et à l'optimisation plutôt qu'à l'accumulation de fonctionnalités.
            </p>
          </div>
        )}

        {activeTab === 'experience' && (
          <div>
            <h2>Expérience</h2>

            <article>
              <h3>Stage Développeur Full-Stack</h3>

              <p>
                <strong>Les Prairies Gourmandes du Morvan</strong> — Février 2026 -
                Présent
              </p>

              <ul>
                <li>
                  Refonte complète d'un site WordPress vers une architecture moderne
                  React / NestJS.
                </li>

                <li>
                  Développement d'une API REST et d'une interface d'administration sur
                  mesure permettant la gestion des actualités, réservations, commandes,
                  employés et contenus.
                </li>

                <li>
                  Conception de la base PostgreSQL avec TypeORM et intégration d'un
                  système de gestion des médias et de notifications par email.
                </li>

                <li>
                  Refonte de l'identité visuelle et modernisation du logo de
                  l'exploitation avec Figma.
                </li>

                <li>
                  Participation à toutes les étapes du projet : analyse des besoins,
                  conception, développement, tests et préparation au déploiement.
                </li>
              </ul>
            </article>

            <article>
              <h3>Stage d'observation de troisième</h3>

              <p>
                <strong>DGFiP</strong> — Février 2020
              </p>

              <ul>
                <li>
                  Installation et configuration d'ordinateurs portables destinés au
                  télétravail pendant la période COVID-19.
                </li>

                <li>
                  Découverte des métiers de l'informatique et du fonctionnement d'une
                  administration publique.
                </li>

                <li>
                  Assistance des équipes dans leurs tâches quotidiennes.
                </li>
              </ul>
            </article>
          </div>
        )}

        {activeTab === 'education' && (
          <div>
            <h2>Formation</h2>

            <article>
              <h3>BUT Informatique</h3>

              <p>
                Université de Bourgogne — 2024 - Présent
              </p>

              <p>
                Étudiant en deuxième année.
              </p>

              <p>
                Formation axée sur le développement logiciel, les architectures web,
                les bases de données, l'algorithmique, les réseaux et la gestion de
                projets.
              </p>

              <p>
                Principaux projets réalisés :
              </p>

              <ul>
                <li>UnlockIt — Marketplace Full-Stack de distribution de jeux vidéo.</li>
                <li>Les Prairies Gourmandes du Morvan — Refonte professionnelle d'un site et développement d'un back-office.</li>
                <li>Algorithme de colonie de fourmis (ACO) en C++.</li>
                <li>Simulation d'oscillateurs de Kuramoto en Python.</li>
              </ul>
            </article>

            <article>
              <h3>Baccalauréat Général</h3>

              <p>
                Septembre 2023 - Juin 2024
              </p>

              <ul>
                <li>Spécialités : Mathématiques • Physique-Chimie • Anglais Littéraire</li>
                <li>Options : Euro-Maths • Mathématiques Expertes</li>
                <li>Mention : Bien</li>
              </ul>
            </article>
          </div>
        )}

        {activeTab === 'skills' && (
          <div>
            <h2>Compétences</h2>

            <h3>Développement Full-Stack</h3>

            <p>
              React • TypeScript • JavaScript • Vite • NestJS • API REST • TypeORM
              • Playwright
            </p>

            <h3>Langages</h3>

            <p>
              TypeScript • JavaScript • Python • Java • C • C++ • C# • Bash
            </p>

            <h3>Frontend & Design</h3>

            <p>
              React • HTML • CSS • XAML • Figma
            </p>

            <h3>Bases de données</h3>

            <p>
              SQL • PostgreSQL • TypeORM
            </p>

            <h3>Outils</h3>

            <p>
              Git • GitHub • Docker • Visual Studio • IntelliJ • PowerBI
              • PhpMyAdmin • MySQL Workbench
            </p>

            <h3>Réseaux & Systèmes</h3>

            <p>
              TCP/IP • Cisco Packet Tracer • Windows • Linux
            </p>

            <h3>Compétences transversales</h3>

            <ul>
              <li>Architecture logicielle et conception d'applications</li>
              <li>Optimisation des performances et analyse de profiling</li>
              <li>Tests automatisés et assurance qualité</li>
              <li>UX/UI et conception d'interfaces</li>
              <li>Travail en équipe avec Git et gestion de projet</li>
            </ul>
          </div>
        )}

        {activeTab === 'interests' && (
          <div>
            <h2>Intérêts</h2>

            <ul>
              <li>
                Développement Full-Stack et conception d'applications web modernes.
              </li>

              <li>
                Algorithmique, optimisation et systèmes complexes
                (ACO, modèles de Kuramoto, simulations).
              </li>

              <li>
                Développement de jeux vidéo, création de moteurs et expérimentations
                graphiques (Minecraft, PixiJS).
              </li>

              <li>
                Open source, veille technologique et découverte de nouveaux outils
                d'analyse et de performance.
              </li>

              <li>
                Qualité logicielle : tests automatisés, architecture, maintenabilité
                et optimisation du code.
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default CvPage;