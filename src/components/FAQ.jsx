import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    q: 'Đường đi từ Hà Nội lên Lô Lô Chải có dốc không?',
    a: 'Đường từ Hà Nội lên TP. Hà Giang rất đẹp. Đoạn từ TP lên Lô Lô Chải qua dốc Bắc Sum, Thẩm Mã có nhiều khúc cua tay áo. Nếu tự lái, hãy kiểm tra phanh kỹ. Hoặc sử dụng dịch vụ tour có tài xế bản địa để vừa an toàn, vừa ngắm cảnh trọn vẹn.',
  },
  {
    q: 'Thời điểm đẹp nhất để ghé thăm?',
    a: 'Từ tháng 10 đến tháng 2 năm sau – mùa hoa Tam giác mạch, hoa Đào, hoa Mận. Không khí bản làng ấm cúng nhất với các lễ hội truyền thống.',
  },
  {
    q: 'Trẻ em và người cao tuổi có phù hợp không?',
    a: 'Hoàn toàn phù hợp. Bản Lô Lô Chải có địa hình khá bằng phẳng, không gian thoáng đãng. Chỉ cần lưu ý chọn phương tiện ô tô chất lượng cao để đảm bảo thoải mái.',
  },
  {
    q: 'Homestay có đầy đủ tiện nghi không?',
    a: 'Có! Dù giữ nguyên kiến trúc nhà trình tường cổ kính, nhưng bên trong đều có bình nóng lạnh, wifi ổn định và chăn đệm sạch sẽ.',
  },
  {
    q: 'Món ăn đặc sản phải thử?',
    a: 'Mèn mén, thắng cố, lợn cắp nách và cháo ấu tẩu – cực kỳ tốt cho sức khỏe sau một ngày di chuyển.',
  },
  {
    q: 'Chính sách hoàn hủy tour?',
    a: 'Hủy trước 7 ngày: hoàn 100%. Hủy trước 3-6 ngày: hoàn 50%. Hủy dưới 3 ngày: không hoàn phí. Trường hợp bất khả kháng: hỗ trợ đổi lịch hoặc bảo lưu.',
  },
  {
    q: 'Sóng điện thoại mạng nào ổn định nhất?',
    a: 'Viettel cung cấp sóng 4G ổn định nhất. Vinaphone và Mobifone vẫn có sóng nhưng yếu hơn tại một số điểm hẻo lánh.',
  },
  {
    q: 'Cần mang theo nhiều tiền mặt không?',
    a: 'Phần lớn homestay đều hỗ trợ chuyển khoản/quét QR. Tuy nhiên nên mang thêm tiền mặt để mua sắm tại các gian hàng nhỏ.',
  },
]

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border border-primary/10 rounded-xl overflow-hidden transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-primary/5 transition-colors duration-200"
      >
        <span className="font-semibold text-primary pr-4">{faq.q}</span>
        <svg
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="px-5 text-dark/70 leading-relaxed">{faq.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="faq" ref={sectionRef} className="section-padding bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
            Câu hỏi thường gặp
          </p>
          <h2 className="heading-lg text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
            Mọi thắc mắc <span className="text-accent">đều có câu trả lời</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
