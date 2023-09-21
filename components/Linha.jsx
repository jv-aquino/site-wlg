import ProdutoLinha from "./ProdutoLinha";

function Linha() {
  return ( 
    <section className="section linha">
        <div className="container">
            <div className="row col-lg-6">
                  <div className="section-heading">
                    <h2>Propetz</h2>
                    <span>Alguns dos maravilhosos produtos da Propetz.</span>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row col-lg-12">
                <ProdutoLinha />
                <ProdutoLinha />
                <ProdutoLinha />
            </div>
        </div>
    </section>
   );
}

export default Linha;