import { Poppins} from 'next/font/google'
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

import '@fontsource/material-icons';
import './globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.variable}>
        <Navbar />
        <div className='pt-[155px]'></div>
        {children}
        <Footer />
      </body>
    </html>
  )
}

export const metadata = {
  title: 'WLG - O melhor Distribuidor Pet do Vale do Paraíba',
  description: 'Site do distribuidor de produtos para pets de empresas como Traty Vet, Propetz, KBSPK e Minag da marca WLG Distribuidor pet',
  applicationName: 'WLG Distribuidor Pet',
  authors: [{ name: "Code Fusion Agency", url: "https://code-fusion-alpha.vercel.app/" }],
  keywords: 'distribuidor pet, pets, traty vet, tratyvet, propetz, kbspk, minag, distribuidora pet, distribuidor pet vale do paraíba, produtos para pets',
  manifest: '/manifest.json',
  themeColor: "#fff"
}