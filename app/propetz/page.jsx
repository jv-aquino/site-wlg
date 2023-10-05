import { Quote } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Propetz - WLG',
}

function CategoriaPage() {
  return ( 
    <>
      <div className="w-full h-[120px] relative top-[-45px] bg-[#00A8AB]"></div>

      <div className="gap-5 lg:gap-[82px] mt-7 flex flex-col lg:flex-row mx-auto w-[90%] lg:w-[95%] xl:w-[78%]">
        <div className="divImage full flex-1 flex-grow-[1.2] min-h-[80vw] sm:min-h-[70vw] w-full lg:min-h-[80vh] xl:min-h-[76vh] lg:w-auto" style={{backgroundImage: 'url(/images/propetz_logo.webp)'}}></div>

        <div className="flex-1">
          <h1 className="font-bold text-zinc-800 text-[36px] mt-5 pb-5 text-center lg:text-start">Propetz</h1>
          <p className="font-medium text-zinc-400">A Propetz é uma empresa Brasileira que buscou, no mundo todo, uma tecnologia capaz de cessar as dificuldades do mercado pet. A forma visionária de desenvolver os produtos nos levou até o topo. Para isso se tornar possível, mudamos o propósito a ser construído, com transformações que vão além do esperado para alcançar uma visão moderna desse movimento.</p>
          <p className="italic font-medium text-zinc-800 leading-[25px] mt-9"><Quote className="h-6 w-6 rotate-180 text-zinc-800 inline-block relative top-[-2px]" fill="#27272a" /><span className="pl-5"></span>Os <b>produtos Propetz</b> vão além da qualidade e dão espaço para design e tecnologia serem seu ponto chave rumo a dar facilidade ao groomer no dia a dia. Hoje, a marca conta com uma linha completa para quem deseja montar um pet shop, e isso inclui <b>tesouras, escovas, máquinas de tosa e adaptadores</b>. Colocamos nosso discurso em prática inovando para oferecer o melhor e proporcionar não apenas praticidade, mas momentos especiais para quem ama o que faz. Com uma vasta experiência no segmento pet, a Propetz se reinventou e foi além, criando uma nova marca que conecta a qualidade dos produtos ao cotidiano do consumidor.<br/><br/><b>Propetz, amor por pet, paixão por inovar.</b></p>
          <p className="mt-8"></p>
          <Link className="font-medium mx-auto lg:mx-0 px-[18px] py-[13px] bg-purple-700 text-white transition-colors hover:bg-purple-500" href="/produtos/propetz" redirectImage>Produtos</Link>
        </div>
      </div>
    </>
  );
}

export default CategoriaPage;