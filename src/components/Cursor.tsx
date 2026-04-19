import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.innerWidth < 1024) return
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY
      if (dotRef.current) dotRef.current.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`
    }
    const tick = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      if (ringRef.current) ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`
      raf = requestAnimationFrame(tick)
    }

    const grow = () => ringRef.current?.classList.add('cursor-grow')
    const shrink = () => ringRef.current?.classList.remove('cursor-grow')

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink)
    })
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <style>{`
        .cursor-dot, .cursor-ring {
          position: fixed; top: 0; left: 0;
          pointer-events: none; z-index: 9999;
          will-change: transform;
        }
        .cursor-dot { width: 6px; height: 6px; background: #9D8DF1; border-radius: 50%; box-shadow: 0 0 10px rgba(157,141,241,0.6); }
        .cursor-ring {
          width: 36px; height: 36px;
          border: 1px solid rgba(157, 141, 241, 0.55);
          border-radius: 50%;
          transition: width 0.28s cubic-bezier(.16,1,.3,1), height 0.28s cubic-bezier(.16,1,.3,1), border-color 0.28s, background 0.28s;
        }
        .cursor-grow {
          width: 64px !important; height: 64px !important;
          border-color: rgba(197,188,245,0.9) !important;
          background: rgba(157,141,241,0.08);
          margin-left: -14px; margin-top: -14px;
        }
        @media (max-width: 1024px) {
          .cursor-dot, .cursor-ring { display: none; }
        }
      `}</style>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}
