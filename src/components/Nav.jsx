import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap nav__inner">

        <a href="/" className="nav__logo">coinis</a>

        <ul className="nav__links">
          <li className="nav__dropdown">
            <button className="nav__link">
              <span className="nav__link-dot">•</span>
              AdForce
              <svg className="nav__drop-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="nav__sub">
              <a href="#" className="nav__sub-item">
                <span className="nav__sub-icon si-img">🎨</span>
                <span className="nav__sub-text">
                  <span className="nav__sub-label">Image Generation</span>
                  <span className="nav__sub-desc">Photorealistic &amp; artistic outputs</span>
                </span>
              </a>
              <a href="#" className="nav__sub-item">
                <span className="nav__sub-icon si-video">🎬</span>
                <span className="nav__sub-text">
                  <span className="nav__sub-label">Video Creation</span>
                  <span className="nav__sub-desc">From prompt to scroll-stopping video</span>
                </span>
              </a>
              <a href="#" className="nav__sub-item">
                <span className="nav__sub-icon si-copy">✍️</span>
                <span className="nav__sub-text">
                  <span className="nav__sub-label">AI Copywriting</span>
                  <span className="nav__sub-desc">Headlines, scripts &amp; long-form copy</span>
                </span>
              </a>
            </div>
          </li>
          <li><a href="#" className="nav__link">Affiliate Programs</a></li>
          <li><a href="#" className="nav__link">About Us</a></li>
          <li><a href="#" className="nav__link">Blog</a></li>
        </ul>

        <div className="nav__actions">
          <a href="#" className="nav__btn nav__btn--ghost">Login</a>
          <a href="#" className="nav__btn nav__btn--orange">Get Started →</a>
        </div>

      </div>
    </nav>
  )
}
