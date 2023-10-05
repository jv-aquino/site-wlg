import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/produtos`;

export default async function getProdutos(query) {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      categoriaId: query?.categoriaId,
      isFeatured: query?.isFeatured,
    },
  });

  const res = await fetch(url, { next: { revalidate: 120 } });

  return res.json();
}