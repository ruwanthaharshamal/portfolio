"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, ArrowRight, ShieldAlert } from "lucide-react"
import { type PostMeta } from "@/lib/markdown"

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export default function ClientPage({
  posts,
  tags,
}: {
  posts: PostMeta[]
  tags: string[]
}) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState("All")

  const filterTags = useMemo(() => {
    const unique = Array.from(new Set(tags.map((t) => t.toLowerCase()))).sort()
    return ["All", ...unique]
  }, [tags])

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const postTagsLower = (p.tags || []).map((t) => t.toLowerCase())
      const matchesTag =
        selectedTag === "All" ||
        postTagsLower.includes(selectedTag.toLowerCase())

      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        postTagsLower.some((t) => t.includes(q))

      return matchesTag && matchesSearch
    })
  }, [posts, selectedTag, searchQuery])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#14171f] py-12 sm:py-16">
      {/* Bottom Atmospheric Mountains Backdrop */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[360px] z-0 overflow-hidden">
        <img
          src="/images/crimson-mountains.jpg"
          alt=""
          className="w-full h-full object-cover object-bottom opacity-50 img-champagne"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14171f] via-[#14171f]/55 to-[#14171f]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7 space-y-2">
            <div className="text-xs font-mono font-semibold tracking-[0.18em] text-[#c8a679] uppercase">
              // VULNERABILITY RESEARCH
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white tracking-tight">
              Security Research
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#d5dae6] leading-relaxed">
              Original vulnerability disclosures, CVE advisories, proof-of-concept exploit research,
              and technical analysis.
            </p>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9da6b8]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search advisories and CVEs..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#1d222e]/95 border border-[#2e364a] focus:border-[#e2bf8d] focus:outline-none text-xs sm:text-sm text-white placeholder:text-[#9da6b8] transition-colors"
          />
        </div>

        {/* Filter Tag Pills */}
        {filterTags.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {filterTags.map((tag) => {
              const isActive = selectedTag === tag
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    isActive
                      ? "bg-[#e2bf8d] text-[#14171f] font-semibold shadow-sm"
                      : "bg-[#1d222e]/95 text-[#d5dae6] hover:text-white border border-[#2e364a] hover:border-[#e2bf8d]/50"
                  }`}
                >
                  {tag}
                </button>
              )
            })}
          </div>
        )}

        {/* Stacked Research Cards */}
        <div className="space-y-4 pt-2">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/research/${post.slug}`}
              className="group block rounded-2xl bg-[#1d222e]/95 border border-[#2e364a] hover:border-[#e2bf8d]/60 p-5 sm:p-6 transition-all duration-200 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#332b20] via-[#242326] to-[#1a1e28] border border-[#4f4230] flex items-center justify-center shrink-0 group-hover:border-[#e2bf8d] transition-colors">
                  <ShieldAlert className="h-7 w-7 text-[#e2bf8d]" />
                </div>

                <div className="flex-1 flex flex-col justify-between space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#e2bf8d] transition-colors">
                      {post.title}
                    </h3>
                    <span className="text-xs font-mono text-[#9da6b8] shrink-0">
                      {formatDate(post.date)}
                    </span>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <p className="text-xs sm:text-sm text-[#d5dae6] leading-relaxed max-w-2xl">
                      {post.description}
                    </p>

                    <div className="h-8 w-8 rounded-lg bg-[#252b3b] border border-[#364056] flex items-center justify-center text-[#d5dae6] group-hover:text-[#e2bf8d] group-hover:border-[#e2bf8d] shrink-0 transition-all">
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
