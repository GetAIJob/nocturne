import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const paragraphs = [
  'Two figures sit on opposite sides of a long, mirrored bar. Each is the only person in the other’s sightline. They have ordered the same drink without realising it.',
  'For two minutes neither speaks. The reflection does not perfectly agree with the room — when one figure raises a glass, the reflection of the other appears to set theirs down. The bartender, polishing a glass, sees nothing of this and is the only one who hears the ice settle.',
  'When the second figure finally looks up, the first has already left. The drink is still full. The bartender, reaching to clear it, finds it warm.',
]

export default function FeaturedScene() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])
  const numeralY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2])

  return (
    <section ref={ref} className="relative min-h-[140vh] py-44 px-8 md:px-14 overflow-hidden" style={{ background: 'linear-gradient(180deg, #06070F 0%, #0D0F1C 50%, #06070F 100%)' }}>
      <motion.div style={{ opacity: glowOpacity }} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(157,141,241,0.10) 0%, transparent 60%)', filter: 'blur(40px)' }}
        />
      </motion.div>

      <motion.div style={{ y: numeralY }} className="absolute top-0 left-0 right-0 flex justify-center font-display italic select-none pointer-events-none">
        <span style={{ fontSize: '60vw', lineHeight: 0.78, color: 'rgba(157,141,241,0.05)', fontWeight: 400, letterSpacing: '-0.06em' }}>
          03
        </span>
      </motion.div>

      <div className="max-w-[80rem] mx-auto relative z-10">
        <div className="flex items-baseline justify-between font-mono text-[10px] tracking-[0.4em] uppercase mb-16" style={{ color: 'rgba(234,233,240,0.55)' }}>
          <span>§ 03 — Featured scene</span>
          <span style={{ color: 'rgba(234,233,240,0.35)' }}>02:04 · slowest cut</span>
        </div>

        <motion.div style={{ y }} className="grid grid-cols-12 gap-6 mb-32">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: '#9D8DF1' }}>
              Scene · 03
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.85] tracking-[-0.04em]" style={{ color: '#EAE9F0', fontWeight: 400 }}>
              Glass
              <br />
              <span className="font-display italic">against glass.</span>
            </h2>
            <div className="mt-6 font-display italic text-lg" style={{ color: 'rgba(234,233,240,0.6)' }}>
              "A bar. A reflection that disagrees with what is in front of it."
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.9, delay: 0.1 * i, ease: 'easeOut' }}
                className="font-display text-xl md:text-2xl leading-[1.5] mb-8 last:mb-0"
                style={{ color: 'rgba(234,233,240,0.85)', fontWeight: 400 }}
              >
                {i === 0 && <span className="font-display italic text-7xl md:text-8xl float-left mr-3 mt-1 leading-[0.85]" style={{ color: '#9D8DF1', fontWeight: 400 }}>T</span>}
                {i === 0 ? p.slice(1) : p}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10"
          style={{ borderTop: '1px solid rgba(234,233,240,0.08)' }}
        >
          {[
            ['Setting', 'Bar interior'],
            ['Lens', '40mm anamorphic'],
            ['Stock', 'Fuji 250D'],
            ['Cut', 'Long-take, single shot'],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="font-mono text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: 'rgba(234,233,240,0.45)' }}>{k}</div>
              <div className="font-display text-xl" style={{ color: '#EAE9F0', fontWeight: 400 }}>{v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
