import { img } from '../utils'

export default function RoomBanner() {
  return (
    <section className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img
            src={img('/images/popup.png')}
            alt="Nếp nhà Lô Lô Chải"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end p-6 sm:p-10 text-center">
            <h3
              className="text-2xl sm:text-3xl font-bold text-white mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Dựng nếp nhà Lô Lô cho riêng bạn
            </h3>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mb-5">
              Tự mình khám phá không gian văn hóa truyền thống của người Lô Lô
            </p>
            <a
              href="https://phonglolochai.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-accent-light text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Khám phá ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
