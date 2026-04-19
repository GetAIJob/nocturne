import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { scenes } from '@/data/scenes'

gsap.registerPlugin(ScrollTrigger)

export default function Scenes() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!sectionRef.current || !trackRef.current) return
    if (window.innerWidth < 1024) return  // skip horizontal pin on mobile

    const numPanels = scenes.length + 1  // intro + 5 scenes
    const totalShift = -((numPanels - 1) / numPanels) * 100  // shift in xPercent

    gsap.to(trackRef.current, {
      xPercent: totalShift,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 0.8,
        snap: 1 / (numPanels - 1),
        end: () => `+=${window.innerWidth * (numPanels - 1)}`,
      },
    })

    // Per-panel content reveal
    const panels = trackRef.current.querySelectorAll('.scene-panel')
    panels.forEach((panel, i) => {
      const content = panel.querySelector('.scene-inner')
      if (!content || i === 0) return
      gsap.fromTo(content,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `${((i - 0.45) / (numPanels - 1)) * 100}% top`,
            end:   `${(i / (numPanels - 1)) * 100}% top`,
            scrub: false,
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} id="scenes" className="relative h-screen lg:h-screen overflow-hidden" style={{ background: '#06070F' }}>
      <div
        ref={trackRef}
        className="flex h-full"
        style={{ width: `${(scenes.length + 1) * 100}vw` }}
      >
        {/* Intro panel */}
        <div className="scene-panel relative flex flex-col justify-end h-full px-8 md:px-20 pb-24" style={{ width: '100vw' }}>
          <div className="scene-inner max-w-[40rem]">
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase mb-8" style={{ color: 'rgba(234,233,240,0.55)' }}>
              § 02 — The Reel
            </div>
            <h2 className="font-display text-6xl md:text-8xl lg:text-[8.5rem] leading-[0.85] tracking-[-0.04em] mb-8" style={{ color: '#EAE9F0', fontWeight: 400 }}>
              Five <span className="font-display italic text-iridescent">scenes,</span>
              <br />
              held still.
            </h2>
            <p className="font-display text-xl md:text-2xl leading-relaxed max-w-[32rem]" style={{ color: 'rgba(234,233,240,0.7)' }}>
              Scroll horizontally — each frame holds for as long as the eye does.
            </p>
            <div className="mt-12 font-mono text-[10px] tracking-[0.4em] uppercase flex items-center gap-3" style={{ color: '#9D8DF1' }}>
              <span>→ scroll to enter</span>
              <span style={{ background: 'rgba(157,141,241,0.3)', height: 1, flex: 1, maxWidth: 200 }} />
            </div>
          </div>
          {/* large bg numeral */}
          <div className="absolute top-1/2 -translate-y-1/2 right-12 font-display italic select-none pointer-events-none" style={{ fontSize: '32vw', lineHeight: 0.78, color: 'rgba(157,141,241,0.05)' }}>
            I
          </div>
        </div>

        {/* Scene panels */}
        {scenes.map((s) => (
          <div
            key={s.id}
            className="scene-panel relative flex flex-col justify-end h-full px-8 md:px-20 pb-24"
            style={{ width: '100vw' }}
          >
            {/* tinted background wash for this scene */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 70% 40%, ${s.hue}22 0%, transparent 60%)` }}
            />
            {/* huge translucent number */}
            <div
              className="absolute top-1/2 -translate-y-1/2 right-12 font-display italic select-none pointer-events-none"
              style={{ fontSize: '36vw', lineHeight: 0.78, color: `${s.hue}10`, fontWeight: 400 }}
            >
              {s.number}
            </div>

            {/* content */}
            <div className="scene-inner relative z-10 max-w-[44rem]">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: s.hue }}>
                  Scene · {s.number}
                </span>
                <span style={{ color: 'rgba(234,233,240,0.18)' }}>·</span>
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(234,233,240,0.55)' }}>
                  {s.duration}
                </span>
                <span style={{ color: 'rgba(234,233,240,0.18)' }}>·</span>
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(234,233,240,0.45)' }}>
                  {s.palette}
                </span>
              </div>

              <h3 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.88] tracking-[-0.03em] mb-6" style={{ color: '#EAE9F0', fontWeight: 400 }}>
                <span className="font-display italic">{s.title}</span>
              </h3>

              <p className="font-display italic text-lg md:text-xl mb-6" style={{ color: 'rgba(234,233,240,0.7)' }}>
                {s.setting}
              </p>

              <p className="font-display text-xl md:text-2xl leading-[1.5] max-w-[40rem]" style={{ color: 'rgba(234,233,240,0.88)', fontWeight: 400 }}>
                {s.excerpt}
              </p>
            </div>

            {/* progress dots */}
            <div className="absolute bottom-10 right-12 z-10 flex items-center gap-2 font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(234,233,240,0.4)' }}>
              <span>{s.number} / 05</span>
              <div className="flex gap-1.5 ml-3">
                {scenes.map((d) => (
                  <span
                    key={d.id}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: d.id === s.id ? s.hue : 'rgba(234,233,240,0.2)' }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* mobile fallback notice */}
      <div className="lg:hidden absolute bottom-4 left-0 right-0 text-center font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(234,233,240,0.4)' }}>
        Best viewed on desktop · scroll →
      </div>
    </section>
  )
}
