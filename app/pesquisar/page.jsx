import getProdutos from "@/actions/getProdutos";
import PesquisarProduto from "@/components/PesquisarProduto";

async function Pesquisar() {
  const produtos = await getProdutos();

  return ( 
    <>
      <div className="w-full h-[100px] relative top-[-45px] bg-[#0e2d1c]"></div>

      <PesquisarProduto produtos={produtos} />
    </>
  );
}

export default Pesquisar;