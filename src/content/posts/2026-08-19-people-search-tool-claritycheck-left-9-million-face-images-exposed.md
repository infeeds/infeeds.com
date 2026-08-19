---
layout: post
title: "People-Search Tool ClarityCheck Left 9 Million Face Images Exposed"
description: "Security researcher discovers ClarityCheck's misconfigured database publicly exposed millions of photos, email addresses, and phone numbers before being secured."
date: 2026-08-19 16:00:37 +0530
author: adam
image: "https://images.unsplash.com/photo-1764075832552-bd8cd81cc063?q=80&w=1035"
video_embed:
tags: ["tech", "privacy", "security", "data"]
tags_color: "#000000"
---

A popular people-search tool called ClarityCheck left more than 9 million image files sitting in an unsecured Amazon S3 bucket for months, according to findings from independent security researcher Jeremiah Fowler. The exposed database contained roughly 450 GB of photographs including profile images, screenshots, and pictures of adults, teenagers, and children. All of it was accessible to anyone with the right URL.

The company's website reassures users that reverse image searches are "private and secure." That promise rang hollow when Fowler discovered the misconfiguration. Files were organized in folders bluntly named "faces" and "profiles," and the URLs needed to access them were embedded in ClarityCheck's publicly available website code. Fowler's efforts to alert the company about the problem were initially unsuccessful, meaning the data remained exposed for an extended period.

## What Is ClarityCheck and What Does It Do?

ClarityCheck is one of several people-finder tools that have proliferated online in recent years. These websites claim to search public records, web data, and other databases to identify individuals. You can search by phone number, email address, vehicle identification number, or name. The service's photo-search page promises to "identify anyone in a photo" and find social media profiles "in seconds."

When a WIRED reporter tested the system using their own face, the website scanned facial landmarks and mapped unique face geometry before returning a report that included their full name, addresses, location history, public appearances, photos, videos, social media profiles, and even "hidden dating profiles" for a fee. The implications for privacy are staggering.

The real problem isn't just that the data was exposed. It's that people in those photos likely had no idea their images were in ClarityCheck's database at all. The service is explicitly designed for identification, meaning people don't typically upload pictures of themselves or those they know. Someone else, trying to identify an unknown person, might upload your photo without your permission or knowledge. You could be in that database forever, none the wiser.

## The Larger Security Picture

Beyond the 9 million faces, ClarityCheck also misconfigured its APIs in ways that allowed anyone to manipulate website URLs and extract data about people by simply entering names into a browser. This exposed multiple email addresses, physical addresses, and phone numbers for people with matching names. After WIRED contacted the company, these URLs were secured.

ClarityCheck's response downplayed the severity. The company disputed that the data was truly "exposed," arguing that an ordinary member of the public wouldn't have discovered it. They claimed access required knowledge of a specific, unindexed URL. Yet the security industry and US federal government define exposure as any situation where data is accessible to people not intended to have access, particularly when it's reachable on the open internet without authentication.

Mark Beare, head of consumer products at security firm Malwarebytes, puts it plainly: "A publicly reachable database backup, a misconfigured storage bucket, or credentials sitting in a system that a researcher can reach are all exposures."

The risks here are particularly acute with biometric data. Face images are unchangeable. You can't reset your face like you might change a password. And researchers warn that exposed photos could be used to train AI systems, create deepfakes for catfishing schemes, or enable other fraud. Fowler notes that criminals could easily scroll through millions of faces, select attractive individuals, and use their images to create fake personas.

Misconfigurations and accidental data exposures happen constantly online, but as [tech](https://infeeds.com/tags/tech) platforms collect and analyze increasingly sensitive personal information, the stakes continue climbing. Rebecca Williams, director of strategy for privacy and data governance at the American Civil Liberties Union, warns that systems relying on highly sensitive data to verify individuals will carry these risks indefinitely, even with stronger security practices.

ClarityCheck eventually secured the database after WIRED contacted them and says they've improved security reporting procedures. But the damage was already done. For months, millions of people's faces existed in a publicly accessible database they didn't know about and couldn't control. It's a stark reminder that convenience in search often comes at the cost of privacy.

*Source: WIRED*