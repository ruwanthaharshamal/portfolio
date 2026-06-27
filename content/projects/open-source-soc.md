---
title: "Open-Source SOC Implementation"
date: "2024-06-15T00:00:00Z"
tags: ["soc", "siem", "blue-team", "infrastructure", "vmware", "ids"]
description: "Architecting and deploying a fully integrated, open-source Security Operations Center (SOC) using Wazuh, the ELK stack, TheHive, and advanced threat intelligence platforms."
---

## Project Overview

During my internship at the Centre for Defence Research and Development, I was tasked with building a cost-effective, scalable, and fully operational Security Operations Center (SOC) infrastructure entirely from open-source components. Hosted on **VMware ESXi**, the architecture provides centralized logging, endpoint detection and response (EDR), network intrusion detection, and automated incident management.

## Architecture & Components

I designed a comprehensive multi-tier architecture to ensure 360-degree visibility:

1. **Host-Level Monitoring & SIEM (Wazuh & ELK Stack)**
   * **Wazuh:** The backbone for endpoint monitoring. Wazuh agents provide file integrity monitoring (FIM), rootkit detection, and real-time anomaly detection based on MITRE ATT&CK mappings.
   * **ELK Stack (Elasticsearch, Logstash, Kibana):** The core engine for storing, indexing, and visualizing security events. Kibana serves as the central visualization layer for all integrated tools.

2. **Network Security Monitoring (NSM & IDS)**
   * **Suricata (SELKS):** Acts as a Network Intrusion Detection System (NIDS), performing real-time traffic analysis and detecting potential threats via signature-based matching.
   * **Zeek (formerly Bro):** Provides deep packet inspection and generates detailed network activity logs for further forensic analysis.
   * **ntopng:** Monitors bandwidth usage and network flow in real time, helping identify traffic patterns and resource anomalies.

3. **Security Orchestration & Incident Response (SOAR)**
   * **TheHive:** A scalable incident response platform used for case management and workflow automation.
   * **Cortex:** An automated analysis engine that enriches incident data (hashes, IPs, URLs) by interfacing with threat intelligence feeds.

4. **Threat Intelligence & Enrichment**
   * **MISP (Malware Information Sharing Platform):** Aggregates and correlates threat intelligence data to enrich alerts.
   * **OpenCTI:** Manages and organizes complex threat intelligence, providing contextual data for better decision-making.

5. **Network Device Monitoring**
   * **Zabbix:** Monitors the health, availability, and performance of all network devices and infrastructure, ensuring maximum uptime.

## Example Workflow Scenario

To validate the integration, I simulated an end-to-end incident response flow:

1. **Detection:** A suspicious login attempt is detected by a **Wazuh** agent on an endpoint.
2. **Alerting:** Wazuh generates an alert and forwards it to **TheHive**, which automatically creates a case.
3. **Correlation:** **Suricata** and **Zeek** detect unusual traffic patterns from the same IP address, triggering network-level alerts.
4. **Enrichment:** **MISP** and **OpenCTI** provide enrichment, linking the IP address to known malicious infrastructure.
5. **Analysis:** **TheHive** triggers **Cortex** to automatically analyze the collected artifacts and suggest remediation steps.
6. **Visualization:** The entire incident lifecycle and associated metrics are visualized in real-time on a **Kibana** dashboard.

## Challenges & Solutions

* **Network Visibility:** Capturing traffic for Zeek and Suricata required implementing **port mirroring (SPAN)** on network switches to ensure comprehensive segment coverage.
* **Storage Constraints:** Excessive log storage led to rapid disk consumption. I implemented strict **log retention policies** and archiving to balance visibility with storage availability.
* **Performance Optimization:** The **Elasticsearch** cluster required fine-tuning (e.g., adjusting JVM heap sizes) to maintain low latency under high workloads.
* **Tool Compatibility:** Ensuring seamless integration between disparate open-source tools required careful version management and the use of **Docker Compose** for stable deployments.

## Outcome

The project successfully demonstrated that a highly capable SOC can be built using FOSS tools. It provides a robust, budget-friendly solution for organizations to strengthen their security posture through layered visibility and automated response.
