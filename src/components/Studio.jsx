import { useState, useEffect, useRef } from 'react'

const steps = [
  { num: '1', title: 'Write your brief',       body: 'Plain English, no special syntax. Be as vague or precise as your project requires.' },
  { num: '2', title: 'Pick a style direction', body: 'Choose from curated aesthetic presets or define your own with a reference image.' },
  { num: '3', title: 'Export or remix',        body: 'Download at full resolution, push to your CDN, or feed the output back in to iterate.' },
]

const PILLS = ['Lifestyle', 'Product', 'UGC', 'Bold', 'Minimal']
const LOADING_DURATION = 3400 // ms — must match gc-prog animation duration in CSS

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
      <path d="M12 2L2 7.5L12 13L22 7.5L12 2Z" fill="white" />
      <path d="M2 12.5L12 18L22 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".65" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
      <circle cx="12" cy="12" r="2.2" fill="white" />
      <line x1="12" y1="3"  x2="12" y2="6"  stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="12" y1="18" x2="12" y2="21" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="3"  y1="12" x2="6"  y2="12" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="18" y1="12" x2="21" y2="12" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="5.6"  y1="5.6"   x2="7.8"  y2="7.8"   stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="16.2" y1="16.2"  x2="18.4" y2="18.4"  stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="18.4" y1="5.6"   x2="16.2" y2="7.8"   stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="7.8"  y1="16.2"  x2="5.6"  y2="18.4"  stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12"  cy="3.5"  r="1.4" fill="white" />
      <circle cx="12"  cy="20.5" r="1.4" fill="white" />
      <circle cx="3.5" cy="12"   r="1.4" fill="white" />
      <circle cx="20.5" cy="12"  r="1.4" fill="white" />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

export default function Studio() {
  const [isLoading, setIsLoading] = useState(false)
  const [activeStyle, setActiveStyle] = useState(0)
  const [activeFormat, setActiveFormat] = useState(0)
  const [variants, setVariants] = useState(3)
  const timerRef = useRef(null)
  const autoRef = useRef(null)

  const handleGenerate = () => {
    if (isLoading) return
    setIsLoading(true)
    timerRef.current = setTimeout(() => {
      setIsLoading(false)
      autoRef.current = setTimeout(handleGenerate, 5000)
    }, LOADING_DURATION)
  }

  useEffect(() => {
    autoRef.current = setTimeout(handleGenerate, 5000)
    return () => {
      clearTimeout(timerRef.current)
      clearTimeout(autoRef.current)
    }
  }, [])

  return (
    <section className="sec--studio" id="studio">
      <div className="wrap">
        <div className="studio-inner">

          {/* ── interactive modal ── */}
          <div className="studio-demo">
            <div className="gc-modal">

              {/* header */}
              <div className="gc-hd">
                <span className="gc-hd-title">Generate Creatives</span>
                <span className="gc-hd-close">✕</span>
              </div>

              {/* category card */}
              <div className="gc-cat">
                <div className="gc-cat-ico"><LayersIcon /></div>
                <div>
                  <div className="gc-cat-name">All Categories</div>
                  <div className="gc-cat-sub">AI will generate creatives optimized for this category</div>
                </div>
              </div>

              {/* style */}
              <p className="gc-lbl">STYLE</p>
              <div className="gc-pills">
                {PILLS.map((pill, i) => (
                  <span key={i} className={`gc-pill${activeStyle === i ? ' active' : ''}`} onClick={() => !isLoading && setActiveStyle(i)}>{pill}</span>
                ))}
              </div>

              {/* format */}
              <p className="gc-lbl">FORMAT</p>
              <div className="gc-fmts">
                {[['9:16', 'Story'], ['1:1', 'Square'], ['4:5', 'Feed']].map(([ratio, label], i) => (
                  <div key={i} className={`gc-fmt${activeFormat === i ? ' gc-fmt-sel' : ''}`} onClick={() => !isLoading && setActiveFormat(i)}>{ratio} {label}</div>
                ))}
              </div>

              {/* variants */}
              <p className="gc-lbl">VARIANTS</p>
              <div className="gc-vars">
                <div className="gc-var-ctrl">
                  <span className="gc-vb" onClick={() => !isLoading && setVariants(v => Math.max(1, v - 1))}>−</span>
                  <span className="gc-vn">{variants}</span>
                  <span className="gc-vb" onClick={() => !isLoading && setVariants(v => v + 1)}>+</span>
                </div>
                <span className="gc-vdesc">1 format × {variants} = {variants} creatives</span>
              </div>

              {/* bottom: button ↔ loading */}
              {isLoading ? (
                <div className="gc-bottom gc-fadein" key="loading">
                  <div className="gc-loading-ico"><SparkIcon /></div>
                  <div className="gc-loading-txt">Extracting visual patterns...</div>
                  <div className="gc-prog"><div className="gc-prog-fill" /></div>
                </div>
              ) : (
                <div className="gc-bottom gc-fadein" key="form">
                  <button className="gc-gen-btn" onClick={handleGenerate}>
                    <BoltIcon />
                    Generate Creatives
                  </button>
                </div>
              )}

            </div>
          </div>

          {/* ── text side ── */}
          <div className="studio-text">
            <span className="section-tag">Creative Studio</span>
            <h2 className="section-title">
              From Brief to<br /><span className="grad-text">Publish-Ready</span> in<br />Under a Minute
            </h2>
            <p className="section-sub">
              Stop losing days to revision cycles. Describe what you need, choose your style, and get multiple high-quality variants instantly — then refine with a single line of text.
            </p>
            <div className="studio-steps">
              {steps.map((s, i) => (
                <div className="studio-step" key={i}>
                  <div className="studio-step-num">{s.num}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
