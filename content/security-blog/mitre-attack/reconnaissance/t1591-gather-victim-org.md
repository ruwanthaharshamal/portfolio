---
title: "[ATT&CK Series] T1591 - Gather Victim Org Information"
date: "2026-06-24T00:00:03Z"
tags: ["mitre-attack", "reconnaissance", "red-teaming"]
description: "How adversaries research organizational structures, physical locations, and business relationships to tailor their attacks."
series: "MITRE ATT&CK Reconnaissance"
---

### Overview

Adversaries gather organizational intelligence to understand how a target operates before attacking. This includes physical locations, business relationships, operational schedules, and key personnel roles. Org-level intelligence enables highly targeted spearphishing, supply chain attacks, and social engineering — making attacks harder to detect and easier to execute.

Notably, **APT28 and Kimsuky** have both been observed using LLMs to accelerate org information gathering at scale.

---

### Sub-Techniques

#### T1591.001 — Determine Physical Locations

Attackers identify office locations, data center sites, and infrastructure hosting to understand legal jurisdiction, physical access opportunities, and where key assets are housed. **Magic Hound** collected visitor location data from phishing sites to geo-filter targets.

#### T1591.002 — Business Relationships

Mapping MSPs, contractors, suppliers, and partners reveals trusted third parties with elevated network access — prime targets for supply chain attacks. **Sandworm Team** researched official partner listings for the 2018 PyeongChang Olympics before their attack. **LAPSUS$** mapped supply chain relationships in detail before targeting.

#### T1591.003 — Identify Business Tempo

Operational hours, shipment schedules, and purchase timings help attackers choose the right moment to strike — launching attacks during off-hours when security teams are understaffed, or intercepting hardware shipments during known procurement windows.

#### T1591.004 — Identify Roles

Targeting specific roles — IT admins, executives, HR, finance — lets attackers maximize impact. **FIN7** identified IT staff with elevated admin rights. **HEXANE** profiled executives and HR staff. **Lazarus Group** (Operation Dream Job) sent tailored fake job offers to specific individuals within target organizations.

---

### Collection Methods & Tools

|Sub-technique|Methods|Tools|
|---|---|---|
|Physical Locations|Company website, Google Maps, social media, phishing|Maltego, Google Dorks, LinkedIn|
|Business Relationships|Partner pages, press releases, OSINT, social media|SpiderFoot, Maltego, Zoominfo|
|Business Tempo|Social media posts, job listings, news articles|Google Dorks, LinkedIn, Twitter/X|
|Identify Roles|LinkedIn, org charts, company websites, phishing|LinkedIn Sales Navigator, Zoominfo, Hunter.io|

---

### Real-World Examples

- **APT28 & Kimsuky** — used LLMs to research and aggregate org intelligence at scale
- **FIN7** — filtered potential victims by revenue using Zoominfo, then identified high-privilege IT staff
- **Lazarus Group** — studied org structure to craft department-specific spearphishing; sent tailored fake job offers to individual targets in Operation Dream Job
- **Sandworm Team** — researched PyeongChang Olympics partner organizations via public partnership listings before the 2018 attack
- **LAPSUS$** — mapped team structures and supply chain relationships to identify weakest links
- **Volt Typhoon** — profiled key IT and network staff at target orgs before compromise
- **HEXANE** — identified executives, HR, and IT personnel for targeted phishing
- **MirrorFace** — crafted phishing emails with content specific to target political party members

---

### Mitigation

**M1056 — Pre-compromise** applies to all four sub-techniques. Practical steps:

- Minimize org chart and role details published publicly
- Avoid listing MSP/contractor relationships on public-facing pages
- Train staff to recognize social engineering targeting org information
- Limit what business tempo details are exposed via social media and press releases
- Scrub metadata from published documents that may reveal internal structure

---

### Detection

All four sub-techniques are largely invisible to defenders — collection happens entirely outside the perimeter. Focus on:

- **Spearphishing indicators** — highly tailored phishing referencing internal org details is a signal this recon already happened
- **LinkedIn scraping patterns** — unusual bulk profile views on company employees
- **Social media monitoring** — watch for accounts probing employees for org information
- **Adjacent lifecycle stages** — Initial Access attempts that reflect deep org knowledge (targeting specific admins, exploiting specific vendor relationships) indicate prior T1591 activity
