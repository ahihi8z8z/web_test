export default function Footer() {
  return (
    <footer className="bg-dark text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo/logo.png" alt="Low-tech Travel" className="w-10 h-10 rounded-full object-cover" />
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                Low-tech Travel
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Công ty TNHH Du Lịch & Trải nghiệm Low-tech Travel.
              Trải nghiệm chậm, sống sâu.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-accent transition-colors">Trang chủ</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">Về chúng tôi</a></li>
              <li><a href="#tours" className="hover:text-accent transition-colors">Tour du lịch</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Khám phá</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Chính sách</h4>
            <ul className="space-y-2 text-sm">
              <li>Đặt cọc 50% khi đăng ký tour</li>
              <li>Thanh toán 100% trước khởi hành 2 ngày</li>
              <li>Hủy trước 7 ngày: hoàn 100%</li>
              <li>Hỗ trợ chuyển khoản & ví điện tử</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; 2025 Low-tech Travel. All rights reserved.</p>
          <p>
            336 Nguyễn Trãi, Thanh Xuân, Hà Nội |{' '}
            <a href="mailto:lowtechtravel@gmail.com" className="text-accent hover:underline">
              lowtechtravel@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
