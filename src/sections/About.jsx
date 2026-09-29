import Icon from '../components/Icon'
import { personalInfo } from '../data/personal'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Background & Approach</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            An engineering perspective driven by systems thinking, honest metrics, and clean code.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text-column">
            <p className="lead-paragraph">
              I am a final-year Information Technology student at{' '}
              <span className="text-highlight">{personalInfo.college}</span> in Mumbai, maintaining a
              strong academic record of <span className="text-highlight">9.0 CGPA</span>.
            </p>
            <p>
              My work centers on building software where performance, reliability, and measurable
              correctness matter. I do not treat machine learning and full-stack engineering as separate
              silos: modern intelligent systems require rigorous data modeling, stable backend
              APIs, and clean user-facing software to deliver real value.
            </p>
            <p>
              Whether structuring a PostgreSQL database for FMCG billing, tracking joint kinematics
              using temporal neural networks, or programming ESP32 firmware for edge environmental
              sensing, I focus on understanding what happens under the hood.
            </p>

            <div className="about-quick-specs">
              <div className="spec-row">
                <span className="spec-label">Degree</span>
                <span className="spec-value">B.Tech in Information Technology (2022 — 2026)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Institution</span>
                <span className="spec-value">K. J. Somaiya Institute of Technology, Mumbai</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Location</span>
                <span className="spec-value">Mumbai, India</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Core Focus</span>
                <span className="spec-value">Backend Engineering, Applied Computer Vision & ML, IoT Systems</span>
              </div>
            </div>
          </div>

          <div className="about-principles-column">
            <h3 className="principles-title">Engineering Principles</h3>

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
                <span className="cta-box-title">Looking for an engineer who delivers end-to-end?</span>
                <p className="cta-box-desc">
                  Open for software development, backend, and machine learning opportunities.
                </p>
              </div>
              <a href="#contact" className="btn btn--outline btn--sm">
                <span>Connect</span>
                <Icon name="arrowUpRight" size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
