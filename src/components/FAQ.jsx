import { useState } from 'react'

const faqs = [
  { q: 'What types of creative can Coinis generate?', a: 'Coinis generates images (product photography, portraits, lifestyle, abstract, illustrations), short-form video up to 60 seconds, and written copy (headlines, ad copy, emails, social captions, scripts). All outputs can be customized to your Brand Kit.' },
  { q: 'Do I need design experience to use it?', a: 'Not at all. Coinis is designed for marketers, founders, e-commerce operators, and content creators — not designers. If you can describe what you want in a sentence, you can produce professional-grade creative.' },
  { q: 'How does the Brand Kit work?', a: 'Upload your logo, define your brand colors and fonts, and write a short brand description. From that point on, every output — images, video, and copy — is automatically aligned to your visual identity.' },
  { q: 'What resolution and formats are supported?', a: 'Images export up to 4K in PNG, JPG, or WebP. Videos export as MP4 in 1080p or 4K, in any aspect ratio including 9:16, 16:9, and 1:1. Custom dimensions are available on Pro and Team plans.' },
  { q: 'Who owns the creative I generate?', a: 'You do — entirely. All outputs on any paid plan are 100% yours to use commercially, with no restrictions or attribution required. We do not use your prompts or outputs to train our models.' },
  { q: 'Is there a free plan?', a: 'Yes. The free plan includes 50 image generations and 5 video exports per month — no credit card required. Paid plans unlock unlimited generation, Brand Kit, batch processing, and priority rendering.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  const toggle = (i) => setOpen(open === i ? -1 : i)

  return (
    <section className="sec--faq" id="faq">
      <div className="wrap">
        <div className="faq-layout">
          <div className="faq-lead">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Common questions</h2>
            <p className="section-sub">
              Can't find what you're looking for?
            </p>
            <a href="#" style={{ color: 'var(--ora2)', textDecoration: 'none', fontWeight: 700, marginTop: 8, display: 'inline-block' }}>Chat with us →</a>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={`faq-item${open === i ? ' open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => toggle(i)}>
                  {f.q}
                  <span className="faq-toggle">+</span>
                </button>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
