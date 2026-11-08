"use client"

import { useState } from "react"
import { ArrowRight, ChevronLeft, Calendar } from "lucide-react"
import Link from "next/link"
import { FolderItem } from "@/lib/markdown"

function formatDate(dateStr?: string) {
  if (!dateStr) return ""
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export function CategoryPage({
  items,
  title,
  type,
  backUrl,
  backTitle,
}: {
  items: FolderItem[]
  title: string
  type: string
  backUrl?: string
  backTitle?: string
}) {
  const folders = items.filter((item) => item.isDirectory)
  const posts = items.filter((item) => !item.isDirectory)

  const [selectedFolderSlug, setSelectedFolderSlug] = useState<string>(
    folders[0]?.slug || ""
  )

  const activeFolder =
    folders.find((f) => f.slug === selectedFolderSlug) || folders[0]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#14171f] py-12 sm:py-16">
      {/* Bottom Atmospheric Mountains Backdrop matching Screen 05 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[360px] z-0 overflow-hidden">
        <img
          src="/images/crimson-mountains.jpg"
          alt=""
          className="w-full h-full object-cover object-bottom opacity-50 img-champagne"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14171f] via-[#14171f]/50 to-[#14171f]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-8">
        {/* Back link when inside a subfolder */}
        {backUrl && (
          <div>
            <Link
              href={backUrl}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#c8a679] hover:text-[#e2bf8d] transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to {backTitle || "Security Blog"}
            </Link>
          </div>
        )}

        {/* Header matching Screen 05 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-6 border-b border-[#2e364a]">
          <div className="lg:col-span-7 space-y-2">
            <div className="text-xs font-mono font-semibold tracking-[0.18em] text-[#c8a679] uppercase">
              // {backUrl ? "CATEGORY ARCHIVE" : "SECURITY BLOG"}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white tracking-tight">
              {title}
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#d5dae6] leading-relaxed">
              Write-ups, research notes and learning from real-world security assessments.
            </p>
          </div>
        </div>

        {/* Screen 05 Two-Column Category Split (when folders exist) */}
        {folders.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            {/* Left Column: Folder Selector List */}
            <div className="lg:col-span-5 space-y-2.5 lg:pr-6 lg:border-r lg:border-[#2e364a]">
              {folders.map((folder) => {
                const isSelected = activeFolder?.slug === folder.slug
                return (
                  <div
                    key={folder.slug}
                    onClick={() => setSelectedFolderSlug(folder.slug)}
                    className={`cursor-pointer rounded-xl px-5 py-4 flex items-center justify-between transition-all ${
                      isSelected
                        ? "bg-gradient-to-r from-[#332b20] via-[#26252c] to-[#1d222e] border border-[#524532] text-white shadow-md"
                        : "bg-transparent hover:bg-[#1d222e] border border-transparent hover:border-[#2e364a] text-[#d5dae6]"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span
                        className={
                          isSelected ? "text-white font-semibold" : "text-[#d5dae6]"
                        }
                      >
                        {folder.title}
                      </span>
                      <span className="text-xs text-[#9da6b8]">
                        ({folder.itemCount})
                      </span>
                    </div>

                    <Link
                      href={`/${type}/${folder.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#d5dae6] hover:text-[#e2bf8d] p-1 transition-colors"
                      aria-label={`Open ${folder.title}`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                )
              })}
            </div>

            {/* Right Column: Featured Category Preview Card with Mountains */}
            {activeFolder && (
              <div className="lg:col-span-7 rounded-2xl bg-[#1d222e]/95 border border-[#2e364a] p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                    {activeFolder.title}
                  </h2>
                  <p className="text-xs text-[#9da6b8]">
                    {activeFolder.itemCount} item{activeFolder.itemCount !== 1 ? "s" : ""}
                  </p>
                </div>

                {/* Mountain Image Frame */}
                <Link
                  href={`/${type}/${activeFolder.slug}`}
                  className="block h-52 sm:h-60 rounded-xl overflow-hidden border border-[#364056] relative group bg-[#14171f]"
                >
                  <img
                    src="/images/crimson-mountains.jpg"
                    alt={activeFolder.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 img-champagne"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14171f]/55 via-transparent to-transparent" />
                </Link>

                <div className="flex justify-center pt-1">
                  <Link
                    href={`/${type}/${activeFolder.slug}`}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#e2bf8d] hover:bg-[#d4af7a] text-[#14171f] font-semibold text-xs sm:text-sm transition-all shadow-md"
                  >
                    View Articles
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Posts List (when inside a category folder with articles) */}
        {posts.length > 0 && (
          <div className="space-y-4 pt-4">
            {folders.length > 0 && (
              <div className="text-xs font-mono font-semibold tracking-[0.15em] text-[#c8a679] uppercase pb-2">
                // ARTICLES ({posts.length})
              </div>
            )}
            {posts.map((item) => {
              if (!item.post) return null
              const post = item.post
              return (
                <Link
                  key={item.slug}
                  href={`/${type}/${post.slug}`}
                  className="group block rounded-2xl bg-[#1d222e]/95 border border-[#2e364a] hover:border-[#e2bf8d]/60 p-5 sm:p-6 transition-all duration-200 shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#9da6b8]">
                        {post.date && (
                          <span className="flex items-center gap-1.5 text-[#c8a679]">
                            <Calendar className="h-3.5 w-3.5" />
                            {formatDate(post.date)}
                          </span>
                        )}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {post.tags.map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 rounded bg-[#252b3b] border border-[#364056] text-[10px] text-[#e2bf8d]"
                              >
                                #{t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#e2bf8d] transition-colors">
                        {post.title}
                      </h3>

                      {post.description && (
                        <p className="text-xs sm:text-sm text-[#d5dae6] leading-relaxed max-w-3xl">
                          {post.description}
                        </p>
                      )}
                    </div>

                    <div className="h-9 w-9 rounded-lg bg-[#252b3b] border border-[#364056] flex items-center justify-center text-[#d5dae6] group-hover:text-[#e2bf8d] group-hover:border-[#e2bf8d] shrink-0 transition-all">
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}

        {items.length === 0 && (
          <div className="rounded-2xl bg-[#1d222e]/95 border border-[#2e364a] p-12 text-center text-sm text-[#9da6b8]">
            No articles found in this category yet.
          </div>
        )}
      </div>
    </div>
  )
}
