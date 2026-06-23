import Link from "next/link"
import Image from "next/image"

import { ShieldAlert, Terminal, Lock, Code, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-8 font-medium">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Information Security Consultant
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                Offensive Security Professional & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Red Teamer</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
                Specializing in web, API, network, and Active Directory penetration testing.
                Passionate about securing critical systems and breaking things to make them stronger.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  About Me
                </Link>
                <Link
                  href="/writeups"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Read Writeups
                </Link>
              </div>
            </div>
            
            <div className="relative hidden md:flex justify-center items-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Image 
                  src="/my.png" 
                  alt="Ruwantha Harshamal" 
                  width={400} 
                  height={400} 
                  className="rounded-2xl border border-primary/20 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" 
                  priority 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Core Expertise</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-start p-6 rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-md">
            <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Web App Pentesting</h3>
            <p className="text-sm text-muted-foreground">
              Deep expertise in OWASP Top 10, advanced injection attacks, logic flaws, and modern web framework vulnerabilities.
            </p>
          </div>

          <div className="flex flex-col items-start p-6 rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-md">
            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 mb-4">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Network Security</h3>
            <p className="text-sm text-muted-foreground">
              Internal/external VAPT, firewalls review, endpoint security, and real-world attack simulations.
            </p>
          </div>

          <div className="flex flex-col items-start p-6 rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-md">
            <div className="p-3 rounded-lg bg-green-500/10 text-green-500 mb-4">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Active Directory</h3>
            <p className="text-sm text-muted-foreground">
              Advanced AD enumeration, privilege escalation paths, lateral movement, and post-exploitation.
            </p>
          </div>

          <div className="flex flex-col items-start p-6 rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-md">
            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500 mb-4">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Red Teaming</h3>
            <p className="text-sm text-muted-foreground">
              Adversary simulation, defense evasion, phishing campaigns, and full-chain exploit development.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="rounded-3xl border bg-secondary/30 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Explore My Work</h2>
              <p className="text-muted-foreground mb-6">
                Dive into my detailed writeups on vulnerabilities I&apos;ve discovered, check out my custom security tools, or read about the latest cybersecurity trends on my blog.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="group flex items-center text-sm font-medium text-foreground hover:text-primary">
                  Projects <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/tools" className="group flex items-center text-sm font-medium text-foreground hover:text-primary">
                  Custom Tools <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/blog" className="group flex items-center text-sm font-medium text-foreground hover:text-primary">
                  Security Blog <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="bg-card w-full rounded-2xl border p-6 font-mono text-sm shadow-sm">
              <div className="flex gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-muted-foreground">
                <p>~ <span className="text-green-500">whoami</span></p>
                <p className="text-foreground mt-1">ruwantha_harshamal</p>
                <p className="mt-3">~ <span className="text-green-500">cat skills.txt</span></p>
                <p className="text-foreground mt-1">[&apos;Web Pentesting&apos;, &apos;API Sec&apos;, &apos;Network&apos;, &apos;AD&apos;, &apos;Red Teaming&apos;]</p>
                <p className="mt-3 text-primary animate-pulse">_</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
