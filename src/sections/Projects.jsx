import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filterOptions = [
    { id: 'all', label: 'All Projects', count: projects.length },
    {
      id: 'cv-ml',
      label: 'Computer Vision & ML',
      count: projects.filter((p) => p.filterTag === 'cv-ml').length,
    },
    {
      id: 'fullstack',
      label: 'Full-Stack & Systems',
      count: projects.filter((p) => p.filterTag === 'fullstack').length,
    },
    {
      id: 'iot',
      label: 'IoT & Embedded',
      count: projects.filter((p) => p.filterTag === 'iot').length,
    },
  ]

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true
    return project.filterTag === filter
  })

  return (
    <section className="section" id="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Technical Portfolio</span>
          <h2 className="section-title">Featured Projects & Systems</h2>
          <p className="section-subtitle">
            Engineered systems demonstrating relational data modeling, temporal deep learning architectures, microcontroller telemetry, and containerized deployment.
          </p>
        </div>

        {/* Filter Bar with Counts */}
        <div className="filter-bar" role="tablist" aria-label="Project category filters">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              role="tab"
              aria-selected={filter === opt.id}
              className={`filter-btn ${filter === opt.id ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter(opt.id)}
            >
              <span>{opt.label}</span>
              <span className="filter-count">{opt.count}</span>
            </button>
          ))}
        </div>

        {/* Projects Cards List */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="projects-footer-note">
          <p>
            Explore all personal code repositories, experiments, and open-source contributions on{' '}
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
