"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  setCurrentPage: (page: number) => void
}

export function Pagination({ currentPage, totalPages, setCurrentPage }: PaginationProps) {
  if (totalPages <= 1) return null

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </button>
      
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium transition-colors ${
            currentPage === i + 1
              ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
              : "border-input bg-background hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </button>
    </div>
  )
}
