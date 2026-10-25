---
layout: post
title: "AI is turning old PHP bugs into urgent security crises"
description: "Researchers used AI tools to transform years-old PHP vulnerabilities into practical exploits, triggering millions of attack attempts within hours of disclosure."
date: 2026-10-25 12:00:33 +0530
author: adam
image: "https://images.unsplash.com/photo-1764075832552-bd8cd81cc063?q=80&w=1035"
video_embed:
tags: ["tech", "security", "ai", "vulnerabilities"]
tags_color: "#000000"
---

When the PHP2Shell vulnerabilities went public in early August, security teams worldwide scrambled into crisis mode. Within hours, Cloudflare detected millions of exploitation attempts. The culprit? A combination of newly discovered bugs and AI-powered attack tools that made turning theoretical flaws into working exploits trivially easy.

But here's what makes this moment genuinely unsettling: some of these vulnerabilities had been sitting in PHP's codebase for years, identified but deemed too complex to weaponize by human attackers alone.

## When AI Meets Legacy Code

Researchers at Calif were first to crack the problem, using OpenAI's frontier models as part of the company's Patch the Planet initiative. They didn't just stumble upon something new, though. The underlying issues had been flagged as far back as 2024, but security experts had dismissed them as impractical to exploit. That changed when AI entered the picture.

The discovery triggered a cascade effect. OpenAI's own researchers independently found the same flaws using similar AI techniques. Then Google's Wiz security team did the same. Suddenly, a dormant risk became an active emergency.

"The vulnerability had been known to the PHP team for years, but because it could not be leveraged by an attacker, at least not a human one, it was not addressed," explains Sagi Tzadik, a security researcher at Wiz. That single sentence captures the fundamental shift happening in the [security landscape](https://infeeds.com/tags/security). We've moved from a world where complexity offered protection to one where AI eliminates that friction.

PHP's ubiquity amplifies the nightmare scenario. Billions of websites run on it. Most web hosting providers default to PHP. The attack surface is genuinely enormous, which is precisely why PHP received so much AI-powered attention in the first place.

## Don't Panic (Yet)

Still, the doomsday narrative shouldn't dominate the conversation. Despite millions of exploitation attempts, the PHP Foundation reported zero successful attacks. Many circulating exploits turned out to be duds. The feared cascade of mass breaches simply didn't materialize.

Crucially, the AI researchers involved in discovering these flaws weren't lone wolves with simple prompts. They were highly skilled security teams applying frontier AI models to known problem areas. As Ryan Austin from Calif noted, "No model is simply capable of unearthing 'all bugs' with simple prompts. At least for now."

Human expertise remains essential. The AI tools amplified what these researchers already knew about [tech](https://infeeds.com/tags/tech) architecture, PHP internals, and attack vectors. They didn't replace expertise, they accelerated it.

Security researcher Niels Provos strikes an interesting tone amid the panic. "I am not really worried," he says about AI suddenly unleashing a flood of previously unknown critical bugs. "People have now been looking with AI for over a year, and it required a highly skilled team to find this one." His point: if widespread catastrophic discoveries were imminent, we'd likely be seeing them by now.

That said, the pressure on already-stretched IT teams has become genuinely untenable. Microsoft released a record 1,453 security vulnerabilities in a single month. Bank of America quietly hired 1,000 consultants just to patch flaws discovered by Anthropic's vulnerability research. The volume itself has become the crisis.

## The Real Issue Isn't New

Security researchers emphasize that AI isn't introducing novel problems, it's magnifying existing ones. Vulnerabilities have always existed in foundational software. Coordinated disclosure has always been a cat-and-mouse game between researchers and maintainers. Attackers have always moved quickly to exploit public flaws.

What's changed is speed and scale. An AI model can analyze code patterns across millions of repositories simultaneously. Human security researchers would need decades to do the same work. That acceleration compresses the window between vulnerability discovery and active exploitation from weeks or months into hours.

For PHP specifically, Jake Williams from Hunter Strategy notes that while we'll definitely see more long-dormant bugs resurface, PHP's unusual position as internet-exposed legacy code by design limits how often this pattern repeats. Most other foundational tools aren't exposed to the internet at all.

The real question isn't whether AI will unlock a flood of unstoppable zero-days. The real question is whether under-resourced security teams can possibly keep pace with automated discovery tools working at machine speed. That's the actual crisis unfolding.

*Source: Kernel Panic newsletter, WIRED*