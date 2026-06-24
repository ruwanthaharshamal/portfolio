---
title: "[ATT&CK Series] T1590 - Gather Victim Network Information"
date: "2026-06-24T00:00:02Z"
tags: ["mitre-attack", "reconnaissance", "red-teaming"]
description: "How attackers map perimeter infrastructure, DNS records, and network topology to identify entry points."
series: "MITRE ATT&CK Reconnaissance"
---

### Overview

Adversaries gather information about a target's network before attacking. This includes domain names, DNS records, IP ranges, network topology, trust relationships, and security appliances. Network intelligence helps attackers map the perimeter, identify entry points, and plan lateral movement once inside.

---

### Sub-Techniques

#### T1590.001 — Domain Properties

Attackers collect domain registration data including registrar info, contacts, name servers, and business addresses. Cloud environments expose additional details — Office 365's `GetUserRealm` and `autodiscover` endpoints can reveal tenant domain configurations without authentication.

**Real-world:** Sandworm Team conducted domain reconnaissance on Georgia's parliamentary website before their 2019 attack.

#### T1590.002 — DNS

DNS records reveal subdomains, mail servers, and third-party providers. MX and TXT/SPF records expose use of services like Office 365, G Suite, Salesforce, or Zendesk. Misconfigured DNS servers may allow **zone transfer (AXFR)** attacks, dumping the entire DNS record set in one query.

#### T1590.003 — Network Trust Dependencies

Attackers map third-party relationships — MSPs, contractors, and partners with elevated network access. Compromising a trusted third party (as in the SolarWinds attack) grants access without directly attacking the primary target.

#### T1590.004 — Network Topology

Physical and logical network layout including routers, gateways, subnets, and internal segmentation. **Salt Typhoon** extracted configuration files from compromised network devices to identify upstream and downstream segments. **Volt Typhoon** conducted extensive topology mapping as part of pre-compromise recon.

#### T1590.005 — IP Addresses

Public IP ranges reveal organizational size, ISP, hosting provider, and physical location. **HAFNIUM** enumerated IP addresses for publicly accessible Exchange servers. **Andariel** filtered watering hole attacks to specific IP ranges to target only relevant victims.

#### T1590.006 — Network Security Appliances

Details about firewalls, proxies, content filters, NIDS, and bastion hosts. Knowing what security appliances are deployed helps attackers craft evasion strategies or find unpatched vulnerabilities in perimeter devices. **Volt Typhoon** specifically identified target security measures during pre-compromise recon.

---

### Collection Methods & Tools

|Sub-technique|Methods|Tools|
|---|---|---|
|Domain Properties|WHOIS lookup, O365 API queries|whois, AADInternals, o365enum|
|DNS|DNS queries, zone transfer, passive DNS|dig, dnsx, dnsrecon, SecurityTrails|
|Network Trust Dependencies|OSINT, phishing, job postings|Maltego, SpiderFoot|
|Network Topology|Active scanning, config file analysis, OSINT|Nmap, Lansweeper, Advanced Port Scanner|
|IP Addresses|WHOIS, ARIN/RIPE lookups, active scanning|Shodan, Censys, Masscan|
|Security Appliances|Banner grabbing, Shodan, job postings|Shodan, Nmap, Google dorking|

---

### Real-World Examples

- **HAFNIUM** — enumerated FQDNs and IP addresses of Exchange servers before exploitation
- **Volt Typhoon** — conducted deep pre-compromise network recon including topology mapping and security measure identification
- **Salt Typhoon** — pulled network device config files to map upstream/downstream segments
- **MuddyWater** — mapped target networks and shared/sold access and intelligence to other Iranian threat actors
- **Indrik Spider** — downloaded Lansweeper and Advanced Port Scanner post-compromise to map internal networks
- **Sandworm Team** — performed domain recon on Georgian parliament infrastructure ahead of a 2019 attack

---

### Mitigation

**M1056 — Pre-compromise** applies across all six sub-techniques. Practical steps:

- Restrict WHOIS data exposure where possible (use privacy guards)
- Configure DNS servers to **deny unauthorized zone transfers**
- Avoid exposing network topology in public documentation, job postings, or vendor pages
- Limit details about security appliances in public-facing content
- Regularly audit what infrastructure data is discoverable via Shodan/Censys

DNS zone transfer is the one sub-technique with a direct technical control — **M1054 (Software Configuration)**: enforce zone transfer policies allowing only validated secondary DNS servers.

---

### Detection

Detection is mostly indirect — this activity happens outside the perimeter. Focus on:

- **Unusual DNS query patterns** — high-volume subdomain enumeration or AXFR attempts against your DNS servers
- **Authentication endpoint probing** — repeated hits on O365 autodiscover/GetUserRealm from unknown IPs
- **Shodan/Censys exposure monitoring** — regularly check what your infrastructure exposes to these scanners
- **Adjacent lifecycle stages** — Initial Access attempts using intelligence gathered here (e.g. targeting specific Exchange IPs or exploiting known firewall CVEs)
