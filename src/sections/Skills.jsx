import { skillCategories } from '../data/skills'
import Badge from '../components/Badge'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Technical Capability</span>
          <h2 className="section-title">Skills & Tech Stack</h2>
          <p className="section-subtitle">
            Tools, technologies, and frameworks used across production-style systems, ML pipelines, and embedded hardware.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-category-header">
                <span className="category-num">0{idx + 1}</span>
                <h3 className="category-title">{cat.category}</h3>
              </div>
              <p className="category-desc">{cat.description}</p>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <Badge variant="subtle" size="xs">
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
