import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProductCatalog } from '@/components/product-catalog'
import { Features } from '@/components/features'
import { HowToOrder } from '@/components/how-to-order'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProductCatalog />
        <Features />
        <HowToOrder />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  )
}
