import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
        y: 60,
        opacity: 0,
        duration: 0.8,
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
    <section id="contact" ref={sectionRef} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto contact-content">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
            Liên hệ
          </p>
          <h2 className="heading-lg text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
            Sẵn sàng <span className="text-accent">khám phá?</span>
          </h2>
          <p className="text-dark/60 mt-4 max-w-xl mx-auto">
            Hãy liên hệ để nhận tư vấn miễn phí và báo giá chi tiết cho hành trình của bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Địa chỉ văn phòng</h3>
                <p className="text-dark/60 mt-1">336 Nguyễn Trãi, Thanh Xuân, Hà Nội</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Email</h3>
                <p className="text-dark/60 mt-1">lowtechtravel@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Mạng xã hội</h3>
                <div className="flex gap-3 mt-2">
                  <span className="inline-flex items-center gap-1.5 text-sm text-dark/60 bg-primary/5 px-3 py-1.5 rounded-full">
                    Facebook
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-dark/60 bg-primary/5 px-3 py-1.5 rounded-full">
                    Zalo
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-dark/60 bg-primary/5 px-3 py-1.5 rounded-full">
                    TikTok
                  </span>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a href="mailto:lowtechtravel@gmail.com" className="btn-primary justify-center">
                Nhận báo giá ngay
              </a>
              <a href="mailto:lowtechtravel@gmail.com" className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                Chat với tư vấn viên
              </a>
            </div>
          </div>

          {/* Map / Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-full min-h-[400px]">
            <img
              src="/images/hero/hero5.jpg"
              alt="Lô Lô Chải landscape"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                Lô Lô Chải, Lũng Cú, Đồng Văn, Hà Giang
              </p>
              <p className="text-sm text-white/70 mt-1">
                Dưới chân Cột cờ Lũng Cú – Điểm cực Bắc Tổ quốc
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
