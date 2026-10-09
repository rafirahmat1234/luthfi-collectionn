export const STORE_NAME = 'Luthfi Collection'
export const WHATSAPP_DISPLAY = '0896-5533-2775'
export const WHATSAPP_NUMBER = '6289655332775'

export type Category = 'Pashmina' | 'Segi Empat' | 'Instan' | 'Syar\u2019i' | 'Inner'

export type Product = {
  id: string
  name: string
  category: Category
  price: number
  image: string
  description: string
  colors: string[]
  badge?: string
}

export const categories: Array<'Semua' | Category> = [
  'Semua',
  'Pashmina',
  'Segi Empat',
  'Instan',
  'Syar\u2019i',
  'Inner',
]

export const products: Product[] = [
  {
    id: 'pashmina-ceruty',
    name: 'Pashmina Ceruty Babydoll',
    category: 'Pashmina',
    price: 45000,
    image: '/images/pashmina-ceruty.png',
    description: 'Bahan ceruty premium, jatuh, adem, dan mudah dibentuk.',
    colors: ['Dusty Rose', 'Mocca', 'Hitam', 'Sage'],
    badge: 'Terlaris',
  },
  {
    id: 'segiempat-voal',
    name: 'Segi Empat Voal Lasercut',
    category: 'Segi Empat',
    price: 55000,
    image: '/images/segiempat-voal.png',
    description: 'Voal ultrafine dengan tepi lasercut, tegak di dahi tanpa pentul.',
    colors: ['Sage', 'Cream', 'Navy', 'Taupe'],
    badge: 'Baru',
  },
  {
    id: 'bergo-instan',
    name: 'Bergo Instan Pad Antem',
    category: 'Instan',
    price: 65000,
    image: '/images/bergo-instan.png',
    description: 'Praktis tinggal pakai, pad antem bikin wajah tampak rapi.',
    colors: ['Mocca', 'Hitam', 'Abu', 'Maroon'],
  },
  {
    id: 'pashmina-plisket',
    name: 'Pashmina Plisket Premium',
    category: 'Pashmina',
    price: 50000,
    image: '/images/pashmina-plisket.png',
    description: 'Plisket rapi tahan lama, tidak perlu disetrika.',
    colors: ['Plum', 'Lilac', 'Hitam', 'Milo'],
  },
  {
    id: 'khimar-syari',
    name: 'Khimar Syar\u2019i Jumbo',
    category: 'Syar\u2019i',
    price: 89000,
    image: '/images/khimar-syari.png',
    description: 'Panjang menutup dada, bahan wolfis tebal dan tidak menerawang.',
    colors: ['Hitam', 'Navy', 'Coklat', 'Army'],
  },
  {
    id: 'inner-ninja',
    name: 'Inner Ninja Rajut',
    category: 'Inner',
    price: 15000,
    image: '/images/inner-ninja.png',
    description: 'Inner rajut melar, nyaman dipakai seharian dan anti pusing.',
    colors: ['Nude', 'Cream', 'Pink', 'Hitam'],
  },
]

export function formatRupiah(value: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const defaultGreeting = `Assalamu'alaikum ${STORE_NAME}, saya ingin bertanya tentang produk hijabnya.`
