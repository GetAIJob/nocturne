import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'
import ErrorBoundary from './ErrorBoundary'

const HeroScene = lazy(() => import('./three/HeroScene'))

export default function Hero() {
  const mouse = useMousePosition()

  return (
    <section id="top" className="relative h-screen w-screen overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <ErrorBoundary fallback={<div className="h-full w-full" style={{ background: 'radial-gradient(circle at 50% 55%, #1B1F35 0%, #06070F 70%)' }} />}>
          <Suspense fallback={<div className="h-full w-full" style={{ background: '#06070F' }} />}>
            <HeroScene mouse={mouse} />
          </Suspense>
        </ErrorBoundary>
      </div>

      {/* radial wash */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 50% 60%, rgba(157,141,241,0.10) 0%, transparent 55%)',
      }} />

      {/* top-left header */}
      <div className="absolute top-28 left-8 md:left-14 z-10 font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(234,233,240,0.55)' }}>
        <div>Nocturne · MMXXVI</div>
        <div className="mt-1">Vol. I — V scenes</div>
      </div>

      {/* top-right meta */}
      <div className="absolute top-28 right-8 md:right-14 z-10 text-right font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(234,233,240,0.45)' }}>
        <div>Now playing</div>
        <div className="mt-1" style={{ color: '#9D8DF1' }}>● Reel I/I</div>
      </div>

      {/* center title */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center pointer-events-none px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2, ease: 'easeOut' }}
          className="font-mono text-[10px] tracking-[0.5em] uppercase mb-8"
          style={{ color: 'rgba(234,233,240,0.6)' }}
        >
          — A cinema of quiet moments —
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.4, ease: 'easeOut' }}
          className="font-display text-[20vw] md:text-[15vw] lg:text-[12vw] leading-[0.85] tracking-[-0.04em]"
          style={{ color: '#EAE9F0', fontWeight: 400 }}
        >
          Noc<span className="font-display italic text-iridescent">turne</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.9, ease: 'easeOut' }}
          className="font-display italic text-xl md:text-2xl mt-6 max-w-md"
          style={{ color: 'rgba(234,233,240,0.78)' }}
        >
          Five frames from films <span style={{ color: '#9D8DF1' }}>that never were.</span>
        </motion.p>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.0, delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 font-mono text-[10px] tracking-[0.4em] uppercase pointer-events-none"
        style={{ color: 'rgba(234,233,240,0.55)' }}
      >
        <span>Begin reel</span>
        <motion.div
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 origin-top"
          style={{ background: 'linear-gradient(to bottom, #9D8DF1, transparent)' }}
        />
      </motion.div>

      {/* bottom-left credit */}
      <div className="absolute bottom-10 left-8 md:left-14 z-10 font-mono text-[10px] tracking-[0.4em] uppercase max-w-[14rem]" style={{ color: 'rgba(234,233,240,0.45)' }}>
        <div>Edited in</div>
        <div className="mt-1" style={{ color: 'rgba(234,233,240,0.7)' }}>32mm · 24fps</div>
      </div>

      {/* bottom-right credit */}
      <div className="absolute bottom-10 right-8 md:right-14 z-10 text-right font-mono text-[10px] tracking-[0.4em] uppercase max-w-[16rem]" style={{ color: 'rgba(234,233,240,0.45)' }}>
        <div>Total runtime</div>
        <div className="mt-1" style={{ color: 'rgba(234,233,240,0.7)' }}>06:31 · slow</div>
      </div>
    </section>
  )
}
