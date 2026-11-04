import { useEffect, useRef, useState } from 'react'
import { personalInfo } from '../data/personal'

const links = [['About', '#about'], ['Work', '#projects'], ['Skills', '#skills'], ['Education', '#education'], ['Contact', '#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const header = useRef(null)
  const toggle = useRef(null)

  useEffect(() => {
    if (!open) return
    const dismiss = (event) => {
      if (event.type === 'keydown' && event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      } else if (event.type === 'pointerdown' && !header.current?.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', dismiss)
    document.addEventListener('pointerdown', dismiss)
    return () => {
      document.removeEventListener('keydown', dismiss)
      document.removeEventListener('pointerdown', dismiss)
    }
  }, [open])

  useEffect(() => {
    const query = window.matchMedia('(min-width: 901px)')
    const close = () => { if (query.matches) setOpen(false) }
    query.addEventListener('change', close)
    return () => query.removeEventListener('change', close)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header" ref={header}>
        <div className="shell header-inner">
          <a className="wordmark" href="#top" onClick={() => setOpen(false)} aria-label="Devesh Shukla, home">devesh shukla<span>.</span></a>
          <nav className="desktop-navigation" aria-label="Main navigation">
            {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="button header-resume" href={personalInfo.resumeUrl} target="_blank" rel="noreferrer">Résumé <span aria-hidden="true">↗</span></a>
          <button className="menu-toggle" ref={toggle} type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '−' : '+'}</span></button>
        </div>
        {open && <nav className="mobile-navigation shell" id="mobile-navigation" aria-label="Mobile navigation">
          {links.map(([label, href], i) => <a key={href} href={href} onClick={() => setOpen(false)}><span className="meta">0{i + 1}</span>{label}<span aria-hidden="true">↗</span></a>)}
          <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Download résumé <span aria-hidden="true">↗</span></a>
        </nav>}
      </header>
    </>
  )
}
