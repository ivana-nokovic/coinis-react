import { useState, useRef, useEffect } from 'react'

const PIPELINE_STEPS = [
  [180,  'product'],
  [560,  'arr1'],
  [820,  'ai'],
  [1150, 'arr2'],
  [1380, 'creative'],
  [1560, 'vc1'],
  [1720, 'fb'],
  [1880, 'ig'],
  [2040, 'tt'],
  [2200, 'x'],
  [2360, 'vc2'],
]

const INIT_NODES = {
  product: false, arr1: false, ai: false, arr2: false, creative: false,
  vc1: false, fb: false, ig: false, tt: false, x: false, vc2: false,
  revenue: false, complete: false,
}

const PLATFORMS = [
  { id: 'fb', label: 'Meta',      cls: 'sc-plt--fb', char: 'f'  },
  { id: 'ig', label: 'Instagram', cls: 'sc-plt--ig', char: '◉' },
  { id: 'tt', label: 'TikTok',    cls: 'sc-plt--tt', char: '♪' },
  { id: 'x',  label: 'X',         cls: 'sc-plt--x',  char: '✕' },
]

const TAKEAWAYS = [
  "Zero analytics — every ad dollar spent is untracked",
  "No Meta Pixel = can't retarget or build lookalike audiences",
  "Severe SEO gaps — missing meta, OG tags, structured data",
  "Social dormant 7+ months — audience building stalled",
]

