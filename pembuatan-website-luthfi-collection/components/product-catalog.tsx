'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { STORE_NAME, categories, formatRupiah, products, whatsappLink, type Product } from '@/lib/store'

function orderMessage(product: Product) {
  return `Assalamu'alaikum ${STORE_NAME}, saya mau pesan:\n\nProduk: ${product.name}\nHarga: ${formatRupiah(product.price)}\nWarna: \nJumlah: \n\nApakah masih tersedia?`
}

export function ProductCatalog() {
  const [active, setActive] = useState<(typeof categories)[number]>('Semua')
  const visible = active === 'Semua' ? products : products.filter((p) => p.category === active)

  return (
    <section id="produk" className="scroll-mt-16 bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-3 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Katalog</p>
          <h2 className="font-serif text-3xl font-semibold text-balance text-foreground sm:text-4xl">
            Koleksi Hijab Pilihan
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Pilih model favoritmu, lalu pesan langsung lewat WhatsApp. Cepat, mudah, dan dibalas ramah.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Filter kategori"
          className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:justify-center sm:px-0"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={cn(
                'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                active === cat
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-foreground hover:border-primary/40',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {visible.map((product) => (
            <li
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <Image
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute left-2 top-2 rounded-full bg-primary px-2.5 py-1 text-[0.7rem] font-medium text-primary-foreground sm:left-3 sm:top-3">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-3 sm:p-5">
                <p className="text-[0.7rem] font-medium uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="font-serif text-base font-semibold leading-snug text-foreground sm:text-lg">
                  {product.name}
                </h3>
                <p className="hidden text-sm leading-relaxed text-muted-foreground sm:block">{product.description}</p>
                <p className="text-xs text-muted-foreground">
                  <span className="sr-only">Warna tersedia: </span>
                  {product.colors.join(' \u00b7 ')}
                </p>
                <div className="mt-auto flex flex-col gap-3 pt-2">
                  <p className="text-lg font-semibold text-primary">{formatRupiah(product.price)}</p>
                  <a
                    href={whatsappLink(orderMessage(product))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-3 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    <span>
                      Pesan<span className="hidden sm:inline"> via WhatsApp</span>
                    </span>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
