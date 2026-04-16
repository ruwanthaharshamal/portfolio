---
title: "BashRecon: Lightweight Infrastructure Enumeration"
date: "2025-05-18T00:00:00Z"
tags: ["tools", "bash", "recon", "network"]
description: "A fast, lightweight bash script for initial infrastructure enumeration, automating Nmap, DNS brute-forcing, and directory bruteforcing."
---

## Overview

Sometimes you find yourself on a jump box or a restricted environment where installing complex Python frameworks or compiled Go binaries isn't feasible. 

`BashRecon` is a single-file, highly portable Bash script that leverages standard Unix utilities and common pentesting tools (essentially acting as a wrapper) to perform rapid initial reconnaissance on a target IP or domain.

## Execution

```bash
$ ./bashrecon.sh -t 10.10.10.0/24 -m fast
```

## Workflow

1. **Host Discovery:** Uses `ping` sweeps and fast `nmap` host-discovery (`-sn`) to identify live hosts on the target subnet.
2. **Port Scanning:** 
   * **Fast Mode:** Scans the top 1000 TCP ports.
   * **Full Mode:** Scans all 65535 TCP ports and top UDP ports.
3. **Service Fingerprinting:** Pipes discovered open ports back into `nmap` for aggressive service enumeration and default script scanning (`-sV -sC`).
4. **Web Enum:** If ports 80/443 (or common alt web ports) are found, it automatically kicks off:
   * `whatweb` for technology fingerprinting.
   * `ffuf` (if available) or `gobuster` for fast directory brute-forcing using a default lightweight wordlist.
5. **Output Management:** All results are cleanly formatted and saved into a structured directory tree, categorized by IP and scan type.

## Dependencies

The script relies heavily on tools usually available in Kali/Parrot OS:
* `nmap`
* `ffuf` / `dirb`
* `whatweb`

## Code Snippet

```bash
#!/bin/bash
# Nmap aggressive scan wrapper
perform_nmap() {
    local target=$1
    echo "[*] Starting aggressive Nmap scan on $target"
    nmap -sC -sV -p- -T4 -oA "$output_dir/$target_nmap_full" "$target" > /dev/null 2>&1
    
    # Extract open ports
    open_ports=$(grep -E '^[0-9]+/tcp.*open' "$output_dir/$target_nmap_full.nmap" | cut -d '/' -f 1 | tr '\n' ',' | sed 's/.$//')
    echo "[+] Discovered ports: $open_ports"
}
```

This tool is simple but ensures that standard enumeration steps are never missed during the pressure of an engagement.
