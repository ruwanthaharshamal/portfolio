"use client"

import { Search, X } from "lucide-react"

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  placeholder?: string
}

export function SearchBar({ searchQuery, setSearchQuery, placeholder = "Search..." }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <input
        type="text"
        className="block w-full rounded-md border border-input bg-background py-2 pl-10 pr-10 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery && (
        <button
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
          onClick={() => setSearchQuery("")}
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

interface TagFilterProps {
  tags: string[]
  selectedTag: string | null
  setSelectedTag: (tag: string | null) => void
}

export function TagFilter({ tags, selectedTag, setSelectedTag }: TagFilterProps) {
  if (tags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2 py-4">
      <button
        onClick={() => setSelectedTag(null)}
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
          selectedTag === null
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setSelectedTag(tag)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            selectedTag === tag
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
