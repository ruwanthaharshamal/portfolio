---
title: "[ATT&CK Series] T1593 - Search Open Websites & Domains"
date: "2026-06-24T00:00:05Z"
tags: ["mitre-attack", "reconnaissance", "red-teaming"]
description: "How adversaries leverage social media, search engines, and code repositories to gather intelligence without direct contact."
series: "MITRE ATT&CK Reconnaissance"
---

### Overview

Adversaries search freely available websites and online platforms to gather intelligence about targets. Social media, search engines, and public code repositories collectively expose enormous amounts of organizational and personal data — job roles, tech stacks, business relationships, credentials, and API keys — all without any direct contact with the target.

---

### Sub-Techniques

#### T1593.001 — Social Media

Attackers harvest LinkedIn, Twitter/X, Telegram, and other platforms for org structure, employee roles, locations, and personal interests. This feeds spearphishing lures and social engineering pretexts. Attackers also create fake profiles to build rapport with targets and elicit information directly.

**Real-world examples:**

- **Lazarus Group** (Operation Dream Job) used LinkedIn to identify and profile specific employees before sending tailored fake job offers
- **Contagious Interview** identified and solicited victims via LinkedIn, X, and Telegram
- **EXOTIC LILY** copied social media profile data to impersonate targeted individuals convincingly
- **Kimsuky** monitored Twitter to track potential victims and inform phishing email content

#### T1593.002 — Search Engines

Google dorking and general search engine queries let attackers find leaked credentials, exposed config files, network details, and vulnerability information indexed from public sites. Specialized syntax (`site:`, `filetype:`, `inurl:`) dramatically narrows results.

**Real-world examples:**

- **APT41 DUST** used search engines to research victim servers before targeting
- **Kimsuky** searched Google for vulnerabilities, tools, and geopolitical trends to inform targeting
- **Sandworm Team** ran queries on Ukraine's EDRPOU legal entity database to research targets ahead of NotPetya

#### T1593.003 — Code Repositories

Public GitHub, GitLab, and Bitbucket repos are a persistent source of accidentally leaked credentials, API keys, internal hostnames, and infrastructure details. Developers frequently commit secrets and even when deleted from the latest version, they remain in git commit history.

**Real-world examples:**

- **HAFNIUM** discovered leaked corporate credentials in public GitHub repositories
- **LAPSUS$** searched public repos specifically for exposed credentials
- **Contagious Interview** solicited victims directly through GitHub interactions

---

### Tools & Methods

|Sub-technique|Tools / Methods|
|---|---|
|Social Media|LinkedIn Sales Navigator, manual profiling, fake persona accounts|
|Search Engines|Google dorks, Bing, DuckDuckGo, specialized queries (`filetype:env`, `inurl:config`)|
|Code Repositories|TruffleHog, Gitrob, GitHub search, git log history analysis|

#### Useful Google Dork Examples

- `site:github.com "company.com" password`
- `filetype:env "DB_PASSWORD"`
- `inurl:admin site:targetcompany.com`
- `"targetcompany.com" filetype:pdf`

---

### Real-World Examples (Parent Technique)

- **Sandworm Team** — researched third-party websites to craft credible spearphishing lures; queried EDRPOU database ahead of NotPetya
- **Star Blizzard** — conducted extensive open-source research on victims to personalize targeting
- **Volt Typhoon** — performed pre-compromise web searches to gather victim information
- **Mustang Panda** — used open-source research to create weaponized phishing lures and attachments
- **APT-C-36** — researched Colombian financial institutions online to craft convincing phishing pages targeting their customers
- **Contagious Interview** — checked VirusTotal and MalTrail to assess whether their own tools had been detected and exposed

---

### Mitigations

Unlike most Reconnaissance techniques, T1593 has two actionable technical mitigations beyond Pre-compromise:

**M1013 — Application Developer Guidance**

- Never commit credentials, API keys, tokens, or connection strings to public repos
- Use environment variables and secret managers instead of hardcoded values
- Use `.gitignore` to exclude `.env` and config files

**M1047 — Audit**

- Scan repos before committing using tools like TruffleHog or git-secrets
- If credentials are leaked, rotate them immediately — removing from latest commit is not enough, git history must be purged
- Run periodic audits of public repos associated with your org

---

### Detection

Activity is passive and external — no traffic hits your infrastructure. Focus on:

- **Secret scanning** — GitHub and GitLab have built-in secret scanning; enable alerts for credential exposure in your repos
- **Credential use anomalies** — valid credentials appearing from unexpected IPs or geographies may indicate leaked repo secrets being used
- **Social media monitoring** — watch for accounts probing employees for org information
- **Adjacent lifecycle stages** — spearphishing with unusual personal detail or attacks using valid credentials indicate prior open website recon
