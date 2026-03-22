import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ParticleBackground from './ParticleBackground'
import { img } from '../utils'

export default function Hero() {
  const heroRef = useRef()
  const textRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      })
      gsap.from('.hero-subtitle', {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      })
      gsap.from('.hero-cta', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
        stagger: 0.15,
      })
      gsap.from('.hero-scroll', {
        opacity: 0,
        delay: 1.5,
        duration: 1,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={img('/images/hero/hero1.jpg')}
          alt="Lô Lô Chải"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-dark/80" />
      </div>

      {/* 3D Particles */}
      <ParticleBackground />

      {/* Content */}
      <div ref={textRef} className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <p className="hero-subtitle text-accent font-medium text-lg md:text-xl mb-4 tracking-wider uppercase">
          Trải nghiệm chậm, sống sâu
        </p>
        <h1 className="hero-title heading-xl text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          Khám phá vẻ đẹp
          <br />
          <span className="text-accent">Lô Lô Chải</span>
        </h1>
        <p className="hero-subtitle text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Hành trình về với bản làng cổ kính, nơi văn hóa người Lô Lô Đen
          được gìn giữ qua bao thế hệ giữa đại ngàn Hà Giang.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#tours" className="hero-cta btn-primary text-lg">
            Khám phá tour
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#about" className="hero-cta btn-outline text-lg">
            Về chúng tôi
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Cuộn xuống</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
