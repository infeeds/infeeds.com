---
title: "This Startup Wants to Bring Mathematical Rigor to AI for Law, Taxes, and Drugs"
description: "Pramaana Labs just raised $27M to make AI reliable in high-stakes industries using formal verification."
date: 2026-06-16 20:00:18 +0530
author: adam
image: 'https://images.unsplash.com/photo-1768409427465-01320d46963e?q=80&w=2232'
tags: [news, tech]
tags_color: '#00ba65'
---

The AI pilot program problem is getting old. Companies keep spinning up proofs of concept, hyping them up, and then quietly burying them when they hallucinate their way into embarrassing failures. The gap between what AI can theoretically do and what enterprises can actually trust in production remains stubbornly wide.

A new startup thinks it has figured out why, and more importantly, how to fix it.

Pramaana Labs announced $27 million in seed funding this week, a round led by Khosla Ventures with participation from Accel, Boldcap, Nexus Venture Partners, Premji Invest, and Unbound. The pitch is straightforward: take one of computer science's most reliable systems and bolt it onto one of its most chaotic, then watch the magic happen.

The chaos, of course, is the large language model. The reliability comes from formal verification, a set of tools borrowed from mathematics and programming language theory that can mathematically prove software behaves correctly.

"We see the pattern across every high-stakes industry," Ranjan Rajagopalan, Pramaana's co-founder and CEO, told TechCrunch. "The world's hardest problems are not unsolvable. They are unformalized."

That quote sums up the entire thesis. Tax codes, legal precedents, drug interactions — these domains have rules. Lots of them. Rules that are supposedly codified somewhere, even if that somewhere is a maze of PDFs, court opinions, and regulatory footnotes that no single human can parse. Pramaana's bet is that once you formalize those rules into something a machine can actually reason about, the AI stops making things up.

The system still runs on a conventional LLM, which gives it the flexibility to handle natural language and tackle problems that traditional software cannot. But there's a deterministic layer sitting on top, essentially a proof checker that verifies the LLM's output against the formalized rules. If the math doesn't check out, the answer doesn't ship.

It's a popular architecture in the abstract, but Pramaana's specific choice of tools is what makes this interesting. They're using LEAN, an open-source programming language originally developed at Microsoft Research and now heavily used in academic mathematics to verify proofs. If you've never heard of it, you're not alone — it's mostly lived in the world of theorem provers and research labs. But it's exactly the kind of tool that can formalize something like the U.S. tax code into executable, verifiable logic.

There's precedent for this approach, even if it's rare. Rajagopalan points to France's CATALA project, which has formally verified large portions of the country's tax and benefit system. When the rules are written in code that can mathematically guarantee correctness, the AI layer becomes much less dangerous.

For each vertical it attacks, Pramaana is building domain-specific formal systems overseen by experts. For tax law, they've brought in former IRS commissioner Danny Werfel. For cybersecurity and drug discovery, academic partners from IIT Delhi, IIT Madras, and UC Berkeley are overseeing the formalization work.

Here's where the skepticism is warranted: formalizing an entire domain is hard. It requires deeply understanding the rules, then translating them into a format that a theorem prover can work with. The LLM handles the natural language understanding, but someone still has to build the formalized skeleton that constrains it. That takes time, expertise, and serious money — which is exactly what this $27 million round is for.

The industries Pramaana is targeting have something in common: being wrong is expensive. In tax preparation, an hallucinated deduction could trigger an audit. In drug discovery, a mispredicted molecular interaction could waste years of research. In legal work, citing a non-existent case could get a lawyer sanctioned. These aren't domains where you can shrug and say "the model hallucinated, what can you do?"

The question isn't really whether AI should be in these spaces — it's whether anyone can build systems trustworthy enough to let it there. Pramaana's approach won't be the only attempt, and formal verification is no silver bullet. But there's something refreshing about a startup that's at least trying to tackle the reliability problem at its root instead of just wrapping guardrails around a firehose and hoping for the best.

Whether formalizing the world's messiest domains is actually tractable at scale remains to be seen. But the problem is at least being taken seriously now, which is more than you can say for most AI products shipping today.