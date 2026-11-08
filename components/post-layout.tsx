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
  backTitle,
}: {
  params: { slug: string | string[] }
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
    <div className="relative min-h-screen overflow-hidden bg-[#14171f] py-12 sm:py-16">
      {/* Subtle Bottom Atmospheric Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[320px] z-0 overflow-hidden">
        <img
          src="/images/crimson-mountains.jpg"
          alt=""
          className="w-full h-full object-cover object-bottom opacity-45 img-champagne"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14171f] via-[#14171f]/55 to-[#14171f]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link
          href={backUrl}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#c8a679] hover:text-[#e2bf8d] mb-8 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to {backTitle}
        </Link>

        <article className="space-y-8">
          <header className="space-y-4 border-b border-[#2e364a] pb-8">
            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-lg bg-[#252b3b] border border-[#364056] px-3 py-1 text-xs font-mono text-[#e2bf8d]"
                >
                  <Tag className="mr-1.5 h-3 w-3 text-[#c8a679]" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-xs font-mono text-[#9da6b8]">
              <time dateTime={post.date} className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#c8a679]" />
                {format(new Date(post.date), "MMMM d, yyyy")}
              </time>
            </div>
          </header>

          <div className="rounded-2xl bg-[#1d222e]/95 border border-[#2e364a] p-6 sm:p-10 shadow-xl">
            <MarkdownRenderer content={post.content} />
          </div>
        </article>
      </div>
    </div>
  )
}
