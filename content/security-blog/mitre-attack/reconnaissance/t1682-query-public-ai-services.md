---
title: "[ATT&CK Series] T1682 - Query Public AI Services"
date: "2026-06-24T00:00:11Z"
tags: ["mitre-attack", "reconnaissance", "red-teaming"]
description: "How adversaries use LLMs to synthesize and scale open-source intelligence gathering."
series: "MITRE ATT&CK Reconnaissance"
---

### Overview

Adversaries query publicly accessible AI services — LLMs like ChatGPT, Gemini, Copilot — to accelerate and scale reconnaissance. Rather than manually searching databases and websites, attackers use AI to synthesize, aggregate, and analyze open source information rapidly. This is a relatively new MITRE technique (created March 2026) reflecting how AI tools have become part of the adversary toolkit.

---

### What Attackers Use It For

- Building target lists by searching for official emails and contact information at scale
- Researching org structures, hierarchies, and key personnel
- Identifying technologies used by target organizations
- Mapping business relationships to craft believable social engineering pretexts
- Aggregating derogatory or sensitive personal information for extortion or coercion
- Drafting phishing lures tailored to specific targets using gathered context

---

### How It Works

1. Attacker queries a public LLM with recon-focused prompts — e.g. _"who are the senior IT staff at [company]"_ or _"what cloud providers does [org] use based on public information"_
2. LLM synthesizes publicly available data into actionable intelligence faster than manual OSINT
3. Attacker cross-references results with other recon techniques (T1591, T1589, T1598) to build a complete target profile
4. Intelligence feeds directly into spearphishing campaigns, social engineering pretexts, or operational planning

---

### Real-World Examples

- **APT42** — used LLMs to search for official emails and build target lists; conducted AI-assisted reconnaissance on potential business partners
- **Kimsuky** — used LLMs to identify think tanks, government organizations, and domain experts to inform targeting for spearphishing campaigns
- **APT28** — used LLMs to gather information about satellite communication protocols and technologies

---

### Tools

- Public LLMs — ChatGPT, Gemini, Claude, Copilot, Perplexity
- AI-powered OSINT aggregators
- Custom prompting workflows targeting specific recon objectives

---

### Mitigation

Only **M1056 — Pre-compromise** applies. Since this happens entirely outside the defender's perimeter using public tools querying public data, direct technical controls are minimal. Key focus areas:

- Minimize sensitive org information in publicly accessible sources
- Design defenses that don't rely on atomic indicators — AI-synthesized recon leaves no traditional IOC trail
- Security awareness training on AI-enhanced social engineering

---

### Detection

Nearly impossible to detect directly — activity occurs on third-party AI platforms with no visibility for defenders. Focus on:

- **Adjacent lifecycle stages** — highly personalized phishing or social engineering that reflects deep org knowledge may indicate prior AI-assisted recon
- **Downstream indicators** — credential phishing campaigns with unusually accurate pretexts, targeted vishing with specific internal details
- Detection efforts should focus on **Initial Access** indicators rather than the recon phase itself

---

### Why This Technique Matters

T1682 represents a shift in the recon landscape. What previously required hours of manual OSINT can now be accomplished in minutes at scale. The barrier to sophisticated, targeted reconnaissance has dropped significantly — making even less-resourced threat actors capable of highly personalized attacks.
