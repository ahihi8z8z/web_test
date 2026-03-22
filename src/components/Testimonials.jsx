import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {
    name: 'Nguyễn Thị Mai Anh',
    city: 'Hà Nội',
    tour: 'Tour 2N1Đ',
    stars: 5,
    quote: 'Cảnh đẹp mê trang, homestay sạch sẽ, đồ ăn cực ngon! HDV bản địa vui tính, chụp ảnh có tâm lắm!',
    date: 'Đã đi 14/2025',
  },
  {
    name: 'Trần Quốc Bảo',
    city: 'TP. Hồ Chí Minh',
    tour: 'Tour 3N2Đ',
    stars: 5,
    quote: 'Trải nghiệm văn hóa cực kỳ chân thực, được tham gia sinh hoạt cùng người Lô Lô. Chuyến đi đáng giá từng đồng!',
    date: 'Đã đi T3/2025',
  },
  {
    name: 'Lê Thu Trang',
    city: 'Đà Nẵng',
    tour: 'Tour 2N1Đ',
    stars: 5,
    quote: 'Lần đầu ở trình tường — ấm cúng, sạch sẽ, view núi siêu đẹp. Ăn thắng cố chuẩn vị, nhé mãi!',
    date: 'Đã đi T2/2025',
  },
  {
    name: 'Phạm Gia Hưng',
    city: 'Cần Thơ',
    tour: 'Tour 3N2Đ',
    stars: 5,
    quote: 'Trekking nhẹ nhàng cảnh thi đình! Mã Pí Lèng hùng vĩ, Lô Lô Chải bình yên — rất tuyệt vời!',
    date: 'Đã đi T3/2025',
  },
  {
    name: 'Hoàng Yến & Minh Đức',
    city: 'Hải Phòng',
    tour: 'Tour 3N2Đ',
    stars: 5,
    quote: 'Được mặc đồ truyền thống, học làm bánh, đặt vải cùng người bản địa. Trải nghiệm hiếm có và rất ý nghĩa!',
    date: 'Đi cùng hội nhiếp ảnh',
  },
  {
    name: 'Đỗ Văn Nam',
    city: 'Hà Nội',
    tour: 'Tour 2N1Đ',
    stars: 5,
    quote: 'Lịch trình hợp lý, không quá gấp, HDV nhiệt tình, hỗ trợ chụp ảnh đẹp miễn phí. 10 điểm!',
    date: 'Đã đi T4/2025',
  },
  {
    name: 'Nguyễn Thị Hạnh',
    city: 'TP. Hồ Chí Minh',
    tour: 'Tour 2N1Đ',
    stars: 4,
    quote: 'Gia đình mình có con nhỏ vẫn đi thoải mái. Không khí trong lành, người dân thân thiện.',
    date: 'Gia đình 4 người · T2/2025',
  },
  {
    name: 'Vũ Phương Linh',
    city: 'Hà Nội',
    tour: 'Tour 3N2Đ',
    stars: 5,
    quote: 'Check-in cháy máy ở Lô Lô Chải! Mỗi góc đều đẹp như phim. Cảm ơn Low-tech Travel vì chuyến đi tuyệt vời!',
    date: 'Đã đi T3/2025',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.review-card',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="reviews" ref={sectionRef} className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
            Đánh giá khách hàng
          </p>
          <h2 className="heading-lg text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
            Khách hàng nói gì về <span className="text-accent">Low-tech?</span>
          </h2>
          <p className="text-dark/60 mt-4">
            Những chia sẻ chân thực từ khách hàng đã trải nghiệm cùng Low-tech Travel
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="review-card bg-white rounded-2xl p-5 shadow-sm border border-primary/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <Stars count={r.stars} />
              <p className="text-dark/70 text-sm leading-relaxed mt-3 mb-4 italic">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="border-t border-primary/5 pt-3">
                <p className="font-semibold text-primary text-sm">{r.name}</p>
                <p className="text-dark/40 text-xs mt-0.5">{r.city} · {r.tour}</p>
                <p className="text-accent text-xs mt-1">{r.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-primary/10">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-primary text-lg">4.9/5</span>
            <span className="text-dark/50 text-sm">(Hơn 500+ khách hàng hài lòng)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
