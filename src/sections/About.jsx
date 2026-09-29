import Icon from '../components/Icon'
import { personalInfo } from '../data/personal'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Engineering Profile</span>
          <h2 className="section-title">About & Background</h2>
          <p className="section-subtitle">
            An engineering perspective rooted in systems thinking, empirical validation, and end-to-end execution.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative & Background */}
          <div className="about-text-column">
            <p className="lead-paragraph">
              I am a final-year Information Technology student at{' '}
              <strong className="text-highlight">{personalInfo.college}</strong> in Mumbai, maintaining
              a <strong className="text-highlight">9.0 / 10.0 CGPA</strong>.
            </p>
            <p>
              My engineering approach bridges machine learning models and production software systems. In real-world applications, an ML model is only as useful as the data pipeline supplying it and the backend architecture serving it. I enjoy building the entire loop: from low-level sensor telemetry (ESP32/MQTT) and normalized databases (PostgreSQL) to computer vision pipelines and modern reactive web dashboards.
            </p>
            <p>
              Rather than relying on automated auto-ML or surface-level tutorials, I focus on the underlying mechanics: why a specific database isolation level is required for transactional inventory depletion, how to avoid inter-subject data leakage during temporal LSTM evaluation, or how to isolate ephemeral challenge containers with resource clamps.
            </p>

            {/* Quick Specs */}
            <div className="about-quick-specs">
              <div className="spec-row">
                <span className="spec-label">Degree</span>
                <span className="spec-value">Bachelor of Technology (B.Tech) in Information Technology</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Institution</span>
                <span className="spec-value">K. J. Somaiya Institute of Technology, Mumbai</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Timeline & Standing</span>
                <span className="spec-value">Class of 2026 • CGPA: 9.0 / 10.0</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Primary Stack</span>
                <span className="spec-value">Python, Django/DRF, PyTorch, React, PostgreSQL, Docker, ESP32</span>
              </div>
            </div>
          </div>

          {/* Core Philosophy & Competencies */}
          <div className="about-principles-column">
            <h3 className="principles-title">Core Engineering Principles</h3>

            <div className="principles-list">
              {personalInfo.about.philosophy.map((item, idx) => (
                <div key={idx} className="principle-card">
                  <div className="principle-card__header">
                    <span className="principle-card__num">0{idx + 1}</span>
                    <h4 className="principle-card__title">{item.title}</h4>
                  </div>
                  <p className="principle-card__desc">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="about-cta-box">
              <div className="cta-box-content">
                <span className="cta-box-title">Evaluating candidates for 2026?</span>
                <p className="cta-box-desc">
                  Available for full-time Software Engineer, Backend Engineer, and applied ML roles.
                </p>
              </div>
              <a href="#contact" className="btn btn--outline btn--sm">
                <span>Contact Details</span>
                <Icon name="arrowUpRight" size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
