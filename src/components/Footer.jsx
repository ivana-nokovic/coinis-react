const links = {
  Product: ['Image Generation', 'Video Creation', 'AI Copywriting', 'Brand Kit', 'Batch Processing', 'Pricing'],
  'Use Cases': ['Social Media', 'E-commerce', 'Ad Creatives', 'Email Campaigns', 'Agencies'],
  Company: ['About', 'Blog', 'Careers', 'Privacy Policy', 'Terms of Service'],
}

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="footer-logo grad-text">Coinis</div>
            <p className="footer-desc">The AI creative generation platform for teams who ship fast and need professional-grade output at scale.</p>
          </div>
          {Object.entries(links).map(([heading, items]) => (
            <div className="footer-col" key={heading}>
              <h4>{heading}</h4>
              <ul>{items.map(item => <li key={item}><a href="#">{item}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2025 Coinis. All rights reserved.</span>
          <div className="footer-social">
            <a href="#" title="Twitter/X">𝕏</a>
            <a href="#" title="LinkedIn">in</a>
            <a href="#" title="Instagram">▲</a>
            <a href="#" title="YouTube">▶</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
