import { getPostBySlug } from "@/lib/markdown"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { Calendar, ChevronLeft, Tag } from "lucide-react"
import Link from "next/link"

export default async function DynamicPostPage({
  params,
  type,
  backUrl,
  backTitle
}: {
  params: { slug: string }
  type: string
  backUrl: string
  backTitle: string
}) {
  const { slug } = await params
  const post = getPostBySlug(type, slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-4xl">
      <Link 
        href={backUrl}
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to {backTitle}
      </Link>

      <article>
        <header className="mb-10 text-center">
          <div className="flex justify-center flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <time dateTime={post.date} className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
          </div>
        </header>

        <div className="mx-auto rounded-xl bg-card border p-6 sm:p-10 shadow-sm">
          <MarkdownRenderer content={post.content} />
        </div>
      </article>
    </div>
  )
}
