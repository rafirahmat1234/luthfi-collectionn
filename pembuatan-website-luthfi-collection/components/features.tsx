import { BadgeCheck, Feather, Truck, Wallet } from 'lucide-react'

const features = [
  { icon: Feather, title: 'Bahan Premium', text: 'Adem, lembut, dan nyaman dipakai seharian.' },
  { icon: BadgeCheck, title: 'Kualitas Terjamin', text: 'Setiap hijab dicek sebelum dikirim.' },
  { icon: Wallet, title: 'Harga Bersahabat', text: 'Kualitas butik dengan harga terjangkau.' },
  { icon: Truck, title: 'Kirim Seluruh Indonesia', text: 'Pengiriman cepat dan aman ke seluruh kota.' },
]

export function Features() {
  return (
    <section id="keunggulan" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-3 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Kenapa Kami</p>
          <h2 className="font-serif text-3xl font-semibold text-balance text-foreground sm:text-4xl">
            Hijab yang membuatmu percaya diri
          </h2>
        </div>
        <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex flex-col gap-3 rounded-2xl bg-secondary p-5 sm:p-6">
              <span className="flex size-11 items-center justify-center rounded-full bg-background text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
