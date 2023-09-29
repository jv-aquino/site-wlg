import Link from "next/link";

function Contato() {
  return ( 
    <div className="contato">
      <div className="divImage w-full h-[85px] relative top-[-25px]" style={{ backgroundImage: 'url(/images/about-us-heading.jpg)', backgroundPosition: 'center center'}}></div>

      <div className="flex flex-col justify-center mx-auto gap-10 lg:gap-24 lg:flex-row w-[90%] lg:w-[93%] xl:w-[81%] min-h-[67vh]">
        <div className="divImage full flex-1 min-h-[61vh] w-[95%] m-auto lg:h-auto lg:w-auto" style={{backgroundImage: 'url(/favicon.ico)'}}></div>

        <div className="flex flex-col flex-1 gap-2 self-center lg:self-start">
          <h1 className="font-bold text-zinc-800 text-[35px] pb-3 pt-5">Contato</h1>
          <p className="font-medium text-[17px] px-2"><b>WLG Distribuidor Pet (Warlei)</b></p>
          <p className="text-[16px]"><b>Telefone (Atendimento pelo WhatsApp)</b>: (12) 98702-4097</p>
          <p className="text-[16px]"><b>Instagram:</b> @wlgdistribuidor</p>
          <p className="text-[16px] mb-5"><b>E-mail:</b> witelli@gmail.com</p>

          <Link href='https://wa.me/12987024097' target="_blank" className="bg-[#37d872]"><span className="symbol">chat_bubble</span> Whatsapp</Link>
          <Link href='https://www.instagram.com/wlgdistribuidor/' target="_blank" className="bg-[rgb(225,48,108)]"><span className="symbol">alternate_email</span> Insta</Link>
          <Link href='mailto:witelli@gmail.com' className="bg-[#7040d1]"><span className="symbol">mail</span> Email</Link>
        </div>
      </div>
    </div>
   );
}

export default Contato;