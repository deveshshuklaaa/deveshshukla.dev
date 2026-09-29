import Icon from '../components/Icon'
import { educationData, experienceData } from '../data/education'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Academic & Practical Track Record</span>
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle">
            Strong foundational computer science training combined with hands-on software development.
          </p>
        </div>

        <div className="timeline-grid">
          {/* Education Column */}
          <div className="timeline-column">
            <div className="timeline-column__header">
              <div className="timeline-header-icon">
                <Icon name="graduationCap" size={20} />
              </div>
              <h3 className="timeline-column__title">Education</h3>
            </div>

            <div className="timeline-cards">
              {educationData.map((edu, idx) => (
                <div key={idx} className="timeline-card">
                  <div className="timeline-card__top">
                    <span className="timeline-period">{edu.period}</span>
                    <span className="timeline-badge">{edu.score}</span>
                  </div>

                  <h4 className="timeline-role">{edu.degree}</h4>
                  <p className="timeline-org">
                    <Icon name="mapPin" size={14} />
                    <span>{edu.institution}, {edu.location}</span>
                  </p>

                  <ul className="timeline-details">
                    {edu.details.map((item, dIdx) => (
                      <li key={dIdx} className="timeline-bullet">
                        <span className="bullet">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience / Internship Column */}
          <div className="timeline-column">
            <div className="timeline-column__header">
              <div className="timeline-header-icon">
                <Icon name="briefcase" size={20} />
              </div>
              <h3 className="timeline-column__title">Experience & Internship</h3>
            </div>

            <div className="timeline-cards">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="timeline-card">
                  <div className="timeline-card__top">
                    <span className="timeline-period">{exp.period}</span>
                    <span className="timeline-badge timeline-badge--intern">{exp.type}</span>
                  </div>

                  <h4 className="timeline-role">{exp.role}</h4>
                  <p className="timeline-org">
                    <Icon name="mapPin" size={14} />
                    <span>{exp.organization}, {exp.location}</span>
                  </p>

                  <ul className="timeline-details">
                    {exp.details.map((item, dIdx) => (
                      <li key={dIdx} className="timeline-bullet">
                        <span className="bullet">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
