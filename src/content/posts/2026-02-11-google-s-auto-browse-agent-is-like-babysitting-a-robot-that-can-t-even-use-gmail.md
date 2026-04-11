---
layout: post
title: "Google's Auto Browse Agent Is Like Babysitting a Robot That Can't Even Use Gmail"
description: "Chrome's new AI agent can play games and shop for you, but it spectacularly fails at Google's own products. Here's what happens when you let it loose."
date: 2026-02-11 22:00:18 +0530
author: adam
image: 'https://images.unsplash.com/photo-1674064205823-1668a0777091?q=80&w=988'
video_embed:
tags: [news, tech]
tags_color: '#3f51b5'
---

We're living through the AI revolution, and everyone's moved on from arguing about which chatbot sounds more human to which AI agent can actually do stuff for you. Google just threw its hat in the ring with Auto Browse, a Chrome-based agent that's supposed to handle tedious online tasks while you do literally anything else. Spoiler alert: it needs more work.

Unlike OpenAI's Atlas agent that came out late last year, Auto Browse has a massive advantage. It lives inside Chrome, which basically means it's already on most people's computers. Google started rolling this out earlier this month to AI Pro and AI Ultra subscribers, letting them send a digital assistant out into the wild to complete tasks.

But can you actually trust it? One tech journalist put it through six real-world tests to find out, and the results are honestly kind of hilarious.

## When Playing Games Works Better Than Using Gmail

The first test was simple enough: play 2048 until you run out of moves. Auto Browse can't use arrow keys because Google apparently decided they're not necessary for productivity tasks, which is a weird choice but okay. After pointing it to a version with on-screen controls, the agent actually did pretty well. It understood the rules and played for about 20 minutes, creating a 128 tile and making 149 moves.

The problem? It took things too literally and stopped when it couldn't merge tiles, even though empty spaces remained on the board. Any human would just take the hit and keep going, but the robot needed explicit permission to continue. Still, it scored an 8/10 for decent performance without much hand-holding.

Things got messier with the second task. The goal was to turn Minnesota Public Radio's playlist into a YouTube Music collection by listening for an hour and noting songs. Predictably, Auto Browse refused to monitor a page for that long because running agents is expensive. After adjusting the prompt to grab songs from the station's playlist view instead, it worked fine.

Then came the real embarrassment. Auto Browse couldn't figure out how to use YouTube Music's interface to create the playlist. It literally couldn't find the buttons. When the prompt was changed to use Spotify instead, it worked immediately. Let that sink in: Google's AI agent can't properly navigate Google's own streaming service.

## The Gmail Disaster That Makes You Question Everything

Here's where things went from amusing to genuinely concerning. The task was straightforward: scan a month of Gmail for PR emails and compile contact info into a Google Sheets spreadsheet. This should be easy for Google's [technology](https://infeeds.com/tags/?tag=technology), right?

Wrong. So incredibly wrong.

Auto Browse has a special Gmail tool that works in the background, which sounds convenient. It opened a new spreadsheet like it was supposed to. Then it only entered two PR contacts when there should have been dozens, entered the data incorrectly, overwrote fields, and dumped a date into an unlabeled column. This thing earned a brutal 1/10 score, and honestly that feels generous.

The irony is thick here. Google's AI Overview can correctly identify PR emails in Gmail searches. The capability exists somewhere in Google's ecosystem. Auto Browse just can't access it properly, or it can't use a spreadsheet, or both systems are broken. Either way, it's embarrassing.

## Building Websites and Shopping for Power Plans

The testing continued with a request to create a fan website about Tuvix, a Star Trek character who gets killed off in a controversial episode. Auto Browse initially got stuck in a loop trying to access a hover menu on Neocities, eventually giving up entirely. But when the task was rerun, it switched tactics and used a list view instead.

The resulting site actually looks decent. It has text backgrounds, colors, and makes its point about Captain Janeway being a murderer (it's a whole thing in the Trek fandom). The agent even grabbed images from TrekCore, though they were from early in the episode and didn't actually show Tuvix. Close enough for a 7/10.

The real success story came with shopping for electricity plans in Texas, where the power system is apparently so complicated that people need to regularly find new contracts. Auto Browse nailed this one. It entered all the search parameters correctly, used filters and dropdown menus without issue, and returned a solid recommendation with a fact sheet in just a couple minutes. Perfect 10/10 performance.

Finally, the agent tackled scanning PlayStation Store deals to add discounted games to a wishlist. It correctly changed display settings, interpreted sale prices, and understood PlayStation Plus availability. The downsides? It asked for confirmation before every single addition (so much for "auto"), didn't distinguish between PS5 and PS4 titles, and stopped slightly short of completing two full pages. Still earned a respectable 7/10.

## The Problem With AI Agents That Need Constant Supervision

Across all these tests, Auto Browse averaged a 6.5 score. That's not terrible for preview software, but it highlights the fundamental problem with current AI agents. They're not actually autonomous.

You can't just give Auto Browse a task and walk away. You have to watch it like a toddler at a playground. It needs nudging, re-prompting, and constant supervision to get things right. That defeats the entire purpose of having an agent do work for you. If you're spending 15 minutes monitoring a [business](https://infeeds.com/tags/?tag=business) task that takes 20 minutes to complete, you might as well just do it yourself.

The failure to work properly with Google's own products is particularly damning. This isn't some obscure third-party service. We're talking about Gmail, Google Sheets, and YouTube Music. If Auto Browse can't reliably use tools from its own parent company, how is it supposed to handle the entire internet?

Browser agents also seem fundamentally incapable of monitoring pages over time. Anything requiring more than a few minutes of waiting will probably fail or abort early. That's a significant limitation for tasks like tracking price changes, waiting for restocks, or monitoring live updates.

Google says this feature will eventually roll out to non-paying users, which seems premature given its current state. It's genuinely fun to watch a browser navigate itself, opening tabs and clicking buttons with ghost-like precision. But entertainment value doesn't make it [useful](https://infeeds.com/tags/?tag=tech).

The AI revolution promised agents that could handle our digital busywork while we focus on things that actually matter. What we got instead is a robot that needs constant babysitting and can't even read its creator's email correctly. Maybe the real task Auto Browse is accomplishing is teaching us patience while we wait for AI that actually works.