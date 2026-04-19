import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { MousePosition } from '@/hooks/useMousePosition'

export function IridescentKnot({ mouse }: { mouse: MousePosition }) {
  const groupRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.getElapsedTime()
    groupRef.current.rotation.y +=
      (mouse.normalizedX * 0.5 + t * 0.04 - groupRef.current.rotation.y) * 0.045
    groupRef.current.rotation.x +=
      (-mouse.normalizedY * 0.3 + Math.sin(t * 0.25) * 0.06 - groupRef.current.rotation.x) * 0.045

    if (meshRef.current) {
      meshRef.current.rotation.z = t * 0.07
      const mat = meshRef.current.material as THREE.MeshPhysicalMaterial
      mat.iridescenceIOR = 1.3 + Math.sin(t * 0.6) * 0.3
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.25
      innerRef.current.rotation.z = t * 0.18
      const mat = innerRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = 0.15 + Math.sin(t * 1.3) * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      {/* Outer wireframe envelope */}
      <mesh ref={innerRef}>
        <torusKnotGeometry args={[1.35, 0.04, 220, 12, 2, 3]} />
        <meshBasicMaterial color="#9D8DF1" wireframe transparent opacity={0.18} />
      </mesh>

      {/* Iridescent solid torus knot */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.0, 0.30, 280, 32, 2, 3]} />
        <meshPhysicalMaterial
          color="#1B1F35"
          metalness={0.85}
          roughness={0.18}
          iridescence={1.0}
          iridescenceIOR={1.4}
          iridescenceThicknessRange={[100, 800]}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.2}
        />
      </mesh>

      {/* central glow */}
      <mesh>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial color="#C5BCF5" emissive="#9D8DF1" emissiveIntensity={2.5} transparent opacity={0.85} />
      </mesh>
    </group>
  )
}

export function Starfield({ count = 350 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 8
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * Math.PI * 2
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi) - 2  // bias behind
      sizes[i] = 0.008 + Math.random() * 0.022
    }
    return { positions, sizes }
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    const t = state.clock.getElapsedTime()
    pointsRef.current.rotation.y = t * 0.008
    pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.08
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        color="#EAE9F0"
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export function VioletAura() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.scale.setScalar(2.4 + Math.sin(t * 0.5) * 0.15)
  })
  return (
    <mesh ref={ref} position={[0, 0, -1.5]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="#6B5DCC" transparent opacity={0.06} side={THREE.BackSide} blending={THREE.AdditiveBlending} depthWrite={false} />
    </mesh>
  )
}
