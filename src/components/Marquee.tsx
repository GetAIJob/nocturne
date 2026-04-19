const phrases = [
  '— between movements',
  '— the cinema of the quiet moment',
  '— five frames, slowed',
  '— Nocturne, MMXXVI',
  '— for the patient eye',
  '— made above a closed cinema',
]

export default function Marquee() {
  const line = phrases.join('  · ')
  const doubled = `${line}  · ${line}  · `

  return (
    <section className="relative py-16 overflow-hidden" style={{ borderTop: '1px solid rgba(234,233,240,0.08)', borderBottom: '1px solid rgba(234,233,240,0.08)' }}>
      <div className="marquee whitespace-nowrap font-display italic text-7xl md:text-9xl leading-none" style={{ color: 'rgba(234,233,240,0.85)', fontWeight: 400, willChange: 'transform' }}>
        {doubled}
      </div>
      {/* gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(to right, #06070F, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(to left, #06070F, transparent)' }} />
    </section>
  )
}
