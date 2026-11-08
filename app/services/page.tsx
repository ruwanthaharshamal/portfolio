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
  ArrowRight,
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
    badge: "Most Popular",
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
    badge: "High Demand",
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
    badge: null,
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
    badge: null,
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
    badge: null,
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
    badge: "Unique Differentiator",
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
    badge: "High Value",
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
    badge: null,
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
    <div className="relative min-h-screen overflow-hidden bg-[#14171f] py-12 sm:py-16">
      {/* Top Hero Atmospheric Silk Waves Background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] z-0 overflow-hidden">
        <img
          src="/images/crimson-waves-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-55 mix-blend-screen img-champagne"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14171f]/35 via-[#14171f]/70 to-[#14171f]" />
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-8 border-b border-[#2e364a]">
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono font-semibold tracking-[0.18em] text-[#c8a679] uppercase">
              // SERVICES
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white tracking-tight">
              Security Assessment{" "}
              <span className="italic font-normal text-[#e2bf8d]">Services</span>
            </h1>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs sm:text-sm text-[#d5dae6] leading-relaxed">
              Professional penetration testing and security assessment services delivered across
              enterprise and financial-sector environments.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#e2bf8d] hover:bg-[#d4af7a] text-[#14171f] font-semibold text-xs transition-all shadow-md"
              >
                Request an Engagement
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="mailto:ruwanharsha01@gmail.com"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#1d222e] hover:bg-[#252b3b] border border-[#2e364a] text-[#e2bf8d] font-mono text-xs transition-colors"
              >
                ruwanharsha01@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "13+", label: "Engagements Delivered" },
            { value: "10+", label: "Enterprise Clients" },
            { value: "160+", label: "Vulnerabilities Found" },
            { value: "8", label: "Service Offerings" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-[#1d222e]/95 border border-[#2e364a] p-5 text-center shadow-sm"
            >
              <p className="text-3xl font-bold font-serif text-[#e2bf8d]">{s.value}</p>
              <p className="text-[11px] font-mono text-[#9da6b8] mt-1 uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Services 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group relative flex flex-col rounded-2xl bg-[#1d222e]/95 border border-[#2e364a] hover:border-[#e2bf8d]/60 p-6 sm:p-7 transition-all duration-200 shadow-lg"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#332b20] via-[#242326] to-[#1a1e28] border border-[#4f4230] text-[#e2bf8d] flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h2 className="text-base sm:text-lg font-bold text-white">
                          {service.title}
                        </h2>
                        {service.badge && (
                          <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#2a251d] text-[#e2bf8d] border border-[#4f4230]">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#9da6b8] mt-0.5">{service.tagline}</p>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-mono text-[#c8a679]/80 pt-1">
                    0{index + 1}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#d5dae6] mb-5 leading-relaxed">
                  {service.description}
                </p>

                <h3 className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#c8a679] mb-3">
                  What&apos;s Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-6 flex-1">
                  {service.checks.map((check) => (
                    <div key={check} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-[#e2bf8d]" />
                      <span className="text-xs text-[#d5dae6]">{check}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto rounded-xl bg-[#252b3b] border border-[#364056] p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="h-3.5 w-3.5 text-[#e2bf8d]" />
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#e2bf8d]">
                      Deliverable
                    </span>
                  </div>
                  <p className="text-xs text-[#d5dae6] leading-relaxed">{service.deliverable}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
