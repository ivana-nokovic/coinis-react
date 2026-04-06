const cards = [
  {
    cls: 'oc-image', icon: '🎨', tag: 'Images',
    title: 'Visuals that turn heads',
    body: 'Photorealistic product shots, lifestyle imagery, abstract art, UI mockups — generated from text or a reference image in seconds.',
    features: ['Up to 4K resolution export', 'Any aspect ratio (1:1, 16:9, 9:16, custom)', 'Style control: photo, illustration, 3D, art', 'Batch up to 200 variants at once'],
  },
  {
    cls: 'oc-video', icon: '🎬', tag: 'Video',
    title: 'Motion that converts',
    body: 'Short-form video clips for ads, social reels, and brand storytelling. Animated from a still image or generated directly from text.',
    features: ['Up to 60-second clips', 'Auto-captions and text overlays', 'Music & ambient sound options', 'Direct export to TikTok, Reels, YouTube'],
  },
  {
    cls: 'oc-copy', icon: '✍️', tag: 'Copy',
    title: 'Words that actually work',
    body: 'Ad headlines, email subject lines, product descriptions, and long-form scripts — written to your brand voice and platform specs.',
    features: ['Brand voice training from your content', 'Platform-specific formatting', 'A/B variant generation', '40+ languages supported'],
  },
]

export default function Outputs() {
  return (
    <section className="sec--outputs" id="outputs">
      <div className="wrap">
        <div className="section-header">
          <span className="section-tag">Output types</span>
          <h2 className="section-title">Every format.<br />One platform.</h2>
          <p className="section-sub">Whether you need a hero image, a 15-second reel, or an entire campaign brief — Coinis handles it end to end.</p>
        </div>
        <div className="outputs-grid">
          {cards.map((c, i) => (
            <div className={`ocard ${c.cls}`} key={i}>
              <div className="ocard-header">
                <div className="ocard-icon-wrap">{c.icon}</div>
                <span className="ocard-tag">{c.tag}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <ul className="ocard-features">
                {c.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
