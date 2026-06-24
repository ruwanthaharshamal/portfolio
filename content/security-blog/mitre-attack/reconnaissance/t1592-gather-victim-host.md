---
title: "[ATT&CK Series] T1592 - Gather Victim Host Information"
date: "2026-06-24T00:00:04Z"
tags: ["mitre-attack", "reconnaissance", "red-teaming"]
description: "How adversaries collect technical details about hardware, software, and firmware to identify exploitable vulnerabilities."
series: "MITRE ATT&CK Reconnaissance"
---

### Overview

Gather Victim Host Information (T1592) is a reconnaissance technique where adversaries collect details about a target's hosts before launching an attack. This intelligence — ranging from hardware specs and installed software to firmware versions and client configurations — helps attackers identify weaknesses, tailor their tooling, and plan follow-on operations with greater precision.

---

### How Adversaries Collect Host Information

Attackers use several methods to gather host data:

- **Active Scanning** — probing exposed services, server banners, and listening ports to fingerprint hosts
- **Phishing for Information** — tricking users or staff into revealing system details
- **Watering Hole Attacks** — compromising legitimate websites and injecting malicious scripts that silently harvest visitor host data
- **User-Agent Analysis** — reading HTTP User-Agent headers to identify the visitor's OS, browser, and software versions, then serving targeted payloads only to relevant victims
- **Open Source Intelligence (OSINT)** — mining job postings, resumes, network maps, assessment reports, and purchase invoices for infrastructure clues
- **File Metadata Analysis** — extracting software versions and configurations from metadata embedded in PDFs, images, and documents hosted on victim-owned websites

---

### Sub-Techniques

#### T1592.001 — Hardware

Adversaries collect details about physical host hardware, including device types, component versions, and the presence of security hardware such as biometric readers or dedicated encryption modules. This can reveal security posture and guide decisions around hardware supply chain compromise or physical access attacks.

#### T1592.002 — Software

Attackers enumerate installed applications, OS versions, and security tools such as antivirus or SIEM solutions. Metadata extracted from publicly hosted files can expose software versions that are cross-referenced with known CVEs to identify exploitable vulnerabilities. Groups like **Andariel** have used injected scripts on compromised sites to harvest browser type, system language, and plugin versions from visitors.

#### T1592.003 — Firmware

Firmware version data can reveal patch levels, device age, and configuration details that help attackers identify vulnerable embedded systems. This information is often gathered passively through OSINT rather than direct scanning, making it harder to detect.

#### T1592.004 — Client Configurations

Details such as operating system version, architecture (32/64-bit), virtualization, language, and timezone help adversaries fingerprint environments. **HAFNIUM**, for example, has queried Office 365 tenants to gather environmental details about targets prior to exploitation.

---

### Why It Matters

Host information gathered during reconnaissance directly enables:

- **Targeted exploitation** — matching payloads to specific OS versions or vulnerable software
- **Defense evasion** — avoiding sandbox environments by checking for virtualization or security tool signatures
- **Supply chain attacks** — identifying hardware or software vendors used in the target environment
- **Operational planning** — prioritizing high-value systems such as databases and workflow platforms for follow-on access

---

### Mitigation

MITRE maps a single mitigation to this technique — **M1056: Pre-compromise**. Because reconnaissance happens outside the defender's perimeter, direct technical controls are limited. The focus should be on:

- Minimizing publicly exposed information (scrubbing metadata from published documents, limiting details in job postings)
- Reducing the attack surface visible to external scanners
- Auditing what infrastructure data is accessible via OSINT

---

### Detection

Detection is inherently difficult as much of this activity occurs outside enterprise visibility. Key approaches include:

- Monitoring for **internet scanners** probing for patterns associated with host-profiling malicious content
- Focusing detection on **adjacent lifecycle stages** such as Initial Access, where host intelligence gathered here gets operationalized
- Watching for unusual **User-Agent parsing logic** in web server logs that may indicate attacker-controlled infrastructure fingerprinting visitors

Given the high false positive rate associated with scanning activity, defenders should correlate findings with threat intelligence and prioritize anomalies that align with known adversary TTPs.
