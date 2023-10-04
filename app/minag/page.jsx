import { Quote } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'KBSPK - WLG',
}

function CategoriaPage() {
  return ( 
    <>
      <div className="w-full h-[120px] relative top-[-45px] bg-[#0073AC]"></div>

      <div className="gap-5 lg:gap-[82px] mt-7 flex flex-col lg:flex-row mx-auto w-[90%] lg:w-[95%] xl:w-[78%]">
        <div className="divImage full flex-1 flex-grow-[1.2] min-h-[80vw] sm:min-h-[70vw] w-full lg:min-h-[80vh] xl:min-h-[76vh] lg:w-auto" style={{backgroundImage: 'url(/images/minag_logo2.png)'}}></div>

        <div className="flex-1">
          <h1 className="font-bold text-zinc-800 text-[36px] mt-5 pb-5 text-center lg:text-start">Minag</h1>
          <p className="font-medium text-zinc-400">A MINAG vem consolidando-se como marca que prioriza a qualidade de seus produtos. Buscando levar aos seus clientes, a forma mais vantajosa de adquirir excelentes produtos. Esta confiança foi estabelecida através de muito trabalho e solidez. Como cresceu junto com o próprio mercado Pet no Brasil, a Minag não para de investir em pesquisas e desenvolvimento de seus produtos.</p>
          <p className="italic font-medium text-zinc-800 leading-[25px] mt-9"><Quote className="h-6 w-6 rotate-180 text-zinc-800 inline-block relative top-[-2px]" fill="#27272a" /><span className="pl-5"></span>Em 1978, no intuito de otimizar as condições de trabalho de sua esposa, Gilberto Manoelino da Silva desenvolve um produto voltado à secagem de cabelos em salões de beleza. O conceito do secador com alta potência e estrutura para suporte foi inicialmente concebido em congressos de cabeleireiro frequentados em Nova Iorque e Paris. Observando a potencialidade do produto, Gilberto criou a marca <b>MINAG</b> e dedicou-se à comercialização destes equipamentos em salões de beleza. Devido ao design considerado pesado para salões de beleza, neste segmento não observou-se sucesso nas vendas do produto. Foi quando surgiu a oportunidade de participar do mercado de banho e tosa no Brasil.</p>
          <p className="mt-8"></p>
          <Link className="font-medium mx-auto lg:mx-0 px-[18px] py-[13px] bg-purple-700 text-white transition-colors hover:bg-purple-500" href="/produtos/minag">Produtos</Link>
        </div>
      </div>
    </>
  );
}

export default CategoriaPage;