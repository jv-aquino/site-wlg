const URL = `${process.env.NEXT_PUBLIC_API_URL}/produtos`;

export default async function getProduto(id) {
  const res = await fetch(URL + "/" + id, { next: { revalidate: 120 } });

  return res.json();
}