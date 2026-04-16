---
title: "Active Directory Privilege Escalation: From AS-REP Roasting to Domain Admin"
date: "2025-12-05T09:15:00Z"
tags: ["ad", "privilege-escalation", "red-teaming", "kerberos"]
description: "A walkthrough of a common but deadly attack path in Active Directory starting with AS-REP roasting and ending in complete domain compromise."
---

## Reconnaissance & Initial Foothold

During an internal network penetration test, we started with no credentials—just a network drop on the internal LAN. We fired up Responder to listen for LLMNR and NBT-NS broadcasts.

Within 10 minutes, we captured an NTLMv2 hash for a service account: `svc_backup`. We cracked this hash relatively quickly using Hashcat and a custom wordlist tailored to the target company's naming conventions.

With valid credentials (`svc_backup:B@ckup2024!`), we could now query the Domain Controller directly.

## Enumeration: Finding the Flaw

Using BloodHound and PowerView, we mapped out the domain. We noticed a couple of interesting misconfigurations:

1. A user account `jd.admin` had the `Do not require Kerberos preauthentication` attribute set.
2. The `svc_backup` account we compromised had `GenericAll` rights over a security group called `IT_Support`.
3. Members of `IT_Support` had local administrative access to several critical infrastructure servers, including a server used by Domain Admins for management tasks (`srv-mgmt-01`).

## Execution Phase 1: AS-REP Roasting

Because `jd.admin` did not require Kerberos preauthentication, we could request authentication data for that user without knowing their password. The Domain Controller responds with an AS-REP message that contains a piece of data encrypted with the user's password hash.

Using Impacket's `GetNPUsers.py`:
```bash
GetNPUsers.py target.local/ -usersfile users.txt -format hashcat -outputfile asrephashes.txt
```

This successfully retrieved the AS-REP hash for `jd.admin`.

We threw this hash into Hashcat (mode 18200). Fortunately, this user had a weak password (`Summer2023!`). We now had the credentials for `jd.admin`.

## Execution Phase 2: Lateral Movement

Even though `jd.admin` sounded important, it wasn't a member of the Domain Admins group. However, referring back to our BloodHound data, we knew our *initial* account (`svc_backup`) could manipulate the `IT_Support` group.

Using PowerView, we added `jd.admin` to the `IT_Support` group:

```powershell
Add-DomainGroupMember -Identity 'IT_Support' -Members 'jd.admin'
```

Now, `jd.admin` was a member of `IT_Support`, granting us local admin rights on the management server `srv-mgmt-01`.

We used WMI to execute a reverse shell payload on `srv-mgmt-01`, authenticating as `jd.admin`.

## Execution Phase 3: The Golden Key

Once we had a SYSTEM shell on `srv-mgmt-01`, we dumped the LSASS memory using a custom, heavily obfuscated version of Mimikatz to evade the endpoint EDR solution.

Since Domain Admins frequently logged into this management machine to run scripts, their credentials were still resident in memory.

We successfully extracted the plaintext password for a true Domain Admin account (`da_service`).

## Conclusion

We used the Domain Admin credentials to perform a DCSync attack, dumping the `krbtgt` hash and creating a Golden Ticket, achieving total persistence and control over the domain.

This attack chain highlights why defense-in-depth is critical.
* Use strong passphrases to prevent hash cracking and AS-REP roasting.
* Regularly audit AD attributes (like Kerberos pre-auth).
* Strictly control and audit group delegations (`GenericAll`).
* Implement tiering models to prevent Domain Admins from logging into lower-tier systems where their hashes can be stolen.
