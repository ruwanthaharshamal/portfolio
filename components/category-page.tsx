import { Folder, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import { PostCard } from "@/components/post-card"
import { FolderItem } from "@/lib/markdown"

export function CategoryPage({ 
  items, 
  title, 
  type,
  backUrl,
  backTitle
}: { 
  items: FolderItem[], 
  title: string,
  type: string,
  backUrl?: string,
  backTitle?: string
}) {
  const folders = items.filter(item => item.isDirectory)
  const posts = items.filter(item => !item.isDirectory)

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-6xl">
      <div className="mb-12">
        {backUrl && (
          <Link 
            href={backUrl}
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ChevronRight className="mr-1 h-4 w-4 rotate-180" />
            Back to {backTitle}
          </Link>
        )}
        <h1 className="text-4xl font-bold tracking-tight mb-4">{title}</h1>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>

      {folders.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Folder className="h-6 w-6 text-primary" />
            Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {folders.map((folder) => (
              <Link
                key={folder.slug}
                href={`/${type}/${folder.slug}`}
                className="group p-6 rounded-2xl bg-card border hover:border-primary/50 transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Folder className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{folder.title}</h3>
                      <p className="text-sm text-muted-foreground">{folder.itemCount} item{folder.itemCount !== 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {posts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((item) => (
              item.post && <PostCard key={item.slug} post={item.post} />
            ))}
          </div>
        </section>
      )}

      {items.length === 0 && (
        <div className="text-center py-24 bg-card rounded-2xl border border-dashed text-muted-foreground">
          No content found in this category.
        </div>
      )}
    </div>
  )
}
