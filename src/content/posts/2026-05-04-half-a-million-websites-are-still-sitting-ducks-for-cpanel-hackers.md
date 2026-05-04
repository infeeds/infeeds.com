---
title: "Half a Million Websites Are Still Sitting Ducks for cPanel Hackers"
description: "A week after the cPanel vulnerability went public, thousands of servers remain compromised and patching is lagging behind the threat."
date: 2026-05-04 00:00:16 +0530
author: adam
image: 'https://images.unsplash.com/photo-1597495227772-d48ecb5f2639?q=80&w=2070'
tags: [news, tech]
tags_color: '#00ba65'
---

A critical vulnerability in cPanel and WebHost Manager (WHM) has turned into a slow-motion disaster. Nearly a week after the initial alert, hackers are still actively targeting thousands of websites running the vulnerable software, and the numbers paint a grim picture of how slowly the internet moves when it comes to security patching.

According to data from Shadowserver, a nonprofit that monitors cyberattacks across the internet, more than 550,000 servers are potentially vulnerable to exploitation. While the number of compromised instances has dropped from around 44,000 on Thursday to approximately 2,000 by Monday, that decline doesn't tell the full story. It suggests that some victims have either patched their systems or gone offline entirely, but it also means thousands of websites have already been hijacked.

## The Ransomware Trail Left Behind

The damage is visible in plain sight. According to reporting from Bleeping Computer, Google has indexed dozens of websites that once displayed ransom notes from attackers claiming to have encrypted victims' files in ransomware attacks. Some of these sites have since returned to normal operation, but the fact that the notes existed at all shows how thorough the compromise was.

The attackers left a chat ID for victims to contact them. They haven't been exactly responsive to inquiries, which tracks with how most ransomware operations work. The goal is speed and volume, not engagement.

## How Long Has This Been Going On?

Here's where it gets worse. The attacks likely started well before anyone knew about them. KnownHost CEO Daniel Pearson revealed that his company detected suspicious activity dating back to February 23, months before the vulnerability became public knowledge. This suggests that hackers had a significant window to operate in the shadows before the security community even knew what was happening.

The vulnerability itself, tracked as CVE-2026-41940, allowed attackers to take full control of vulnerable servers through their control panels. The U.S. Cybersecurity and Infrastructure Security Agency (CISA) issued a warning on Thursday and added the flaw to its Known Exploited Vulnerabilities catalog, asking government agencies to patch by Sunday. Whether those agencies actually met that deadline remains unclear, as CISA hasn't confirmed compliance status.

## The Company Behind It All

Webpros, the developer of cPanel and WHM, has remained largely silent through the crisis. The company claims its software powers 60 million domains globally, which means the potential blast radius here is enormous. Executives at the company did not respond to requests for comment about the scope of the breach, their response efforts, or their timeline for fixes.

That silence is its own statement, really. When your software is being actively exploited across hundreds of thousands of servers and you're not talking to the press, it usually means you're either overwhelmed or you don't have good news to share.

## Why Patching Takes Forever

The stubborn reality of [Technology](https://infeeds.com/tags/?tag=technology) infrastructure is that many website owners either don't know their systems are vulnerable, can't easily apply patches without downtime, or simply procrastinate. A 550,000-server vulnerable footprint isn't unusual for a widely deployed tool, but it reveals a structural problem in how we secure the web. When patching becomes a risk in itself because your business can't afford the downtime, you get situations like this.

The fact that attackers have been working since at least late February before public disclosure suggests they knew this would be the bottleneck. Compromise now, ransom later, hope the victim never notices or can't do anything about it quickly enough.

The question worth asking isn't just why so many servers remain vulnerable a week after disclosure. It's why we've built an internet infrastructure where patching a critical flaw can take weeks or months, if it happens at all.