import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTABanner() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-primary py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center cta-content">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Sẵn sàng khám phá Lô Lô Chải?
        </h2>
        <p className="text-white/70 text-lg mb-10">
          Đặt tour ngay hôm nay để giữ chỗ và nhận ưu đãi tốt nhất!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:lowtechtravel@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-cream transition-all duration-300 hover:scale-105"
          >
            Nhận báo giá ngay
          </a>
          <a
            href="mailto:lowtechtravel@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-full hover:bg-accent-light transition-all duration-300 hover:scale-105"
          >
            Đặt tour ngay
          </a>
          <button
            onClick={() => window.dispatchEvent(new Event('open-chat'))}
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer"
          >
            Chat với tư vấn viên
          </button>
        </div>
      </div>
    </section>
  )
}
