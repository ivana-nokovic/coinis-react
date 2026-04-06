import { useEffect, useRef } from 'react'

const stats = [
  { value: '50M+', label: 'Creatives generated',           gradient: true },
  { value: '10×',  label: 'Faster than manual production', color: '#22c55e' },
  { value: '90%',  label: 'Reduction in creative cost',    color: '#3b82f6' },
  { value: '150+', label: 'Countries & languages',         color: '#a855f7' },
]

export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    let ran = false
    const counters = section.querySelectorAll('[data-arch-to]')

    function animateCounter(el) {
      const to = parseFloat(el.dataset.archTo)
      if (!to) return
      const suf = el.dataset.archSuf || ''
      const dur = 2000
      const start = performance.now()
      function tick(now) {
        const p = Math.min((now - start) / dur, 1)
        const ease = 1 - Math.pow(1 - p, 3)
        const val = to >= 100 ? Math.round(to * ease).toLocaleString() : Math.round(to * ease)
        el.textContent = val + suf
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !ran) {
        ran = true
        counters.forEach(animateCounter)
        obs.disconnect()
      }
    }, { threshold: 0.15 })

    obs.observe(section)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="sec--arch" id="architecture" ref={sectionRef}>
      <div className="arch__glow" />
      <div className="arch__glow arch__glow--2" />
      <div className="wrap arch__content">

        {/* Left: header + stats */}
        <div className="arch__left">
          <div className="arch__left-header">
            <span className="section-tag">Infrastructure Topology</span>
            <h2 className="section-title">Built for Scale.<br />Proven at Scale.</h2>
          </div>
          <div className="arch__stat-list">
            {stats.map((s, i) => (
              <div className="arch__stat-row" key={i}>
                <span className="arch__stat-num" style={s.gradient ? undefined : { color: s.color }}>
                  {s.gradient ? <span className="grad-text">{s.value}</span> : s.value}
                </span>
                <span className="arch__stat-desc">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: orbital animation */}
        <div className="arch__right">
          <div className="arch__map">
            {/* SVG gradient defs for hub icon */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
              <defs>
                <linearGradient id="ico-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>

            {/* Central hub */}
            <div className="arch__hub">
              <div className="arch__hub-ring arch__hub-ring--outer" />
              <div className="arch__hub-ring arch__hub-ring--inner" />
              <div className="arch__hub-core">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="url(#ico-gold)" opacity=".15"/>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="url(#ico-gold)" strokeWidth="1.5"/>
                  <path d="M9 12l2 2 4-4" stroke="url(#ico-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>AdForce<br />Core</span>
              </div>
            </div>

            {/* Orbit nodes */}
            <div className="arch__orbit">

              <div className="arch__node arch__node--meta" style={{ '--angle': '0deg' }}>
                <div className="arch__node-inner">
                  <div className="arch__node-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </div>
                  <span className="arch__node-label">Meta</span>
                  <span className="arch__node-stat"><span data-arch-to="847" data-arch-suf="K">0</span> req/s</span>
                </div>
                <div className="arch__line" />
              </div>

              <div className="arch__node arch__node--google" style={{ '--angle': '72deg' }}>
                <div className="arch__node-inner">
                  <div className="arch__node-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <span className="arch__node-label">Google</span>
                  <span className="arch__node-stat"><span data-arch-to="312" data-arch-suf="K">0</span> req/s</span>
                </div>
                <div className="arch__line" />
              </div>

              <div className="arch__node arch__node--tiktok" style={{ '--angle': '144deg' }}>
                <div className="arch__node-inner">
                  <div className="arch__node-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46 6.3 6.3 0 001.86-4.49V8.76a8.26 8.26 0 004.84 1.56v-3.45a4.82 4.82 0 01-1.12-.18z"/>
                    </svg>
                  </div>
                  <span className="arch__node-label">TikTok</span>
                  <span className="arch__node-stat">Coming Soon</span>
                </div>
                <div className="arch__line" />
              </div>

              <div className="arch__node arch__node--aff" style={{ '--angle': '216deg' }}>
                <div className="arch__node-inner">
                  <div className="arch__node-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                      <circle cx="12" cy="12" r="10" fill="currentColor" opacity=".08"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M2 12h20" stroke="currentColor" strokeWidth="1" opacity=".5"/>
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <span className="arch__node-label">Affiliate Network</span>
                  <span className="arch__node-stat"><span data-arch-to="2000" data-arch-suf="+">0</span> offers</span>
                </div>
                <div className="arch__line" />
              </div>

              <div className="arch__node arch__node--treasury" style={{ '--angle': '288deg' }}>
                <div className="arch__node-inner">
                  <div className="arch__node-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                      <rect x="2" y="5" width="20" height="14" rx="3" fill="currentColor" opacity=".08"/>
                      <rect x="2" y="5" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M2 10h20" stroke="currentColor" strokeWidth="1" opacity=".5"/>
                      <rect x="15" y="13" width="4" height="3" rx="1" fill="currentColor" opacity=".3"/>
                    </svg>
                  </div>
                  <span className="arch__node-label">Treasury</span>
                  <span className="arch__node-stat">Card · Crypto · Wire</span>
                </div>
                <div className="arch__line" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
