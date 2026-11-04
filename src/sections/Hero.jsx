import { personalInfo } from '../data/personal'
import { projects } from '../data/projects'
import { projectPresentation } from '../data/presentation'

export default function Hero({ onProjectSelect }) {
  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="shell hero-inner">
        <p className="eyebrow">Software & AI/ML developer <span className="hero-location">/ &nbsp; Mumbai, India</span></p>
        <h1 id="hero-title"><span className="sr-only">Devesh Shukla. </span>Good ideas.<em>Working systems.</em></h1>
        <div className="hero-introduction">
          <div className="hero-actions">
            <a className="button" href="#projects">Explore selected work <span aria-hidden="true">↓</span></a>
            <p className="meta">Open to engineering roles & internships</p>
          </div>
          <div className="hero-bio">
            <p>I’m Devesh, an Information Technology student turning complex problems into dependable software, applied ML, and embedded systems.</p>
            <p className="meta">BTech IT / Class of {personalInfo.graduationYear}</p>
          </div>
        </div>
        <nav className="work-index" aria-label="Selected project index">
          {projects.map((project, index) => <a key={project.id} href={`#project-${project.id}`} onClick={onProjectSelect}>
            <span className="eyebrow">0{index + 1} / {projectPresentation[index].category.split(' / ')[0]}</span>
            <span>{project.title} <span aria-hidden="true">↗</span></span>
          </a>)}
        </nav>
      </div>
    </section>
  )
}
