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
            <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
              <p>
                I am a results-driven offensive security professional with hands-on experience across vulnerability assessment, penetration testing, and security consultancy. 
                Currently working as a Trainee Information Security Consultant at Trustvault, where I specialize in web, API, network, and Active Directory penetration testing.
              </p>
              <p>
                My passion lies in red teaming and securing critical systems by thinking like an adversary. I continuously strive to uncover complex vulnerabilities and provide actionable remediation strategies to enhance the overall security posture of organizations.
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
                <p className="text-sm text-muted-foreground mb-4">Sep 2025 – Present</p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                  <li>Internal VAPT (black box & grey box) using Nessus</li>
                  <li>External Network Penetration Testing (real-world attack simulations)</li>
                  <li>Web Application Pentesting using Burp Suite (OWASP Top 10)</li>
                  <li>API Penetration Testing (auth, injection flaws)</li>
                  <li>Active Directory Pentesting (enumeration, privilege escalation, lateral movement)</li>
                  <li>Wireless & Mobile Pentesting</li>
                  <li>Endpoint Security Assessments</li>
                  <li>Firewall, Database & DNS configuration reviews</li>
                  <li>Phishing simulations using PhishingBox</li>
                  <li>Security compliance assessments & full pentest report writing</li>
                </ul>
              </div>

              <div className="relative">
                <span className="absolute -left-[35px] top-1 flex h-4 w-4 rounded-full bg-muted ring-4 ring-background"></span>
                <h3 className="text-xl font-bold">Cyber Security Intern</h3>
                <p className="text-foreground/80 font-medium mb-1">Centre for Defence Research and Development (Ministry of Defence Sri Lanka)</p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm mt-4">
                  <li>Built open-source SOC (SIEM, HIDS, NIDS, EDR, SOAR)</li>
                  <li>Threat hunting & intelligence analysis</li>
                  <li>Bluetooth & Wireless penetration testing</li>
                  <li>Hardware pentesting exposure</li>
                  <li>Network device configuration (routers, switches, firewalls)</li>
                  <li>VMware ESXi & server handling</li>
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
              <h3 className="text-lg font-bold">BSc (Hons) in Information Technology (Cyber Security)</h3>
              <p className="text-primary font-medium">Sri Lanka Institute of Information Technology</p>
              <p className="text-sm text-muted-foreground mt-1">2022 – 2026</p>
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
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Wireless & Mobile</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Red Team Ops</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-foreground/80">Tools & Infra</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Burp Suite</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Metasploit</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Nessus</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">PhishingBox</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">ELK Stack</span>
                  <span className="bg-secondary/50 text-secondary-foreground text-xs px-2.5 py-1 rounded-md">VMware ESXi</span>
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
                  <p className="font-medium text-sm">CRTA</p>
                  <p className="text-xs text-muted-foreground">Certified Red Team Analyst</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">EJ</div>
                <div>
                  <p className="font-medium text-sm">eJPT</p>
                  <p className="text-xs text-muted-foreground">Junior Penetration Tester</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 rounded bg-muted flex items-center justify-center text-foreground/70 font-bold text-xs">OC</div>
                <div>
                  <p className="font-medium text-sm">Oracle Cloud Foundations Associate</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 rounded bg-muted flex items-center justify-center text-foreground/70 font-bold text-xs">CC</div>
                <div>
                  <p className="font-medium text-sm">CCNA</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 rounded bg-muted flex items-center justify-center text-foreground/70 font-bold text-xs">LSA</div>
                <div>
                  <p className="font-medium text-sm">Linux Server Administration</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
