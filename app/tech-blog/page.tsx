import { getAllPosts, getAllTags } from "@/lib/markdown"
import ClientPage from "./client-page"

export const metadata = {
  title: "Tech Blog | Ruwantha Harshamal",
}

export default function TechBlogPage() {
  const posts = getAllPosts("tech-blog")
  const tags = getAllTags("tech-blog")
  
  return <ClientPage posts={posts} tags={tags} />
}
