import { getAllPosts, getAllTags } from "@/lib/markdown"
import ClientPage from "./client-page"

export const metadata = {
  title: "Blog | Ruwantha Harshamal",
}

export default function BlogPage() {
  const posts = getAllPosts("blog")
  const tags = getAllTags("blog")
  
  return <ClientPage posts={posts} tags={tags} />
}
