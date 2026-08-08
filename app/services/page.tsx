import Link from "next/link"
import {
  Globe,
  Plug,
  LayoutTemplate,
  Network,
  Settings,
  Mail,
  Shield,
  Smartphone,
  ChevronRight,
  FileText,
} from "lucide-react"

export const metadata = {
  title: "Services | Ruwantha Harshamal",
  description:
    "Professional penetration testing and security assessment services — web app, API, Active Directory, network VAPT, phishing simulation, and more.",
}

const services = [
  {
    id: "web-vapt",
    icon: Globe,
    color: "text-primary",
    bg: "bg-primary/10",
    badge: "Most Popular",
    badgeColor: "bg-primary/20 text-primary border-primary/30",
    title: "Web Application VAPT",
    tagline: "Your defenses tested against real-world attack techniques",
    description:
      "A thorough black-box web application security assessment aligned with OWASP Top 10 and industry best practices. Ideal for companies looking to secure production web apps before threat actors find the gaps.",
    checks: [
      "Black-box application assessment",
      "Authentication & session management",
      "Authorization / IDOR testing",
      "SQL Injection & XSS & CSRF",
      "File upload & SSRF vulnerabilities",
      "Security misconfiguration",
      "Business logic testing",
      "Security headers review",
      "API endpoint testing",
      "Input validation bypass",
    ],
    deliverable:
      "Professional PDF report: Executive Summary · Scope · Methodology · Risk Rating (CVSS) · Vulnerability Details with Evidence · Impact · Remediation · Retest Recommendation",
  },
  {
    id: "api-pentest",
    icon: Plug,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    badge: "High Demand",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    title: "API Penetration Testing",
    tagline: "REST API security testing with request/response evidence",
    description:
      "Many organizations deploy APIs without dedicated security testing. This assessment covers the full OWASP API Security Top 10, identifying broken access control, authentication flaws, and business logic issues specific to API surfaces.",
    checks: [
      "Authentication & JWT security",
      "Broken Object Level Authorization (BOLA/IDOR)",
      "Rate limiting & resource exhaustion",
      "Injection & mass assignment",
      "Sensitive data exposure",
      "HTTP method abuse",
      "CORS misconfiguration",
      "API versioning exposure",
      "Business logic flaws",
      "Error handling & information leakage",
    ],
    deliverable:
      "Detailed report with raw request/response evidence, risk ratings, and remediation guidance for each finding.",
  },
  {
    id: "wordpress",
    icon: LayoutTemplate,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    badge: null,
    badgeColor: "",
    title: "WordPress Security Assessment",
    tagline: "Comprehensive audit of your WordPress site and plugins",
    description:
      "WordPress powers over 40% of the web and is a constant target. This assessment covers the core, plugins, themes, and common OWASP issues specific to the WordPress ecosystem.",
    checks: [
      "WordPress core version & patches",
      "Plugin & theme vulnerability review",
      "Authentication & user enumeration",
      "XML-RPC abuse exposure",
      "File & directory exposure",
      "Security headers",
      "Backup file discovery",
      "Configuration hardening",
      "Common OWASP issues",
      "Known CVE identification",
    ],
    deliverable:
      "Structured report: Component → Finding → Risk Level → Remediation, with prioritized fix list.",
  },
  {
    id: "network-vapt",
    icon: Network,
    color: "text-green-500",
    bg: "bg-green-500/10",
    badge: null,
    badgeColor: "",
    title: "External Network / Infrastructure VAPT",
    tagline: "Attack surface reduction for internet-facing infrastructure",
    description:
      "A controlled external network vulnerability assessment targeting your public-facing infrastructure — identifying exposed services, vulnerable software, and misconfigurations that attackers would exploit.",
    checks: [
      "IP address & domain enumeration",
      "Subdomain discovery",
      "Exposed management interfaces",
      "Service fingerprinting (SSH, FTP, SMTP, DNS)",
      "TLS/SSL configuration review",
      "Web service vulnerability scanning",
      "Outdated software & CVE identification",
      "Port & protocol misconfigurations",
      "Sensitive data in public services",
      "Firewall rule validation",
    ],
    deliverable:
      "Risk-rated vulnerability report with CVSS scores, evidence, and a prioritized remediation roadmap.",
  },
  {
    id: "config-review",
    icon: Settings,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    badge: null,
    badgeColor: "",
    title: "Security Configuration Review",
    tagline: "Harden your servers, firewalls, and cloud without exploitation",
    description:
      "A non-intrusive configuration review to identify security gaps in web servers, network devices, and cloud environments. Ideal for compliance-driven assessments or hardening existing infrastructure.",
    checks: [
      "Apache / Nginx web server hardening",
      "Firewall & VPN policy review",
      "DNS security configuration",
      "Linux & Windows server hardening",
      "Cloud configuration review (AWS / Azure basics)",
      "TLS/SSL configuration",
      "Service exposure analysis",
      "Logging & monitoring gaps",
      "Access control policies",
      "Patch management posture",
    ],
    deliverable:
      "Structured: Configuration → Finding → Risk → Recommendation. Clean and actionable for sysadmins and developers.",
  },
  {
    id: "phishing",
    icon: Mail,
    color: "text-red-500",
    bg: "bg-red-500/10",
    badge: "Unique Differentiator",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
    title: "Phishing Simulation & Awareness Assessment",
    tagline: "Measure your team's human-layer security awareness",
    description:
      "Using GoPhish and PhishingBox with customized templates, I design and execute authorized phishing simulation campaigns that assess your organization's susceptibility to social engineering and credential harvesting.",
    checks: [
      "Campaign design & threat modelling",
      "Custom phishing email templates",
      "Credential harvesting landing pages",
      "Finance, productivity & collaboration lures",
      "Email deliverability & bypass configuration",
      "Click rate & credential submission tracking",
      "Reporting rate measurement",
      "Security awareness gap analysis",
      "Department-level breakdown",
      "Recommendations for awareness training",
    ],
    deliverable:
      "Campaign report with metrics, user behaviour analysis, findings, and targeted awareness recommendations.",
  },
  {
    id: "active-directory",
    icon: Shield,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    badge: "High Value",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    title: "Active Directory Security Assessment",
    tagline: "Simulate real attacker lateral movement in your AD environment",
    description:
      "An authorized internal Active Directory assessment that chains enumeration, credential abuse, and lateral movement to expose privilege escalation paths — the kind that standard vulnerability scanners miss entirely.",
    checks: [
      "Domain configuration & password policies",
      "Privileged group exposure",
      "Excessive permissions review",
      "Kerberoasting & AS-REP Roasting exposure",
      "LLMNR / NBT-NS poisoning",
      "SMB & LDAP security",
      "Delegation misconfigurations",
      "GPO hardening",
      "Local administrator exposure",
      "Attack path visualisation (BloodHound)",
    ],
    deliverable:
      "Attack path report with annotated BloodHound graphs, privilege escalation chain documentation, and remediation steps.",
  },
  {
    id: "mobile",
    icon: Smartphone,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    badge: null,
    badgeColor: "",
    title: "Mobile Application Security Testing",
    tagline: "Android APK analysis — static and dynamic security assessment",
    description:
      "A structured mobile application security assessment covering static analysis, dynamic testing, and API communication review for Android applications, aligned with the OWASP Mobile Security Testing Guide (MSTG).",
    checks: [
      "APK static analysis (JADX / MobSF)",
      "Dynamic instrumentation (Frida / adb)",
      "Insecure data storage",
      "Authentication & authorization testing",
      "Certificate pinning & TLS validation",
      "API communication analysis via Burp Suite",
      "WebView security",
      "Exported components & IPC",
      "Sensitive data disclosure",
      "Reverse engineering exposure",
    ],
    deliverable:
      "Mobile security report with static/dynamic findings, Burp intercept evidence, risk ratings, and remediation guidance.",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-0 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-20 pb-16 md:pt-28 md:pb-20 border-b">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-6 font-medium">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Available for Engagements
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 max-w-3xl">
            Security Assessment{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Services
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Professional penetration testing and security assessment services delivered by an offensive
            security practitioner with 1.5+ years of client-facing experience across enterprise and
            financial-sector environments.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Request an Engagement
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
            <a
              href="mailto:ruwanharsha01@gmail.com"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-7 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              ruwanharsha01@gmail.com
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "13+", label: "Engagements Delivered" },
              { value: "10+", label: "Enterprise Clients" },
              { value: "160+", label: "Vulnerabilities Found" },
              { value: "8", label: "Service Offerings" },
            ].map((s) => (
              <div key={s.label} className="border rounded-xl p-4 bg-card/50 text-center">
                <p className="text-3xl font-extrabold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group relative flex flex-col border rounded-2xl bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" />

                <div className="p-7 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${service.bg} ${service.color} shrink-0`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h2 className="text-lg font-bold leading-snug">{service.title}</h2>
                          {service.badge && (
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${service.badgeColor}`}
                            >
                              {service.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{service.tagline}</p>
                      </div>
                    </div>
                    <span className="shrink-0 text-xs font-mono text-muted-foreground/50 pt-1">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* What's included */}
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    What's Included
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-6 flex-1">
                    {service.checks.map((check) => (
                      <div key={check} className="flex items-start gap-2">
                        <span className={`mt-0.5 h-1.5 w-1.5 rounded-full shrink-0 ${service.bg} ${service.color} border ${service.bg.replace("bg-", "border-")}`} />
                        <span className="text-xs text-muted-foreground">{check}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverable */}
                  <div className="mt-auto rounded-xl bg-secondary/40 border border-secondary p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <FileText className="h-3.5 w-3.5 text-primary" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                        Deliverable
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{service.deliverable}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-blue-500/10 border border-primary/20 p-8 md:p-14 text-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Ready to Secure Your Systems?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base">
              All engagements are conducted in a professional, authorized, and documented manner. Get in
              touch to discuss scope, timeline, and deliverables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Get In Touch
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="mailto:ruwanharsha01@gmail.com"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
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
