import PostLayout from "@/components/post-layout"
import { isDirectory, getFolderItems } from "@/lib/markdown"
import { CategoryPage } from "@/components/category-page"
import { notFound } from "next/navigation"

export default async function SecurityBlogPage({ params }: { params: { slug: string[] } }) {
  const { slug } = await params
  const type = "security-blog"
  
  if (isDirectory(type, slug)) {
    const items = getFolderItems(type, slug)
    const title = slug[slug.length - 1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    const backUrl = slug.length > 1 ? `/${type}/${slug.slice(0, -1).join('/')}` : `/${type}`
    const backTitle = slug.length > 1 ? slug[slug.length - 2] : "Security Blog"
    
    return (
      <CategoryPage 
        items={items} 
        title={title} 
        type={type}
        backUrl={backUrl}
        backTitle={backTitle}
      />
    )
  }

  return <PostLayout params={params} type={type} backUrl="/security-blog" backTitle="Security Blog" />
}
