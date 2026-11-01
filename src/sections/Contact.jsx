import { useEffect, useRef, useState } from 'react'
import { personalInfo } from '../data/personal'

export default function Contact() {
  const [message, setMessage] = useState('Copy email')
  const reset = useRef(null)
  useEffect(() => () => clearTimeout(reset.current), [])
  const copyEmail = async () => {
    clearTimeout(reset.current)
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setMessage('Email copied')
    } catch {
      setMessage('Select the email address to copy it')
    }
    reset.current = setTimeout(() => setMessage('Copy email'), 3000)
  }
  return (
    <section className="section contact-section dark-section" id="contact" aria-labelledby="contact-title">
      <div className="shell section-inner">
        <p className="eyebrow">05 / Next conversation</p><h2 id="contact-title">Let’s build<br />something useful.</h2>
        <p className="contact-description muted">Engineering opportunities, technical collaborations, or a good systems problem. I’d like to hear about it.</p>
        <a className="contact-email" href={`mailto:${personalInfo.email}?subject=Engineering%20opportunity%20%E2%80%94%20Devesh%20Shukla`}>{personalInfo.email} <span aria-hidden="true">↗</span></a>
        <div className="contact-actions"><button className="text-link" type="button" aria-label="Copy email address" onClick={copyEmail}><span role="status" aria-live="polite">{message}</span> <span aria-hidden="true">+</span></button><a className="text-link" href={personalInfo.resumeUrl} target="_blank" rel="noreferrer">Download résumé <span aria-hidden="true">↗</span></a></div>
        <p className="meta">Mumbai, India / UTC+05:30</p>
      </div>
    </section>
  )
}
