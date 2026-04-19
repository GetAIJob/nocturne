import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import { IridescentKnot, Starfield, VioletAura } from './TorusKnot'
import type { MousePosition } from '@/hooks/useMousePosition'

export default function HeroScene({ mouse }: { mouse: MousePosition }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.0,
      }}
    >
      <color attach="background" args={['#06070F']} />
      <fog attach="fog" args={['#06070F', 5, 14]} />

      <ambientLight intensity={0.18} />
      <directionalLight position={[3, 4, 2]} intensity={1.4} color="#C5BCF5" />
      <pointLight position={[-3, -2, 1]} intensity={1.2} color="#9D8DF1" />
      <pointLight position={[2.5, 1, 2]} intensity={0.8} color="#E89F71" />
      <pointLight position={[0, 3, -1]} intensity={0.7} color="#6B5DCC" />

      <VioletAura />
      <IridescentKnot mouse={mouse} />
      <Starfield count={320} />

      <EffectComposer>
        <Bloom
          intensity={1.0}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.85}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  )
}
