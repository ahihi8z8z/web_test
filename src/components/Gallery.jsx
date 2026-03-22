import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { img } from '../utils'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    title: 'Homestay',
    desc: 'Nhà trình tường truyền thống, ấm cúng giữa núi rừng',
    images: [img('/images/homestay/homestay1.jpg'), img('/images/homestay/homestay2.jpg'), img('/images/homestay/homestay3.jpg')],
  },
  {
    title: 'Trang phục',
    desc: 'Sắc màu rực rỡ của người Lô Lô Đen',
    images: [img('/images/costume/costume1.jpg'), img('/images/costume/costume2.jpg'), img('/images/costume/costume3.jpg')],
  },
  {
    title: 'Ẩm thực',
    desc: 'Hương vị vùng cao, nguyên liệu tự nhiên',
    images: [img('/images/food/food1.jpg'), img('/images/food/food2.jpg'), img('/images/food/food3.jpg')],
  },
  {
    title: 'Điểm check-in',
    desc: 'Cảnh quan thiên nhiên hùng vĩ, giàu bản sắc',
    images: [img('/images/checkin/checkin1.webp'), img('/images/checkin/checkin2.webp'), img('/images/checkin/checkin3.jpg')],
  },
  {
    title: 'Văn hóa & Con người',
    desc: 'Đời sống giản dị, truyền thống đáng trân quý',
    images: [img('/images/culture/culture1.jpg'), img('/images/culture/culture4.jpg'), img('/images/culture/culture5.jpg')],
  },
]

export default function Gallery() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-item', {
        y: 60,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="gallery" ref={sectionRef} className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
            Khám phá Lô Lô Chải
          </p>
          <h2 className="heading-lg text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
            Những trải nghiệm <span className="text-accent">đáng nhớ</span>
          </h2>
        </div>

        <div className="space-y-16">
          {categories.map((cat, ci) => (
            <div key={ci} className="gallery-item">
              <div className="mb-6">
                <h3 className="heading-md text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                  {cat.title}
                </h3>
                <p className="text-dark/60 mt-1">{cat.desc}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cat.images.map((img, ii) => (
                  <div
                    key={ii}
                    className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
                  >
                    <img
                      src={img}
                      alt={`${cat.title} ${ii + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
