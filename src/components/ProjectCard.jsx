import Icon from './Icon'
import Badge from './Badge'

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card" id={`project-${project.id}`}>
      <div className="project-card__header">
        <div className="project-card__meta">
          <span className="project-card__index">0{index + 1}</span>
          <span className="project-card__category">{project.category}</span>
        </div>

        <div className="project-card__links">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Icon name="github" size={17} />
              <span>Source</span>
              <Icon name="arrowUpRight" size={14} />
            </a>
          ) : (
            <span className="project-link project-link--muted" title="Private / Local Project">
              <span>Internal / System</span>
            </span>
          )}
        </div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__tagline">{project.tagline}</p>

        <p className="project-card__description">{project.description}</p>

        {project.highlightMetric && (
          <div className="project-card__metric">
            <span className="metric-label">{project.highlightMetric.label}:</span>
            <span className="metric-value">{project.highlightMetric.value}</span>
          </div>
        )}

        <div className="project-card__details">
          <h4 className="details-heading">Key Implementation Details:</h4>
          <ul className="details-list">
            {project.keyPoints.map((point, idx) => (
              <li key={idx} className="details-item">
                <span className="bullet">›</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-card__footer">
        <div className="project-card__tech">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="tech">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )
}
