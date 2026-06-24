---
title: "[ATT&CK Series] T1589 - Gather Victim Identity Information"
date: "2026-06-24T00:00:01Z"
tags: ["mitre-attack", "reconnaissance", "red-teaming"]
description: "How adversaries collect usernames, email addresses, and names to build targets for phishing and credential stuffing."
series: "MITRE ATT&CK Reconnaissance"
---

### Overview

Adversaries gather identity-related information about targets before attacking. This includes personal data like employee names and email addresses, as well as sensitive material like credentials and MFA configurations. Identity intelligence feeds directly into phishing campaigns, credential stuffing, account takeovers, and social engineering operations.

---

### Sub-Techniques

#### T1589.001 — Credentials

Attackers collect usernames and passwords through phishing, breach dumps, dark web markets (Russian Market, 2easy), Telegram infostealer log channels, and compromised sites that harvest authentication cookies. Where MFA is in use, attackers may compromise the service provider to intercept OTPs.

**Real-world examples:**

- **APT28** harvested login credentials directly from victims
- **Magic Hound** collected credentials from 900+ Fortinet VPN servers and validated stolen creds across 75 websites
- **LAPSUS$** called help desks to socially engineer credential resets
- **APT29** (SolarWinds) conducted dedicated credential theft operations prior to environment access

#### T1589.002 — Email Addresses

Email addresses are harvested from social media, company websites, breach dumps, and by probing authentication services. Office 365 environments are particularly exposed — attackers query public API endpoints like `autodiscover` and `GetCredentialType` to enumerate valid addresses without authentication.

**Tools used:** Maltego, Hunter.io, o365enum, theHarvester

#### T1589.003 — Employee Names

Names are collected from LinkedIn, company websites, press releases, and data breach dumps. Names are then used to derive email addresses (using common formats like `firstname.lastname@company.com`), craft convincing phishing lures, or guide further OSINT.

---

### Collection Methods & Steps

#### Credentials

1. Search breach databases (HaveIBeenPwned, DeHashed, dark web dumps)
2. Purchase infostealer logs from Telegram channels or dark web markets
3. Send credential phishing pages mimicking corporate login portals
4. Compromise third-party site → inject cookie-stealing script
5. Probe SSPR (Self-Service Password Reset) endpoints to validate usernames
6. Intercept MFA OTPs by compromising SMS/email providers

#### Email Addresses

1. Scrape company website and LinkedIn with theHarvester/Maltego
2. Query O365 autodiscover endpoint to validate email existence
3. Use `GetCredentialType` API to confirm valid Microsoft accounts
4. Mine breach dumps for target domain emails (`@company.com`)
5. Search GitHub/code repos for hardcoded email addresses

#### Employee Names

1. Scrape LinkedIn for all employees under a target company
2. Check company website team/about pages
3. Search press releases, conference speaker lists, patent filings
4. Mine breach dumps — names often accompany email/password pairs
5. Use names to generate likely email formats → validate via O365 enumeration

---

### Tools

|Tool|Used For|
|---|---|
|theHarvester|Email + name scraping|
|Maltego|OSINT aggregation|
|o365enum|Office 365 email enumeration|
|TruffleHog / Gitrob|Credential leaks in GitHub repos|
|HaveIBeenPwned / DeHashed|Breach credential lookup|
|Evilginx / Modlishka|Session cookie harvesting via phishing|
|Telegram / dark web markets|Buying infostealer logs|

---

### Mitigation

Only **M1056 — Pre-compromise** applies. Since collection happens outside enterprise defenses:

- Minimize employee data exposed on public websites
- Avoid publishing email formats and org charts
- Monitor for credential exposure via services like HaveIBeenPwned
- Enforce MFA to reduce impact of stolen credentials

---

### Detection

Largely outside defender visibility. Focus on adjacent stages:

- Watch for **authentication anomalies** — logins from unusual IPs using valid credentials
- Monitor **O365 autodiscover and GetCredentialType** endpoint traffic for enumeration patterns
- Alert on **multiple failed logins** across accounts (credential stuffing)
- Watch for **new OAuth app grants** that may indicate compromised accounts being used
