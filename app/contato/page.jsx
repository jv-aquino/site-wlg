import Link from "next/link";
import { AtSign, MailCheck, MessageCircle } from "lucide-react";

function Contato() {
  return ( 
    <div className="contato">
      <div className="flex flex-col justify-center lg:flex-row gap-20 w-[90%] mx-auto min-h-[65vh]">
        <div className="divImage flex-1" style={{backgroundImage: 'url(/favicon.ico)', backgroundSize: '100% 100%'}}></div>

        <div className="flex flex-col flex-1 gap-2">
          <h1 className="font-bold text-zinc-800 text-[35px] pb-3 pt-5">Contato</h1>
          <p className="font-medium text-[17px] px-2"><b>WLG Distribuidor Pet (Warlei)</b></p>
          <p className="text-[16px]"><b>Telefone (Atendimento pelo WhatsApp)</b>: (12) 98702-4097</p>
          <p className="text-[16px]"><b>Instagram:</b> @wlgdistribuidor</p>
          <p className="text-[16px] mb-5"><b>E-mail:</b> witelli@gmail.com</p>

          <Link href='https://wa.me/12987024097' target="_blank" className="bg-[#37d872]"><MessageCircle className="h-4 w-4"/> Whatsapp</Link>
          <Link href='https://www.instagram.com/wlgdistribuidor/' target="_blank" className="bg-[rgb(225,48,108)]"><AtSign className="h-4 w-4"/> Insta</Link>
          <Link href='mailto:witelli@gmail.com' target="_blank" className="bg-[#7040d1]"><MailCheck className="h-4 w-4"/> Email</Link>
        </div>
      </div>
    </div>
   );
}

export default Contato;