import './globals.css'
import './css/bootstrap.min.css'
import './css/flex-slider.css'
import './css/font-awesome.css'
import './css/owl-carousel.css'

import '@fontsource/poppins';

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'WLG Distribuidor Pet',
  description: 'Site do distribuidor de produtos para pets de empresas como Traty Vet, Propetz, KBSPK e Minag da marca WLG Distribuidor pet',
  applicationName: 'WLG Distribuidor Pet',
  authors: [{ name: "Code Fusion Agency", url: "https://code-fusion-alpha.vercel.app/" }],
  keywords: 'distribuidor pet, pets, traty vet, tratyvet, propetz, kbspk, minag'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
        <Footer />
        
        <script src="/js/popper.js"></script>
        <script src="/js/bootstrap.min.js"></script>

        <script src="/js/owl-carousel.js"></script>
        <script src="/js/accordions.js"></script>
        <script src="/js/datepicker.js"></script>
        <script src="/js/scrollreveal.min.js"></script>
        <script src="/js/waypoints.min.js"></script>
        <script src="/js/imgfix.min.js"></script> 
        <script src="/js/slick.js"></script> 
        <script src="/js/lightbox.js"></script> 
        <script src="/js/isotope.js"></script> 
      </body>
    </html>
  )
}
