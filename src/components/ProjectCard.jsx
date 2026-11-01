export default function ProjectCard({ project, index, presentation, hidden }) {
  const p = presentation
  return (
    <article id={`project-${project.id}`} className={`case-study case-study--${p.id} ${p.dark ? 'dark-section' : ''}`} aria-labelledby={`title-${project.id}`} hidden={hidden}>
      <div className="shell case-inner">
        <p className="eyebrow">0{index + 1} / {p.category}</p>
        <div className="case-composition">
          <div className="case-narrative">
            <h3 id={`title-${project.id}`}>{p.title.split('\n').map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</h3>
            <p>{p.summary}</p>
            <div className="case-problem"><h4 className="meta">The challenge</h4><p className="small muted">{p.problem}</p></div>
            <div className="case-built"><h4 className="meta">What I built</h4><p>{p.built}</p></div>
            <p className="meta case-tech">{p.tech}</p>
            <a className="text-link" href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source on GitHub`}>View {project.id === 'cyberlabx' ? 'repository' : 'source on GitHub'} <span aria-hidden="true">↗</span></a>
          </div>
          <figure className="system-study" aria-label={`${project.title} architecture and validation`}>
            <p className="meta">System study / 0{index + 1}</p>
            <ol className="pipeline">{p.steps.map((step, i) => <li key={step}><span className="meta" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><span>{step}</span></li>)}</ol>
            <figcaption className="meta">{p.caption}</figcaption>
            <div className="study-result"><p className="result-value">{p.metric}</p><p className="small muted">{p.metricLabel}</p>
              {project.id === 'haemophilia-exercise-analysis' && <p className="small muted">Full 34-feature model; cohort cross-validation. Research prototype, not a medical diagnostic claim.</p>}
            </div>
            {project.id === 'smart-spray' && <div className="control-modes">{[['AUTO', 'Vision-triggered'], ['ASSISTED', 'Operator confirms'], ['MANUAL', 'Direct override']].map(([mode, description]) => <div key={mode}><p className="eyebrow">{mode}</p><p className="small">{description}</p></div>)}</div>}
            {project.id === 'cyberlabx' && <div className="isolation-boundary"><p className="meta">Per-session boundary</p><ul className="small"><li>Isolated bridge network</li><li>CPU & RAM quotas</li><li>Abandoned-session cleanup</li></ul></div>}
          </figure>
        </div>
        <details className="engineering-notes">
          <summary><span>Engineering notes <span className="expand-mark" aria-hidden="true">+</span></span><span className="meta">{p.note}</span></summary>
          <div className="notes-content">
            <div className="decisions">{project.keyDecisions.map(decision => <section key={decision.decision}><h4>{decision.decision}</h4><p className="small muted">{decision.rationale}</p></section>)}</div>
            <div className="original-validation"><h4>{project.metric.label}</h4><p>{project.metric.value}</p><p className="small muted">{project.metric.qualification}</p></div>
            <p className="meta">Full stack / {project.technologies.join(' / ')}</p>
          </div>
        </details>
      </div>
    </article>
  )
}
