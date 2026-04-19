import { motion, useInView } from 'framer-motion'
import { Fragment, useRef } from 'react'

const text = `Cinema is not the action. Cinema is the breath taken before the action, and the second of stillness after. We collect those breaths. The pages that follow are five of them.`

const words = text.split(' ')

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section id="manifesto" className="relative py-44 md:py-56 px-8 md:px-14">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20" style={{ background: 'linear-gradient(to bottom, transparent, rgba(234,233,240,0.18))' }} />

      <div className="max-w-[80rem] mx-auto">
        <div className="flex items-baseline justify-between font-mono text-[10px] tracking-[0.4em] uppercase mb-20" style={{ color: 'rgba(234,233,240,0.55)' }}>
          <span>§ 01 — Manifesto</span>
          <span className="hidden md:inline" style={{ color: 'rgba(234,233,240,0.35)' }}>For the patient eye</span>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              className="font-display italic text-[16rem] md:text-[20rem] leading-[0.8] tracking-[-0.06em]"
              style={{ color: '#9D8DF1', fontWeight: 400 }}
            >
              C
            </motion.div>
            <div className="absolute top-2 left-32 md:left-44 font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(234,233,240,0.4)' }}>
              The first frame
            </div>
          </div>

          <div ref={ref} className="col-span-12 md:col-span-8 md:col-start-5 mt-8 md:mt-6">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-[1.35]" style={{ color: 'rgba(234,233,240,0.92)', fontWeight: 400 }}>
              {words.map((w, i) => (
                <Fragment key={i}>
                  <motion.span
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.04 * i, ease: 'easeOut' }}
                    className="inline-block"
                  >
                    {w}
                  </motion.span>
                  {i < words.length - 1 ? '\u00A0' : ''}
                </Fragment>
              ))}
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.04 * words.length + 0.4 }}
              className="mt-14 flex items-center gap-6"
            >
              <div className="hairline flex-1" />
              <span className="font-display italic text-base" style={{ color: 'rgba(234,233,240,0.6)' }}>
                — N. Studio, Anno MMXXVI
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
