import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#home', label: 'Trang chủ' },
    { href: '#about', label: 'Về chúng tôi' },
    { href: '#tours', label: 'Tour' },
    { href: '#gallery', label: 'Khám phá' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Liên hệ' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src="/images/logo/logo.png" alt="Low-tech Travel" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-white font-heading text-xl font-bold hidden sm:block"
                style={{ fontFamily: 'var(--font-heading)' }}>
            Low-tech Travel
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-accent text-sm font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-accent-light transition-all duration-300">
            Đặt tour ngay
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-white/80 hover:text-accent text-base font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="block text-center bg-accent text-white font-semibold px-5 py-3 rounded-full mt-4">
              Đặt tour ngay
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
