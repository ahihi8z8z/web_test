import { useState } from 'react'
import useInView from '../hooks/useInView'

const reviews = [
  {
    name: 'Trần Mai Anh',
    city: 'Hà Nội',
    date: '12/10/2023',
    stars: 5,
    gender: 'female',
    quote: 'Một chuyến đi thực sự \'chữa lành\' để trốn deadline. Lô Lô Chải yên bình đến lạ. Mình cực mê việc ngồi nhâm nhi cafe Cực Bắc, ngắm nhìn những nếp nhà trình tường lợp ngói âm dương. Hướng dẫn viên rất nhiệt tình và chụp ảnh siêu có tâm!',
    helpful: 45,
  },
  {
    name: 'Hoàng Hải',
    city: 'TP. HCM',
    date: '28/09/2023',
    stars: 5,
    gender: 'male',
    quote: 'Lần đầu bay từ Nam ra Bắc để đi Hà Giang, ban đầu mình hơi ngại đường xa nhưng dịch vụ tour rất chu đáo khiến mình hoàn toàn an tâm. Lẩu gà đen và rượu ngô ở bản quá tuyệt vời. Bà con người Lô Lô cực kỳ hiếu khách.',
    helpful: 32,
  },
  {
    name: 'Phạm Văn Kiên',
    city: 'Hải Phòng',
    date: '15/09/2023',
    stars: 4,
    gender: 'male',
    quote: 'Cảnh sắc thiên nhiên thiêng liêng khi đứng dưới Cột cờ Lũng Cú làm tôi rất xúc động. Xe di chuyển êm ái, tài xế rành đường đèo nên an toàn. Mình trừ 1 sao vì hôm mình đi thời tiết sương mù dày đặc không ngắm được trọn vẹn cảnh quang, nhưng dịch vụ của công ty thì rất tốt.',
    helpful: 89,
  },
  {
    name: 'Lê Thu Thảo',
    city: 'Đà Nẵng',
    date: '02/09/2023',
    stars: 5,
    gender: 'female',
    quote: 'Vợ chồng mình đã có một kỳ nghỉ kỷ niệm tuyệt vời tại đây. Homestay sạch sẽ, view nhìn ra núi Rồng cực kỳ hùng vĩ. Buổi tối mặc trang phục truyền thống đốt lửa trại là kỷ niệm mình không bao giờ quên.',
    helpful: 15,
  },
  {
    name: 'Nguyễn Ngọc Bích',
    city: 'Cần Thơ',
    date: '20/08/2023',
    stars: 5,
    gender: 'female',
    quote: 'Ở độ tuổi của mình, đi miền núi sợ nhất là mệt mỏi, nhưng lịch trình tour được sắp xếp rất hợp lý, vừa đủ thời gian nghỉ ngơi vừa thăm thú được nhiều nơi. Cảm ơn đội ngũ đã chăm sóc đoàn rất tận tình.',
    helpful: 21,
  },
]

const ratingBars = [
  { label: '5 sao', pct: 90 },
  { label: '4 sao', pct: 8 },
  { label: '3 sao', pct: 2 },
  { label: '2 sao', pct: 0 },
  { label: '1 sao', pct: 0 },
]

function Stars({ count, size = 'w-4 h-4' }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`${size} ${i < count ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function AvatarIcon({ gender, name }) {
  const initials = name.split(' ').slice(-1)[0][0]
  const bg = gender === 'female' ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-600'
  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${bg}`}>
      {initials}
    </div>
  )
}

export default function Testimonials() {
  const [ref, visible] = useInView(0.05)
  const [filter, setFilter] = useState('newest')
  const [helpedIds, setHelpedIds] = useState(new Set())

  const sorted = [...reviews].sort((a, b) => {
    if (filter === 'helpful') return b.helpful - a.helpful
    return 0 // newest = default order
  })

  const toggleHelpful = (i) => {
    setHelpedIds((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <section id="reviews" ref={ref} className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
            Đánh giá khách hàng
          </p>
          <h2 className="heading-lg text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
            Khách hàng nói gì về <span className="text-accent">Low-tech?</span>
          </h2>
        </div>

        <div className={`grid lg:grid-cols-[30%_1fr] gap-8 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* LEFT: Rating Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-primary/5 h-fit lg:sticky lg:top-24">
            <div className="text-center mb-5">
              <p className="text-6xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>4.9</p>
              <div className="flex justify-center mt-2">
                <Stars count={5} size="w-6 h-6" />
              </div>
              <p className="text-dark/40 text-sm mt-2">Dựa trên 128 lượt đánh giá</p>
            </div>

            <div className="space-y-2.5">
              {ratingBars.map((bar, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="text-dark/50 w-12 text-right flex-shrink-0">{bar.label}</span>
                  <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all duration-1000"
                      style={{ width: visible ? `${bar.pct}%` : '0%' }}
                    />
                  </div>
                  <span className="text-dark/40 w-10 text-xs">{bar.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Review Feed */}
          <div>
            {/* Filter bar */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {[
                { key: 'newest', label: 'Mới nhất' },
                { key: 'helpful', label: 'Hữu ích nhất' },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    filter === f.key
                      ? 'bg-primary text-white'
                      : 'bg-white text-dark/60 border border-primary/10 hover:border-primary/30'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* AI Summary */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-xl p-4 mb-5">
              <p className="text-sm text-dark/70">
                <span className="font-semibold text-primary">AI Tóm tắt:</span>{' '}
                Hầu hết khách hàng khen ngợi không gian tĩnh lặng, ẩm thực bản địa và trải nghiệm nhà trình tường Lô Lô Chải. Một vài lưu ý nhỏ về thời tiết sương mù.
              </p>
            </div>

            {/* Review cards */}
            <div className="space-y-4">
              {sorted.map((r, i) => (
                <div
                  key={`${r.name}-${filter}`}
                  className={`bg-white rounded-xl p-5 shadow-sm border border-primary/5 transition-all duration-500 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: visible ? `${(i + 2) * 100}ms` : '0ms' }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <AvatarIcon gender={r.gender} name={r.name} />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-primary text-sm">{r.name}</span>
                          <span className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Đã trải nghiệm
                          </span>
                        </div>
                        <p className="text-dark/40 text-xs">{r.city}</p>
                      </div>
                    </div>
                  </div>

                  {/* Sub-header */}
                  <div className="flex items-center gap-3 mb-3">
                    <Stars count={r.stars} />
                    <span className="text-dark/30 text-xs">{r.date}</span>
                  </div>

                  {/* Body */}
                  <p className="text-dark/70 text-sm leading-relaxed mb-4">
                    {r.quote}
                  </p>

                  {/* Footer */}
                  <div className="border-t border-primary/5 pt-3">
                    <button
                      onClick={() => toggleHelpful(i)}
                      className={`inline-flex items-center gap-2 text-xs transition-colors cursor-pointer ${
                        helpedIds.has(i) ? 'text-primary font-semibold' : 'text-dark/40 hover:text-dark/60'
                      }`}
                    >
                      <svg className="w-4 h-4" fill={helpedIds.has(i) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                      </svg>
                      {r.helpful + (helpedIds.has(i) ? 1 : 0)} người thấy hữu ích
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
