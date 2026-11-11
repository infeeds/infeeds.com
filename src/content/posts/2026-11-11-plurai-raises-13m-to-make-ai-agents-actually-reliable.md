---
layout: post
title: "Plurai raises $13M to make AI agents actually reliable"
description: "Startup backed by ex-Waymo engineers uses simulation and synthetic data to boost AI agent accuracy from 76% to production-ready levels."
date: 2026-11-11 20:00:33 +0530
author: adam
image: "https://images.unsplash.com/photo-1768697581060-52e2edbee7fa?q=80&w=2070"
video_embed:
tags: ["tech", "ai", "agents", "startups"]
tags_color: "#00ba65"
---

AI agents are having a moment, but there's a dirty little secret: they're not nearly as capable as the hype suggests. Recent benchmarks show Claude Fable 5.2 succeeding on just 82.9% of complex tasks, while ChatGPT-6 Astra hits 75.6%. Even worse, when tested in realistic corporate environments, the best performer only achieved 76.8% accuracy. That's not exactly the kind of reliability you want handling your business-critical operations.

Enter Plurai, a startup that thinks it has the answer. The company just raised $13 million in seed funding to tackle the AI agent reliability crisis using a surprisingly familiar playbook: the same simulation techniques that made self-driving cars possible.

## Simulation is the secret weapon

Co-founders Ilan Kadar and Elad Levi spent years at Nexar working on autonomous driving technology. Kadar even collaborated with Waymo on simulation systems for end-to-end deep learning models. When they looked at the current wave of AI agents flooding the market, they noticed something striking. "It is very easy to build a demo, but hard to get something that will be reliable and cost effective," Kadar told TechCrunch. That pattern felt familiar.

The problem with AI agents isn't just about raw intelligence. These systems operate probabilistically in unpredictable environments, leading to spectacular failures. A travel booking agent might ignore company spending policies under pressure. Query multiple databases simultaneously, and things fall apart. String together a long customer service conversation, and the agent gets buried in context, making nonsensical decisions.

Plurai's approach mirrors how autonomous vehicles are trained. The startup creates a digital twin of a company's entire tech stack, mapping every tool and data source the agent will access in production. Then it simulates thousands of possible user interactions and edge cases, allowing the model to learn and improve before deployment.

## The real game is custom models

While Plurai's simulation platform integrates with existing tools like Claude Code and Copilot, Kadar hints at something more ambitious. The company plans to use data from these simulations to post-train small, open-source models customized for individual customers.

Tests with Nvidia and Nebius showed these tailored models matching mid-tier frontier models in quality while cutting costs by one or two orders of magnitude. "We can take a large language model, decompose the task into smaller pieces using simulation, train an open-weight model, and verify performance with comparable quality but massive cost reduction," Kadar explained.

That's a compelling pitch in a market increasingly worried about AI spending sustainability. Google DeepMind researcher Reah Miyara, who backed Plurai as an angel investor, nails the core insight: frontier models are out of distribution with specific business data. "The cost of these things isn't sustainable in the long term," she noted.

## Why this matters for [tech](https://infeeds.com/tags/tech) leaders

The parallel between robotics and AI agents is instructive. Powerful general models power impressive robot demos, but specialized robots built for specific tasks are already in production, generating real-world data that makes them steadily more reliable. Plurai is betting the same logic applies to digital environments.

"No matter how smart OpenAI and Anthropic models will be, they will not know your business and your policy," Kadar said. That's the kicker. Generic models aren't going away, but the future likely belongs to systems trained on your specific workflows, edge cases, and constraints.

As companies look to deploy AI agents at scale without bankrupting themselves, Plurai's simulation-first approach feels like addressing the real problem rather than throwing more computing power at the issue. The question isn't whether AI agents will eventually work reliably. The question is whether you'll trust them to handle mission-critical tasks before custom models and rigorous testing become the standard.

*Source: TechCrunch*