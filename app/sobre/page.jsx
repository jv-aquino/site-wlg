import Link from "next/link";

export const metadata = {
  title: 'Sobre a WLG',
}

function Sobre() {
  return ( 
    <div className="sobre pb-4">
      <div className="divImage w-full h-[85px] relative top-[-15px]" style={{ backgroundImage: 'url(/images/about-us-heading.jpg)', backgroundPosition: 'center center'}}></div>

      <div className="flex flex-col justify-center mx-auto mt-14 gap-10 lg:gap-24 lg:flex-row w-[90%] sm:w-[80%] lg:w-[93%] xl:w-[81%]">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58852.413386595166!2d-45.203652299999995!3d-22.79224085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccc43d2f182b09%3A0x4ff95ebd5d4a29a7!2sGuaratinguet%C3%A1%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1690422756113!5m2!1spt-BR!2sbr" className="w-[90%] h-[450px] sm:w-[500px]" style={{border: '0', margin: 'auto'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div className="flex flex-col flex-1 gap-1.5 self-center lg:self-start">
          <h1 className="font-bold text-zinc-800 text-[32px] text-center md:text-start md:text-[35px] leading-none mt-6">Somos WLG Distribuidor Pet!</h1>
          <p className="md:text-[15px] text-neutral-400 font-normal pt-[1px] tracking-[0.01em] text-center md:text-start"><i>Naturalmente de Guaratinguetá mas atuamos em todo Vale do Paraíba e Litoral Norte.</i></p>

          <p className="font-normal text-[17px] text-zinc-800 pt-7">A WLG Distribuidor Pet é uma empresa de distribuição com 12 anos de atuação no mercado, prestando atendimento com pronta-entrega para o melhor conforto aos nossos clientes e amigos.</p>
          <p className="font-normal text-[17px] text-zinc-800 pt-4">Somos originalmente de <b>Guaratinguetá</b>, porém atuamos em todo o Vale do Paraíba e Litoral Norte.<br/>Atualmente trabalhamos com os produtos <b>Traty Vet</b>, <b>Propetz</b>, <b>KBSPK</b> e <b>Minag</b>.</p>
          <p className="font-semibold text-zinc-900 pt-12 text-[15px]">Estamos sempre à disposição para o que você precisar!</p>
        </div>
      </div>
    </div>
   );
}

export default Sobre;