const events = [
  {
    date: 'Jan 20–21, 2026',
    name: 'iGB Affiliate Barcelona',
    location: 'Barcelona, Spain',
    bg: 'ev-bg-1',
  },
  {
    date: 'Feb 9–11, 2026',
    name: 'SiGMA Eurasia',
    location: 'Dubai, UAE',
    bg: 'ev-bg-2',
  },
  {
    date: 'Mar 4–5, 2026',
    name: 'Affiliate World Global',
    location: 'Dubai, UAE',
    bg: 'ev-bg-3',
  },
  {
    date: 'Mar 9–12, 2026',
    name: 'TES Affiliate Conferences',
    location: 'Marbella, Spain',
    bg: 'ev-bg-4',
  },
]

export default function Events() {
  return (
    <section className="sec--events">
      <div className="wrap">
        <div className="events-header">
          <div className="events-tag">
            <span>Upcoming Events</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Meet Us at the World's<br />Biggest Industry Stages
          </h2>
          <p className="section-sub">
            Connect face-to-face with our team. Let's talk growth, strategy,<br />and your next big move.
          </p>
        </div>

        <div className="events-grid">
          {events.map((ev) => (
            <div className="ecard" key={ev.name}>
              <div className={`ecard__img ${ev.bg}`}>
                <div className="ecard__badge">
                  <span className="ecard__badge-dot" />
                  Upcoming
                </div>
              </div>
              <div className="ecard__body">
                <div className="ecard__date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {ev.date}
                </div>
                <div className="ecard__title">{ev.name}</div>
                <div className="ecard__location">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  {ev.location}
                </div>
                <a href="#" className="ecard__link">
                  Learn More
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
