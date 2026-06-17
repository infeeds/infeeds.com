---
title: "NVIDIA's AI Coders Are Now Training Robots Overnight, And The Results Are Uncanny"
description: "NVIDIA's new ENPIRE framework lets AI agents autonomously train robots to 99% success rates while humans sleep."
date: 2026-06-17 02:00:19 +0530
author: adam
image: 'https://images.unsplash.com/photo-1765707886613-f4961bbd7?q=80&w=988'
tags: [news, tech]
tags_color: '#3f51b5'
---

What happens when you give AI coding agents a lab full of robotic arms and tell them to figure out how to teach those robots useful tricks? Apparently, they get pretty good at it. Actually, really good. Somewhere around 99 percent success rate kind of good.

This isn't speculation or a demo staged for a press event. This is actually happening at NVIDIA's GEAR lab, where researchers have built a system called ENPIRE that essentially lets AI agents run a robot training facility while humans go home for the evening. The agents write code, debug issues, read research papers, and iterate on training strategies all on their own. By morning, there's new progress to review.

It's a fascinating development that raises some big questions about where this technology is heading. (This reporting is based on source material from Ars Technica.)

## The Setup: Giving AI Agents Keys to the Lab

The ENPIRE framework is essentially a harness that wraps around AI models and gives them access to tools, memory, context, and feedback loops. Think of it as the difference between handing someone a textbook and saying "good luck" versus giving them a fully equipped workshop with all the manuals, testing equipment, and a team of collaborators.

The system has four distinct modules. One handles automatic reset and verification of tasks. Another refines the policies that guide how robots behave. A third evaluates those policies across multiple physical robots running in parallel. The fourth addresses failures by analyzing logs, ingesting relevant research papers, and tweaking the training infrastructure and algorithm code.

The agents tested included OpenAI's Codex with GPT-5.5, Anthropic's Claude Code with Opus 4.7, and Moonshot AI's Kimi Code with Kimi K2.6. Each team independently developed different algorithmic approaches to robot training, ran real-world experiments, and kept whatever changes actually improved success rates.

What they achieved was pretty remarkable. The AI-driven training regimen taught robots to successfully cut zip ties, insert GPUs into thin motherboard sockets, move T-shaped blocks to target positions, and organize pins in a box. The pin insertion task was particularly impressive, with the agents hitting nearly 100 percent success faster than traditional human-in-the-loop methods that the researchers themselves had developed.

## More Agents, Faster Results, Higher Costs

Here's where it gets really interesting from a scalability standpoint. The researchers found that larger teams of AI coding agents accomplished robot training tasks faster than smaller teams or solo agents.

An eight-agent team achieved 99 percent success on the Push-T task in about two hours. A four-agent team needed three hours. A single agent required nearly five hours. The pattern is clear: more agents means faster iteration, at least up to a point.

But there's a catch, and it's a significant one. The robots themselves often sat idle while the coding agents were busy doing what coding agents do best: reading logs, writing code, debugging, or waiting for the language model backbone to respond. Larger teams also spent more time summarizing each other's ideas and less time actually putting the robots through their paces.

The faster results also came with a steeper token consumption bill. Given that AI providers like Anthropic are reportedly considering pricing changes that would significantly increase token-related costs, this isn't a trivial consideration for anyone thinking about scaling up similar systems.

## What This Means For the Future

NVIDIA has been pushing hard on physical AI and robotics. The company announced a partnership with Chinese robotics firm Unitree in late May to provide a reference humanoid robot for research labs. Founder Jensen Huang met with Hyundai executives in early June to discuss scaling up manufacturing of AI-powered robots. Hyundai owns Boston Dynamics, the company behind the well-known Atlas humanoid and Spot robot dog.

The GEAR team plans to open-source everything, which means anyone could theoretically set up their own self-running robot lab. That's a tantalizing prospect for researchers and hobbyists alike, though the practical barriers to entry remain substantial.

What's clear is that we're watching a genuine shift in how robot training might work. Instead of humans meticulously programming every movement, we're seeing a model where humans set the goals and agents figure out the paths. Whether that's an unqualified good or introduces new complications we haven't anticipated yet is something we'll learn in the years ahead.

One thing's for sure: the robots aren't going to learn themselves. Someone still has to wake up and check the results.