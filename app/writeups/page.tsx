import { getAllPosts, getAllTags } from "@/lib/markdown"
import ClientPage from "./client-page"

export const metadata = {
  title: "Writeups | Ruwantha Harshamal",
}

export default function WriteupsPage() {
  const posts = getAllPosts("writeups")
  const tags = getAllTags("writeups")
  
  return <ClientPage posts={posts} tags={tags} />
}
