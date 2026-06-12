---
title: "This Indian Startup Built a Video AI That Costs 20x Less Than Google and OpenAI"
description: "Avataar AI's Varya generates 5-second videos for just $0.005 per second. But price is only part of the story."
date: 2026-06-11 12:00:18 +0530
author: adam
image: 'https://images.unsplash.com/photo-1768622180477-5043d6dcdfcc?q=80&w=2070'
tags: [news, tech]
tags_color: '#00ba65'
---

This piece is based on reporting from TechCrunch.

India has a computing problem. When it comes to training foundation models, the country has lagged behind the U.S., China, and Europe. Only a handful of startups have released their own AI models, and most of those are either language models or voice tools. Building a genuinely competitive video model has felt like a distant dream.

But there's a growing sense that India doesn't need to beat the world at building foundation models from scratch. Instead, the opportunity lies in taking existing technology and making it work for local needs — cheaper, faster, and with an understanding of what actually matters to Indian users.

That's exactly what Avataar AI is attempting with Varya.

The Peak XV-backed startup, which already makes video tools for e-commerce, just launched a new video generation model that runs roughly 10 times faster than its base model while costing a fraction of the price. On an NVIDIA H200 GPU, Varya can produce a 5-second 720p clip in 45 seconds. The original model, Wan 2.2 from Alibaba, takes over 20 minutes for the same task.

The real headline, though, is the price. Avataar plans to charge just ₹0.48 — that's about half a cent — per second of video on its hosted service. Compare that to models like Google's Veo, Kling, Luma, or Runway, which typically cost $0.10 or more per second. Varya is roughly 20 times cheaper.

"India is a video-first market. We see this across every large consumer internet product in India: video wins over text," Peak XV's managing director Rajan Anandan told TechCrunch. "Current AI video models are too expensive for population-scale use in India. If video AI is going to reach students, teachers, MSMEs, creators, enterprises, and public services, costs have to come down dramatically. Cost is the biggest unlock for AI adoption in India."

This kind of pricing matters because the economics of AI video generation are brutal at scale. A teacher in a small town isn't going to pay $0.10 per second to generate a lesson clip. A small business owner in Tier 2 city won't fork out that kind of money to create a product video for Instagram. The promise of AI video only becomes real when it stops being a luxury and starts being something anyone can afford to use.

What makes Varya interesting beyond the price tag is its approach to building the model. Avataar didn't train from scratch. They started with Wan 2.2, a publicly available video generation model released by Alibaba, and used a technique called distillation — essentially compressing the larger model's capabilities into a leaner, faster version that's optimized for specific use cases. The distilled version runs in just four steps rather than 50.

It's a pragmatic approach, and honestly, it might be the right one for India right now.

There's also the cultural angle worth noting. Many global AI image and video models produce generic outputs that miss local context — they don't know what a festivals like Diwali or Eid look like, or the difference between a saree and a dhoti, or the architecture of old Hyderabad versus old Jaipur. Avataar says it has used curated training data to teach Varya to recognize these cultural nuances, which could make it genuinely useful for Indian creators who have long been frustrated by generic, culturally tone-deaf AI outputs.

Varya will be released as an open-weight model on India's AI Kosh portal, the government-run repository for publicly available AI models. Developers can download it, self-host it, or modify it for their own needs. That's an important distinction — this isn't just another paid API. Avataar is giving away the model and its training data, which could spark a whole ecosystem of localized video tools built on top of it.

The initiative is also getting a boost from the India AI Mission, a roughly $1.2 billion government program that provides selected startups with subsidized GPU compute in exchange for releasing their models publicly. Avataar was one of the 12 startups chosen for this program, and Varya is one of the first tangible results.

But let's be clear about what this represents. Varya is not a foundation model that rivals Sora or Veo in raw capability. It's a distilled, purpose-built tool that trades some generality for speed and cost. Whether that's enough for Indian developers and businesses remains to be seen. The real test will be whether people actually use it — and whether the price point unlocks new use cases that were previously economically impossible.

What this launch does show is that India might not need to win the foundation model race to make AI useful at scale. Sometimes, clever optimization beats brute force. Sometimes, building for a specific market beats trying to be everything to everyone. The question now is whether other startups will follow Avataar's lead — and whether the cost-focused strategy will finally make AI feel accessible to the millions of creators, educators, and small businesses who've been watching from the sidelines.