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
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__container">
        <a href="#" className="site-header__logo" aria-label="Devesh Shukla Home">
          <span className="logo-badge">DS</span>
          <span className="logo-text">deveshshukla<span className="logo-domain">.dev</span></span>
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
          >
            <Icon name="github" size={19} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="action-icon-btn"
            aria-label="LinkedIn Profile"
          >
            <Icon name="linkedin" size={19} />
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline btn--sm resume-btn"
          >
            <Icon name="fileText" size={15} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
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
                <span>View Resume</span>
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
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
