---
title: "[ATT&CK Series] T1598 - Phishing for Information"
date: "2026-06-24T00:00:09Z"
tags: ["mitre-attack", "reconnaissance", "red-teaming"]
description: "How adversaries use deceptive communication to harvest credentials and organizational details without delivering malware."
series: "MITRE ATT&CK Reconnaissance"
---

### Overview

Phishing for Information is a reconnaissance technique where adversaries trick targets into voluntarily handing over sensitive data — credentials, org details, system information — through deceptive electronic or voice communications. Unlike execution-focused phishing (T1566), the goal here is **data collection, not malware delivery**.

Attacks range from mass credential harvesting campaigns to highly targeted spearphishing using prior recon to craft convincing lures. Evasion techniques include email spoofing, header manipulation, and hiding email rules to cover tracks.

---

### Sub-Techniques

#### T1598.001 — Spearphishing Service

Attackers use third-party platforms — LinkedIn, Telegram, WhatsApp, personal webmail — to contact targets outside enterprise email security controls. Common pretexts include fake job offers, vendor inquiries, or IT support impersonation. **Scattered Spider** sent Telegram messages impersonating IT staff to harvest credentials during C0027.

#### T1598.002 — Spearphishing Attachment

Malicious files sent via email that either harvest credentials directly (fake forms to fill in and return) or use HTML Smuggling to serve fake login portals. **Dragonfly** used Office document attachments to harvest user credentials. **Star Blizzard** first built rapport with targets over multiple emails before sending credential-harvesting attachments.

#### T1598.003 — Spearphishing Link

The most sophisticated sub-technique. Malicious links in emails lead to cloned login portals, adversary-in-the-middle proxies, or pages with embedded tracking pixels. Key methods include:

- **AiTM proxying** — tools like Evilginx2 and EvilProxy sit between victim and real site, capturing session cookies and bypassing MFA
- **Browser-in-the-browser (BitB)** — fake browser popup with a spoofed address bar tricks users into entering credentials on what looks like a legitimate OAuth prompt
- **Quishing** — QR codes hide malicious URLs from email scanners; victim scans with mobile device which has weaker security controls
- **Tracking pixels / web beacons** — 1x1 pixel images that fire when email is opened, revealing victim IP, OS, and email client

**APT28, Kimsuky, Magic Hound, Silent Librarian, Scattered Spider** and many others use this sub-technique extensively.

#### T1598.004 — Spearphishing Voice

Voice phishing (vishing) and callback phishing via phone calls. Attackers spoof caller ID and impersonate IT support, vendors, or executives to extract credentials or convince victims to navigate to phishing sites. **LAPSUS$** called help desks directly to socially engineer password resets on privileged accounts. **Scattered Spider** called employees and compelled them to log into fake portals in real time.

---

### Tools & Methods

|Sub-technique|Tools / Methods|
|---|---|
|Spearphishing Service|LinkedIn fake accounts, Telegram, WhatsApp, personal Gmail|
|Spearphishing Attachment|Malicious Office docs, HTML smuggling, PDF lures, fake forms|
|Spearphishing Link|Evilginx2, EvilProxy, GoPhish, HTTrack (site cloning), QR code generators, web beacons|
|Spearphishing Voice|Spoofed VoIP calls, robocall services, hired call centers|

---

### Real-World Examples

- **APT28** — credential phishing via links and spearphishing emails targeting campaign staffers
- **Kimsuky** — spearphishing with web beacons to profile targets; QR code phishing to bypass email URL scanners
- **Scattered Spider** — combined SMS phishing, Telegram impersonation, vishing, and AiTM toolkits in coordinated credential harvesting operations
- **LAPSUS$** — called help desks to reset privileged credentials using social engineering alone
- **Silent Librarian** — cloned university library login pages to harvest academic credentials at scale
- **Magic Hound** — tracked victims via SMS/email tracking links; captured IP addresses of phishing site visitors
- **Star Blizzard** — built multi-email rapport before delivering credential-harvesting links
- **Sandworm Team** — spearphishing with hyperlinks designed to capture account credentials

---

### Mitigations

|Mitigation|Applies To|
|---|---|
|M1054 — Software Configuration (SPF, DKIM, DMARC)|T1598.002, T1598.003|
|M1017 — User Training|All sub-techniques|
|Browser extensions blocking IDN/homograph attacks|T1598.003|
|Password managers tied to exact URLs|T1598.003 (defeats cloned portals)|

DMARC/DKIM/SPF won't stop vishing or third-party service phishing — user training is the primary control for T1598.001 and T1598.004.

---

### Detection

- **Email headers** — SPF/DKIM failures, spoofed sender domains, mismatched reply-to addresses
- **URL inspection** — expand shortened links, detect obfuscated URLs (hex/integer hostnames, `@` symbol abuse), flag uncategorized domains
- **Homograph monitoring** — browser and network logs for IDN domains using Cyrillic/Latin character mixing
- **Web beacon traffic** — single-pixel image requests to unknown external domains from email clients
- **AiTM indicators** — SSL/TLS inspection for proxied connections; HTTrack cloning artifacts in HTML (`Mirrored from` strings)
- **Call log analysis** — corporate device call logs for patterns matching known vishing numbers
- **Social media monitoring** — unsolicited messages from unknown accounts requesting org or credential information
