import Link from "next/link";

function BotaoZap() {
  return ( 
    <Link className="fixed bottom-[18px] right-[19px] z-20 rounded-full h-[64px] w-[64px] lg:h-[75px] lg:w-[75px] divImage full" style={{ backgroundImage: "url(/images/zapLogo.webp)" }} href="https://wa.me/12987024097?text=Olá!+Eu+gostaria+de+saber+mais+sobre+os+seus+produtos"></Link>
   );
}

export default BotaoZap;