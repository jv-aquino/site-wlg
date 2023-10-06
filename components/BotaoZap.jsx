import Link from "next/link";

function BotaoZap() {
  return ( 
    <Link className="fixed bottom-[18px] right-[18px] z-20 rounded-full h-[67px] w-[67px] lg:h-[82px] lg:w-[82px] divImage full" style={{ backgroundImage: "url(/images/zapLogo.webp)" }} href="https://wa.me/12987024097?text=Olá!+Eu+gostaria+de+saber+mais+sobre+os+seus+produtos"></Link>
   );
}

export default BotaoZap;