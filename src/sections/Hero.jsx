import Icon from '../components/Icon'
import { personalInfo } from '../data/personal'

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        {/* Availability / Status Pill */}
        <div className="hero-status">
          <span className="status-indicator">
            <span className="status-dot"></span>
            <span className="status-ping"></span>
          </span>
          <span className="status-text">{personalInfo.status}</span>
        </div>

        {/* Primary Introduction */}
        <div className="hero-header">
          <p className="hero-eyebrow">Hi, I'm</p>
          <h1 className="hero-title">{personalInfo.name}</h1>
          <h2 className="hero-subtitle">
            Engineering software, applied machine learning, and connected systems.
          </h2>
        </div>

        <p className="hero-description">
          Computer Engineering student at{' '}
          <strong className="text-highlight">{personalInfo.college}</strong>. I design and build
          reliable backend systems, computer vision pipelines with rigorous validation, and
          practical full-stack applications.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#projects" className="btn btn--primary">
            <span>Explore Projects</span>
            <Icon name="arrowUpRight" size={17} />
          </a>
          <a href="#contact" className="btn btn--outline">
            <span>Get in Touch</span>
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
          >
            <Icon name="download" size={16} />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Engineering Highlights Strip */}
        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-card__icon">
              <Icon name="code" size={20} />
            </div>
            <div className="stat-card__content">
              <span className="stat-card__title">Full-Stack & Systems</span>
              <span className="stat-card__desc">Django, DRF, React, PostgreSQL, Docker</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-card__icon">
              <Icon name="cpu" size={20} />
            </div>
            <div className="stat-card__content">
              <span className="stat-card__title">Applied ML & Vision</span>
              <span className="stat-card__desc">PyTorch, LSTM, YOLO, OpenCV, Pose Kinematics</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-card__icon">
              <Icon name="layers" size={20} />
            </div>
            <div className="stat-card__content">
              <span className="stat-card__title">IoT & Telemetry</span>
              <span className="stat-card__desc">ESP32, MQTT protocols, Firebase realtime</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-card__icon">
              <Icon name="graduationCap" size={20} />
            </div>
            <div className="stat-card__content">
              <span className="stat-card__title">Academic Excellence</span>
              <span className="stat-card__desc">9.0 CGPA • B.Tech in Information Technology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
