import { useState, useEffect } from 'react'
import Icon from './Icon'
import { personalInfo } from '../data/personal'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="site-header__container">
          <a href="#top" className="site-header__logo" aria-label="Devesh Shukla Portfolio Home">
            <span className="logo-badge">DS</span>
            <span className="logo-text">
              deveshshukla<span className="logo-domain">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="site-header__nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.href} className="nav-item">
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Actions */}
          <div className="site-header__actions">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="action-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub Profile (@deveshshuklaaa)"
            >
              <Icon name="github" size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="action-icon-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Icon name="linkedin" size={18} />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="action-icon-btn"
              aria-label="LeetCode Profile"
              title="LeetCode Profile (@deveshshuklaaa)"
            >
              <Icon name="leetcode" size={17} />
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--sm resume-btn"
              aria-label="Download Resume PDF"
            >
              <Icon name="fileText" size={14} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer" id="mobile-navigation-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation Drawer">
            <nav className="mobile-nav" aria-label="Mobile Navigation">
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.href} className="mobile-nav-item">
                    <a href={link.href} className="mobile-nav-link" onClick={closeMenu}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mobile-drawer__footer">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--full"
                  onClick={closeMenu}
                >
                  <Icon name="fileText" size={16} />
                  <span>View Resume (PDF)</span>
                </a>

                <div className="mobile-socials">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-social-link"
                  >
                    <Icon name="github" size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-social-link"
                  >
                    <Icon name="linkedin" size={18} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-social-link"
                  >
                    <Icon name="leetcode" size={18} />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
