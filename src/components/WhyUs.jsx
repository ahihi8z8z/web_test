import useInView from '../hooks/useInView'

const reasons = [
  {
    icon: '\u{1F5FA}\uFE0F',
    title: 'Lịch trình rõ ràng',
    desc: 'Không phát sinh chi phí ẩn, minh bạch từ A đến Z',
  },
  {
    icon: '\u{1F3E1}',
    title: 'Trải nghiệm thật',
    desc: 'Không "du lịch công nghiệp", kết nối sâu với văn hóa',
  },
  {
    icon: '\u{1F4B0}',
    title: 'Giá hợp lý',
    desc: 'Tối ưu chi phí cho sinh viên & nhóm trẻ',
  },
  {
    icon: '\u{1F91D}',
    title: 'Đội ngũ tận tâm',
    desc: 'Hỗ trợ 24/7, linh hoạt theo nhu cầu của bạn',
  },
]

export default function WhyUs() {
  const [ref, visible] = useInView(0.1)

  return (
    <section ref={ref} className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-accent/40 transition-all duration-700 hover:-translate-y-1 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
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
