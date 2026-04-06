const tools = [
  { title: 'Ad Cloner',           desc: 'Replicate top-performing ads, newest trend and competitors in seconds.',         color: '#c7d2fe' },
  { title: 'URL to Video',        desc: 'Turn any landing page into a scroll-stopping video.', color: '#fde68a' },
  { title: 'Asset Generator',     desc: 'Generate on-brand visuals from a single prompt.',  color: '#bfdbfe', gif: 'https://i.ibb.co/9H9FCdtR/abstract2.png' },
  { title: 'AI Avatars',          desc: 'Create lifelike representatives without a camera, tailored to your brand.',     color: '#f5d0fe', gif: 'https://i.ibb.co/TjczK0W/ezgif-615715d6fcb3b203.gif' },
  { title: 'Product Ads',         desc: 'Drop in your product and get studio-quality ads.', color: '#bbf7d0', gif: 'https://i.ibb.co/67JTrnt1/Gemini-Generated-Image-yvpg6byvpg6byvpg-copy.jpg' },
  { title: 'Inspiration Library', desc: 'Browse thousands of winning ad formats and styles.', color: '#fed7aa' },
]

const doubled = [...tools, ...tools]

export default function Toolkit() {
  return (
    <section className="sec--toolkit">
      <div className="wrap">
        <div className="section-header">
          <h2 className="section-title">Everything You Need to Power<br />Modern Advertising</h2>
        </div>
      </div>
      <div className="toolkit-track">
        <div className="toolkit-row">
          {doubled.map((t, i) => (
            <div className="tkit-card" key={i}>
              <div className="tkit-thumb" style={t.gif ? { backgroundImage: `url('${t.gif}')`, backgroundSize: 'cover', backgroundPosition: 'center' } : { background: t.color }} />
              <div className="tkit-body">
                <span className="tkit-label">{t.title}</span>
                <span className="tkit-desc">{t.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
