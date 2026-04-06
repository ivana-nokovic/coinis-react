import { useEffect } from 'react'
import Starfield from './components/Starfield'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import Features from './components/Features'
import Toolkit from './components/Toolkit'
import Studio from './components/Studio'
import TrustedBy from './components/TrustedBy'
import Outputs from './components/Outputs'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Events from './components/Events'
import SiteScanner from './components/SiteScanner'
import AdForce from './components/AdForce'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Starfield />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav />
        <div className="fade-in"><Hero /></div>
        <div className="fade-in"><Marquee /></div>
        <div className="fade-in"><Features /></div>
        <div className="fade-in"><Studio /></div>
        <div className="fade-in"><Toolkit /></div>
        <div className="fade-in"><SiteScanner /></div>
        <div className="fade-in"><TrustedBy /></div>
        <div className="fade-in"><Testimonials /></div>
        <div className="fade-in"><FAQ /></div>
        <div className="fade-in"><Events /></div>
        <div className="fade-in"><AdForce /></div>
        <div className="fade-in"><Footer /></div>
      </div>
    </>
  )
}
