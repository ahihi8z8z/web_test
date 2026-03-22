import { img } from '../utils'

export default function Footer() {
  return (
    <footer className="bg-dark text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={img('/images/logo/logo.png')} alt="Low-tech Travel" className="w-10 h-10 rounded-full object-cover" />
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                Low-tech Travel
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Công ty TNHH Du Lịch & Trải nghiệm Low-tech Travel.
              Trải nghiệm chậm, sống sâu.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Zalo" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 48 48"><path d="M12.5 6C8.91 6 6 8.91 6 12.5v23C6 39.09 8.91 42 12.5 42h23c3.59 0 6.5-2.91 6.5-6.5v-23C42 8.91 39.09 6 35.5 6h-23zm.03 7h22.94c.2 0 .28.05.28.28v8.6c0 .17-.06.3-.2.45l-8.18 9.87h8.1c.2 0 .28.1.28.28v3.24c0 .17-.08.28-.28.28H12.53c-.17 0-.28-.06-.28-.28v-8.57c0-.2.06-.35.2-.48l8.18-9.9h-8.1c-.17 0-.28-.08-.28-.28V13.28c0-.2.1-.28.28-.28z"/></svg>
              </a>
              <a href="#" aria-label="TikTok" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
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
