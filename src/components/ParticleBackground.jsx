import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 500 }) {
  const mesh = useRef()
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [count])

  const sizes = useMemo(() => {
    const s = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 3 + 1
    }
    return s
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const pos = mesh.current.geometry.attributes.position.array
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.002
      pos[i * 3] += Math.cos(time + i * 0.05) * 0.001
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
    mesh.current.rotation.y = time * 0.02
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#d4a853"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function FloatingLights() {
  const light1 = useRef()
  const light2 = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (light1.current) {
      light1.current.position.x = Math.sin(t * 0.3) * 5
      light1.current.position.y = Math.cos(t * 0.2) * 3
    }
    if (light2.current) {
      light2.current.position.x = Math.cos(t * 0.4) * 4
      light2.current.position.y = Math.sin(t * 0.3) * 4
    }
  })

  return (
    <>
      <pointLight ref={light1} color="#d4a853" intensity={2} distance={10} />
      <pointLight ref={light2} color="#2d5a4e" intensity={1.5} distance={8} />
    </>
  )
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <Particles />
        <FloatingLights />
      </Canvas>
    </div>
  )
}
