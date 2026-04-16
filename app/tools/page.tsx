import { getAllPosts, getAllTags } from "@/lib/markdown"
import ClientPage from "./client-page"

export const metadata = {
  title: "Tools | Ruwantha Harshamal",
}

export default function ToolsPage() {
  const posts = getAllPosts("tools")
  const tags = getAllTags("tools")
  
  return <ClientPage posts={posts} tags={tags} />
}
