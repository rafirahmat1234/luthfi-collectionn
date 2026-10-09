'use client'

import { useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { STORE_NAME, defaultGreeting, whatsappLink } from '@/lib/store'

const navItems = [
  { href: '#produk', label: 'Produk' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#cara-pesan', label: 'Cara Pesan' },
  { href: '#kontak', label: 'Kontak' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#beranda" className="flex flex-col leading-none" aria-label={`${STORE_NAME} beranda`}>
          <span className="font-serif text-xl font-semibold tracking-tight text-primary sm:text-2xl">Luthfi</span>
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Collection
          </span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(defaultGreeting)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Chat Admin
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            className="inline-flex size-11 items-center justify-center rounded-full text-foreground hover:bg-secondary md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Navigasi seluler" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-2">
              <a
                href={whatsappLink(defaultGreeting)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-base font-medium text-primary-foreground"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Chat Admin via WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
