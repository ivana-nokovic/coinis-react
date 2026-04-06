const stats = [
  { value: '50M+', label: 'Creatives generated',           color: 'var(--grad-text)', gradient: true },
  { value: '10×',  label: 'Faster than manual production', color: '#22c55e' },
  { value: '90%',  label: 'Reduction in creative cost',    color: '#3b82f6' },
  { value: '150+', label: 'Countries & languages',         color: '#a855f7' },
]

export default function Stats() {
  return (
    <section className="sec--stats">
      <div className="wrap">
        <div className="stats-panel">

          <div className="stats-left">
            <h2 className="stats-heading">Real Results</h2>
            <div className="stats-visual">
              <div className="sv-bar sv-b1" />
              <div className="sv-bar sv-b2" />
              <div className="sv-bar sv-b3" />
              <div className="sv-bar sv-b4" />
              <div className="sv-bar sv-b5" />
            </div>
            <p className="stats-source">*Sources: Meta, Wistia, HubSpot, Creatify benchmarks</p>
          </div>

          <div className="stats-col-divider" />

          <div className="stats-right">
            {stats.map((s, i) => (
              <div className="stat-row" key={i}>
                <span className="stat-num" style={s.gradient ? undefined : { color: s.color }}>
                  {s.gradient ? <span className="grad-text">{s.value}</span> : s.value}
                </span>
                <span className="stat-desc">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
