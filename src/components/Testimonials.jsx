const testimonials = [
  { initials: 'SK', avCls: 'av1', name: 'Sarah Kim', role: 'Creative Director · Zenly Studio', text: '"I used to spend two full days producing visuals for a campaign. Now I brief Coinis, iterate for 20 minutes, and I\'m done. The quality is honestly better than half the work I was outsourcing."' },
  { initials: 'MR', avCls: 'av2', name: 'Marcus Reeves', role: 'Founder · Stackup Commerce', text: '"The Brand Kit is a game-changer. Every image, video, and caption it generates looks like it came from our in-house team. We don\'t have an in-house team."' },
  { initials: 'LP', avCls: 'av3', name: 'Laura Pérez', role: 'Freelance Brand Strategist', text: '"I deliver full creative packages to clients — images, video, copy — in a single afternoon. They think I have a whole agency behind me. Coinis is my unfair advantage."' },
  { initials: 'DT', avCls: 'av4', name: 'David Tan', role: 'E-commerce Lead · Nordly', text: '"Batch generation is insane. I fed our 400-SKU catalog in and had product visuals for every single item by end of day. That would\'ve been a six-week project before."' },
  { initials: 'JN', avCls: 'av5', name: 'Jess Nolan', role: 'Content Lead · Bloom Creative', text: '"The video generation blew me away the first time I used it. I typed a brief, picked cinematic style, and had a 30-second brand film ready to post. That\'s not supposed to be this easy."' },
  { initials: 'AW', avCls: 'av6', name: 'Alex Winters', role: 'Growth Lead · Propel Digital', text: '"We test 60+ creative variants a week now. Finding winners is fast, scaling them is instant. Our engagement rate is up 3× since we switched to Coinis for creative production."' },
]

const rbStats = [
  { val: '98%', color: '#4ade80', lbl: 'Would recommend to a colleague' },
  { val: '10×', color: '#60a5fa', lbl: 'Faster creative production' },
  { val: '90%', color: '#c084fc', lbl: 'Reduction in production cost' },
  { val: '50M+', color: 'var(--ora1)', lbl: 'Creatives generated to date' },
]

export default function Testimonials() {
  return (
    <section className="sec--proof" id="proof">
      <div className="wrap">
        <div className="section-header">
          <span className="section-tag">What people are saying</span>
          <h2 className="section-title">Loved by creators,<br />designers &amp; marketers</h2>
          <p className="section-sub">Real results from real people using Coinis to create more, faster.</p>
        </div>
        <div className="t-grid">
          {testimonials.map((t, i) => (
            <div className="tcard" key={i}>
              <div className="tcard-stars">★★★★★</div>
              <p className="tcard-text">{t.text}</p>
              <div className="tcard-author">
                <div className={`tcard-av ${t.avCls}`}>{t.initials}</div>
                <div>
                  <div className="tcard-name">{t.name}</div>
                  <div className="tcard-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rating-bar">
          <div style={{ textAlign: 'center' }}>
            <div className="rb-big grad-text">4.9</div>
            <div className="rb-stars">★★★★★</div>
            <div className="rb-count">12,000+ verified reviews</div>
          </div>
          <div className="rb-divider" />
          <div className="rb-stats">
            {rbStats.map((s, i) => (
              <div key={i}>
                <div className="rb-stat-val" style={{ color: s.color }}>{s.val}</div>
                <div className="rb-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
