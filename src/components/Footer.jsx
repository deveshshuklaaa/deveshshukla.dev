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
              aria-label="GitHub"
            >
              <Icon name="github" size={17} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" size={17} />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LeetCode"
            >
              <Icon name="leetcode" size={17} />
              <span>LeetCode</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-link"
              aria-label="Email"
            >
              <Icon name="mail" size={17} />
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
            <Icon name="arrowUp" size={15} />
          </button>
        </div>

        <div className="site-footer__bottom">
          <p className="copyright">
            © {new Date().getFullYear()} {personalInfo.name}. Designed & built with React and Vite.
          </p>
          <p className="deployment-note">
            Deployed to <a href="https://deveshshukla.dev" className="code-link">deveshshukla.dev</a> via GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  )
}
