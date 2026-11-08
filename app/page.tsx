import Link from "next/link"
import {
  ArrowRight,
  Code,
  Network,
  Shield,
  Crosshair,
  ShieldAlert,
  Wifi,
  Smartphone,
  Folder,
  Wrench,
  FileText,
  Mail,
} from "lucide-react"
import { FaLinkedin } from "react-icons/fa"

export default function Home() {
  const expertise = [
    {
      title: "Web & API Pentesting",
      icon: Code,
    },
    {
      title: "Network & Infrastructure",
      icon: Network,
    },
    {
      title: "Active Directory",
      icon: Shield,
    },
    {
      title: "Red Teaming",
      icon: Crosshair,
    },
    {
      title: "Vulnerability Assessment",
      icon: ShieldAlert,
    },
    {
      title: "Wireless Security",
      icon: Wifi,
    },
    {
      title: "Mobile App Pentesting",
      icon: Smartphone,
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#14171f]">
      {/* Top Hero Atmospheric Silk Waves Background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] z-0 overflow-hidden">
        <img
          src="/images/crimson-waves-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-70 mix-blend-screen scale-105 img-champagne"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14171f]/30 via-[#14171f]/65 to-[#14171f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14171f]/90 via-transparent to-[#14171f]/80" />
      </div>

      {/* Bottom Atmospheric Mountains Backdrop */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[360px] z-0 overflow-hidden">
        <img
          src="/images/crimson-mountains.jpg"
          alt=""
          className="w-full h-full object-cover object-bottom opacity-45 img-champagne"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14171f] via-[#14171f]/55 to-[#14171f]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12 sm:py-16 space-y-14 sm:space-y-16">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          {/* Hero Left: Tag & Editorial Serif Heading */}
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-mono font-semibold tracking-[0.18em] text-[#c8a679] uppercase">
              // RUWANTHA HARSHAMAL
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-serif text-white tracking-tight leading-[1.08]">
              Offensive Security
              <br />
              Professional &amp;
              <br />
              <span className="italic font-normal text-[#e2bf8d]">Red Teamer.</span>
            </h1>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#e2bf8d] hover:bg-[#d4af7a] text-[#14171f] font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-black/30"
              >
                About Me
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/security-blog"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#1d222e]/95 hover:bg-[#252b3b] border border-[#2e364a] text-white font-medium text-xs sm:text-sm transition-all"
              >
                Security Blog
              </Link>
            </div>
          </div>

          {/* Hero Right: Summary Paragraph */}
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-sm sm:text-base text-[#d5dae6] leading-relaxed max-w-md">
              Conducting web, API, network and Active Directory penetration testing, and helping
              organizations strengthen their security posture.
            </p>
          </div>
        </section>

        {/* Core Expertise Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-semibold tracking-[0.15em] text-[#c8a679]">
              // <span className="text-white font-sans font-semibold tracking-normal text-sm ml-1">Core Expertise</span>
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#2e364a] to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {expertise.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#1d222e]/95 backdrop-blur-sm border border-[#2e364a] hover:border-[#e2bf8d]/60 p-4 flex flex-col items-center text-center justify-center space-y-2.5 transition-all group shadow-sm"
                >
                  <div className="p-2 rounded-lg text-[#e2bf8d] group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5 stroke-[1.75]" />
                  </div>
                  <span className="text-[11px] font-medium text-[#e4e8f0] leading-snug">
                    {item.title}
                  </span>
                </div>
              )
            })}
          </div>
        </section>

        {/* Explore My Work Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-semibold tracking-[0.15em] text-[#c8a679]">
              // <span className="text-white font-sans font-semibold tracking-normal text-sm ml-1">Explore My Work</span>
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#2e364a] to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Column: 3 Stacked Navigation Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3">
              <Link
                href="/projects"
                className="flex-1 flex items-center justify-between px-5 py-4 rounded-xl bg-[#1d222e]/95 border border-[#2e364a] hover:border-[#e2bf8d]/60 text-white hover:text-[#e2bf8d] transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <Folder className="h-4 w-4 text-[#e2bf8d]" />
                  <span className="font-medium text-sm">Projects</span>
                </div>
                <ArrowRight className="h-4 w-4 text-[#9da6b8] group-hover:text-[#e2bf8d] group-hover:translate-x-1 transition-all" />
              </Link>

              <Link
                href="/tools"
                className="flex-1 flex items-center justify-between px-5 py-4 rounded-xl bg-[#1d222e]/95 border border-[#2e364a] hover:border-[#e2bf8d]/60 text-white hover:text-[#e2bf8d] transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <Wrench className="h-4 w-4 text-[#e2bf8d]" />
                  <span className="font-medium text-sm">Custom Tools</span>
                </div>
                <ArrowRight className="h-4 w-4 text-[#9da6b8] group-hover:text-[#e2bf8d] group-hover:translate-x-1 transition-all" />
              </Link>

              <Link
                href="/security-blog"
                className="flex-1 flex items-center justify-between px-5 py-4 rounded-xl bg-[#1d222e]/95 border border-[#2e364a] hover:border-[#e2bf8d]/60 text-white hover:text-[#e2bf8d] transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <FileText className="h-4 w-4 text-[#e2bf8d]" />
                  <span className="font-medium text-sm">Security Blog</span>
                </div>
                <ArrowRight className="h-4 w-4 text-[#9da6b8] group-hover:text-[#e2bf8d] group-hover:translate-x-1 transition-all" />
              </Link>
            </div>

            {/* Right Column: Terminal Prompt Card */}
            <div className="lg:col-span-7 rounded-xl bg-[#191d28]/95 border border-[#2e364a] p-6 font-mono text-xs shadow-lg flex flex-col justify-between">
              <div className="flex items-center gap-2 pb-4 border-b border-[#2e364a]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e2bf8d]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#a88d64]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#5c667a]" />
              </div>

              <div className="space-y-3.5 py-4 text-[#e4e8f0] leading-relaxed">
                <div>
                  <span className="text-[#c8a679]">$</span>{" "}
                  <span className="text-[#9da6b8]">whoami</span>
                  <div className="text-white font-semibold mt-1">ruwantha_harshamal</div>
                </div>

                <div>
                  <span className="text-[#c8a679]">$</span>{" "}
                  <span className="text-[#9da6b8]">cat skills.txt</span>
                  <div className="text-[#e2bf8d] mt-1">
                    &gt; Web Pentesting | API Sec | Network | AD | Red Teaming
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available for Engagements Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-semibold tracking-[0.15em] text-[#c8a679]">
              // <span className="text-white font-sans font-semibold tracking-normal text-sm ml-1">Available for Engagements</span>
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#2e364a] to-transparent" />
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#1d222e]/95 via-[#222736]/95 to-[#29241e]/95 border border-[#343c52] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Heading */}
              <div className="lg:col-span-4">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight leading-tight">
                  Need a
                  <br />
                  Penetration Test?
                </h2>
              </div>

              {/* Bullet List */}
              <div className="lg:col-span-5">
                <ul className="space-y-1.5 text-xs text-[#d5dae6]">
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e2bf8d]" />
                    Web Application Security Assessment
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e2bf8d]" />
                    API Security Testing
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e2bf8d]" />
                    Network &amp; Infrastructure Assessment
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e2bf8d]" />
                    Active Directory Security Assessment
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e2bf8d]" />
                    Red Teaming / Attack Simulation
                  </li>
                </ul>
              </div>

              {/* CTA Button */}
              <div className="lg:col-span-3 flex lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#e2bf8d] hover:bg-[#d4af7a] text-[#14171f] font-semibold text-xs sm:text-sm transition-all shadow-md"
                >
                  Get In Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Bottom Contact Bar */}
            <div className="pt-5 border-t border-[#2e364a] flex flex-wrap items-center gap-6 text-xs text-[#d5dae6]">
              <a
                href="https://linkedin.com/in/ruwantha-harshamal"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-[#e2bf8d] transition-colors"
              >
                <FaLinkedin className="h-4 w-4 text-[#e2bf8d]" />
                <span>linkedin.com/in/ruwantha-harshamal</span>
              </a>

              <span className="text-[#364056] hidden sm:inline">|</span>

              <a
                href="mailto:ruwanharsha01@gmail.com"
                className="flex items-center gap-2.5 hover:text-[#e2bf8d] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#e2bf8d]" />
                <span>ruwanharsha01@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
