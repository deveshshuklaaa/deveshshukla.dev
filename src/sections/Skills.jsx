import { skillCategories } from '../data/skills'
import Badge from '../components/Badge'
import Icon from '../components/Icon'
import { personalInfo } from '../data/personal'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Technical Capabilities</span>
          <h2 className="section-title">Skills & Tech Stack</h2>
          <p className="section-subtitle">
            Languages, frameworks, systems infrastructure, and theoretical fundamentals applied across academic capstones and software projects.
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
                      {skill.context}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* LeetCode & Problem Solving Banner */}
        <div className="skills-footnote-banner">
          <div className="footnote-banner__content">
            <div className="footnote-banner__icon">
              <Icon name="code" size={20} />
            </div>
            <div>
              <span className="footnote-banner__title">Data Structures & Algorithm Problem Solving</span>
              <p className="footnote-banner__desc">
                Active problem solver practicing algorithmic challenges on LeetCode covering dynamic programming, graph traversal, and arrays/trees.
              </p>
            </div>
          </div>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline btn--sm"
          >
            <span>View LeetCode Profile</span>
            <Icon name="arrowUpRight" size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
