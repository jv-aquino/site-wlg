import { Quote } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Traty Vet Pet Care - WLG',
}

function CategoriaPage() {
  return ( 
    <>
      <div className="divImage w-full h-[120px] relative top-[-45px]" style={{ backgroundImage: 'url("/images/banner_tv.png")', backgroundPosition: 'center center'}}></div>

      <div className="gap-5 lg:gap-[82px] mt-7 flex flex-col lg:flex-row mx-auto w-[90%] lg:w-[95%] xl:w-[78%]">
        <div className="divImage full flex-1 flex-grow-[1.2] min-h-[80vw] sm:min-h-[70vw] w-full lg:min-h-[80vh] xl:min-h-[76vh] lg:w-auto" style={{backgroundImage: 'url(/images/tv_logo.png)'}}></div>

        <div className="flex-1">
          <h1 className="font-bold text-zinc-800 text-[34px] mt-5 pb-5 text-center lg:text-start">Traty Vet Pet Care</h1>
          <p className="font-medium text-zinc-400">A Traty Vet é uma Fábrica de Cosmética Animal com referência nacional, que busca levar a você o que tem de melhor no quesito bem-estar animal, produzindo com muito amor e dedicação, produtos voltados para os Groomers e segmentos de Petshop's.</p>
          <p className="italic font-medium text-zinc-800 leading-[25px] mt-9"><Quote className="h-6 w-6 rotate-180 text-zinc-800 inline-block relative top-[-2px]" fill="#27272a" /><span className="pl-5"></span>Há mais de 15 anos nos dedicamos todos os dias e motivados por essa paixão, levamos o que há de melhor para no quesito bem estar para os Pets! Nossa empresa se destaca por fabricar produtos de qualidade, inovadores e com o melhor custo benefício para os cuidados com os Pets. Desde que decidimos iniciar o Projeto de nossas vidas, sempre pensamos em como ser diferentes, em como poder proporcionar uma ótima experiência e mostrar através do que fazemos todo o amor e carinho que temos por esses parceiros de vida. E a resposta sempre esteve conosco, desde sempre, o amor! O amor em cuidar bem, em se preocupar com cada detalhe e com cada característica única.</p>
          <p className="mt-8"></p>
          <Link className="font-medium mx-auto lg:mx-0 px-[18px] py-[13px] bg-purple-700 text-white transition-colors hover:bg-purple-500" href="/produtos/tratyvet">Produtos</Link>
        </div>
      </div>
    </>
  );
}

export default CategoriaPage;