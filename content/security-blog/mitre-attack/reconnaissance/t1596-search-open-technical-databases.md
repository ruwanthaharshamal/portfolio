---
title: "[ATT&CK Series] T1596 - Search Open Technical Databases"
date: "2026-06-24T00:00:07Z"
tags: ["mitre-attack", "reconnaissance", "red-teaming"]
description: "How adversaries query WHOIS, DNS, CT logs, and scan databases to map an organization's attack surface passively."
series: "MITRE ATT&CK Reconnaissance"
---

### Overview

Adversaries query freely available technical databases to gather infrastructure intelligence about targets — without ever touching the target directly. DNS records, WHOIS registrations, SSL certificates, CDN configurations, and internet scan results are all publicly accessible and collectively paint a detailed picture of an organization's attack surface.

---

### Sub-Techniques

#### T1596.001 — DNS/Passive DNS

Attackers query nameservers directly or search passive DNS repositories — historical logs of DNS query responses — to enumerate subdomains, mail servers, and hosting infrastructure. DNS misconfigurations like unintended zone transfers or internal hostname leakage can expose internal network structure.

#### T1596.002 — WHOIS

WHOIS records expose domain registrant details including organization name, contact emails, phone numbers, physical address, assigned IP blocks, and nameservers. Even privacy-protected records often leak registrar details or historically exposed data available in WHOIS history tools.

#### T1596.003 — Digital Certificates

SSL/TLS certificate data reveals organization name, location, and all domains covered by the cert including subdomains. Certificate Transparency (CT) logs are a goldmine — every publicly trusted certificate is logged and searchable, exposing new subdomains the moment they go live.

#### T1596.004 — CDNs

CDN lookup tools reveal origin server IPs behind CDN-protected domains, geolocation of content servers, and misconfigurations that expose unprotected staging environments or admin portals not behind the same security controls as production.

#### T1596.005 — Scan Databases

Platforms like Shodan, Censys, and FOFA continuously scan the internet and index results — open ports, banners, certificates, and service fingerprints. Attackers query these instead of scanning directly, leaving no trace on the target. **APT41** uses the Chinese equivalent FOFA for passive victim scanning. **Volt Typhoon** used Shodan, Censys, and FOFA to identify exposed infrastructure before attacking.

---

### Tools & Sources

|Sub-technique|Tools / Sources|
|---|---|
|DNS/Passive DNS|dig, dnsrecon, SecurityTrails, PassiveTotal, VirusTotal|
|WHOIS|whois CLI, who.is, DomainTools, WHOIS history tools|
|Digital Certificates|crt.sh, Censys, Certificate Transparency logs|
|CDNs|CDN Finder, ipinfo.io, Cloudflare resolver tools|
|Scan Databases|Shodan, Censys, FOFA, ZoomEye, BinaryEdge|

---

### Real-World Examples

- **APT41** — routinely used FOFA (Chinese Shodan equivalent) for passive infrastructure scanning of victims
- **APT41 DUST** — used internet scan data specifically for target development and prioritization
- **Volt Typhoon** — queried FOFA, Shodan, and Censys to map exposed victim infrastructure before compromise
- **APT28 & Kimsuky** — used LLMs alongside open technical databases to better understand publicly reported vulnerabilities and refine targeting

---

### Collection Steps

**DNS/Passive DNS**

1. Query target nameservers directly with `dig` or `dnsrecon`
2. Search SecurityTrails/PassiveTotal for historical DNS records
3. Enumerate subdomains via brute force wordlists against nameservers
4. Look for internal hostnames leaking via misconfigured DNS

**WHOIS**

1. Run `whois target.com` for current registrant data
2. Search DomainTools for historical WHOIS records before privacy guard was enabled
3. Cross-reference registrant email/phone across other domain registrations to map attacker infrastructure or find additional org assets

**Digital Certificates**

1. Query `crt.sh` for all certificates issued to `%.target.com`
2. Extract all subdomains from Subject Alternative Names (SANs)
3. Monitor CT logs for newly issued certs revealing new infrastructure

**CDNs**

1. Use CDN Finder or similar to identify CDN provider
2. Attempt to resolve origin IP via historical DNS records before CDN was enabled
3. Check for misconfigured staging/dev subdomains not behind CDN

**Scan Databases**

1. Search Shodan/Censys for `org:"Target Company"` or known IP ranges
2. Filter by open ports, service banners, and certificate data
3. Identify exposed services, outdated software versions, and unintended open ports

---

### Mitigation

**M1056 — Pre-compromise** only. Practical steps:

- Use WHOIS privacy guards on domain registrations
- Regularly audit CT logs for unexpected certificate issuance
- Ensure staging/dev environments are not publicly reachable
- Restrict CDN origin server exposure — ensure origin IPs are firewalled to CDN ranges only
- Monitor Shodan/Censys for your own org's exposed assets — know what attackers see

---

### Detection

Entirely passive from the target's perspective — no traffic hits your infrastructure. Focus on:

- **Self-monitoring** — regularly query Shodan, Censys, and crt.sh for your own org to identify unexpected exposure
- **CT log monitoring** — alert on new certificates issued for your domains you didn't authorize
- **Adjacent lifecycle stages** — attacks exploiting specific exposed services discovered via scan databases indicate prior T1596 activity
- Detection focus should shift to **Initial Access** where gathered intelligence gets used
