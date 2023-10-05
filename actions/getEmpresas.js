const URL = `${process.env.NEXT_PUBLIC_API_URL}/empresas`;

export default async function getEmpresas() {
  const res = await fetch(URL, { next: { revalidate: 120 } });

  return res.json();
}