---
title: "Google Cloud's AI Security Wake-Up Call Comes With Some Awkward Context"
description: "Francis de Souza says security must be foundational. Meanwhile, Google keeps hitting developers with surprise five-figure bills."
date: 2026-05-24 18:00:18 +0530
author: adam
image: 'https://images.unsplash.com/photo-1768622180477-5043d6dcdfcc?q=80&w=2070'
tags: [news, tech]
tags_color: '#00ba65'
---

Francis de Souza wants you to know that security needs to come first. Actually, he insists on it. Sitting down backstage at an event in Los Angeles, the Google Cloud COO laid out what has become the industry refrain of the moment: companies need to stop treating security as something you bolt on later. They need platform thinking. They need governance and auditability from day one. None of this is new advice, but AI has a way of making old truths feel urgent again.

"There'll be a transition period, and then I think we get to this better place," de Souza said, channeling the measured tone of a university professor. He's not wrong. The threat landscape has shifted in ways that make traditional defense feel like bringing a knife to a gunfight. The average time between an initial breach and the handoff to the next stage of an attack has dropped from eight hours to 22 seconds. Twenty-two seconds. That's not enough time for a human to even process what's happening, let alone respond.

What makes de Souza's message stickier is the expansion of the attack surface itself. It's not just networks anymore. It's models, data pipelines, agents, prompts. Every new AI capability opens another door that needs locking. And unlike the old days, those doors aren't always visible. De Souza pointed out something that security teams are quietly losing sleep over: agents moving through internal systems are discovering forgotten data repositories that haven't been touched in years. Old SharePoint servers with outdated access controls, sitting there dormant, suddenly exposed because an AI agent went looking and found them. Nobody knew those doors existed until the agents opened them.

The answer, in his view, is to fight machine speed with machine speed. We're seeing the emergence of what de Souza called "AI-native, fully agentic defense" where organizations deploy agents to drive their defense instead of relying solely on human-led responses. This has become a leadership issue, not just a technology one. It's a board-level conversation now. That part is worth taking seriously.

There's just one problem. While de Souza was delivering this masterclass in security-first thinking, The Register was publishing a series of reports detailing exactly the kind of chaos that happens when platform providers themselves fail to practice what they're preaching.

The story is almost comical if it weren't so expensive for the developers involved. Google Cloud quietly expanded the scope of existing API keysOriginally deployed for Google Maps, these keys became capable of accessing Gemini models without any explicit action or clear disclosure from Google. Developers woke up to five-figure bills they never expected. Rod Danan, CEO of interview-prep platform Prentus, saw a $10,138 charge hit his account in roughly 30 minutes after attackers exploited his compromised key. Isuru Fonseka, a Sydney-based developer, faced roughly AUD $17,000 in charges despite believing he had a $250 spending cap in place.

Here's where it gets really interesting. Neither Danan nor Fonseka knew that Google's automated systems had upgraded their billing tiers based on account history, raising their effective ceilings to as high as $100,000 without explicit consent. They thought they had guardrails in place. They didn't. Google refunded both developers after The Register's initial report went public, but the company has no plans to change its automatic tier-upgrade policy. Their reasoning: preventing service outages matters more than enforcing users' stated budget preferences.

That rationale feels like it deserves a little more scrutiny.

Then there's the separate issue of what happens when a developer actually catches the breach and tries to shut things down. Security firm Aikido found that even developers who immediately delete a compromised key may not stop the bleeding. Attackers can continue using that key for up to 23 minutes because revocation propagates gradually across Google's infrastructure. During that window, success rates are unpredictable. In some minutes, over 90% of malicious requests still authenticated. That's more than enough time for an attacker to exfiltrate files and cached conversation data from Gemini.

Joseph Leon, a researcher at Aikido, noted that Google's newer credential formats don't have this problem. Service account API credentials revoke in about five seconds, and Gemini's newer AQ-prefixed key format takes roughly a minute. Both run at Google scale. Both suggest this is technically solvable for the older API key format too. The 23-minute window isn't an engineering constraint, Leon argued. It's a matter of priorities.

Which brings us back to de Souza's advice, which is genuinely sound and should be taken seriously. He's not wrong when he says companies need to take a platform approach, that security can't be an afterthought, that there's no such thing as an AI strategy without a data strategy and a security strategy. He's right about all of it.

But there's an uncomfortable gap between the standards platforms are prescribing for the industry and how fast they're adapting their own infrastructure. De Souza argued that companies need to demand security, governance, and auditability from their platforms from the start. That's reasonable advice. It just might land differently when the platform itself is the one quietly expanding API permissions without telling anyone, automaticaly raising billing limits, and leaving a 23-minute window where compromised credentials keep working.

Maybe the "better place" de Souza mentioned will arrive eventually. For now, it might be worth remembering that the biggest security risks sometimes come from the directions you least expect.