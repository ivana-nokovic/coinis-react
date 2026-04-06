const items = [
  'Adobe', 'Booking.com', 'Walmart', 'Coursera', 'Kaspersky',
  'McAfee', 'ExpressVPN', 'AliExpress', 'SHEIN', 'NordVPN', 'Norton', 'Amazon',
]

const track = [...items, ...items]

export default function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {track.map((label, i) => (
          <span key={i} className="marquee-item">
            {label}
            {i < track.length - 1 && <span className="marquee-dot" style={{ marginLeft: 24 }} />}
          </span>
        ))}
      </div>
    </div>
  )
}
