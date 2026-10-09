const steps = [
  { title: 'Pilih Produk', text: 'Lihat katalog dan pilih model serta warna hijab favoritmu.' },
  { title: 'Chat WhatsApp', text: 'Tekan tombol "Pesan", pesan otomatis terisi detail produk.' },
  { title: 'Transfer & Konfirmasi', text: 'Admin kirim total harga + ongkir, lalu lakukan pembayaran.' },
  { title: 'Paket Dikirim', text: 'Pesanan dikemas rapi dan dikirim dengan nomor resi.' },
]

export function HowToOrder() {
  return (
    <section id="cara-pesan" className="scroll-mt-16 bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-3 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/70">Mudah & Cepat</p>
          <h2 className="font-serif text-3xl font-semibold text-balance sm:text-4xl">Cara Pemesanan</h2>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-4 rounded-2xl border border-primary-foreground/15 p-5 lg:flex-col">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground font-serif text-lg font-semibold text-primary">
                {i + 1}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/75">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
