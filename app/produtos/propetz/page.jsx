import getProdutos from "@/actions/getProdutos";
import ProdutoPaginacao from "@/components/ProdutoPaginacao";

async function ProdutosCategoria() {
  const produtos = await getProdutos({ categoriaId: '6514d1fb2a6f9c92f9eb8a71' });

  return (
    <>
      <div className="w-full h-[120px] relative top-[-45px] bg-[#00A8AB]"></div>
      <div className="pt-4 px-8 flex flex-col items-center w-[85%] mx-auto">
        <h1 className="font-bold text-zinc-800 text-[36px] mb-[-2px]">Produtos Propetz</h1>
        <p className="font-normal text-zinc-400 mb-5 text-[15px]">Confira nossos produtos da Propetz</p>
        <ProdutoPaginacao produtos={produtos} />
      </div>
    </>
  );
}

export default ProdutosCategoria;