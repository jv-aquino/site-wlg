import { Quote } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'KBSPK - WLG',
}

function CategoriaPage() {
  return ( 
    <>
      <div className="w-full h-[120px] relative top-[-45px] bg-[#A6528D]"></div>

      <div className="gap-5 lg:gap-[82px] mt-7 flex flex-col lg:flex-row mx-auto w-[90%] lg:w-[95%] xl:w-[78%]">
        <div className="divImage full flex-1 flex-grow-[1.2] min-h-[80vw] sm:min-h-[70vw] w-full lg:min-h-[80vh] xl:min-h-[76vh] lg:w-auto" style={{backgroundImage: 'url(/images/kbspk_logo.jpeg)'}}></div>

        <div className="flex-1">
          <h1 className="font-bold text-zinc-800 text-[36px] mt-5 pb-5 text-center lg:text-start">KBSPK Industries</h1>
          <p className="font-medium text-zinc-400">KBS Industries é fabricante profissional de instrumentos de beleza, odontológicos, eletrocirúrgicos, sagrados, de cirurgia oftalmológica e instrumentos cirúrgicos na cidade de Sialkot - Paquistão. A empresa está estabelecida desde 1982 sob a supervisão do Sr. Dr. G. Mustafa com o objetivo de fornecer o mais alto padrão de qualidade para as marcas mais populares em todo o mundo.</p>
          <p className="italic font-medium text-zinc-800 leading-[25px] mt-9"><Quote className="h-6 w-6 rotate-180 text-zinc-800 inline-block relative top-[-2px]" fill="#27272a" /><span className="pl-5"></span>Na <b>KBS Industries</b>, fazemos todos os esforços para produzir produtos da mais alta qualidade, pois sabemos que não basta ser bom. Estamos na era da excelência, onde só se vendem coisas excelentes. Verificações de qualidade rigorosas são realizadas para verificar a qualidade dos produtos. Nossos oficiais de qualidade, que realizam exercícios de controle de qualidade, garantem que os produtos atendam aos padrões internacionais de qualidade. É por causa de nosso serviço exemplar, produtos de qualidade e capacidade de fornecer aos nossos clientes mais do que eles esperam. É por isso que temos um grande número de clientes no exterior.</p>
          <p className="mt-8"></p>
          <Link className="font-medium mx-auto lg:mx-0 px-[18px] py-[13px] bg-purple-700 text-white transition-colors hover:bg-purple-500" href="/produtos/kbspk">Produtos</Link>
        </div>
      </div>
    </>
  );
}

export default CategoriaPage;