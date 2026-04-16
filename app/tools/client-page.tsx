"use client"

import { useState, useMemo } from "react"
import { Terminal } from "lucide-react"
import { PostCard } from "@/components/post-card"
import { SearchBar, TagFilter } from "@/components/search-filter"
import { type PostMeta } from "@/lib/markdown"
import { Pagination } from "@/components/pagination"

const POSTS_PER_PAGE = 6


export default function ClientPage({ posts, tags }: { posts: PostMeta[], tags: string[] }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesTag = selectedTag === null || post.tags.includes(selectedTag)
      
      return matchesSearch && matchesTag
    })
  }, [posts, searchQuery, selectedTag])

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  // Reset current page when filters change
  const handleSearchQueryChange = (q: string) => {
    setSearchQuery(q)
    setCurrentPage(1)
  }

  const handleTagChange = (tag: string | null) => {
    setSelectedTag(tag)
    setCurrentPage(1)
  }

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-6xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
          <Terminal className="h-8 w-8 text-primary" />
          Custom Tools
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-4">
          A collection of custom scripts, automation utilities, and weaponized tools for offensive security operations.
        </p>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>

      <div className="flex flex-col gap-6 mb-8">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearchQueryChange} placeholder="Search tools..." />
        </div>
        <TagFilter tags={tags} selectedTag={selectedTag} setSelectedTag={handleTagChange} />
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-24 bg-card rounded-2xl border border-dashed">
          <p className="text-lg text-muted-foreground">No tools found matching your criteria.</p>
          <button 
            onClick={() => { setSearchQuery(""); setSelectedTag(null); }}
            className="mt-4 text-primary hover:underline font-medium"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  )
}
