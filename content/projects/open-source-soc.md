---
title: "Open-Source SOC Implementation"
date: "2024-06-15T00:00:00Z"
tags: ["soc", "siem", "blue-team", "infrastructure"]
description: "Architecting and deploying a fully functional, open-source Security Operations Center (SOC) using the ELK stack, Wazuh, and TheHive."
---

## Project Overview

During my internship at the Centre for Defence Research and Development, I was tasked with building a cost-effective, scalable Security Operations Center (SOC) infrastructure entirely from open-source components. The goal was to provide centralized logging, endpoint detection and response (EDR), and incident management without the massive licensing costs associated with enterprise commercial tools.

## Architecture & Components

I designed a three-tier architecture:

1. **Log Ingestion & Analysis (SIEM)**
   * **Elasticsearch, Logstash, Kibana (ELK Stack):** The core engine for storing, indexing, and visualizing millions of log entries per day.
   * **Filebeat & Winlogbeat:** Deployed on Windows and Linux endpoints to forward system and network logs to Logstash.
2. **Endpoint Detection & Response (EDR / HIDS)**
   * **Wazuh:** Integrated directly with the Elastic stack. Wazuh agents were deployed across the network to provide file integrity monitoring (FIM), rootkit detection, and real-time anomaly detection based on MITRE ATT&CK mappings.
3. **Security Orchestration & Incident Response (SOAR)**
   * **TheHive:** A scalable incident response platform tailored for SOCs.
   * **Cortex:** An observable analysis and active response engine. It allowed us to automatically enrich IOCs (IPs, hashes, URLs) by querying VirusTotal, AbuseIPDB, and internal threat intel feeds.

## Network Ingestion

To monitor lateral movement and external threats, I configured **Suricata** as a Network Intrusion Detection System (NIDS). I mirrored traffic from the core switch to the Suricata sensor via SPAN ports. Suricata's `eve.json` logs were ingested straight into Logstash, correlated with endpoint logs in Elastic, and visualized via custom Kibana dashboards I built to highlight anomalous outbound traffic volumes and known bad signatures.

## Challenges & Solutions

* **Data Overload:** Initially, the ELK cluster struggled with the sheer volume of firewall drop logs. I implemented strict Logstash grok filtering to drop noisy, low-value logs before they hit Elasticsearch, and applied aggressive index lifecycle management (ILM) policies to roll over and compress older indices.
* **Alert Fatigue:** Wazuh initially generated too many false positives. I spent weeks tuning the default rulesets, creating exceptions for known administrative tools and internal vulnerability scanners to ensure analysts only saw actionable alerts.

## Outcome

The project successfully demonstrated that a highly capable SOC can be built using FOSS tools. It was used to actively monitor internal segments and was instrumental in capturing and analyzing traffic during subsequent Red/Blue team exercises.
