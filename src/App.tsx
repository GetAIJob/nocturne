import { useEffect } from 'react'
import Lenis from 'lenis'
import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import Scenes from '@/components/Scenes'
import FeaturedScene from '@/components/FeaturedScene'
import Atelier from '@/components/Atelier'
import Marquee from '@/components/Marquee'
import Closing from '@/components/Closing'
import Footer from '@/components/Footer'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    let raf = 0
    const tick = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="grain vignette relative">
      <Cursor />
      <Nav />
      <main className="relative">
        <Hero />
        <Manifesto />
        <Scenes />
        <FeaturedScene />
        <Atelier />
        <Marquee />
        <Closing />
      </main>
      <Footer />
    </div>
  )
}
