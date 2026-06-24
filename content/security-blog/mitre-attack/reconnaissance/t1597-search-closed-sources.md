---
title: "[ATT&CK Series] T1597 - Search Closed Sources"
date: "2026-06-24T00:00:08Z"
tags: ["mitre-attack", "reconnaissance", "red-teaming"]
description: "How adversaries purchase credentials and threat intelligence from dark web markets and closed forums."
series: "MITRE ATT&CK Reconnaissance"
---

### Overview

Adversaries purchase or access private, paid, or restricted data sources to gather intelligence on targets. Unlike open-source recon, closed source searching taps into data that isn't freely available — paid threat intel feeds, business databases, dark web markets, and cybercrime forums. This gives attackers higher-quality, more accurate intelligence with less noise than public OSINT.

---

### Sub-Techniques

#### T1597.001 — Threat Intel Vendors

Attackers access paid threat intelligence portals and feeds — the same services defenders use — to gather information about breach trends, TTPs, target industries, and attribution claims. Even redacted reports reveal patterns useful for planning attacks. Critically, threat actors may also search vendor data **to monitor what is known about their own operations** — helping them assess exposure and adjust TTPs accordingly.

#### T1597.002 — Purchase Technical Data

Attackers buy specific technical data about targets from dark web markets, cybercrime forums, or data brokers. This includes credentials, session tokens, employee contact details, and infrastructure specifics. **LAPSUS$** purchased credentials and active session tokens directly from criminal underground forums, skipping the credential harvesting phase entirely.

---

### How It Works

**Threat Intel Vendors (T1597.001)**

1. Attacker subscribes to paid threat intel platform (Recorded Future, Mandiant Advantage, etc.) using a cover identity
2. Searches for reports mentioning target organization, industry, or technology stack
3. Extracts breach trends, successful TTPs used against similar targets, and defensive gaps
4. Uses findings to tailor attack approach and avoid known detection signatures
5. May also search for reports on their own group to assess what defenders know

**Purchase Technical Data (T1597.002)**

1. Attacker accesses dark web markets (Russian Market, 2easy) or Telegram channels
2. Searches for logs from infostealer malware containing target org credentials
3. Purchases credential dumps, session cookies, or VPN access for target org
4. Validates purchased credentials against target systems
5. Uses working credentials for direct Initial Access — bypassing recon entirely

---

### Real-World Examples

- **LAPSUS$** — purchased credentials and active session tokens from underground forums, using them directly for Initial Access without needing to phish anyone
- **EXOTIC LILY** — searched business databases including RocketReach and CrunchBase for targeted individual information to support social engineering

---

### Tools & Sources

|Type|Examples|
|---|---|
|Paid business databases|Zoominfo, RocketReach, CrunchBase, LinkedIn Sales Navigator|
|Threat intel platforms|Recorded Future, Mandiant Advantage, Flashpoint|
|Dark web markets|Russian Market, 2easy, Genesis Market|
|Telegram channels|Infostealer log distribution channels|
|Data broker services|Scan feed subscriptions, breach data aggregators|

---

### Mitigation

**M1056 — Pre-compromise** only. Since this happens on third-party platforms using purchased data, direct technical controls don't apply. Key focus areas:

- Monitor for credential exposure via HaveIBeenPwned or similar services
- Enroll in threat intel sharing to understand what data about your org is circulating
- Enforce short-lived session tokens to reduce value of purchased session cookies
- MFA reduces impact of purchased static credentials

---

### Detection

Essentially invisible — activity occurs entirely on external platforms. Focus on downstream indicators:

- **Credential stuffing attempts** using valid but old credentials may indicate purchased breach data being validated
- **Impossible travel logins** — valid credentials used from unexpected geography
- **Session cookie reuse** from unknown devices or locations
- Detection should focus on **Initial Access** stage where purchased intelligence gets operationalized
