import { useEffect, useRef } from 'react'

export default function Hero() {
  const col0Ref = useRef(null)
  const col1Ref = useRef(null)
  const col2Ref = useRef(null)
  const col3Ref = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (col0Ref.current) col0Ref.current.style.transform = `translateY(calc(480px + ${y * 0.18}px))`
      if (col1Ref.current) col1Ref.current.style.transform = `translateY(calc(80px + ${y * 0.35}px))`
      if (col2Ref.current) col2Ref.current.style.transform = `translateY(calc(40px + ${y * 0.55}px))`
      if (col3Ref.current) col3Ref.current.style.transform = `translateY(${y * 0.75}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const avatars = [
    { initials: 'J', bg: '#4F46E5' }, { initials: 'A', bg: '#0891B2' },
    { initials: 'M', bg: '#059669' }, { initials: 'R', bg: '#D97706' },
    { initials: 'S', bg: '#DC2626' },
  ]

  return (
    <section className="hero" id="hero">
      <div className="hero__orbs">
        <div className="hero__orb hero__orb--blue" />
        <div className="hero__orb hero__orb--orange" />
      </div>

      {/* layer 1 — image grid (back) */}
      <div className="hero__grid">
        <div className="hg-col hg-col--0" ref={col0Ref}>
          <div className="hg-tile hg-a hg-a--img"><span className="hc-label">Portrait</span></div>
        </div>
        <div className="hg-col hg-col--1" ref={col1Ref}>
          <div className="hg-tile hg-c hg-c--img"><span className="hc-label">Product shot</span></div>
          <div className="hg-tile hg-h hg-h--img"><span className="hc-label">UGC</span></div>
        </div>
        <div className="hg-col hg-col--2" ref={col2Ref}>
          <div className="hg-tile hg-b hg-b--img"><span className="hc-label">Abstract</span></div>
          <div className="hg-tile hg-e hg-e--img"><span className="hc-label">Lifestyle</span></div>
        </div>
        <div className="hg-col hg-col--3" ref={col3Ref}>
          <div className="hg-tile hg-d hg-d--gif"><span className="hc-label">Video ad</span></div>
          <div className="hg-tile hg-f hg-f--img"><span className="hc-label">Brand shoot</span></div>
        </div>
      </div>

      {/* layer 2 — gradient overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* layer 3 — text content */}
      <div className="hero__left wrap">
        <div className="trust-pill">
          <div className="trust-pill__avatars">
            {avatars.map((av, i) => (
              <div key={i} className="trust-pill__avatar" style={{ background: av.bg }}>{av.initials}</div>
            ))}
          </div>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#00B67A">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
          </svg>
          <span>Rated 4.9/5 · Loved by 50,000+ creators</span>
        </div>

        <h1 className="hero__h1">
          Marketing that{' '}
          <span className="grad-text">runs itself.</span>
        </h1>

        <p className="hero__sub">
          Connect your brand. Coinis handles the creatives, the campaigns, and the optimization — on autopilot.
        </p>

        <div className="cta-pair">
          <a href="#" className="btn btn--cta btn--l btn--pill">Get Started Free →</a>
          <a href="#" className="btn btn--blue btn--l btn--pill">Book a Demo</a>
        </div>

        <p className="hero__footnote">Your entire marketing operation. One platform.</p>
      </div>
    </section>
  )
}
