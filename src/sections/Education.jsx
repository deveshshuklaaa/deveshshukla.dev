import { educationData, experienceData } from '../data/education'

export default function Education() {
  const education = educationData[0]
  return (
    <section className="section education-section" id="education" aria-labelledby="education-title">
      <div className="shell section-inner">
        <p className="eyebrow">04 / Foundation</p><h2 id="education-title">Learning. Then building.</h2>
        <div className="education-composition">
          <div className="education-record"><p className="meta">Education / {education.period}</p><h3>K. J. Somaiya<br />Institute of Technology</h3><p>{education.degree}<br />{education.fieldOfStudy}</p><p className="meta">{education.status}</p></div>
          {experienceData.map(experience => <div className="experience-record" key={experience.role}><p className="meta">Experience / {experience.period}</p><h3>{experience.role}</h3><p>{experience.organization}</p><p className="small muted">Contributed to internal web applications across front-end, back-end, testing, and database integration.</p></div>)}
        </div>
      </div>
    </section>
  )
}
