import { useState, useRef, useEffect } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

const SYSTEM_PROMPT = `Bạn là "A Páo" — Đại sứ du lịch ảo của bản Lô Lô Chải, thuộc công ty Low-tech Travel.

Xưng hô: Mình/A Páo — Bạn/Anh/Chị. Tính cách: Chân thành, hiếu khách, nhiệt tình, am hiểu văn hóa bản địa. Trả lời ngắn gọn, thân thiện.

THÔNG TIN CÔNG TY:
- Tên: Công ty TNHH Du Lịch & Trải nghiệm Low-tech Travel
- Email: lowtechtravel@gmail.com
- Địa chỉ: 336 Nguyễn Trãi, Thanh Xuân, Hà Nội
- Fanpage: Low-tech Travel - Trải nghiệm chậm, sống sâu
- TikTok: @lowtechtravel

GÓI TOUR:
1. Khám phá Lô Lô Chải — 2N1Đ — 1.490.000đ/người — Check-in Cột cờ Lũng Cú, homestay, ẩm thực địa phương. Phù hợp người bận rộn.
2. Sống cùng bản địa — 3N2Đ — 2.390.000đ/người — Sinh hoạt cùng người Lô Lô, trang phục truyền thống, trekking nhẹ. Phù hợp người thích văn hóa.
3. Hành trình Đông Bắc trọn vẹn — 3N2Đ — 2.790.000đ/người — Lô Lô Chải – Đồng Văn – Mã Pí Lèng. Phù hợp người thích khám phá.

LỊCH TRÌNH MẪU (Tour 2N1Đ):
Ngày 1: Hà Nội – Hà Giang – Lô Lô Chải → Nhận phòng homestay → Tham quan bản → Ăn tối & giao lưu văn hóa
Ngày 2: Đón bình minh → Tham quan Cột cờ Lũng Cú → Trả phòng → Kết thúc

GIÁ BAO GỒM: Xe đưa đón, homestay, 2-5 bữa ăn, vé tham quan, HDV bản địa, bảo hiểm.
KHÔNG BAO GỒM: Chi phí cá nhân, di chuyển ngoài lịch trình, tip, VAT.

CHÍNH SÁCH:
- Hủy trước 7 ngày: hoàn 100%
- Hủy trước 3-6 ngày: hoàn 50%
- Hủy dưới 3 ngày: không hoàn
- Đặt cọc 50%, thanh toán 100% trước 2 ngày

KIẾN THỨC BẢN ĐỊA:
- Người Lô Lô Đen: dân tộc thiểu số ít người nhất VN, bảo tồn văn hóa rất cao
- Kiến trúc: nhà trình tường đất nện, mái ngói âm dương, hàng rào đá
- Văn hóa: trang phục thêu tay, tục "đi ăn trộm lấy may" đêm giao thừa
- Ẩm thực: thắng cố, mèn mén, cháo ấu tẩu, lợn cắp nách
- Thời tiết đẹp nhất: tháng 10 – tháng 2 (hoa tam giác mạch, đào, mận)
- Sóng tốt nhất: Viettel 4G
- Homestay: đầy đủ nóng lạnh, wifi, chăn đệm sạch
- Cột cờ Lũng Cú: vé 40.000đ/người
- Đồng Văn cách 45 phút (25km), Mèo Vạc thêm 1 tiếng qua Mã Pì Lèng
- Quà: vải thổ cẩm, thịt gác bếp, lạp xưởng, mật ong bạc hà

Nếu khách muốn đặt tour, hướng dẫn họ liên hệ email lowtechtravel@gmail.com hoặc gọi hotline.
Nếu không biết câu trả lời, nói rõ và gợi ý liên hệ tư vấn viên.`

let chatInstance = null

function getChat() {
  if (chatInstance) return chatInstance

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY
  if (!apiKey) return null

  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

  chatInstance = model.startChat({
    history: [
      { role: 'user', parts: [{ text: 'Hãy nhập vai theo system prompt sau và trả lời mọi câu hỏi theo đúng vai đó:\n\n' + SYSTEM_PROMPT }] },
      { role: 'model', parts: [{ text: 'Chào bạn! Mình là A Páo — đại sứ du lịch của bản Lô Lô Chải đây! Bạn muốn tìm hiểu gì về Lô Lô Chải hay các tour của Low-tech Travel nào? Mình sẵn sàng hỗ trợ bạn! 😊' }] },
    ],
  })

  return chatInstance
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Chào bạn! Mình là A Páo — đại sứ du lịch của bản Lô Lô Chải đây! Bạn muốn tìm hiểu gì về Lô Lô Chải hay các tour của Low-tech Travel nào?' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  // Listen for custom event from other buttons
  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-chat', handler)
    return () => window.removeEventListener('open-chat', handler)
  }, [])

  async function sendMessage(e) {
    e.preventDefault()
    const text = input.trim()
    if (!text || loading) return

    setInput('')
    setMessages((prev) => [...prev, { role: 'user', text }])
    setLoading(true)

    try {
      const chat = getChat()
      if (!chat) {
        setMessages((prev) => [...prev, { role: 'bot', text: 'Xin lỗi, hệ thống chat đang bảo trì. Vui lòng liên hệ email lowtechtravel@gmail.com để được hỗ trợ nhé!' }])
        setLoading(false)
        return
      }

      const result = await chat.sendMessage(text)
      const response = await result.response.text()
      setMessages((prev) => [...prev, { role: 'bot', text: response }])
    } catch {
      setMessages((prev) => [...prev, { role: 'bot', text: 'Xin lỗi, mình gặp trục trặc rồi. Bạn thử lại hoặc liên hệ email lowtechtravel@gmail.com nhé!' }])
    }

    setLoading(false)
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-primary/10 flex flex-col overflow-hidden"
          style={{ height: '500px', maxHeight: 'calc(100vh - 8rem)' }}>
          {/* Header */}
          <div className="bg-primary px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">
                AP
              </div>
              <div>
                <p className="text-white font-semibold text-sm">A Páo</p>
                <p className="text-white/60 text-xs">Đại sứ du lịch Lô Lô Chải</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white p-1" aria-label="Đóng">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-cream/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-br-md'
                      : 'bg-white text-dark border border-primary/10 rounded-bl-md shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-primary/10 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-3 border-t border-primary/10 bg-white flex gap-2 flex-shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập tin nhắn..."
              className="flex-1 px-4 py-2.5 bg-cream/50 rounded-full text-sm border border-primary/10 focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center hover:bg-accent-light transition-colors disabled:opacity-40 flex-shrink-0"
              aria-label="Gửi"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Toggle button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent text-white rounded-full shadow-lg hover:bg-accent-light hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Mở chat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
        </button>
      )}
    </>
  )
}
