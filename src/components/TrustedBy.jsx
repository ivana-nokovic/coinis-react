const badges = [
  { name: 'Meta Business Partner',    tier: 'Official Partner',  status: 'VERIFIED',  img: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/meta-icon.png' },
  { name: 'Google Certified Partner', tier: 'Premier Partner',   status: 'VERIFIED',  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png' },
  { name: 'TikTok Agency Partner',    tier: 'Certified Agency',  status: 'VERIFIED',  img: 'https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338432_960_720.png' },
  { name: 'IAB Member',               tier: 'MENA Certified',    status: 'CERTIFIED', img: 'https://impactify.io/wp-content/uploads/2024/04/iab-logo.svg' },
]

const press = ['Forbes', 'Forbes Middle East', 'Yahoo!', 'MSN']

const metrics = [
  '13+ Years in Business',
  '220+ Countries Reached',
  '$1.2B+ Lifetime Spend',
  'SOC 2 Compliant',
]

export default function TrustedBy() {
  return (
    <section className="sec--trusted">
      <div className="wrap">

        <div className="section-header">
          <span className="section-tag">Trusted &amp; Recognized</span>
          <h2 className="section-title">Trusted by industry leaders.<br />Recognized worldwide.</h2>
          <p className="section-sub">Backed by the world's leading platforms, verified by top publications, and trusted across 220+ countries.</p>
        </div>

        <div className="trusted-badges">
          {badges.map((b, i) => (
            <div className="tbadge" key={i}>
              <div className="tbadge-icon">
                {b.img ? <img src={b.img} alt={b.name} className="tbadge-img" /> : b.icon}
              </div>
              <div className="tbadge-text">
                <span className="tbadge-name">{b.name}</span>
                <span className="tbadge-tier">{b.tier}</span>
              </div>
              <span className="tbadge-status">✓ {b.status}</span>
            </div>
          ))}
        </div>

        <div className="trusted-press">
          <span className="press-label">As Featured In</span>
          <div className="press-logos">
            {press.map((p, i) => (
              <span className="press-name" key={i}>{p}</span>
            ))}
          </div>
        </div>

        <div className="trusted-metrics">
          {metrics.map((m, i) => (
            <span className="tmetric" key={i}>
              <span className="tmetric-check">✓</span>
              {m}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
