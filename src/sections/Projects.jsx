import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { projectPresentation } from '../data/presentation'

export default function Projects({ filter, onFilterChange }) {
  const options = [{ id: 'all', label: 'All work' }, { id: 'cv-ml', label: 'Vision & ML' }, { id: 'fullstack', label: 'Full-stack' }]
    .map(item => ({ ...item, count: projects.filter(p => item.id === 'all' || p.filterTag === item.id).length }))
    .filter(item => item.count > 0)
  const visible = projects.filter(project => filter === 'all' || project.filterTag === filter)

  return (
    <section id="projects" aria-labelledby="work-title">
      <div className="section work-heading"><div className="shell section-inner">
        <p className="eyebrow">02 / Selected work</p>
        <h2 id="work-title">Four systems.<br />Four different challenges.</h2>
        <div className="filters" role="group" aria-label="Project filters">
          {options.map(option => <button key={option.id} type="button" className="filter-button" aria-pressed={filter === option.id} onClick={() => onFilterChange(option.id)}>{option.label} / {String(option.count).padStart(2, '0')}</button>)}
        </div>
        <p className="sr-only" role="status">Showing {visible.length} projects</p>
      </div></div>
      <div className="case-studies">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} presentation={projectPresentation.find(p => p.id === project.id)} hidden={!visible.includes(project)} />)}
      </div>
    </section>
  )
}
