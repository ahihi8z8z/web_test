import { useState, useEffect } from 'react'
import { img } from '../utils'

export default function Popup() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={() => setShow(false)}
    >
      <div
        className="relative mx-4 max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl animate-popup"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors"
          aria-label="Đóng"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <a href="https://phonglolochai.vercel.app" target="_blank" rel="noopener noreferrer">
          <img
            src={img('/images/popup.png')}
            alt="Khám phá căn phòng Lô Lô Chải"
            className="w-full object-cover"
          />
        </a>

        {/* Content */}
        <div className="p-5 text-center">
          <h3
            className="text-xl font-bold text-primary mb-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Khám phá căn phòng Lô Lô Chải
          </h3>
          <p className="text-dark/60 text-sm mb-4">
            Trải nghiệm không gian homestay truyền thống ngay trên trình duyệt
          </p>
          <a
            href="https://phonglolochai.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-light text-white font-semibold px-6 py-2.5 rounded-full transition-colors"
          >
            Khám phá ngay
          </a>
        </div>
      </div>

      <style>{`
        @keyframes popup-in {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-popup {
          animation: popup-in 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}
