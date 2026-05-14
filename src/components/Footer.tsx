export default function Footer() {
  return (
    <footer className="relative px-8 md:px-14 pb-10 pt-20">
      <div className="hairline mb-10" />
      <div className="max-w-[88rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(234,233,240,0.5)' }}>
        <div>
          <div className="mb-2" style={{ color: 'rgba(234,233,240,0.85)' }}>Nocturne Studio</div>
          <div>Brussels — above the cinema</div>
        </div>
        <div>
          <div className="mb-2" style={{ color: 'rgba(234,233,240,0.85)' }}>Colophon</div>
          <div>Set in Instrument Serif & JetBrains Mono</div>
        </div>
        <div>
          <div className="mb-2" style={{ color: 'rgba(234,233,240,0.85)' }}>Build</div>
          <div>R3F · GSAP · 24fps · grain</div>
        </div>
        <div className="md:text-right">
          <div className="mb-2" style={{ color: 'rgba(234,233,240,0.85)' }}>© MMXXVI</div>
          <div>All rights, slowly, reserved.</div>
        </div>
      </div>
      <p className="text-center mt-4 text-[0.75rem] opacity-[0.45]" style={{ color: 'inherit' }}>
        Built by{' '}
        <a href="https://risesitelab.com/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'inherit' }}>
          GrowthSite Lab
        </a>
      </p>
    </footer>
  )
}
