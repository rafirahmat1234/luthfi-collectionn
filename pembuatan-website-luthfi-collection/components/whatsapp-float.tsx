import { MessageCircle } from 'lucide-react'
import { WHATSAPP_DISPLAY, defaultGreeting, whatsappLink } from '@/lib/store'

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink(defaultGreeting)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat WhatsApp ${WHATSAPP_DISPLAY}`}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 font-medium text-white shadow-lg shadow-black/15 transition-transform hover:scale-105 sm:right-6"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="text-sm">Chat Kami</span>
    </a>
  )
}
