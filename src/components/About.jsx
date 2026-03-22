import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { img } from '../utils'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-img', {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
      gsap.from('.about-text', {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
        </svg>
      ),
      title: 'Trải nghiệm chân thực',
      desc: 'Không thương mại hóa, giữ nguyên bản sắc văn hóa',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      title: 'Lịch trình tinh gọn',
      desc: 'Tối ưu thời gian, trải nghiệm trọn vẹn',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
      ),
      title: 'Kết nối bản địa',
      desc: 'Trực tiếp giao lưu cùng người dân địa phương',
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="about-img relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={img('/images/culture/culture2.jpg')}
                alt="Con người Lô Lô Chải"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>5+</p>
              <p className="text-sm mt-1">Năm kinh nghiệm</p>
            </div>
          </div>

          {/* Text side */}
          <div className="about-text">
            <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
              Về chúng tôi
            </p>
            <h2 className="heading-lg text-primary mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Chọn Low-tech,
              <br />
              bạn sẽ thực sự <span className="text-accent">sống</span> trong Lô Lô Chải
            </h2>
            <p className="text-dark/70 leading-relaxed mb-8">
              Low-tech Travel là đơn vị du lịch chuyên khai thác và quảng bá trải nghiệm
              văn hóa bản địa tại Lô Lô Chải – một trong những điểm đến đặc sắc vùng cao
              Hà Giang. Sứ mệnh của chúng tôi là mang đến cho du khách không chỉ là chuyến đi,
              mà là trải nghiệm sống cùng văn hóa.
            </p>

            <div className="space-y-6">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-lg">{v.title}</h3>
                    <p className="text-dark/60 text-sm mt-1">{v.desc}</p>
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
