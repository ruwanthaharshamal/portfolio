---
title: "[ATT&CK Series] T1594 - Search Victim-Owned Websites"
date: "2026-06-24T00:00:06Z"
tags: ["mitre-attack", "reconnaissance", "red-teaming"]
description: "How adversaries scrape and browse a target organization's own website to find hidden directories and operational clues."
series: "MITRE ATT&CK Reconnaissance"
---

### Overview

Adversaries browse and scrape the target organization's own website to gather intelligence before attacking. Company websites voluntarily publish enormous amounts of useful reconnaissance data — employee names, roles, contact details, office locations, business relationships, and technology references. Beyond visible content, attackers also probe for hidden directories, exposed files, and vulnerable functionality that the organization didn't intend to make public.

---

### What Attackers Look For

- Employee names, roles, email formats, and contact information
- Department and division structure
- Physical office locations and operational details
- Business partners, vendors, and client relationships
- Technology stack hints (job postings, case studies, footer credits)
- Hidden directories, admin panels, and staging environments
- `robots.txt` and `sitemap.xml` — files that inadvertently reveal paths the org wants hidden from search engines

---

### How It Works

1. Manual browsing of public-facing pages — About, Team, Contact, News, Careers
2. Scrape source code for comments, internal paths, and technology fingerprints
3. Check `robots.txt` for disallowed paths — these often reveal admin panels or sensitive directories
4. Parse `sitemap.xml` for a complete map of all indexed pages
5. Run wordlist scanning (Gobuster, dirb) against the domain to find hidden directories
6. Extract branding, logos, and page structure for use in phishing page cloning
7. Use contact forms as a delivery vector — sending phishing links through legitimate site infrastructure

---

### Tools & Methods

|Method|Tools|
|---|---|
|Web crawling / scraping|wget, HTTrack, Scrapy|
|Hidden directory discovery|Gobuster, dirb, ffuf|
|Technology fingerprinting|Wappalyzer, WhatWeb, BuiltWith|
|Source code analysis|Browser DevTools, curl|
|Sitemap/robots parsing|Manual, curl, automated scrapers|

---

### Real-World Examples

- **Silent Librarian** — scraped victim university websites for branding, source code, and contact details to build convincing phishing clones of library login pages; also researched academic interests of targeted individuals
- **EXOTIC LILY** — used contact forms on victim websites to deliver phishing emails through the org's own legitimate infrastructure, bypassing email filters
- **TA578** — filled out contact forms directing victims to attacker-controlled URLs
- **Kimsuky** — searched target company websites for intelligence to inform spearphishing campaigns
- **Sandworm Team** — conducted systematic website research as part of operational planning before attacks
- **APT41 DUST** — accessed external victim websites specifically for target development
- **Volt Typhoon** — performed pre-compromise recon on victim-owned sites as part of extensive infrastructure mapping

---

### Mitigation

**M1056 — Pre-compromise** only. Practical steps:

- Audit what employee and org data is published publicly — minimize names, direct emails, and role details where possible
- Review `robots.txt` — disallowing a path doesn't hide it from determined attackers, it advertises it
- Ensure staging, dev, and admin environments are not publicly reachable
- Sanitize HTML source code — remove internal comments, path references, and technology identifiers
- Consider whether contact forms need rate limiting or CAPTCHA to reduce abuse as a phishing delivery channel

---

### Detection

Unlike most Reconnaissance techniques, T1594 does generate traffic that hits your infrastructure:

- **Web server logs** — watch for rapid successive requests indicative of crawling, especially hitting many paths in short succession
- **High request volume from single source** — automated directory brute-forcing produces distinctive patterns
- **Unusual User-Agent strings** — scanners like Gobuster and HTTrack have identifiable UA signatures
- **Referer header anomalies** — unusual or missing referer headers on rapid crawls
- **robots.txt and sitemap.xml access** — legitimate users rarely request these; repeated or automated access is worth flagging
- **Contact form abuse** — monitor for form submissions containing URLs or unusual content patterns
