const steps = [
  { num: '01', title: 'Describe your idea', body: 'Write a prompt, paste a reference URL, or upload an image. Coinis understands creative context — not just literal keywords.' },
  { num: '02', title: 'Generate & iterate', body: 'Get multiple high-quality variants in seconds. Swap styles, adjust the brief, and refine in real time — no design skills needed.' },
  { num: '03', title: 'Export & publish', body: 'Download at full resolution or push directly to your ad platform, CMS, or CDN. From generation to live in under a minute.' },
]

export default function HowItWorks() {
  return (
    <section className="sec--how" id="how">
      <div className="wrap">
        <div className="section-header">
          <span className="section-tag">The process</span>
          <h2 className="section-title">Great creative in<br />three simple steps</h2>
        </div>
        <div className="how-grid">
          {steps.map((s, i) => (
            <div className="how-card" key={i}>
              <div className="how-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
