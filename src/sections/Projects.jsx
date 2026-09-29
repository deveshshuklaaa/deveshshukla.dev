import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'cv-ml', label: 'Computer Vision & ML' },
    { id: 'fullstack', label: 'Full-Stack & Systems' },
    { id: 'iot', label: 'IoT & Embedded' },
  ]

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true
    if (filter === 'cv-ml') return project.category.includes('Vision') || project.category.includes('Learning')
    if (filter === 'fullstack') return project.category.includes('Full-Stack') || project.category.includes('Systems') || project.category.includes('Security')
    if (filter === 'iot') return project.category.includes('IoT') || project.category.includes('Edge')
    return true
  })

  return (
    <section className="section" id="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Featured Work</span>
          <h2 className="section-title">Projects & Systems</h2>
          <p className="section-subtitle">
            A selection of projects demonstrating technical depth, systems architecture, and empirical evaluation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-bar" role="tablist" aria-label="Project categories">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              role="tab"
              aria-selected={filter === opt.id}
              className={`filter-btn ${filter === opt.id ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid / Stack */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Repository Footnote */}
        <div className="projects-footer-note">
          <p>
            More exploratory repositories, experiments, and code samples are available on{' '}
            <a
              href="https://github.com/deveshshuklaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              GitHub (@deveshshuklaaa)
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}
