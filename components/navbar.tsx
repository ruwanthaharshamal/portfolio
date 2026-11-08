"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Custom Tools", href: "/tools" },
  { name: "Security Blog", href: "/security-blog" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#14171f]/90 backdrop-blur-md border-b border-[#2e364a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex h-20 items-center justify-between">
          {/* Brand Name & Subtitle */}
          <Link href="/" className="flex flex-col group">
            <span className="text-xl sm:text-2xl font-bold font-serif tracking-tight text-white group-hover:text-[#e2bf8d] transition-colors leading-tight">
              Ruwantha Harshamal
            </span>
            <span className="text-[11px] text-[#9da6b8] tracking-wide mt-0.5">
              Cybersecurity Engineer / Penetration Tester
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium">
            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-2 transition-colors",
                    isActive
                      ? "text-white font-semibold"
                      : "text-[#9da6b8] hover:text-white"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e2bf8d] rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 text-[#9da6b8] hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="block h-6 w-6 text-[#e2bf8d]" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#2e364a] bg-[#1d222e] px-4 py-4 space-y-1.5">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-3 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors",
                  isActive
                    ? "text-[#e2bf8d] bg-[#252b3b] border-l-2 border-[#e2bf8d]"
                    : "text-[#9da6b8] hover:text-white hover:bg-[#252b3b]/60"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
