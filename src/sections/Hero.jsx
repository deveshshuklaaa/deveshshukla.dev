import Icon from '../components/Icon'
import { personalInfo } from '../data/personal'

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-container">
        {/* Availability Badge */}
        <div className="hero-status-bar">
          <div className="hero-status">
            <span className="status-dot"></span>
            <span className="status-text">{personalInfo.status}</span>
          </div>
          <span className="hero-cohort-tag">{personalInfo.graduationDetail}</span>
        </div>

        {/* Primary Header */}
        <div className="hero-header">
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-role">{personalInfo.title}</h2>
        </div>

        <p className="hero-summary">
          Information Technology student at{' '}
          <strong className="text-highlight">{personalInfo.college}</strong> (CGPA: {personalInfo.cgpa}).
          Specializing in backend architectures with strict data integrity, applied machine learning pipelines
          evaluated on zero-leakage protocols, and low-latency edge telemetry systems.
        </p>

        {/* Quick Action CTAs */}
        <div className="hero-actions">
          <a href="#projects" className="btn btn--primary">
            <span>View Featured Projects</span>
            <Icon name="arrowUpRight" size={17} />
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            aria-label="Download Devesh Shukla's Resume"
          >
            <Icon name="download" size={16} />
            <span>Download Resume (PDF)</span>
          </a>
          <a href="#contact" className="btn btn--secondary">
            <Icon name="mail" size={16} />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Core Technical Highlights */}
        <div className="hero-domains-grid">
          <div className="domain-card">
            <div className="domain-card__icon">
              <Icon name="code" size={18} />
            </div>
            <div className="domain-card__body">
              <h3 className="domain-card__title">Backend & Systems</h3>
              <p className="domain-card__tech">Django, DRF, PostgreSQL, React, Docker</p>
              <p className="domain-card__note">ACID transactions, relational schemas & container orchestration</p>
            </div>
          </div>

          <div className="domain-card">
            <div className="domain-card__icon">
              <Icon name="cpu" size={18} />
            </div>
            <div className="domain-card__body">
              <h3 className="domain-card__title">Applied ML & Vision</h3>
              <p className="domain-card__tech">PyTorch, LSTM, YOLO, OpenCV, Pose Kinematics</p>
              <p className="domain-card__note">Temporal movement modeling with strict LOSO evaluation</p>
            </div>
          </div>

          <div className="domain-card">
            <div className="domain-card__icon">
              <Icon name="layers" size={18} />
            </div>
            <div className="domain-card__body">
              <h3 className="domain-card__title">IoT & Telemetry</h3>
              <p className="domain-card__tech">ESP32, C++ Firmware, MQTT, Firebase</p>
              <p className="domain-card__note">Edge sensor acquisition, AQI logic & sub-second streaming</p>
            </div>
          </div>

          <div className="domain-card">
            <div className="domain-card__icon">
              <Icon name="graduationCap" size={18} />
            </div>
            <div className="domain-card__body">
              <h3 className="domain-card__title">Academic Excellence</h3>
              <p className="domain-card__tech">9.0 / 10.0 CGPA • B.Tech IT</p>
              <p className="domain-card__note">K. J. Somaiya Institute of Technology, Mumbai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
