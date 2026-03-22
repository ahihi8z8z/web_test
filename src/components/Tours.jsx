import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { img } from '../utils'

gsap.registerPlugin(ScrollTrigger)

const tours = [
  {
    name: 'Khám phá Lô Lô Chải',
    duration: '2 ngày 1 đêm',
    price: '1.490.000',
    image: img('/images/checkin/checkin1.webp'),
    highlight: 'Check-in Cột cờ Lũng Cú, trải nghiệm homestay, ẩm thực địa phương',
    fit: 'Người bận rộn, đi ngắn ngày',
    tag: 'Phổ biến nhất',
  },
  {
    name: 'Sống cùng bản địa',
    duration: '3 ngày 2 đêm',
    price: '2.390.000',
    image: img('/images/culture/culture1.jpg'),
    highlight: 'Tham gia sinh hoạt cùng người Lô Lô, mặc trang phục truyền thống, trekking nhẹ',
    fit: 'Người thích trải nghiệm văn hóa',
    tag: 'Trải nghiệm sâu',
  },
  {
    name: 'Hành trình Đông Bắc trọn vẹn',
    duration: '3 ngày 2 đêm',
    price: '2.790.000',
    image: img('/images/hero/hero3.jpg'),
    highlight: 'Lô Lô Chải – Đồng Văn – Mã Pí Lèng, ngắm cảnh, chụp ảnh',
    fit: 'Người thích khám phá & check-in',
    tag: 'Trọn vẹn',
  },
]

export default function Tours() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tour-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="tours" ref={sectionRef} className="section-padding bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
            Gói tour trải nghiệm
          </p>
          <h2 className="heading-lg" style={{ fontFamily: 'var(--font-heading)' }}>
            Chọn hành trình <span className="text-accent">của bạn</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour, i) => (
            <div key={i} className="tour-card group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {tour.tag}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-white/50 text-sm mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  {tour.duration}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {tour.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {tour.highlight}
                </p>
                <p className="text-white/40 text-xs mb-6">
                  Phù hợp: {tour.fit}
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-accent text-2xl font-bold">{tour.price}đ</p>
                    <p className="text-white/40 text-xs">/người</p>
                  </div>
                  <a href="#contact" className="bg-accent/20 text-accent font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                    Đặt ngay
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Included / Not included */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-accent" style={{ fontFamily: 'var(--font-heading)' }}>
              Giá tour bao gồm
            </h3>
            <ul className="space-y-3 text-white/70 text-sm">
              {[
                'Xe đưa đón (tùy điểm xuất phát)',
                'Lưu trú homestay (tiêu chuẩn sạch sẽ, view đẹp)',
                '2–5 bữa ăn đặc sản địa phương',
                'Vé tham quan các điểm trong lịch trình',
                'Hướng dẫn viên bản địa',
                'Bảo hiểm du lịch cơ bản',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-white/80" style={{ fontFamily: 'var(--font-heading)' }}>
              Không bao gồm
            </h3>
            <ul className="space-y-3 text-white/70 text-sm">
              {[
                'Chi phí cá nhân (mua sắm, đồ uống riêng)',
                'Chi phí di chuyển ngoài lịch trình',
                'Tiền tip cho hướng dẫn viên/tài xế',
                'Thuế VAT (nếu xuất hóa đơn)',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
