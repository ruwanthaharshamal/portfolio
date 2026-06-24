import { getAllPosts, getAllTags } from "@/lib/markdown"
import ClientPage from "./client-page"

export const metadata = {
  title: "Security Blog | Ruwantha Harshamal",
}

export default function SecurityBlogPage() {
  const posts = getAllPosts("security-blog")
  const tags = getAllTags("security-blog")
  
  return <ClientPage posts={posts} tags={tags} />
}
