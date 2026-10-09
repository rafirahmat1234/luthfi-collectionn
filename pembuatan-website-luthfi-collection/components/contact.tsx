'use client'

import type { FormEvent } from 'react'
import { Clock, MapPin, MessageCircle, Send } from 'lucide-react'
import { STORE_NAME, WHATSAPP_DISPLAY, defaultGreeting, products, whatsappLink } from '@/lib/store'

const inputClass =
  'w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'

export function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (key: string) => String(data.get(key) ?? '').trim()
    const message = `Assalamu'alaikum ${STORE_NAME}, saya mau order:\n\nNama: ${get('nama')}\nProduk: ${get('produk')}\nWarna: ${get('warna') || '-'}\nJumlah: ${get('jumlah')}\nAlamat: ${get('alamat')}`
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="kontak" className="scroll-mt-16 bg-card py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Hubungi Kami</p>
            <h2 className="font-serif text-3xl font-semibold text-balance text-foreground sm:text-4xl">
              Siap melayani pesananmu
            </h2>
            <p className="text-muted-foreground">
              Ada pertanyaan soal bahan, warna, atau ingin order grosir/reseller? Langsung chat admin kami.
            </p>
          </div>

          <a
            href={whatsappLink(defaultGreeting)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl bg-whatsapp p-5 text-white transition-opacity hover:opacity-90"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/20">
              <MessageCircle className="size-6" aria-hidden="true" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm text-white/85">WhatsApp Admin</span>
              <span className="text-xl font-semibold tracking-wide">{WHATSAPP_DISPLAY}</span>
            </span>
          </a>

          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-medium text-foreground">Jam Operasional</p>
                <p className="text-sm text-muted-foreground">Senin – Sabtu, 08.00 – 21.00 WIB</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-medium text-foreground">Pengiriman</p>
                <p className="text-sm text-muted-foreground">Melayani pengiriman ke seluruh Indonesia</p>
              </div>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-3xl border border-border bg-background p-5 sm:p-8">
          <h3 className="font-serif text-xl font-semibold text-foreground">Form Order Cepat</h3>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="nama" className="text-sm font-medium text-foreground">Nama</label>
            <input id="nama" name="nama" required autoComplete="name" placeholder="Nama lengkap" className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="produk" className="text-sm font-medium text-foreground">Produk</label>
            <select id="produk" name="produk" required className={inputClass} defaultValue="">
              <option value="" disabled>Pilih produk</option>
              {products.map((p) => (
                <option key={p.id} value={p.name}>{p.name}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="warna" className="text-sm font-medium text-foreground">Warna</label>
              <input id="warna" name="warna" placeholder="Mis. Mocca" className={inputClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="jumlah" className="text-sm font-medium text-foreground">Jumlah</label>
              <input
                id="jumlah"
                name="jumlah"
                type="number"
                inputMode="numeric"
                min={1}
                max={100}
                defaultValue={1}
                required
                className={inputClass}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="alamat" className="text-sm font-medium text-foreground">Alamat Pengiriman</label>
            <textarea
              id="alamat"
              name="alamat"
              required
              rows={3}
              autoComplete="street-address"
              placeholder="Alamat lengkap, kecamatan, kota"
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Send className="size-4" aria-hidden="true" />
            Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
