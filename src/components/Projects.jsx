import { useState } from 'react'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Olympique de Marseille",
      type: "Mobile",
      role: "Dev",
      description: "Refonte UX/UI totale de l'application iOS",
      detailedDescription: "Refonte complète de l'application iOS de l'Olympique de Marseille. J'ai participé à la refonte UX/UI en développant de nouvelles fonctionnalités et en intégrant la nouvelle charte graphique du club. Implémentation de l'architecture MVVM avec Combine pour une meilleure gestion des flux de données.",
      date: "2023",
      duration: "4 mois",
      teamSize: 5,
      logo: "/images/om-couleur.webp",
      tech: ["Swift Storyboard", "UKIT", "Combine"],
      url: "https://www.om.fr/fr"
    },
    {
      id: 2,
      title: "WAVMAP",
      type: "Web",
      role: "dev",
      description: "Plateforme B2B de découverte d'artistes, lieux, labels et autres acteurs du monde de la musique en UE + blog.",
      detailedDescription: "Développement d'une plateforme B2B complète permettant la découverte d'artistes, lieux, labels et autres acteurs du monde de la musique en Europe. Intégration d'un blog. Utilisation d'Astro pour des performances optimales, utilisation de Mapbox pour la carte.",
      date: "2025",
      duration: "6 mois",
      teamSize: 2,
      logo: "/images/WAVMAP LOGO OK.svg",
      tech: ["Astro", "Typescript, Mapbox"],
      url: "https://wavmap.org/"
    },
    {
      id: 3,
      title: "Folks Festival",
      type: "Web",
      role: "Dev",
      description: "Site vitrine du Folks Festival, un festival de musique traditionnelles revisitées basé à Marseille",
      detailedDescription: "Création du site vitrine du Folks Festival. Développement d'une interface moderne et responsive présentant la programmation, les artistes et les informations pratiques du festival.",
      date: "2024-présent",
      duration: "2 semaines",
      teamSize: 1,
      logo: "/images/folks.svg",
      tech: ["Typescript"],
      url: "https://www.folks-festival-marseille.com/home-page"
    },
    {
      id: 4,
      title: "Perfumist",
      type: "Mobile",
      role: "Dev & chef de projet",
      description: "Application grand public de recherche et découverte de parfums. Refonte totale de l'application from scratch.",
      detailedDescription: "Refonte complète de l'application Perfumist from scratch. En tant que développeur et chef de projet, j'ai coordonné le développement et implémenté de nouvelles fonctionnalités clés : système de communauté, commentaires et découverte de parfums. Architecture MVC avec UIKit.",
      date: "2021-2023",
      duration: "2 ans",
      teamSize: 3,
      logo: "/images/perfumist.jpg",
      tech: ["Swift Storyboard", "UIKIT", "MVC"],
      url: "https://perfumist.fr/"
    },
    {
      id: 5,
      title: "Fastority",
      type: "Mobile",
      role: "Dev & chef de projet",
      description: "Application iOS permettant de voyager en groupe en toute sécurité",
      detailedDescription: "Développement et gestion de projet d'une application iOS de voyage en groupe sécurisé et signalement d'événements (type catastrophe naturelles, agression). Implémentation d'une architecture MVVM avec RxSwift pour la gestion réactive des données. Intégration de Google Maps pour le tracking en temps réel. Gestion complète du projet depuis la conception jusqu'au déploiement.",
      date: "2021-2023",
      duration: "2 ans",
      teamSize: 2,
      logo: "/images/fastority.avif",
      tech: ["Swift", "UIKIT", "MVVM", "RxSwift", "Google Maps"],
      url: "https://www.fastority.net/"
    },
    {
      id: 6,
      title: "Use My Feed",
      type: "Mobile",
      role: "Dev",
      description: "Plateforme de mise en relation entre créateurs de contenus et marques",
      detailedDescription: "Développement from scratch de l'application suivant l'achitecture MVC, utilisation de back4app pour la gestion de donnée et écriture de cloud code.",
      date: "2022-2023",
      duration: "10 mois",
      teamSize: 2,
      logo: "/images/usemyfeed.svg",
      tech: ["Swift Storyboard", "MVC", "Back4App", "Javascript"],
      url: "https://usemyfeed.com/"
    },
    {
      id: 7,
      title: "MGEvidence",
      type: "Mobile",
      role: "Dev & chef de projet",
      description: "Application e-commerce iOS iPad + iPhone: diffusion de livestream (tiktokshop avant l'heure) + gestion du stock depuis l'iPad",
      detailedDescription: "Développement et gestion d'une application e-commerce innovante pour iOS (iPad + iPhone). Implémentation d'un système de livestream shopping sur le principe de TikTok Shop. Interface backoffice iPad pour la gestion du stock en temps réel et diffusion des lives. Application iPhone pour les utilisateurs avec achat en live et hors-live. Architecture MVC iPhone et MVVM iPad avec Firebase et Firestore.",
      date: "2021-2023",
      duration: "3 ans",
      teamSize: 3,
      tech: ["Swift", "MVC", "MVVM", "Stream STMP", "Firebase", "Firestore"]
    },
    {
      id: 8,
      title: "Kabriol",
      type: "Mobile",
      role: "Dev",
      description: "Application iOS Guide culturel et touristique pour enfants",
      detailedDescription: "Évolutions sur application iOS de guide culturel et touristique destinée aux enfants. Intégration de Google Maps pour la localisation des points d'intérêt. Interface ludique et adaptée au jeune public avec des contenus éducatifs. Backend sur Back4App.",
      date: "2022",
      duration: "4 mois",
      teamSize: 2,
      logo: "/images/kabriol.webp",
      tech: ["Google Maps", "Back4App"],
      url: "https://www.kabriol.fr/"
    },
    {
      id: 9,
      title: "Keeskee",
      type: "Mobile",
      role: "Dev",
      description: "Application de gestion de dossiers patients à destination d'infirmiers",
      detailedDescription: "Évolutions sur une application iOS de gestion de dossiers patients pour les professionnels infirmiers. Implémentation de fonctionnalités de suivi patient, gestion des soins et calendrier. Respect des normes de sécurité et confidentialité des données médicales.",
      date: "2025",
      duration: "5 mois",
      teamSize: 2,
      logo: "/images/keeskee.avif",
      tech: ["Swift Storyboard"],
      url: "https://www.keeskee.com/"
    },
    {
      id: 10,
      title: "Carte Impact",
      type: "Web",
      role: "Dev",
      description: "Dashboard gestion professionnel pour les entreprises utilisant la carte Impact",
      detailedDescription: "Développement d'un dashboard web pour la gestion professionnelle de la Carte Impact. Interface d'administration permettant aux entreprises de gérer leurs cartes, consulter les statistiques et gérer les employés. Utilisation de ReactJS avec Material UI et intégration d'API REST.",
      date: "2023-2024",
      duration: "8 mois",
      teamSize: 3,
      logo: "/images/impact.webp",
      tech: ["ReactJS", "API REST", "CSS", "Material"],
      url: "https://carteimpact.fr/"
    },
    {
      id: 11,
      title: "Cardzia",
      type: "Mobile",
      role: "Dev",
      description: "Application mobile de gestion de cartes pokémon avec reconaissances de cartes via scan.",
      detailedDescription: "Développement d'une application iOS de gestion de collection de cartes Pokémon. Implémentation d'un système de reconnaissance de cartes par scan. Gestion de collection avec statistiques et valeur des cartes. Interface moderne en SwiftUI et Jetpack Compose.",
      date: "202-2026",
      duration: "6 mois",
      teamSize: 1,
      logo: "/images/cardzia.webp",
      tech: ["iOS", "SwiftUI"],
      url: "https://cardzia.fr/"
    },
    {
      id: 12,
      title: "WeClean",
      type: "Web & Mobile",
      role: "Chef de projet",
      description: "Solution permettant aux entreprises d'organiser et valoriser des initiatives de nettoyages dans le cadre d'un engagement RSE.",
      detailedDescription: "Gestion de projet complète d'une solution multi-plateforme (web + iOS + Android) permettant aux entreprises d'organiser des initiatives de nettoyage dans le cadre de leur engagement RSE. Coordination des équipes de développement sur les différentes plateformes. Backend NodeJS, applications natives iOS (SwiftUI) et Android (Jetpack Compose), dashboard web ReactJS.",
      date: "2023-2024",
      duration: "6 mois",
      teamSize: 5,
      logo: "/images/weclean.png",
      tech: ["NodeJS", "SwiftUI", "Kotlin", "Jetpack Compose", "ReactJS"],
      url: "https://wecleanapp.com//"
    },
    {
      id: 13,
      title: "YourSong",
      type: "Mobile",
      role: "Chef de projet",
      description: "Application de jeu multijoueur autour de la musique.",
      detailedDescription: "Gestion de projet d'une application de jeu multijoueur musical pour iOS et Android. Coordination du développement des applications natives avec SwiftUI et Jetpack Compose. Intégration de Firestore pour la synchronisation en temps réel des parties multijoueurs. Gestion des fonctionnalités de matchmaking et de classements.",
      date: "2023",
      duration: "8 mois",
      teamSize: 4,
      tech: ["Firestore", "SwiftUI", "Kotlin", "Jetpack Compose"],
    },
    {
      id: 14,
      title: "B-Free",
      type: "Web",
      role: "Dev",
      description: "Application de livraison B2C à vélo cargo.",
      detailedDescription: "Développement d'une application web de livraison B2C à vélo cargo. Interface utilisateur pour la commande et le suivi de livraisons écologiques. Système de gestion des livreurs et optimisation des trajets. Application ReactJS avec intégration de cartes pour le suivi en temps réel.",
      date: "2022-2023",
      duration: "5 mois",
      teamSize: 2,
      tech: ["ReactJS"],
    },
    {
      id: 15,
      title: "Big Mars",
      type: "Web",
      role: "Dev",
      description: "Application de développement de compétences douces.",
      detailedDescription: "Gestion de projet d'une application de développement de compétences douces à destination d'un public éloigné de l'emploi, et de recherche d'emploi avec matching vis-à-vis des dites compétences douces. Site web back-office super-admin, entreprise et organisme de formation (permettant de poster des annonces).",
      date: "2025-2026",
      duration: "1 an",
      teamSize: 8,
        logo: "/images/bigmars.png",
      tech: ["ReactJS, NodeJS, SwiftUI, Combine, Kotlin, Jetpack Compose"],
    },
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Mes Projets</h2>
        <div className="projects-content">
          <div className="projects-list">
            {projects.map(project => (
              <div
                key={project.id}
                className={`project-item ${selectedProject?.id === project.id ? 'active' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-item-content">
                  <div className="project-item-text">
                    <h3>{project.title}</h3>
                    <p className="project-meta">{project.type} • {project.role}</p>
                  </div>
                  {project.logo && (
                    <img src={project.logo} alt={project.title} className="project-item-logo" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {selectedProject && (
            <div className="project-details">
              <button
                className="close-details"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              <div className="project-header">
                {selectedProject.logo && (
                  <img src={selectedProject.logo} alt={selectedProject.title} className="project-details-logo" />
                )}
                <div className="project-header-text">
                  <h3>{selectedProject.title}</h3>
                  <p className="project-meta">{selectedProject.type} • {selectedProject.role}</p>
                </div>
              </div>

              <div className="project-info">
                <div className="info-item">
                  <span className="info-label">Date:</span>
                  <span className="info-value">{selectedProject.date}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Durée:</span>
                  <span className="info-value">{selectedProject.duration}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Équipe:</span>
                  <span className="info-value">{selectedProject.teamSize} {selectedProject.teamSize > 1 ? 'personnes' : 'personne'}</span>
                </div>
              </div>

              <div className="project-description-section">
                <h4>Description</h4>
                <p className="project-description">{selectedProject.detailedDescription}</p>
              </div>

              <div className="tech-section">
                <h4>Technologies</h4>
                <div className="tech-tags">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Voir le projet →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
