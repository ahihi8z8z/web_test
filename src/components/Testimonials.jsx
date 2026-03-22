import useInView from '../hooks/useInView'

const reviews = [
  {
    name: 'Nguyễn Thị Mai Anh',
    city: 'Hà Nội',
    tour: 'Tour 2N1Đ',
    stars: 5,
    gender: 'female',
    quote: 'Cảnh đẹp mê trang, homestay sạch sẽ, đồ ăn cực ngon! HDV bản địa vui tính, chụp ảnh có tâm lắm!',
    date: 'Đã đi T4/2025',
  },
  {
    name: 'Trần Quốc Bảo',
    city: 'TP. Hồ Chí Minh',
    tour: 'Tour 3N2Đ',
    stars: 5,
    gender: 'male',
    quote: 'Trải nghiệm văn hóa cực kỳ chân thực, được tham gia sinh hoạt cùng người Lô Lô. Chuyến đi đáng giá từng đồng!',
    date: 'Đã đi T3/2025',
  },
  {
    name: 'Lê Thu Trang',
    city: 'Đà Nẵng',
    tour: 'Tour 2N1Đ',
    stars: 5,
    gender: 'female',
    quote: 'Lần đầu ở trình tường — ấm cúng, sạch sẽ, view núi siêu đẹp. Ăn thắng cố chuẩn vị, nhớ mãi!',
    date: 'Đã đi T2/2025',
  },
  {
    name: 'Phạm Gia Hưng',
    city: 'Cần Thơ',
    tour: 'Tour 3N2Đ',
    stars: 5,
    gender: 'male',
    quote: 'Trekking nhẹ nhàng cảnh thi đình! Mã Pí Lèng hùng vĩ, Lô Lô Chải bình yên — rất tuyệt vời!',
    date: 'Đã đi T3/2025',
  },
  {
    name: 'Hoàng Yến & Minh Đức',
    city: 'Hải Phòng',
    tour: 'Tour 3N2Đ',
    stars: 5,
    gender: 'couple',
    quote: 'Được mặc đồ truyền thống, học làm bánh, đặt vải cùng người bản địa. Trải nghiệm hiếm có và rất ý nghĩa!',
    date: 'Đi cùng hội nhiếp ảnh',
  },
  {
    name: 'Đỗ Văn Nam',
    city: 'Hà Nội',
    tour: 'Tour 2N1Đ',
    stars: 5,
    gender: 'male',
    quote: 'Lịch trình hợp lý, không quá gấp, HDV nhiệt tình, hỗ trợ chụp ảnh đẹp miễn phí. 10 điểm!',
    date: 'Đã đi T4/2025',
  },
  {
    name: 'Nguyễn Thị Hạnh',
    city: 'TP. Hồ Chí Minh',
    tour: 'Tour 2N1Đ',
    stars: 4,
    gender: 'female',
    quote: 'Gia đình mình có con nhỏ vẫn đi thoải mái. Không khí trong lành, người dân thân thiện.',
    date: 'Gia đình 4 người · T2/2025',
  },
  {
    name: 'Vũ Phương Linh',
    city: 'Hà Nội',
    tour: 'Tour 3N2Đ',
    stars: 5,
    gender: 'female',
    quote: 'Check-in cháy máy ở Lô Lô Chải! Mỗi góc đều đẹp như phim. Cảm ơn Low-tech Travel vì chuyến đi tuyệt vời!',
    date: 'Đã đi T3/2025',
  },
]

function AvatarIcon({ gender }) {
  if (gender === 'female') {
    return (
      <svg className="w-full h-full" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="40" fill="#FDEBD0" />
        <circle cx="40" cy="32" r="14" fill="#D4A853" />
        <ellipse cx="40" cy="68" rx="22" ry="16" fill="#D4A853" />
        <circle cx="40" cy="32" r="12" fill="#FDEBD0" />
        <circle cx="35" cy="30" r="1.5" fill="#1a3c34" />
        <circle cx="45" cy="30" r="1.5" fill="#1a3c34" />
        <path d="M37 35 Q40 38 43 35" stroke="#1a3c34" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M24 26 Q30 14 40 16 Q50 14 56 26 Q52 18 40 20 Q28 18 24 26Z" fill="#2d1a0e" />
        <path d="M22 30 Q20 22 28 18" stroke="#2d1a0e" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M58 30 Q60 22 52 18" stroke="#2d1a0e" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    )
  }

  if (gender === 'couple') {
    return (
      <svg className="w-full h-full" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="40" fill="#E8F5E9" />
        <circle cx="30" cy="30" r="9" fill="#FDEBD0" />
        <circle cx="30" cy="30" r="7" fill="#FDEBD0" />
        <circle cx="27" cy="29" r="1" fill="#1a3c34" />
        <circle cx="33" cy="29" r="1" fill="#1a3c34" />
        <path d="M28 33 Q30 35 32 33" stroke="#1a3c34" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M21 25 Q25 18 30 20 Q35 18 39 25 Q36 20 30 22 Q24 20 21 25Z" fill="#2d1a0e" />
        <ellipse cx="30" cy="58" rx="14" ry="12" fill="#D4A853" />
        <circle cx="50" cy="30" r="9" fill="#FDEBD0" />
        <circle cx="50" cy="30" r="7" fill="#FDEBD0" />
        <circle cx="47" cy="29" r="1" fill="#1a3c34" />
        <circle cx="53" cy="29" r="1" fill="#1a3c34" />
        <path d="M48 33 Q50 35 52 33" stroke="#1a3c34" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <rect x="44" y="22" width="12" height="6" rx="3" fill="#2d1a0e" />
        <ellipse cx="50" cy="58" rx="14" ry="12" fill="#2d5a4e" />
      </svg>
    )
  }

  // male (default)
  return (
    <svg className="w-full h-full" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="40" fill="#E3F2FD" />
      <circle cx="40" cy="32" r="14" fill="#2d5a4e" />
      <ellipse cx="40" cy="68" rx="22" ry="16" fill="#2d5a4e" />
      <circle cx="40" cy="32" r="12" fill="#FDEBD0" />
      <circle cx="35" cy="30" r="1.5" fill="#1a3c34" />
      <circle cx="45" cy="30" r="1.5" fill="#1a3c34" />
      <path d="M37 35 Q40 38 43 35" stroke="#1a3c34" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <rect x="28" y="20" width="24" height="8" rx="4" fill="#2d1a0e" />
    </svg>
  )
}

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
  const [ref, visible] = useInView(0.1)

  return (
    <section id="reviews" ref={ref} className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
              className={`bg-white rounded-2xl p-5 shadow-sm border border-primary/5 hover:shadow-md hover:-translate-y-1 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/10">
                  <AvatarIcon gender={r.gender} />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">{r.name}</p>
                  <p className="text-dark/40 text-xs">{r.city}</p>
                </div>
              </div>
              <Stars count={r.stars} />
              <p className="text-dark/70 text-sm leading-relaxed mt-3 mb-4 italic">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="border-t border-primary/5 pt-3 flex items-center justify-between">
                <span className="text-primary/50 text-xs font-medium">{r.tour}</span>
                <span className="text-accent text-xs">{r.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className={`mt-10 text-center transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
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
