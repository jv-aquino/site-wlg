import getProdutos from "@/actions/getProdutos";
import ProdutoPaginacao from "@/components/ProdutoPaginacao";

export const metadata = {
  title: 'Linha Traty Vet - WLG',
}

async function ProdutosCategoria() {
  const produtos = await getProdutos({ categoriaId: '6514c69d6e2299cfd806679d' });

  return (
    <>
      <div className="w-full h-[120px] relative top-[-45px] bg-[#45b8a9]"></div>
      <div className="pt-4 px-8 flex flex-col items-center w-[85%] mx-auto">
        <h1 className="font-bold text-zinc-800 text-[36px] mb-[-2px]">Linha Traty Vet</h1>
        <p className="font-normal text-zinc-400 mb-5 text-[15px]">Linha de shampoos e condicionadores para pets da Traty Vet</p>
        <ProdutoPaginacao produtos={produtos} />
      </div>
    </>
  );
}

export default ProdutosCategoria;