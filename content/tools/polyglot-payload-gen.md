---
title: "Polyglot Payload Generator"
date: "2025-11-05T00:00:00Z"
tags: ["tools", "xss", "sqli", "payloads"]
description: "A command-line tool that generates highly obfuscated, polyglot payloads designed to test WAF resilience and identify multiple vulnerability classes simultaneously."
---

## Overview

The Polyglot Payload Generator is a Python utility I wrote to assist in testing Web Application Firewalls (WAFs) and input validation filters. 

A "polyglot" in security context is a single piece of code that is valid and executable in multiple contexts. For example, a string that executes as JavaScript (XSS), but also causes a database syntax error (SQLi), and exploits a command injection flaw.

## Usage

```bash
$./polyglot_gen.py --target xss,sqli --obfuscation high
```

## Features

1. **Context-Aware Generation:** You can specify the assumed context (e.g., inside an HTML attribute, within a script block, inside an SQL `WHERE` clause) to tailor the escape sequences.
2. **Encoding Vectors:** Automatically wraps selected payloads in various encoding schemas to bypass simple signature-based WAFs:
   * Base64 (for data URIs)
   * HTML Entity (Decimal/Hex)
   * Unicode Escapes
   * URL Encoding (Multi-level)
3. **Template Engine:** Uses a custom templating system to mix and match attack vectors.

## Example Output

A generated polyglot designed to trigger XSS in HTML context, XSS in JS context, and basic SQLi:

```text
'">><script>alert(1)</script><img src=x onerror=alert(1)>/*'-/*`/*\"/*\"/*'/*</title></textarea></style></script>--><img src=x onerror=alert(1)>
```

## Why Build This?

While there are massive lists of payloads available (like SecLists), grabbing payloads one by one is tedious. This tool allows me to rapidly generate variations of a base payload when I suspect an edge-case parser vulnerability, specifically applying encodings that I know the specific backend technology stack struggles with.
