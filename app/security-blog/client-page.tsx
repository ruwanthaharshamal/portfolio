"use client"

import { useState, useMemo } from "react"
import { Shield } from "lucide-react"
import { PostCard } from "@/components/post-card"
import { SearchBar, TagFilter } from "@/components/search-filter"
import { type PostMeta } from "@/lib/markdown"
import { Pagination } from "@/components/pagination"

const POSTS_PER_PAGE = 6


export default function ClientPage({ posts, tags }: { posts: PostMeta[], tags: string[] }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const platforms = useMemo(() => {
    return Array.from(new Set(posts.map((post) => post.platform).filter(Boolean))) as string[]
  }, [posts])

  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesTag = selectedTag === null || post.tags.includes(selectedTag)
      const matchesPlatform = selectedPlatform === null || post.platform === selectedPlatform
      
      return matchesSearch && matchesTag && matchesPlatform
    })
  }, [posts, searchQuery, selectedTag, selectedPlatform])

  const groupedPosts = useMemo(() => {
    const groups: Record<string, PostMeta[]> = {}
    filteredPosts.forEach((post) => {
      const platform = post.platform || "Other"
      if (!groups[platform]) groups[platform] = []
      groups[platform].push(post)
    })
    return groups
  }, [filteredPosts])

  // Reset filters
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
          <Shield className="h-8 w-8 text-primary" />
          Writeups
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-4">
          Detailed technical analysis of vulnerabilities discovered during bug bounties, CTFs, and personal research.
        </p>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>

      <div className="flex flex-col gap-6 mb-12">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearchQueryChange} placeholder="Search writeups..." />
        </div>
        
        <div className="space-y-4">
          <div>
            <span className="text-sm font-medium text-muted-foreground mb-2 block">Filter by Platform:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedPlatform(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedPlatform === null 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                All Platforms
              </button>
              {platforms.map((platform) => (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedPlatform === platform 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
          <TagFilter tags={tags} selectedTag={selectedTag} setSelectedTag={handleTagChange} />
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-24 bg-card rounded-2xl border border-dashed">
          <p className="text-lg text-muted-foreground">No writeups found matching your criteria.</p>
          <button 
            onClick={() => { setSearchQuery(""); setSelectedTag(null); setSelectedPlatform(null); }}
            className="mt-4 text-primary hover:underline font-medium"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-16">
          {Object.entries(groupedPosts).map(([platform, platformPosts]) => (
            <section key={platform}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold tracking-tight">{platform}</h2>
                <div className="h-px flex-1 bg-border"></div>
                <span className="text-sm text-muted-foreground">{platformPosts.length} post{platformPosts.length !== 1 ? 's' : ''}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {platformPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
