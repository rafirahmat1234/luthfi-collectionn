import { STORE_NAME, WHATSAPP_DISPLAY, defaultGreeting, whatsappLink } from '@/lib/store'

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10 pb-28 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-serif text-lg font-semibold text-primary">{STORE_NAME}</p>
          <p className="text-sm text-muted-foreground">Hijab nyaman untuk muslimah Indonesia.</p>
        </div>
        <div className="flex flex-col items-center gap-1 md:items-end">
          <a
            href={whatsappLink(defaultGreeting)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            WhatsApp: {WHATSAPP_DISPLAY}
          </a>
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} ${STORE_NAME}. Semua hak dilindungi.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
