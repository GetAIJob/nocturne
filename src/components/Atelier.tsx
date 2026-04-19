import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

const hidden = `We are two — a writer and a colourist — working from a north-facing room above a closed cinema in Brussels. Most of our work is unmade. The work below is the small part of it that is.`

export default function Atelier() {
  const stageRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = stageRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--mx', `${x}%`)
    el.style.setProperty('--my', `${y}%`)
  }

  return (
    <section id="atelier" className="relative py-44 px-8 md:px-14">
      <div className="max-w-[88rem] mx-auto">
        <div className="flex items-baseline justify-between font-mono text-[10px] tracking-[0.4em] uppercase mb-20" style={{ color: 'rgba(234,233,240,0.55)' }}>
          <span>§ 04 — Atelier</span>
          <span style={{ color: 'rgba(234,233,240,0.35)' }}>Hover to reveal</span>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.88] tracking-[-0.04em] mb-8"
              style={{ color: '#EAE9F0', fontWeight: 400 }}
            >
              On the
              <br />
              <span className="font-display italic">studio,</span>
              <br />
              and what
              <br />
              <span className="font-display italic">it cannot show.</span>
            </motion.h2>

            <p className="font-display text-lg md:text-xl leading-relaxed max-w-md" style={{ color: 'rgba(234,233,240,0.7)' }}>
              There is a paragraph below. It only appears where you look. The rest of the studio remains in the dark, where it has always preferred to be.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <div>
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: 'rgba(234,233,240,0.45)' }}>Founded</div>
                <div className="font-display text-xl" style={{ color: '#EAE9F0' }}>MMXXIV</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: 'rgba(234,233,240,0.45)' }}>Practice</div>
                <div className="font-display text-xl" style={{ color: '#EAE9F0' }}>Two hands</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: 'rgba(234,233,240,0.45)' }}>Located</div>
                <div className="font-display text-xl" style={{ color: '#EAE9F0' }}>BE — Brussels</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: 'rgba(234,233,240,0.45)' }}>Available</div>
                <div className="font-display text-xl" style={{ color: '#9D8DF1' }}>Q3 MMXXVI</div>
              </div>
            </div>
          </div>

          {/* Torch reveal stage */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              ref={stageRef}
              data-cursor="pointer"
              onMouseMove={onMove}
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
              data-active={active}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="torch-stage relative aspect-[5/4] overflow-hidden"
              style={{
                background: 'linear-gradient(160deg, #131628 0%, #1B1F35 50%, #06070F 100%)',
                border: '1px solid rgba(234,233,240,0.08)',
              }}
            >
              {/* underlying revealed content */}
              <div className="absolute inset-0 p-12 md:p-16 flex flex-col justify-center">
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: 'rgba(157,141,241,0.7)' }}>
                  // private notes — reveal on hover
                </div>
                <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-[1.4] max-w-[36rem]" style={{ color: '#EAE9F0', fontWeight: 400 }}>
                  {hidden}
                </p>
                <div className="mt-10 font-display italic text-base" style={{ color: '#9D8DF1' }}>
                  — signed, the studio
                </div>
              </div>

              {/* faint outline grid behind */}
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'linear-gradient(rgba(234,233,240,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(234,233,240,0.04) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }} />

              {/* idle state hint (when not hovering) */}
              {!active && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="font-mono text-[10px] tracking-[0.5em] uppercase" style={{ color: 'rgba(234,233,240,0.4)' }}>
                    ← Move your cursor here →
                  </div>
                </div>
              )}
            </motion.div>
            <div className="mt-4 font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(234,233,240,0.45)' }}>
              Plate XII — A torch reveal · MMXXVI
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
