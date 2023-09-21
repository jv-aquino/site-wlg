function ProdutoLinha({ linha, produto }) {
  return ( 
    <div style={{width: '290px', marginRight: '30px'}}><div className="item">
        <div className="thumb">
            <div className="hover-content">
                <ul>
                    <li><a href="pagina_propetz/propetz1.html"><i className="fa fa-eye"></i></a></li>
                </ul>
            </div>
            <img src="/images/propetz/maquina_pluma_pr.jpeg" alt="" />
        </div>
        <div className="down-content">
            <h4>Máquina de Tosa Propetz Pluma</h4>
        </div>
      </div>
    </div>
   );
}

export default ProdutoLinha;