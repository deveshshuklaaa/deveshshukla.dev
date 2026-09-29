import Icon from './Icon'
import { personalInfo } from '../data/personal'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <span className="footer-logo">DS</span>
            <div className="footer-brand-text">
              <span className="footer-name">{personalInfo.name}</span>
              <span className="footer-tagline">Software & AI/ML Developer</span>
            </div>
          </div>

          <div className="site-footer__links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub Profile"
            >
              <Icon name="github" size={16} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn Profile"
            >
              <Icon name="linkedin" size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LeetCode Profile"
            >
              <Icon name="leetcode" size={16} />
              <span>LeetCode</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="Resume PDF"
            >
              <Icon name="fileText" size={16} />
              <span>Resume</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-link"
              aria-label="Send Email"
            >
              <Icon name="mail" size={16} />
              <span>Email</span>
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <Icon name="arrowUp" size={14} />
          </button>
        </div>

        <div className="site-footer__bottom">
          <p className="copyright">
            © {new Date().getFullYear()} {personalInfo.name}. Designed & engineered with React 19 + Vite.
          </p>
          <p className="deployment-note">
            Production build deployed to{' '}
            <a href="https://deveshshukla.dev" className="code-link">
              deveshshukla.dev
            </a>{' '}
            via GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  )
}
