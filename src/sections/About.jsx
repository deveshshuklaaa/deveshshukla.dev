export default function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="shell section-inner">
        <p className="eyebrow">01 / Approach</p>
        <div className="about-composition">
          <h2 id="about-title">Curiosity in.<br />Clarity out.</h2>
          <div className="about-narrative">
            <p>I work across the boundaries between models, software, and hardware. The interesting part is making them work reliably together.</p>
            <p className="small muted">That means subject-aware ML validation, databases that protect their own integrity, and hardware with explicit safety limits. I care about the decisions behind a system as much as its interface.</p>
            <p className="meta">Python → Backend → Vision → Embedded control</p>
          </div>
        </div>
      </div>
    </section>
  )
}
