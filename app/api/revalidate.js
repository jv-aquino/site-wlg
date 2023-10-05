import { revalidatePath, revalidateTag } from "next/cache"

export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATE) {
    return res.status(401).json({ message: 'Invalid token' })
  }
 
  try {
    await res.revalidate('/');
    revalidatePath('/');
    revalidateTag('/');
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}