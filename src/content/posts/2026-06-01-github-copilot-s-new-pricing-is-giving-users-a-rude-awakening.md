---
title: "GitHub Copilot's New Pricing Is Giving Users a Rude Awakening"
description: "Users are burning through monthly AI credits in hours under the new usage-based model."
date: 2026-06-01 06:00:19 +0530
author: adam
image: 'https://images.unsplash.com/photo-1768405942773-87e8d4fb782b?q=80&w=2070'
tags: [news, tech]
tags_color: '#3f51b5'
---

If you are a GitHub Copilot subscriber, you might want to check your credit balance. Like, right now.

Based on reporting from Ars Technica, the story unfolding across social media and coding forums is one that many saw coming but probably hoped would not hit them quite this hard. GitHub recently switched Copilot from its old request-based billing system to a new usage-based model, and today is the day that change officially went live. Suffice it to say, the reaction has been loud, and not in a good way.

## The Sticker Shock Is Real

The complaints started flooding in almost immediately. Users are sharing screenshots and stats that make for pretty bleak reading. One developer reported burning through 840 credits on their first day of testing, and they had barely even started on anything complex. Another said they used 21 percent of their monthly Pro subscription allocation in a single day. Think about that for a second. Your entire monthly allotment, gone before you've even really gotten into your work.

The math behind this is pretty straightforward. Under the new system, your subscription gets you a pile of credits each month, and one credit equals a penny of usage. The $10 Pro plan gives you 1,500 credits, which sounds like a lot until you realize that even simple queries can eat up 15, 50, or even 100 credits depending on what you're asking and which model is handling it. The $39 Pro+ plan gets you 7,000 credits, and the $100 Max plan gets you 20,000. It is a fundamental shift from the old way, where you paid per request regardless of how computationally expensive that request was.

GitHub justified the change by pointing out that under the old system, a quick chat question and a multi-hour autonomous coding session cost the same. That meant Copilot was eating the difference when inference costs skyrocketed, which is not a sustainable position for any company to be in. So the move to usage-based pricing makes business sense. The question is whether users are ready for it.

## It Adds Up Faster Than You Think

The real kicker here is how quickly things can spiral. Ars Technica ran their own tests, and even relatively modest prompts can consume meaningful chunks of your monthly allocation. One user reported spending 171 credits on a single complex prompt. Another said they burned 700 credits on just a few prompts. Yet another developer found that a couple of Copilot-led commits used a staggering 5,000 credits. At that rate, your $10 Pro plan disappears in nothing flat.

And it is not just about complexity. Even the simplest requests can quietly eat into your balance. Users have reported spending 15 credits on what they described as a run-of-the-mill query. That does not sound like much, but if you are using Copilot dozens of times a day, those small numbers start to add up in ways that feel less like a subscription and more like watching a meter run.

Then there is the model question. Copilot lets you choose which underlying AI model handles your requests, and different models have dramatically different price points. One million output tokens on OpenAI's GPT-5.4 nano costs just $1.25 through Copilot. The same volume on the frontier GPT-5.5 model? That runs $30. And if you are using the "Auto" mode, which automatically picks what it thinks is the best model for your request, you might be inadvertently routing simple questions to expensive models without even realizing it.

## The Exodus Has Already Begun

Reading through the reactions, it is clear that a significant chunk of the Copilot user base is not happy. Some are threatening to cancel. Others are already looking at alternatives. One developer on Bluesky made a smart observation that continuing a days-old chat session probably is not wise anymore, because sending the entire chat history as context every time eats input tokens, and those tokens use credits. It seems obvious when you think about it, but plenty of people were not thinking about it until they saw their balance drop precipitously.

That said, not everyone is struggling. Some users report adapting well by being more deliberate about their prompts and limiting themselves to focused, specific requests. One developer using GPT 5.3-Codex said they only burned 161 credits in a productive day by staying laser-focused on what they were asking. The lesson there is that the new pricing model rewards efficiency and punishes the kind of casual, throw-everything-at-the-wall approach that many of us adopted when AI credits felt infinite.

## What This Means for the Industry

Here is the bigger picture part. If GitHub's move proves successful, you can bet other AI coding assistants will follow suit. The whole industry has been subsidized by companies willing to absorb massive inference costs in hopes of capturing market share, but that era is closing. Usage-based pricing is the logical next step, and developers who have gotten used to unlimited AI assistance may need to recalibrate their expectations.

In that world, efficiency matters. Token-hungry models may find themselves at a disadvantage compared to leaner alternatives. One Reddit user has reportedly integrated Deepseek into their GitHub VS Code environment at a cost of about seven cents for fifteen million tokens. That is a fraction of what Copilot charges for similar workloads, and while Deepseek may not match the output quality in every scenario, the economics are hard to ignore.

The question for individual developers is simple. Is the convenience of having AI right there in your IDE worth the new cost structure? That answer will vary wildly depending on how you use it, what you are building, and whether you have the budget to burn through credits like there is no tomorrow. But one thing is clear. The free ride is over, and we are all going to have to get smarter about how we use these tools.