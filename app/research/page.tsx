import { getAllPosts, getAllTags } from "@/lib/markdown"
import ClientPage from "./client-page"

export const metadata = {
  title: "Research | Ruwantha Harshamal",
}

export default function ResearchPage() {
  const posts = getAllPosts("research")
  const tags = getAllTags("research")
  
  return <ClientPage posts={posts} tags={tags} />
}
