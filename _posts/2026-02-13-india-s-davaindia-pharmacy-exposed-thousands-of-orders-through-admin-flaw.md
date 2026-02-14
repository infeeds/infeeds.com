---
layout: post
title: "India's DavaIndia Pharmacy Exposed Thousands of Orders Through Admin Flaw"
description: "A security bug gave anyone full admin access to DavaIndia's platform, exposing 17,000 orders and raising serious questions about pharmacy data security."
date: 2026-02-13 10:00:17 +0530
author: adam
image: 'https://images.unsplash.com/photo-1597495227772-d48ecb5f2639?q=80&w=2070'
video_embed:
tags: [news, tech]
tags_color: '#00ba65'
---

When you order prescription medications online, you're trusting a pharmacy with some of your most private information. What happens when that trust gets broken by a security flaw so basic it should never have existed in the first place?

DavaIndia Pharmacy, one of India's largest pharmacy chains with over 2,300 stores, left its digital doors wide open. Security researcher Eaton Zveare discovered that anyone could create a "super admin" account on the platform without any authentication. No password cracking, no sophisticated hacking. Just waltz right in and take control.

## The Scope of the Exposure

The vulnerability wasn't some minor crack in the system. This was full administrative access to nearly 17,000 online orders spanning 883 stores. We're talking names, phone numbers, email addresses, home addresses, and most critically, the specific medications people were buying.

Think about what your medicine cabinet says about you. Maybe it's antidepressants, HIV medication, erectile dysfunction drugs, or treatments for conditions you'd rather keep private. Now imagine all that information sitting exposed because of insecure APIs that shouldn't have been accessible to begin with.

Zveare told TechCrunch the flaw had been live since late 2024. That's months of potential exposure while DavaIndia was aggressively expanding its retail footprint. The company added 276 new stores in January alone and plans to open up to 1,500 more in the next two years. Scaling fast is great for [business](https://infeeds.com/tags/?tag=business), but not when your security infrastructure is held together with digital duct tape.

## What Could Have Gone Wrong

The level of access this bug provided was frankly terrifying. An attacker could modify product prices, create unlimited discount coupons, and here's the really scary part: change whether certain medicines required a prescription.

Let that sink in. Someone with malicious intent could have toggled prescription requirements on controlled substances. They could have defaced the website, disrupted operations, or quietly harvested customer data for months without anyone noticing.

The researcher said there's no evidence the flaw was actually exploited before it got patched. But that's cold comfort when you consider how easily it could have been discovered by someone with worse intentions. These kinds of vulnerabilities don't stay secret forever in the [technology](https://infeeds.com/tags/?tag=technology) underground.

## The Response Timeline Raises Questions

Zveare reported the issue to CERT-In, India's national cybersecurity agency, back in August 2025. The vulnerability got fixed within weeks, which sounds good until you realize that official confirmation from DavaIndia didn't come until late November. That's a three-month gap between patch and acknowledgment.

Zota Healthcare's CEO Sujit Paul apparently couldn't be bothered to respond to TechCrunch's emails either. Radio silence from leadership when your company just exposed thousands of customers' medical purchases isn't exactly a confidence-inspiring move.

This incident highlights a broader problem with how rapidly expanding companies handle security. DavaIndia operates under Zota Healthcare, a Gujarat-based company that's clearly focused on growth. But what good is opening 1,500 new stores if your digital infrastructure is fundamentally insecure?

## Why Pharmacy Data Demands Better Protection

Healthcare data breaches hit different than your typical customer database leak. Someone knowing your email got exposed in a streaming service breach is annoying. Someone knowing what medications you're taking for mental health issues or chronic conditions can be devastating.

The intersection of [healthcare](https://infeeds.com/tags/?tag=healthcare) and e-commerce creates unique privacy challenges that many companies still aren't taking seriously enough. Pharmacies dealing with online orders need to treat their security infrastructure with the same rigor as their physical drug storage protocols.

India's digital healthcare sector is booming, but incidents like this expose how security often takes a backseat to rapid expansion. When insecure admin interfaces can hand over the keys to the kingdom to literally anyone who finds them, something is fundamentally broken in the development and review process.

The real question isn't whether DavaIndia will recover from this embarrassment, they probably will. The question is how many other rapidly scaling pharmacy chains and healthcare platforms are running with similar vulnerabilities right now, just waiting to be discovered by the next researcher or the next data broker looking to make a quick buck.