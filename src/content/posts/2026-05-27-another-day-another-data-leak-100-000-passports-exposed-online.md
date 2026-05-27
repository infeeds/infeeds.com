---
title: "Another Day, Another Data Leak: 100,000 Passports Exposed Online"
description: "UK Visa Portal left tens of thousands of passport photos and selfies publicly accessible on an Amazon server."
date: 2026-05-27 00:00:18 +0530
author: adam
image: 'https://images.unsplash.com/photo-1768697581060-52e2edbee7fa?q=80&w=2070'
tags: [news, tech]
tags_color: '#00ba65'
---

If you needed proof that some companies still don't take data security seriously, here's a fresh example. A website called UK Visa Portal exposed roughly 100,000 passport photos and selfies from people applying for U.K. travel authorization. The data sat on a publicly accessible Amazon storage server for an undetermined amount of time before someone finally secured it.

TechCrunch broke this story, and the details are as troubling as they are predictable.

## What's the Deal With UK Visa Portal?

Let me be clear: this website is NOT affiliated with the U.K. government. It exists as a third-party service that charges applicants a fee to handle their visa applications. People have reportedly confused it with the official GOV.UK website and mistakenly paid this company instead of going through proper channels. That's already a red flag, but it gets worse.

The exposed data included passport photos, selfies, and in many cases, precise location data embedded in the images. We're talking GPS coordinates that could reveal someone's exact home address. Someone notify the people who thought their passport photos were just between them and the government.

## How Did This Happen?

The leak stemmed from a misconfigured Amazon S3 bucket. These storage servers are notoriously tricky to set up correctly, and companies frequently mess up the permissions. In this case, the bucket wasn't publicly listing its contents, but anyone who knew the web address of specific files could still access and view them. A bug on UK Visa Portal's website apparently allowed someone to see what files existed in the first place.

TechCrunch verified the authenticity of the data by reaching out to affected individuals to confirm their information was accurate. That's how you do proper verification, by the way.

## The Company's Response Is a Masterclass in Avoidance

Here's where this story gets really frustrating. TechCrunch attempted to notify UK Visa Portal about the security issue through proper channels. They even asked who specifically handles cybersecurity at the company. The response? Nothing useful. Instead, the company sent lawyers from BakerHostetler and a PR firm called FTI Consulting to make contact.

When TechCrunch asked these attorneys to prove they actually represented the company, they declined to provide authorization. Classic stalling tactics while people's sensitive data remains exposed.

The company never responded to questions about how long the data was exposed, whether anyone accessed it maliciously, or if they plan to notify affected users. You'll never guess if they have a responsible disclosure policy on their website.

## This Is Part of a Much Bigger Problem

This isn't an isolated incident. We're seeing companies expose sensitive identity documents with alarming regularity these days. The widespread adoption of online identity verification systems means more passports than ever are floating around in digital form, and not all of them are being handled by competent hands.

The real kicker here is that you don't actually need a third-party service to apply for a U.K. electronic travel authorization. The government website handles this directly. Yet these middleman companies keep popping up, charging fees for a service that should be free, and apparently can't even secure their own infrastructure.

The U.K. government should probably look into why these unofficial sites keep appearing and tricking applicants into using them. That might be a more effective solution than just hoping every random company that calls itself a "visa portal" figures out how to configure an S3 bucket correctly.