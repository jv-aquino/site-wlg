export default function manifest() {
  return {
    name: "WLG Distribuidor Pet",
    short_name: "WLG",
    description: "Site do distribuidor de produtos para pets de empresas como Traty Vet, Propetz, KBSPK e Minag da marca WLG Distribuidor pet, o melhor distribuidor pet do vale do paraíba",
    start_url: "/",
    display: "standalone",
    backgroundColor: "#fff",
    themeColor: "#fff",
    dir: "ltr",
    lang: "pt-BR",
    icons: [
      {
        src: "/images/wlg_logo.png",
        sizes: "332x330",
        type: "image/png",
      },
      {
        src: "/images/favicon.webp",
        sizes: "500x500",
        type: "image/webp",
      }
    ]
  }
}