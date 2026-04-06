export default function CTA() {
  return (
    <section className="sec--final">
      <div className="wrap">
        <div className="cta-box">
          <span className="section-tag" style={{ color: 'var(--ora1)' }}>Start today</span>
          <h2>Your next great creative<br />is one prompt away</h2>
          <p>Join 50,000+ creators and marketers who use Coinis to generate stunning visuals, video, and copy — faster than ever before.</p>
          <div className="cta-pair" style={{ justifyContent: 'center' }}>
            <a href="#" className="btn btn--cta btn--l">Start creating for free</a>
            <a href="#" className="btn btn--outline-light btn--l">Book a demo</a>
          </div>
          <p className="cta-note">No credit card required · 50 free generations every month · Cancel any time</p>
        </div>
      </div>
    </section>
  )
}
