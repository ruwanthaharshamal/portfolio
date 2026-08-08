import Link from "next/link"
import { ShieldAlert, Terminal, Lock, Code, Server, Wifi, Smartphone, ChevronRight, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-8 font-medium">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Offensive Security Professional
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">
            Offensive Security Professional &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Red Teamer</span>
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
              href="/security-blog"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Security Blog
            </Link>
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
            <h3 className="text-xl font-semibold mb-2">Web &amp; API Pentesting</h3>
            <p className="text-sm text-muted-foreground">
              Deep expertise in OWASP Top 10, advanced injection attacks, authentication flaws, business logic vulnerabilities, and modern API security.
            </p>
          </div>

          <div className="flex flex-col items-start p-6 rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-md">
            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 mb-4">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Network &amp; Infrastructure</h3>
            <p className="text-sm text-muted-foreground">
              Internal and external VAPT, firewall and DNS configuration reviews, endpoint security assessments, and real-world attack simulations.
            </p>
          </div>

          <div className="flex flex-col items-start p-6 rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-md">
            <div className="p-3 rounded-lg bg-green-500/10 text-green-500 mb-4">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Active Directory</h3>
            <p className="text-sm text-muted-foreground">
              Advanced AD enumeration, privilege escalation path analysis, lateral movement, credential abuse, and post-exploitation in enterprise environments.
            </p>
          </div>

          <div className="flex flex-col items-start p-6 rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-md">
            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500 mb-4">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Red Teaming</h3>
            <p className="text-sm text-muted-foreground">
              Adversary simulation, defense evasion, phishing simulation campaigns with GoPhish &amp; PhishingBox, and full-chain attack development.
            </p>
          </div>

          <div className="flex flex-col items-start p-6 rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-md">
            <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500 mb-4">
              <Server className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Vulnerability Assessment</h3>
            <p className="text-sm text-muted-foreground">
              Comprehensive internal and external vulnerability assessments across enterprise environments using Nessus, covering OS, service, and configuration weaknesses with CVSS risk rating.
            </p>
          </div>

          <div className="flex flex-col items-start p-6 rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-md">
            <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-500 mb-4">
              <Wifi className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Wireless Security</h3>
            <p className="text-sm text-muted-foreground">
              Wireless network penetration testing and Bluetooth security assessments using dedicated hardware adapters in authorized environments.
            </p>
          </div>

          <div className="flex flex-col items-start p-6 rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-md">
            <div className="p-3 rounded-lg bg-pink-500/10 text-pink-500 mb-4">
              <Smartphone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile App Pentesting</h3>
            <p className="text-sm text-muted-foreground">
              Mobile application security assessments covering insecure data storage, improper authentication, and platform-specific vulnerabilities on Android and iOS.
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
                <Link href="/security-blog" className="group flex items-center text-sm font-medium text-foreground hover:text-primary">
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

      {/* Contact / Hire Me Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-blue-500/10 border border-primary/20 p-8 md:p-14 text-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="relative">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-6 font-medium">
              <Mail className="h-3.5 w-3.5 mr-2" />
              Available for Engagements
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Need a Penetration Test?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4 text-lg">
              I offer professional security assessment services — from web application and API testing to full Active Directory red team engagements. 
              Let&apos;s identify your attack surface before adversaries do.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8 text-sm">
              {[
                "Web App Pentesting",
                "API Security",
                "Network VAPT",
                "Active Directory",
                "Wireless",
                "Mobile App",
                "Phishing Simulation",
              ].map((service) => (
                <span key={service} className="bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  {service}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
              <a
                href="mailto:ruwanharsha01@gmail.com"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                ruwanharsha01@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
