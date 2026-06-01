---
title: "When AI Disproved a Famous Math Conjecture: What It Actually Means"
description: "OpenAI's AI just cracked an 80-year-old math problem. But let's not declare the death of human mathematicians just yet."
date: 2026-05-31 18:00:19 +0530
author: adam
image: 'https://images.unsplash.com/photo-1768697581060-52e2edbee7fa?q=80&w=2070'
tags: [news, tech]
tags_color: '#3f51b5'
---

In mid-May, OpenAI dropped something that made a lot of people pay attention: an internal AI model had disproved the Erdős unit distance conjecture, a famous problem in discrete geometry that had stumped human mathematicians for 80 years.

Tim Gowers, who is one of the rare mathematicians who've won the Fields Medal, called it "a milestone in AI mathematics." Daniel Litt, a professor at the University of Toronto, went further, saying it was "the first example of a result produced autonomously by an AI that I find exciting in itself."

That's genuinely impressive. It's arguably the first time an AI system has found a proof resolving a major open conjecture. But here's where I'm going to push back a little: I don't think this represents some radical break from where AI progress in mathematics was already heading.

## The Unit Distance Problem Explained

Let me back up and explain what this problem actually is, because it's pretty elegant.

Paul Erdős, one of the most prolific mathematicians in history, posed the unit distance problem in 1946. The idea is simple: take some points on a 2D plane and ask how many pairs of those points can be exactly 1 unit apart.

With 5 points, you can get at most 3 pairs at unit distance. With some clever rearrangement, you can push that to 7 pairs. But here's the thing: as you add more points, the problem becomes impossibly complicated very fast.

Erdős didn't ask for exact numbers. Instead, he wanted upper and lower bounds for n points, where n is large. For the lower bound, he suggested arranging points in a grid and carefully choosing the spacing so that diagonal distances would also equal 1. By using the Pythagorean theorem, you can find grid spacings where each point is 1 unit away from multiple neighbors.

With the right spacing derived from c² = 65 (satisfied by 1² + 8² = 65 or 4² + 7² = 65), each point ends up one unit away from 16 other points if the grid spacing is 1/√65. That's the idea.

Erdős conjectured that the maximum number of unit-distance pairs for n points would grow barely faster than n itself. For 80 years, nobody could prove him wrong. Most people assumed he was right.

AI companies have been quietly working on these kinds of Erdős problems as a testing ground, since Erdős posed hundreds of them and there's a handy website at erdosproblems.com tracking them all. But OpenAI's result was different.

## What the AI Actually Did

The AI didn't prove Erdős right. It proved him wrong.

Rather than using a simple square grid, the AI constructed a grid in high-dimensional space and then projected it into two dimensions. It used something called algebraic integers to build this more complicated grid, which has richer structure than a plain grid. This allowed more unit distances to be packed into the same number of points.

It's hard to visualize this pattern because it only becomes advantageous with huge numbers of points. But here's a simpler example with 1,345 points that gives a sense of how a non-grid pattern can beat a square grid.

Human mathematician Will Sawin later calculated that the AI's construction produces at least n^1.014 unit-distance pairs. That might sound like a small improvement, but as n gets really big, this grows meaningfully faster than what Erdős's approach could achieve.

The result doesn't completely resolve the problem, though. Our best upper bound is around n^1.333, so there's still a gap to close.

## Why This Matters (And Why It Doesn't)

The mathematical tools needed to actually prove Erdős's bound have always seemed far out of reach. Most people expected that any resolution would require genuinely new techniques, maybe even new areas of mathematics.

Instead, the AI pulled off something more like a clever optimization. It extended Erdős's own initial construction in a nonobvious way. That's genuinely hard and required real insight, but it also played to specific strengths that AI systems have over humans.

First, the solution relied on applying sophisticated techniques from algebraic number theory, a completely different area of mathematics. AI systems have been trained on enormous amounts of mathematical literature, giving them a broader knowledge base than any single human could have. A human would have needed to both know the relevant algebraic number theory AND be interested in the unit distance problem, which is a rare combination.

Second, the reasoning process was exactly the kind of grind that most humans would have given up on. Jacob Tsimerman, another University of Toronto professor, said in OpenAI's document that he had briefly considered a similar approach but abandoned it because it "consumes much time and frequently doesn't work out."

An AI, though, can work through many proof strategies that don't pan out. The OpenAI chart revealed that even with maximum token budget, their internal model only solves the problem about half the time. They could just run it repeatedly until something sticks.

## Where This Leaves Us

This result was very much a human-AI collaboration. The AI found the proof on its own, but human mathematicians verified it. Other humans came up with better-written proofs that extended the initial ideas, like Sawin finding an explicit lower bound.

In the short to medium term, this points to a world where AI models complement humans but don't replace them. AI systems will tackle lists of problems curated by human mathematicians or help humans find relevant approaches from seemingly unrelated fields. But they won't immediately displace the human role in choosing which questions to ask or developing truly new techniques.

Gowers, after his initial relief that the AI had disproved the conjecture rather than proving it (which would have suggested AI was close to being able to prove all theorems), added a footnote that he would guess "AI will soon reach a high level at other activities such as building theories, formulating definitions and asking interesting questions."

We went from AI systems that hadn't yet beaten high school mathematics competitions to ones that can advance mathematics in interesting ways in just about a year. Soon after OpenAI's announcement, a researcher found that GPT-5.5 could also disprove this same conjecture if given a small hint. If a generally available model could solve this famous problem and nobody noticed, what other discoveries could be happening right now that no one has thought to try?

The question isn't whether AI will keep improving at math. It clearly will. The question is what role we'll be left playing when it does.