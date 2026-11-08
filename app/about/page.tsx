import { GraduationCap, Award, Settings } from "lucide-react"

export const metadata = {
  title: "About Me | Ruwantha Harshamal",
  description:
    "Cybersecurity Engineer and Penetration Tester professional summary, experience, education, skills, and certifications.",
}

export default function About() {
  const experiences = [
    {
      role: "Cyber Security Engineer",
      company: "Dedigama Group",
      period: "Aug 2026 – Present",
      summary:
        "Leading internal security operations, vulnerability management, penetration testing, and enterprise security architecture improvements across group subsidiaries.",
      highlights: [
        "Spearheading continuous offensive security assessments, web/API security testing, and infrastructure hardening across group business units.",
        "Overseeing threat detection, vulnerability remediation lifecycles, and security posture governance.",
      ],
    },
    {
      role: "Trainee Information Security Consultant",
      company: "Trustvault (Pvt) Ltd",
      period: "Sep 2025 – July 2026",
      summary:
        "Involved in security assessments, vulnerability analysis, and implementation of security controls for enterprise clients.",
      highlights: [
        "Managed end-to-end security engagement delivery across 10+ enterprise clients, including scoping, stakeholder communication, technical assessment, and post-engagement support.",
        "Delivered 13+ assessment engagements spanning Internal/External VAPT, Web Application, API, Active Directory, Wireless, Mobile, Endpoint Security, Firewall/DNS Configuration Reviews, and Phishing Simulations.",
        "Surfaced 160+ vulnerabilities (80+ High, 60+ Medium severity) across 10+ enterprise environments, translating findings into risk-rated reports that informed client remediation roadmaps.",
        "Simulated real-world attacker behavior in Active Directory environments — domain enumeration, credential abuse, and lateral movement to expose privilege escalation paths.",
        "Developed and executed phishing simulation campaigns using GoPhish and PhishingBox targeting finance, productivity, and collaboration platforms.",
      ],
    },
    {
      role: "Intern – Cyber Security",
      company: "Centre for Defence Research and Development (CDRD), Ministry of Defence, Sri Lanka",
      period: "Jul 2024 – Jan 2025",
      summary:
        "Assisted in security operations, monitoring, and security research activities within a defence environment.",
      highlights: [
        "Designed and implemented a fully functional open-source SOC (SIEM, HIDS, NIDS, EDR, SOAR, and network monitoring) performing L1 and L2 analysis.",
        "Conducted advanced threat hunting and intelligence gathering using open-source tools in a controlled lab environment.",
        "Performed Bluetooth, Wireless, and hardware penetration testing using dedicated adapters and physical attack vectors.",
        "Administered servers, VMware ESXi virtualized environments, routers, switches, and firewalls to harden infrastructure security.",
      ],
    },
  ]

  const certs = [
    {
      name: "CRTA (Certified Red Team Analyst)",
      issuer: "CyberWarFare Labs · Nov 2025",
    },
    {
      name: "eJPT (eLearnSecurity Junior Penetration Tester)",
      issuer: "INE Security · Dec 2025",
    },
    {
      name: "Oracle Cloud Infrastructure 2024 Foundations Associate",
      issuer: "Oracle · Feb 2025",
    },
    {
      name: "CCNA (Cisco Certified Network Associate)",
      issuer: "Vibernets Academy · Jul 2024",
    },
    {
      name: "Linux Server Administration and Security",
      issuer: "Vibernets Academy · May 2024",
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#14171f] py-12 sm:py-16">
      {/* Subtle Bottom Atmospheric Wave/Mountain Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[380px] z-0 overflow-hidden">
        <img
          src="/images/crimson-waves-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-bottom opacity-55 mix-blend-screen img-champagne"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14171f] via-[#14171f]/55 to-[#14171f]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
        {/* Top Section: Professional Summary (Left) + Arched Mountain Image (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="text-xs font-mono font-semibold tracking-[0.18em] text-[#c8a679] uppercase">
              // ABOUT ME
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
              Professional Summary
            </h1>

            <div className="space-y-3 text-xs sm:text-sm text-[#d5dae6] leading-relaxed max-w-2xl">
              <p>
                A Cybersecurity Engineer and Penetration Tester with experience in security
                assessments, vulnerability research and offensive security engagements across
                enterprise and financial-sector environments. Focused on identifying real-world
                security weaknesses and helping organizations improve their security posture.
              </p>
              <p className="text-[#9da6b8]">
                Delivered <span className="text-[#e2bf8d] font-medium">13+ security assessment engagements</span>{" "}
                for <span className="text-[#e2bf8d] font-medium">10+ enterprise clients</span>, surfacing{" "}
                <span className="text-[#e2bf8d] font-medium">160+ vulnerabilities</span> and producing
                risk-rated reports that directly informed remediation roadmaps. CRTA and eJPT
                certified, with hands-on red team and phishing simulation experience.
              </p>
            </div>
          </div>

          {/* Arched Mountain Image Frame matching Screen 02 */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-60 sm:w-64 h-48 sm:h-52 rounded-t-full rounded-b-2xl overflow-hidden border border-[#2e364a] shadow-2xl relative bg-[#1d222e]">
              <img
                src="/images/crimson-mountains.jpg"
                alt="Mountain Peaks"
                className="w-full h-full object-cover object-center scale-105 img-champagne"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14171f]/65 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Section: Experience */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-semibold tracking-[0.15em] text-[#c8a679]">
              // <span className="text-white font-sans font-semibold tracking-normal text-sm ml-1">Experience</span>
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#2e364a] to-transparent" />
          </div>

          <div className="relative pl-6 space-y-8 before:absolute before:left-[6px] before:top-2 before:bottom-2 before:w-[1.5px] before:bg-[#2e364a]">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                <span
                  className={`absolute -left-[23px] top-1.5 h-3 w-3 rounded-full border-2 ${
                    idx === 0
                      ? "border-[#e2bf8d] bg-[#e2bf8d]"
                      : "border-[#c8a679] bg-[#14171f]"
                  }`}
                />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="space-y-1.5 max-w-3xl">
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="text-xs text-[#e2bf8d] font-medium">{exp.company}</div>
                    <p className="text-xs text-[#d5dae6] leading-relaxed pt-0.5">
                      {exp.summary}
                    </p>
                    <ul className="space-y-1 pt-1.5 pl-4 list-disc text-[11px] text-[#9da6b8] leading-relaxed">
                      {exp.highlights.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs font-mono text-[#9da6b8] shrink-0 sm:text-right pt-0.5">
                    {exp.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 2-Column Split: Education & Technical Skills (Left) | Certifications (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-[#2e364a]">
          {/* Left Column: Education + Technical Skills */}
          <div className="lg:col-span-6 space-y-8 lg:pr-6 lg:border-r lg:border-[#2e364a]">
            {/* Education */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-white">
                <GraduationCap className="h-4 w-4 text-[#e2bf8d]" />
                <span>Education</span>
              </div>

              <div className="pl-6 space-y-1 border-b border-[#2e364a] pb-5">
                <div className="text-xs sm:text-sm font-semibold text-white">
                  BSc (Hons) in Information Technology
                </div>
                <div className="text-xs text-[#d5dae6]">
                  Specializing in Cyber Security
                </div>
                <div className="flex items-center justify-between text-xs text-[#9da6b8] pt-1">
                  <span>SLIIT (Sri Lanka Institute of Information Technology)</span>
                  <span className="font-mono">2022 – 2026</span>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-white">
                  <Settings className="h-4 w-4 text-[#e2bf8d]" />
                  <span>Technical Skills</span>
                </div>
                <span className="text-xs font-mono text-[#9da6b8]">2022 – 2026</span>
              </div>

              <div className="pl-6 space-y-3.5 text-xs">
                <div>
                  <div className="font-semibold text-[#e2bf8d] mb-1">Domains</div>
                  <div className="text-[#d5dae6] leading-relaxed">
                    Web Security, API Security, Network Security, Active Directory, Red Teaming,
                    SOC, Wireless &amp; Mobile Security, Firewall / DNS / DB Reviews, Phishing
                    Simulations, Vulnerability Assessment
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-[#e2bf8d] mb-1">Tools &amp; Platforms</div>
                  <div className="text-[#d5dae6] leading-relaxed">
                    Nmap, BurpSuite Pro, OWASP ZAP, Metasploit, Nessus, Wireshark, BloodHound,
                    CrackMapExec / NetExec, Impacket, ffuf, GoPhish, PhishingBox, ELK, Wazuh,
                    Suricata, Zeek, Splunk, VMware, Docker, Linux
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-6 space-y-4 lg:pl-2">
            <div className="flex items-center gap-2.5 text-sm font-semibold text-white">
              <Award className="h-4 w-4 text-[#e2bf8d]" />
              <span>Certifications</span>
            </div>

            <ul className="space-y-3 pl-2 text-xs">
              {certs.map((cert, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#e2bf8d] shrink-0" />
                  <div>
                    <div className="text-white font-medium">{cert.name}</div>
                    <div className="text-[11px] text-[#9da6b8]">{cert.issuer}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