export default function SiteScanner() {
  const [phase, setPhase] = useState('input')
  const [domain, setDomain] = useState('')
  const [inputVal, setInputVal] = useState('')
  const [emailVal, setEmailVal] = useState('')
  const [inputError, setInputError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [nodes, setNodes] = useState(INIT_NODES)
  const [revNum, setRevNum] = useState(0)
  const [seoRun, setSeoRun] = useState(false)
  const [bar34, setBar34] = useState(false)
  const [bar48, setBar48] = useState(false)

  const timersRef = useRef([])
  const rafRef = useRef(null)

  const clearAll = () => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
  }

  const T = (ms, fn) => { timersRef.current.push(setTimeout(fn, ms)) }

  const activate = (key) => setNodes(n => ({ ...n, [key]: true }))

  const animateRevenue = (target, duration) => {
    const start = performance.now()
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1)
      setRevNum(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
  }

  const orchestrate = () => {
    PIPELINE_STEPS.forEach(([ms, key]) => T(ms, () => activate(key)))
    T(2500, () => { activate('revenue'); animateRevenue(1247, 950) })
    T(2950, () => activate('complete'))
    T(3400, () => {
      setPhase('results')
      requestAnimationFrame(() => requestAnimationFrame(() => {
        setSeoRun(true); setBar34(true); setBar48(true)
      }))
    })
  }

  const startAnalysis = () => {
    const raw = inputVal.trim()
    const email = emailVal.trim()
    let hasError = false
    if (!raw) { setInputError(true); setTimeout(() => setInputError(false), 1400); hasError = true }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setEmailError(true); setTimeout(() => setEmailError(false), 1400); hasError = true }
    if (hasError) return
    const d = raw.replace(/^https?:\/\//, '').replace(/\/.*/, '').toLowerCase() || 'yourstore.com'
    setDomain(d)
    clearAll()
    setNodes(INIT_NODES)
    setRevNum(0)
    setSeoRun(false); setBar34(false); setBar48(false)
    setPhase('loading')
    orchestrate()
  }

  const reset = () => {
    clearAll()
    setNodes(INIT_NODES)
    setRevNum(0)
    setSeoRun(false); setBar34(false); setBar48(false)
    setInputVal('')
    setEmailVal('')
    setPhase('input')
  }

  useEffect(() => clearAll, [])

  const faviconLetter = domain ? domain.charAt(0).toUpperCase() : 'S'

  return (
    <section className="sec--scanner">
      <div className="wrap">

        <div className="section-header">
          <span className="section-tag">Site Intelligence</span>
          <h2 className="section-title">Scan your site.<br /><span className="grad-text">Unlock your potential.</span></h2>
          <p className="section-sub">Enter your domain and get an instant marketing health report — SEO, tracking, social, and more.</p>
        </div>

        <div className="scanner-wrap">
          <div className="scanner-card">

            {/* ── Topbar ── */}
            <div className="sc-topbar">
              <div className="sc-dots">
                <div className="sc-td" /><div className="sc-td" /><div className="sc-td" />
              </div>
              <div className="sc-topbar-title">Site Intelligence Scanner</div>
              <div className="sc-ai-badge">⚡ AI</div>
            </div>

            {/* ── STATE: INPUT ── */}
            {phase === 'input' && (
              <div className="sc-body">
                <div className="sc-headline">Analyze your website</div>
                <div className="sc-sub">Enter your domain and get an instant marketing health report — SEO, tracking, social, and more.</div>
                <div className="sc-fields">
                  <input
                    className={`sc-input${inputError ? ' sc-input--error' : ''}`}
                    type="text"
                    placeholder="yourstore.com"
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && startAnalysis()}
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <input
                    className={`sc-input${emailError ? ' sc-input--error' : ''}`}
                    type="email"
                    placeholder="your@email.com"
                    value={emailVal}
                    onChange={e => setEmailVal(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && startAnalysis()}
                    autoComplete="email"
                  />
                  <button className="sc-analyze-btn sc-analyze-btn--full" onClick={startAnalysis}>Analyze →</button>
                </div>
              </div>
            )}

            {/* ── STATE: PIPELINE LOADING ── */}
            {phase === 'loading' && (
              <div className="sc-pipeline">

                <div className="sc-scan-hd">
                  <div className="sc-scan-dot" />
                  <div className="sc-scan-txt">Analyzing <span className="sc-scan-domain">{domain}</span></div>
                </div>

                {/* Product → AI → Creative */}
                <div className="sc-pipe-flow">

                  <div className={`sc-pnode sc-pnode--product${nodes.product ? ' active' : ''}`}>
                    <div className="sc-pn-body">
                      <div className="sc-product-inner">📦</div>
                      <div className="sc-product-price">$29.99</div>
                    </div>
                    <div className="sc-pn-label">Product</div>
                  </div>

                  <div className={`sc-h-arrow${nodes.arr1 ? ' drawn' : ''}`}>
                    <div className="sc-arr-fill" /><div className="sc-arr-tip" />
                  </div>

                  <div className={`sc-pnode sc-pnode--ai${nodes.ai ? ' active' : ''}`}>
                    <div className="sc-pn-body">
                      <div className="sc-ai-ring" />
                      <span className="sc-ai-core">✦</span>
                    </div>
                    <div className="sc-pn-label">AI Engine</div>
                  </div>

                  <div className={`sc-h-arrow${nodes.arr2 ? ' drawn' : ''}`}>
                    <div className="sc-arr-fill" /><div className="sc-arr-tip" />
                  </div>

                  <div className={`sc-pnode sc-pnode--creative${nodes.creative ? ' active' : ''}`}>
                    <div className="sc-pn-body">
                      <div className="sc-creative-inner" />
                      <div className="sc-creative-sparkle">✦</div>
                    </div>
                    <div className="sc-pn-label">Ad Creative</div>
                  </div>

                </div>

                <div className="sc-vline-wrap">
                  <div className={`sc-vline${nodes.vc1 ? ' drawn' : ''}`} />
                </div>

                {/* Platforms */}
                <div className="sc-platforms">
                  {PLATFORMS.map(({ id, label, cls, char }) => (
                    <div key={id} className={`sc-platform ${cls}${nodes[id] ? ' active' : ''}`}>
                      <div className="sc-plt-circle">{char}</div>
                      <div className="sc-plt-label">{label}</div>
                      <div className="sc-plt-live"><div className="sc-live-dot" />Live</div>
                    </div>
                  ))}
                </div>

                <div className="sc-vline-wrap">
                  <div className={`sc-vline${nodes.vc2 ? ' drawn' : ''}`} />
                </div>

                {/* Revenue */}
                <div className={`sc-revenue${nodes.revenue ? ' active' : ''}`}>
                  <div className="sc-rev-emoji">💰</div>
                  <div className="sc-rev-info">
                    <div className="sc-rev-label">Revenue Generated</div>
                    <div className="sc-rev-value">${revNum.toLocaleString()}</div>
                    <div className="sc-rev-pills">
                      {[['fb','Meta Ads'],['ig','IG Ads'],['tt','TikTok Ads'],['x','X Ads']].map(([k, t]) => (
                        <span key={k} className={`sc-rev-pill sc-rev-pill--${k}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Complete */}
                <div className={`sc-complete${nodes.complete ? ' active' : ''}`}>
                  <div className="sc-complete-check">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path
                        className={`sc-check-path${nodes.complete ? ' run' : ''}`}
                        d="M1 5L4.5 8.5L11 1.5"
                        stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="sc-complete-title">Analysis complete!</div>
                    <div className="sc-complete-sub">Loading your full report...</div>
                  </div>
                </div>

              </div>
            )}

            {/* ── STATE: RESULTS ── */}
            {phase === 'results' && (
              <div className="sc-results">

                <div className="sc-results-hd">
                  <div className="sc-results-domain">
                    <div className="sc-favicon">{faviconLetter}</div>
                    <div className="sc-domain-text">{domain}</div>
                  </div>
                  <div className="sc-scan-time">Scanned just now</div>
                </div>

                <div className="sc-results-scroll">

                  {/* Platform card */}
                  <div className="sc-rcard">
                    <div className="sc-rcard-hd">
                      <div className="sc-rcard-title">🛒 Platform</div>
                      <span className="sc-badge sc-badge--info">Shopify</span>
                    </div>
                    <div className="sc-metric-row">
                      <div className="sc-metric"><div className="sc-metric-val">24</div><div className="sc-metric-lbl">Products</div></div>
                      <div className="sc-metric"><div className="sc-metric-val sc-metric-val--gold">USD</div><div className="sc-metric-lbl">Currency</div></div>
                      <div className="sc-metric"><div className="sc-metric-val sc-metric-val--green">0%</div><div className="sc-metric-lbl">Out of stock</div></div>
                    </div>
                  </div>

                  {/* SEO card */}
                  <div className="sc-rcard">
                    <div className="sc-rcard-hd">
                      <div className="sc-rcard-title">🔍 SEO Health</div>
                      <span className="sc-badge sc-badge--warn">34 / 100</span>
                    </div>
                    <div className="sc-score-row">
                      <div className="sc-ring-wrap">
                        <svg width="72" height="72" viewBox="0 0 72 72">
                          <circle className="sc-ring-track" cx="36" cy="36" r="31" />
                          <circle className={`sc-ring-fill${seoRun ? ' run' : ''}`} cx="36" cy="36" r="31" />
                        </svg>
                        <div className="sc-ring-num">34</div>
                      </div>
                      <div className="sc-score-details">
                        <div className="sc-score-lbl">Missing</div>
                        {['Meta descriptions','OG tags (title, image)','Schema / structured data'].map((t,i) => (
                          <div key={i} className="sc-score-item"><span className="sc-sdot sc-sdot--red" />{t}</div>
                        ))}
                        <div className="sc-score-item"><span className="sc-sdot sc-sdot--green" />SSL, sitemap, robots.txt</div>
                      </div>
                    </div>
                    <div className="sc-bar-row">
                      <div className="sc-bar-hd"><span>Site Health</span><span className="sc-bar-grade">Grade C</span></div>
                      <div className="sc-bar-track"><div className={`sc-bar-fill sc-bar-fill--orange${bar34 ? ' run-34' : ''}`} /></div>
                    </div>
                  </div>

                  {/* Tracking card */}
                  <div className="sc-rcard">
                    <div className="sc-rcard-hd">
                      <div className="sc-rcard-title">🎯 Tracking &amp; Pixels</div>
                      <span className="sc-badge sc-badge--bad">None detected</span>
                    </div>
                    <div className="sc-check-list">
                      <div className="sc-check-row"><span className="sc-c-icon">✗</span>Google Analytics 4 (GA4)</div>
                      <div className="sc-check-row"><span className="sc-c-icon">✗</span>Google Tag Manager (GTM)</div>
                      <div className="sc-check-row"><span className="sc-c-icon">✗</span>Meta Pixel / Conversions API</div>
                      <div className="sc-check-row sc-check-row--warn"><span className="sc-c-icon">⚠</span>You're flying blind — no analytics installed</div>
                    </div>
                  </div>

                  {/* Social card */}
                  <div className="sc-rcard">
                    <div className="sc-rcard-hd">
                      <div className="sc-rcard-title">📱 Social Media</div>
                      <span className="sc-badge sc-badge--warn">Impact: 48/100</span>
                    </div>
                    <div className="sc-check-list">
                      <div className="sc-check-row"><span className="sc-c-icon">📸</span>Instagram: 1.2K followers · last post 7 months ago</div>
                      <div className="sc-check-row"><span className="sc-c-icon">🐦</span>X / Twitter: account found · unreachable</div>
                      <div className="sc-check-row sc-check-row--good"><span className="sc-c-icon">✓</span>Engagement rate 8.4% — excellent for size</div>
                      <div className="sc-check-row sc-check-row--warn"><span className="sc-c-icon">💡</span>Dormant accounts — huge missed opportunity</div>
                    </div>
                    <div className="sc-bar-row">
                      <div className="sc-bar-hd"><span>Social Impact Score</span><span>48/100</span></div>
                      <div className="sc-bar-track"><div className={`sc-bar-fill sc-bar-fill--blue${bar48 ? ' run-48' : ''}`} /></div>
                    </div>
                  </div>

                  {/* Key Takeaways */}
                  <div className="sc-rcard">
                    <div className="sc-rcard-hd">
                      <div className="sc-rcard-title">⚡ Key Takeaways</div>
                    </div>
                    <div className="sc-takeaway-list">
                      {TAKEAWAYS.map((t, i) => (
                        <div key={i} className="sc-takeaway-item">
                          <div className="sc-takeaway-num">{i + 1}</div>
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                <a href="/contact" className="sc-results-cta">
                  <span className="sc-results-cta-label">Fix all of this with Coinis →</span>
                  <span className="sc-results-cta-arrow">›</span>
                </a>

                <div className="sc-results-reset">
                  <span className="sc-reset-link" onClick={reset}>← Analyze a different domain</span>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
