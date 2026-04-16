import Link from "next/link"
import { format } from "date-fns"
import { PostMeta } from "@/lib/markdown"
import { Calendar, ChevronRight } from "lucide-react"

interface PostCardProps {
  post: PostMeta
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group relative flex flex-col items-start justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.date} className="text-muted-foreground flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </time>
        <div className="flex gap-2 flex-wrap">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="relative z-10 rounded-full bg-secondary px-3 py-1.5 font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="group relative w-full">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-primary">
          <Link href={`/${post.type}/${post.slug}`}>
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
          {post.description}
        </p>
      </div>
      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
        Read more <ChevronRight className="h-4 w-4" />
      </div>
    </article>
  )
}
