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

  return (
    <section className="section" id="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            I am currently open to full-time software engineering roles, machine learning positions, and technical collaborations.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-main">
            <h3 className="contact-heading">Direct Inquiry</h3>
            <p className="contact-subheading">
              Whether you are discussing an engineering opening, reviewing one of my repositories, or discussing an ML/IoT project, feel free to reach out directly.
            </p>

            <div className="contact-email-row">
              <a
                href={`mailto:${personalInfo.email}`}
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
                aria-label="Copy email address"
              >
                <Icon name={copied ? 'check' : 'copy'} size={15} />
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="contact-actions-row">
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn--primary"
              >
                <Icon name="mail" size={16} />
                <span>Send Email</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                <Icon name="fileText" size={16} />
                <span>View Resume (PDF)</span>
              </a>
            </div>
          </div>

          <div className="contact-meta">
            <h4 className="meta-heading">Online Profiles</h4>

            <div className="social-links-list">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-profile-card"
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
              <Icon name="mapPin" size={15} />
              <span>Based in Mumbai, India • Available for on-site & remote roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
