import { Poppins} from 'next/font/google'
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export const metadata = {
  title: 'WLG Distribuidor Pet',
  description: 'Site do distribuidor de produtos para pets de empresas como Traty Vet, Propetz, KBSPK e Minag da marca WLG Distribuidor pet',
  applicationName: 'WLG Distribuidor Pet',
  authors: [{ name: "Code Fusion Agency", url: "https://code-fusion-alpha.vercel.app/" }],
  keywords: 'distribuidor pet, pets, traty vet, tratyvet, propetz, kbspk, minag'
}