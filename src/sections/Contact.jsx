import { useState } from 'react'
import Icon from '../components/Icon'
import { personalInfo } from '../data/personal'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const mailtoUrl = `mailto:${personalInfo.email}?subject=Software%20Engineering%20Opportunity%20-%20Devesh%20Shukla`

  return (
    <section className="section" id="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Direct Contact</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            I am currently open to Software Engineering roles, Backend engineering positions, and Applied ML opportunities.
          </p>
        </div>

        <div className="contact-card">
          {/* Main Direct Contact Column */}
          <div className="contact-main">
            <h3 className="contact-heading">Direct Inquiry</h3>
            <p className="contact-subheading">
              Whether you are discussing full-time engineering openings for the 2026 cohort, technical collaborations, or want to discuss my featured systems, feel free to reach out directly.
            </p>

            <div className="contact-email-row">
              <a
                href={mailtoUrl}
                className="email-display"
                title="Send email via default client"
              >
                <Icon name="mail" size={18} />
                <span>{personalInfo.email}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn--outline btn--sm copy-btn"
                aria-label="Copy email address to clipboard"
              >
                <Icon name={copied ? 'check' : 'copy'} size={15} />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
              </button>
            </div>

            <div className="contact-actions-row">
              <a
                href={mailtoUrl}
                className="btn btn--primary"
              >
                <Icon name="mail" size={16} />
                <span>Send Direct Email</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                <Icon name="download" size={16} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            <div className="contact-status-note">
              <span className="status-dot"></span>
              <span>Available for 2026 full-time software engineering roles & technical internships</span>
            </div>
          </div>

          {/* Social Profiles & Location Column */}
          <div className="contact-meta">
            <h4 className="meta-heading">Online Profiles & Verification</h4>

            <div className="social-links-list">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-profile-card"
                aria-label="GitHub Profile (@deveshshuklaaa)"
              >
                <div className="social-profile-icon">
                  <Icon name="github" size={20} />
                </div>
                <div className="social-profile-info">
                  <span className="social-profile-platform">GitHub</span>
                  <span className="social-profile-handle">@deveshshuklaaa</span>
                </div>
                <Icon name="arrowUpRight" size={15} className="social-arrow" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-profile-card"
                aria-label="LinkedIn Profile (Devesh Shukla)"
              >
                <div className="social-profile-icon">
                  <Icon name="linkedin" size={20} />
                </div>
                <div className="social-profile-info">
                  <span className="social-profile-platform">LinkedIn</span>
                  <span className="social-profile-handle">devesh-shukla</span>
                </div>
                <Icon name="arrowUpRight" size={15} className="social-arrow" />
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="social-profile-card"
                aria-label="LeetCode Profile (@deveshshuklaaa)"
              >
                <div className="social-profile-icon">
                  <Icon name="leetcode" size={20} />
                </div>
                <div className="social-profile-info">
                  <span className="social-profile-platform">LeetCode</span>
                  <span className="social-profile-handle">deveshshuklaaa</span>
                </div>
                <Icon name="arrowUpRight" size={15} className="social-arrow" />
              </a>
            </div>

            <div className="location-info">
              <Icon name="mapPin" size={16} />
              <div>
                <strong>Based in Mumbai, India (IST / UTC+5:30)</strong>
                <p className="location-sub">Open to on-site roles (Mumbai / relocation) & remote work.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
