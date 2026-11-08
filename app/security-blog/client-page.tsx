"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { MountainGraphic } from "@/components/mountain-graphic"
import { type PostMeta } from "@/lib/markdown"

export default function ClientPage({ posts }: { posts: PostMeta[], tags: string[] }) {
  const [selectedCategory, setSelectedCategory] = useState("HTB")

  const categories = [
    { name: "HTB", count: 1, slug: "htb" },
    { name: "MITRE ATT&CK", count: 12, slug: "mitre-attack" },
    { name: "Portswigger", count: 2, slug: "portswigger" },
  ]

  const activeCategory = categories.find((c) => c.name === selectedCategory) || categories[0]

  return (
    <div className="min-h-screen py-12 sm:py-16 space-y-10 bg-dunes-glow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-10">
        
        {/* Header matching Screen 05 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-4 border-b border-[#23151b]">
          <div className="lg:col-span-8 space-y-2">
            <div className="text-xs font-mono font-bold tracking-widest text-[#ef4444] uppercase">
              // SECURITY BLOG
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
              Security Blog
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-[#9a8890] leading-relaxed">
              Write-ups, research notes and learning from real-world security assessments.
            </p>
          </div>
        </div>

        {/* 2-Column Section matching Screen 05 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          
          {/* Left Column: Category Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.name
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all text-left ${
                    isSelected
                      ? "bg-[#1d1117] border-[#4c202a] text-white shadow-md"
                      : "bg-[#140e11] border-[#23151b] text-neutral-300 hover:border-[#381a24] hover:text-white"
                  }`}
                >
                  <span className="font-bold text-sm tracking-wide">
                    {cat.name} ({cat.count})
                  </span>
                  <ArrowRight
                    className={`h-4 w-4 transition-transform ${
                      isSelected ? "text-[#e8cec2] translate-x-1" : "text-[#9a8890]"
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Right Column: Featured Mountain Showcase Card */}
          <div className="lg:col-span-7 rounded-3xl bg-[#140e11] border border-[#23151b] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[340px] shadow-2xl">
            
            {/* Mountain Graphic Background covering right/bottom */}
            <div className="absolute inset-0 opacity-80 pointer-events-none">
              <MountainGraphic className="w-full h-full" />
            </div>

            {/* Content over art */}
            <div className="relative z-10 space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight">
                {activeCategory.name}
              </h2>
              <div className="text-xs font-mono text-[#9a8890]">
                {activeCategory.count} {activeCategory.count === 1 ? "item" : "items"}
              </div>
            </div>

            {/* Action button */}
            <div className="relative z-10 pt-8">
              <Link
                href={`/security-blog/${activeCategory.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#e8cec2] hover:bg-[#dfc4b7] text-[#0d080b] font-semibold text-sm transition-all shadow-lg"
              >
                View Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
