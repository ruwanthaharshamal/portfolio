import { getAllPosts, getAllTags } from "@/lib/markdown"
import ClientPage from "./client-page"

export const metadata = {
  title: "Projects | Ruwantha Harshamal",
}

export default function ProjectsPage() {
  const posts = getAllPosts("projects")
  const tags = getAllTags("projects")
  
  return <ClientPage posts={posts} tags={tags} />
}
