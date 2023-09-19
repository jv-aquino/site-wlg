const URL = `${process.env.NEXT_PUBLIC_API_URL}/categorias`;

export default async function getCategorias() {
  const res = await fetch(URL);

  return res.json();
}