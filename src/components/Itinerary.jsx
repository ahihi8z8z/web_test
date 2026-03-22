import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { img } from '../utils'

gsap.registerPlugin(ScrollTrigger)

const days = [
  {
    day: 'Ngày 1',
    title: 'Hà Nội → Hà Giang → Lô Lô Chải',
    items: [
      'Xuất phát từ Hà Nội',
      'Di chuyển đến Hà Giang',
      'Nhận phòng homestay tại Lô Lô Chải',
      'Tham quan bản làng',
      'Ăn tối & giao lưu văn hóa',
    ],
    image: img('/images/homestay/homestay1.jpg'),
  },
  {
    day: 'Ngày 2',
    title: 'Khám phá & Trở về',
    items: [
      'Đón bình minh trên bản',
      'Tham quan Cột cờ Lũng Cú',
      'Thưởng thức café Cực Bắc',
      'Trả phòng & kết thúc hành trình',
    ],
    image: img('/images/checkin/checkin1.webp'),
  },
]

export default function Itinerary() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.itin-card',
        { x: (i) => (i % 2 === 0 ? -80 : 80), opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.3,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
            Lịch trình mẫu
          </p>
          <h2 className="heading-lg text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
            Tour 2 ngày 1 đêm
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent/30 hidden md:block" />

          <div className="space-y-12">
            {days.map((d, i) => (
              <div
                key={i}
                className={`itin-card flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <img
                    src={d.image}
                    alt={d.title}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
                {/* Dot */}
                <div className="hidden md:flex flex-shrink-0 w-12 h-12 bg-accent rounded-full items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <span className="text-accent font-bold text-sm">{d.day}</span>
                  <h3 className="text-xl font-bold text-primary mt-1 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    {d.title}
                  </h3>
                  <ul className="space-y-3">
                    {d.items.map((item, j) => (
                      <li key={j} className="flex gap-3 items-start text-dark/70">
                        <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
