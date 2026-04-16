---
title: "Advanced Active Directory Attack Lab"
date: "2025-02-10T00:00:00Z"
tags: ["ad", "red-teaming", "infrastructure", "vmware"]
description: "A fully automated, vulnerable-by-design Active Directory environment built on VMware ESXi for simulating complex attack paths."
---

## The Concept

To sharpen my Red Teaming skills and practice post-exploitation frameworks, I needed a realistic, consistently reproducible Active Directory environment. Relying on basic VMs wasn't enough; I needed complex trusts, misconfigurations, and simulated user activity.

I built this lab entirely on a standalone VMware ESXi host.

## Infrastructure Setup

The lab is provisioned automatically using **Packer** (to build the base Windows Server and Windows 10 images) and **Terraform** (to deploy the instances onto ESXi and configure networking).

The network consists of three zones:
1. **Corporate LAN:** Workstations (Win 10), Domain Controllers, File Servers.
2. **DMZ:** Web server hosting vulnerable applications (as an initial entry point).
3. **Attacker Network:** Kali Linux, Covenant/Sliver C2 infrastructure.

## Vulnerability Implementation

Rather than just patching together random exploits, I used **GOAD (Game of Active Directory)** concepts to script specific misconfigurations using PowerShell DSC (Desired State Configuration).

The lab features specific, chained attack paths:

* **Path A (The Classic):** 
  Null Session Enum -> Enumerate Users -> AS-REP Roasting -> Kerberoasting -> DCSync.
* **Path B (Delegation Nightmare):** 
  Exploiting Unconstrained Delegation on a web server -> Coercing Domain Controller authentication (PrinterBug/PetitPotam) -> NTLM Relay to AD CS (Active Directory Certificate Services) -> ESC1 exploitation to Domain Admin.
* **Path C (ACL Abuse):** 
  Phishing initial access -> BloodHound recon showing convoluted ACLs -> ForceChangePassword over a critical group -> Add user to group -> DCOM lateral movement.

## Traffic Simulation

A dead network is easy to analyze. I used an open-source tool to simulate background web browsing, SMB file transfers, and RDP sessions. This noise makes it challenging to identify actual lateral movement, forcing me to practice OPSEC-safe commands and use tools that blend in with normal administrative traffic.

## Key Learnings

Building the lab taught me as much as attacking it. Setting up AD CS, configuring constrained delegation, and understanding how forest trusts actually work fundamentally improved my ability to exploit these mechanics in the real world.
