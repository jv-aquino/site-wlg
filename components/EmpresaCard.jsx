import Link from "next/link";

function EmpresaCard({ empresa, img, descricao, link }) {
  return ( 
    <div className="EmpresaCard flex-1 bg-no-repeat p-5 mt-7 lg:mt-0 
    w-[95%] aspect-square mx-auto lg:w-full" style={{ backgroundImage: `url(${img})`, backgroundSize: '100% 100%' }}>

      <div className="w-full h-full text-white text-center px-3
      flex flex-col gap-3.5 items-center justify-center">
        <p className="font-bold text-[24px]">{empresa}</p>
        <p className="lg:hidden xl:block px-3">{descricao}</p>
        <Link className="botaoTransparente mt-2 block" href={link}>Saiba Mais</Link>
      </div>
    </div>
  );
}

export default EmpresaCard;