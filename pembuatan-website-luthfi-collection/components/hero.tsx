import Image from 'next/image'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { WHATSAPP_DISPLAY, defaultGreeting, whatsappLink } from '@/lib/store'

export function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20">
        <div className="order-2 flex flex-col gap-6 md:order-1">
          <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            Koleksi Terbaru 2026
          </span>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Anggun dalam setiap <em className="text-primary">helai</em>
          </h1>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Luthfi Collection menghadirkan hijab berkualitas dengan bahan nyaman, warna lembut, dan harga
            bersahabat untuk menemani hari-harimu.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#produk"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Lihat Koleksi
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink(defaultGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-6 py-3.5 text-base font-medium text-primary transition-colors hover:bg-secondary"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              {WHATSAPP_DISPLAY}
            </a>
          </div>
          <dl className="mt-2 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="text-xs text-muted-foreground">Pelanggan</dt>
              <dd className="font-serif text-2xl font-semibold text-foreground">5rb+</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Pilihan Warna</dt>
              <dd className="font-serif text-2xl font-semibold text-foreground">80+</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Rating</dt>
              <dd className="font-serif text-2xl font-semibold text-foreground">4.9</dd>
            </div>
          </dl>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[17rem] overflow-hidden sm:max-w-sm rounded-t-full rounded-b-3xl bg-secondary md:max-w-none">
            <Image
              src="/images/hero.png"
              alt="Model mengenakan pashmina dusty rose dari Luthfi Collection"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
