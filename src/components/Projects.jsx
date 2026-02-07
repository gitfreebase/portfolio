import { useState } from 'react'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Olympique de Marseille",
      type: "Mobile",
      role: "Dev",
      description: "Refonte UX/UI totale de l'application iOS - 3 mois",
      tech: ["Swift Storyboard", "UKIT", "Combine"],
      url: "https://www.om.fr/fr"
    },
    {
      id: 2,
      title: "WAVMAP",
      type: "Web",
      role: "dev",
      description: "Plateforme B2B de découverte d'artistes, lieux, labels et autres acteurs du monde de la musique en UE + blog.",
      tech: ["Astro", "Typescript"],
      url: "https://wavmap.org/"
    },
    {
      id: 3,
      title: "Folks Festival",
      type: "Web",
      role: "Dev",
      description: "Site vitrine du Folks Festival, un festival de musique traditionnelles revisitées basé à Marseille",
      tech: ["Typescript"],
      url: "https://www.folks-festival-marseille.com/home-page"
    },
    {
      id: 4,
      title: "Perfumist",
      type: "Mobile",
      role: "Dev & chef de projet",
      description: "Application grand public de recherche et découverte de parfums. Refonte totale de l'application from scratch. Implémentation de nouvelles features (communauté, commentaires, découverte).",
      tech: ["Swift Storyboard", "UIKIT", "MVC"],
      url: "https://perfumist.fr/"
    },
    {
      id: 5,
      title: "Fastority",
      type: "Mobile",
      role: "Dev & chef de projet",
      description: "Application iOS permettant de voyager en groupe en toute sécurité",
      tech: ["Swift", "UIKIT", "MVVM", "RxSwift", "Google Maps"],
      url: "https://www.fastority.net/"
    },
    {
      id: 6,
      title: "Use My Feed",
      type: "Mobile",
      role: "Chef de projet",
      description: "Plateforme de mise en relation entre créateurs de contenus et marques",
      tech: ["Swift Storyboard", "MVC", "Back4App"],
      url: "https://usemyfeed.com/"
    },
    {
      id: 7,
      title: "MGEvidence",
      type: "Mobile",
      role: "Dev & chef de projet",
      description: "Application e-commerce iOS iPad + iPhone: diffusion de livestream (tiktokshop avant l'heure) + gestion du stock depuis l'iPad et plateforme de vente en ligne en live et hors-live pour l'utilisateur depuis l'iPhone",
      tech: ["Swift", "MVC", "MVVM", "Stream STMP", "Firebase", "Firestore"]
    },
    {
      id: 8,
      title: "Kabriol",
      type: "Mobile",
      role: "Dev",
      description: "Application iOS Guide culturel et touristique pour enfants",
      tech: ["Google Maps", "back4app"],
      url: "https://www.kabriol.fr/"
    },
    {
      id: 9,
      title: "Keeskee",
      type: "Mobile",
      role: "Dev",
      description: "Application de gestion de dossiers patients à destination d'infirmiers",
      tech: ["Swift Storyboard"],
      url: "https://www.keeskee.com/"
    },
    {
      id: 10,
      title: "Carte Impact",
      type: "Web",
      role: "Dev",
      description: "Dashboard gestion professionnel pour les entreprises utilisant la carte Impact",
      tech: ["React", "API REST", "CSS", "Material"],
      url: "https://carteimpact.fr/"
    },
    {
      id: 10,
      title: "Cardzia",
      type: "Web",
      role: "Dev",
      description: "Application mobile de gestion de cartes pokémon avec reconaissances de cartes via scan.",
      tech: ["iOS", "SwiftUI"],
      url: "https://cardzia.fr/"
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
                <h3>{project.title}</h3>
                <p className="project-meta">{project.type} • {project.role}</p>
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
              <h3>{selectedProject.title}</h3>
              <p className="project-meta">{selectedProject.type} • {selectedProject.role}</p>
              <p className="project-description">{selectedProject.description}</p>
              <div className="tech-tags">
                {selectedProject.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
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
