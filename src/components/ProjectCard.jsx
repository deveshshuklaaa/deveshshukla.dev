import Icon from './Icon'
import Badge from './Badge'

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card" id={`project-${project.id}`}>
      {/* Top Header Row */}
      <div className="project-card__header">
        <div className="project-card__meta">
          <span className="project-card__index">0{index + 1}</span>
          <span className="project-card__category">{project.category}</span>
          <span className="project-card__status">{project.status}</span>
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
              <Icon name="github" size={16} />
              <span>Source Code</span>
              <Icon name="arrowUpRight" size={13} />
            </a>
          ) : (
            <span className="project-link project-link--muted">
              <span>Prototype / In-House</span>
            </span>
          )}
        </div>
      </div>

      {/* Main Title & Tagline */}
      <div className="project-card__heading">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
      </div>

      {/* Structured Problem & Solution Grid */}
      <div className="project-card__breakdown">
        <div className="breakdown-block">
          <h4 className="breakdown-label">
            <span className="label-icon">›</span> The Problem
          </h4>
          <p className="breakdown-text">{project.problem}</p>
        </div>

        <div className="breakdown-block">
          <h4 className="breakdown-label">
            <span className="label-icon">›</span> What I Built
          </h4>
          <p className="breakdown-text">{project.whatBuilt}</p>
        </div>
      </div>

      {/* Key Technical Decisions (Why this tech / architecture) */}
      <div className="project-card__decisions">
        <h4 className="decisions-title">Key Engineering Decisions:</h4>
        <div className="decisions-grid">
          {project.keyDecisions.map((item, idx) => (
            <div key={idx} className="decision-item">
              <span className="decision-name">{item.decision}</span>
              <p className="decision-rationale">{item.rationale}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Empirical Metric Callout */}
      {project.metric && (
        <div className="project-card__metric-box">
          <div className="metric-header">
            <span className="metric-tag">{project.metric.label}</span>
            {project.metric.qualification && (
              <span className="metric-qualification">({project.metric.qualification})</span>
            )}
          </div>
          <div className="metric-body">
            <code className="metric-code">{project.metric.value}</code>
          </div>
        </div>
      )}

      {/* Tech Stack Footer */}
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
