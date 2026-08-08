import { Shield, Briefcase, GraduationCap, Award, Terminal } from "lucide-react"

export const metadata = {
  title: "About | Ruwantha Harshamal",
  description: "Learn more about my experience, skills, and background in offensive security.",
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-5xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Terminal className="h-6 w-6 text-primary" />
              Professional Summary
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground space-y-3">
              <p>
                Offensive Security professional with 1.5 years of client-facing experience delivering Web Application, API,
                Network, Active Directory, Wireless, and Mobile Application penetration testing across enterprise and
                financial-sector environments.
              </p>
              <p>
                Delivered <strong className="text-foreground">13+ security assessment engagements</strong> for{" "}
                <strong className="text-foreground">10+ clients</strong>, surfacing{" "}
                <strong className="text-foreground">160+ vulnerabilities</strong> and producing risk-rated reports that
                directly informed remediation roadmaps. CRTA and eJPT certified, with hands-on red team and phishing
                simulation experience.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Experience
            </h2>
            
            <div className="space-y-8 border-l-2 border-primary/20 pl-6 ml-3">
              <div className="relative">
                <span className="absolute -left-[35px] top-1 flex h-4 w-4 rounded-full bg-primary ring-4 ring-background"></span>
                <h3 className="text-xl font-bold">Trainee Information Security Consultant</h3>
                <p className="text-primary font-medium mb-1">Trustvault</p>
                <p className="text-sm text-muted-foreground mb-4">Sep 2025 – July 2026</p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                  <li>Managed end-to-end security engagement delivery across 10+ enterprise clients, including scoping, stakeholder communication, technical assessment, and post-engagement support.</li>
                  <li>Delivered 13+ assessment engagements spanning Internal/External VAPT, Web Application, API, Active Directory, Wireless, Mobile, Endpoint Security, Firewall/DNS Configuration Reviews, and Phishing Simulations.</li>
                  <li>Surfaced 160+ vulnerabilities (80+ High, 60+ Medium severity) across 10+ enterprise environments, translating findings into risk-rated reports that informed client remediation roadmaps.</li>
                  <li>Uncovered critical authentication, authorization, and injection flaws across web and API platforms using Burp Suite Professional against OWASP Top 10 threat classes.</li>
                  <li>Simulated real-world attacker behavior in Active Directory environments — domain enumeration, credential abuse, and lateral movement to expose privilege escalation paths.</li>
                  <li>Assessed Firewall, DNS, and Database configurations, identifying critical misconfigurations across enterprise infrastructure.</li>
                  <li>Developed and executed phishing simulation campaigns using GoPhish and PhishingBox targeting finance, productivity, and collaboration platforms.</li>
                </ul>
              </div>

              <div className="relative">
                <span className="absolute -left-[35px] top-1 flex h-4 w-4 rounded-full bg-muted ring-4 ring-background"></span>
                <h3 className="text-xl font-bold">Intern – Cyber Security</h3>
                <p className="text-foreground/80 font-medium mb-1">Centre for Defence Research and Development (CDRD), Ministry of Defence, Sri Lanka</p>
                <p className="text-sm text-muted-foreground mb-4">Jul 2024 – Jan 2025</p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                  <li>Designed and implemented a fully functional open-source SOC (SIEM, HIDS, NIDS, EDR, SOAR, and network monitoring) performing L1 and L2 analysis.</li>
                  <li>Conducted advanced threat hunting and intelligence gathering using open-source tools in a controlled lab environment.</li>
                  <li>Performed Bluetooth and Wireless penetration testing using dedicated adapters.</li>
                  <li>Gained hands-on experience with hardware penetration testing tools, simulating real-world physical attack vectors.</li>
                  <li>Administered servers and VMware ESXi virtualized environments, including Windows installation and configuration.</li>
                  <li>Configured and managed network devices: routers, switches, and firewalls to harden infrastructure security.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h2>
            <div className="border rounded-2xl p-6 bg-card">
              <h3 className="text-lg font-bold">BSc (Hons) in Information Technology, Specializing in Cyber Security</h3>
              <p className="text-primary font-medium">Sri Lanka Institute of Information Technology (SLIIT), Malabe, Sri Lanka</p>
              <p className="text-sm text-muted-foreground mt-1">2022 – 2026 (Graduated)</p>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="border rounded-2xl p-6 bg-card/50">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Technical Skills
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2 text-foreground/80">Domains</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Web App Pentesting</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">API Pentesting</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Network Pentesting</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Active Directory</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Wireless &amp; Mobile</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Red Team Ops</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Firewall / DNS / DB Reviews</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Phishing Simulations</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-foreground/80">Tools &amp; Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Burp Suite Pro</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Metasploit</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Nessus</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">GoPhish</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">PhishingBox</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Nmap</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">ffuf</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">BloodHound</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Impacket</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">NetExec</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">ELK Stack</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Wazuh</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Suricata</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Zeek</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Linux</span>
                </div>
              </div>
            </div>
          </section>

          <section className="border rounded-2xl p-6 bg-card/50">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Certifications
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">CR</div>
                <div>
                  <p className="font-medium text-sm">CRTA — Certified Red Team Analyst</p>
                  <p className="text-xs text-muted-foreground">CyberWarFare Labs · Nov 2025</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">EJ</div>
                <div>
                  <p className="font-medium text-sm">eJPT — Junior Penetration Tester</p>
                  <p className="text-xs text-muted-foreground">INE Security · Dec 2025</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 rounded bg-muted flex items-center justify-center text-foreground/70 font-bold text-xs">OC</div>
                <div>
                  <p className="font-medium text-sm">Oracle Cloud Infrastructure 2024 Foundations Associate</p>
                  <p className="text-xs text-muted-foreground">Oracle · Feb 2025</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 rounded bg-muted flex items-center justify-center text-foreground/70 font-bold text-xs">CC</div>
                <div>
                  <p className="font-medium text-sm">CCNA — Cisco Certified Network Associate</p>
                  <p className="text-xs text-muted-foreground">Vibernets Academy · Jul 2024</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 rounded bg-muted flex items-center justify-center text-foreground/70 font-bold text-xs">LS</div>
                <div>
                  <p className="font-medium text-sm">Linux Server Administration and Security</p>
                  <p className="text-xs text-muted-foreground">Vibernets Academy · May 2024</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
