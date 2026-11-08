import { Mail } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="border-t border-[#2e364a] bg-[#14171f] mt-auto">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="text-sm font-bold font-serif text-white">
              Ruwantha Harshamal
            </span>
            <span className="text-xs text-[#9da6b8] sm:border-l sm:border-[#2e364a] sm:pl-3">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#9da6b8]">
            <a
              href="https://linkedin.com/in/ruwantha-harshamal"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#e2bf8d] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/ruwanthaharshamal"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#e2bf8d] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="mailto:ruwanharsha01@gmail.com"
              className="hover:text-[#e2bf8d] transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
