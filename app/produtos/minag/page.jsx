import getProdutos from "@/actions/getProdutos";
import ProdutoPaginacao from "@/components/ProdutoPaginacao";

export const metadata = {
  title: 'Produtos da Minag - WLG',
}

async function ProdutosCategoria() {
  const produtos = await getProdutos({ categoriaId: '6514d2e52a6f9c92f9eb8a73' });

  return (
    <>
      <div className="w-full h-[120px] relative top-[-45px] bg-[#0073AC]"></div>
      <div className="pt-4 px-8 flex flex-col items-center w-[85%] mx-auto">
        <h1 className="font-bold text-zinc-800 text-[36px] mb-[-2px]">Produtos Minag</h1>
        <p className="font-normal text-zinc-400 mb-5 text-[15px]">Confira nossos secadores, sopradores e mais da Minag</p>
        <ProdutoPaginacao produtos={produtos} />
      </div>
    </>
  );
}

export default ProdutosCategoria;