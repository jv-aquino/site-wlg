import getProdutos from "@/actions/getProdutos";
import ProdutoPaginacao from "@/components/ProdutoPaginacao";

export const metadata = {
  title: 'Produtos da KBSPK - WLG',
}

async function ProdutosCategoria() {
  const produtos = await getProdutos({ categoriaId: '6514d2a12a6f9c92f9eb8a72' });

  return (
    <>
      <div className="w-full h-[120px] relative top-[-45px] bg-[#A6528D]"></div>
      <div className="pt-4 px-8 flex flex-col items-center w-[85%] mx-auto">
        <h1 className="font-bold text-zinc-800 text-[36px] mb-[-2px]">Tesouras KBSPK</h1>
        <p className="font-normal text-zinc-400 mb-5 text-[15px]">Confira nossas excelentes tesouras da KBSPK</p>
        <ProdutoPaginacao produtos={produtos} />
      </div>
    </>
  );
}

export default ProdutosCategoria;