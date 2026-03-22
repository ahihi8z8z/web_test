import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {
    icon: '🗺️',
    title: 'Lịch trình rõ ràng',
    desc: 'Không phát sinh chi phí ẩn, minh bạch từ A đến Z',
  },
  {
    icon: '🏡',
    title: 'Trải nghiệm thật',
    desc: 'Không "du lịch công nghiệp", kết nối sâu với văn hóa',
  },
  {
    icon: '💰',
    title: 'Giá hợp lý',
    desc: 'Tối ưu chi phí cho sinh viên & nhóm trẻ',
  },
  {
    icon: '🤝',
    title: 'Đội ngũ tận tâm',
    desc: 'Hỗ trợ 24/7, linh hoạt theo nhu cầu của bạn',
  },
]

export default function WhyUs() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why-card', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
            Vì sao chọn chúng tôi?
          </p>
          <h2 className="heading-lg text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Low-tech Travel <span className="text-accent">khác biệt</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="why-card bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{r.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-white/60 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
