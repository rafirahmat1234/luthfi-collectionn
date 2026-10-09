import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Aisyah, Bandung', text: 'Pashmina cerutynya adem banget dan warnanya sesuai foto. Adminnya juga ramah!' },
  { name: 'Nurul, Surabaya', text: 'Bergo instannya praktis buat ngantor, pad antemnya bikin rapi seharian.' },
  { name: 'Fatimah, Medan', text: 'Pengiriman cepat, packing rapi. Sudah order ketiga kalinya di Luthfi Collection.' },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-3 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Testimoni</p>
          <h2 className="font-serif text-3xl font-semibold text-balance text-foreground sm:text-4xl">
            Kata mereka tentang kami
          </h2>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex gap-0.5 text-primary" aria-label="Rating 5 dari 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="flex-1 leading-relaxed text-foreground">{`\u201C${t.text}\u201D`}</blockquote>
                <figcaption className="text-sm font-medium text-muted-foreground">{t.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
