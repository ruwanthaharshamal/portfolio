import { getFolderItems } from "@/lib/markdown"
import { CategoryPage } from "@/components/category-page"

export const metadata = {
  title: "Security Blog | Ruwantha Harshamal",
}

export default function SecurityBlogPage() {
  const type = "security-blog"
  const items = getFolderItems(type, "")
  
  return (
    <CategoryPage 
      items={items} 
      title="Security Blog" 
      type={type}
    />
  )
}
