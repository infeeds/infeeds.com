---
title: "When a Spyware Hunter Became the Hunted: Inside a Russian Hacking Campaign"
description: "A security researcher turned the tables on hackers targeting Signal users, uncovering a massive Russian-backed phishing campaign affecting 13,500+ targets."
date: 2026-05-13 20:00:16 +0530
author: adam
image: 'https://images.unsplash.com/photo-1768595629816-cb20775bdec2?q=80&w=987'
tags: [news, tech]
tags_color: '#00ba65'
---

There's a particular kind of irony in a spyware researcher getting targeted by the very thing he spends his career investigating. That's exactly what happened to Donncha Ó Cearbhaill, head of Amnesty International's Security Lab, when a phishing message landed in his Signal inbox earlier this year.

The message was laughably crude. It claimed to be from "Signal Security Support ChatBot," warning of suspicious activity and data leaks. The attackers demanded he enter a verification code and explicitly told him not to share it with anyone, "NOT EVEN SIGNAL EMPLOYEES." For anyone working in [technology](https://infeeds.com/tags/?tag=technology) security, this reads like a neon sign screaming "we are criminals."

But here's the thing: instead of deleting it, Ó Cearbhaill saw an opportunity.

## A Phishing Attack Becomes an Investigation

According to reporting from TechCrunch, Ó Cearbhaill told the publication that he had "never knowingly" been targeted with a direct cyberattack like this before. The chance to flip the script and investigate the attackers themselves was too tempting to pass up. "Having the attack land in my inbox, and the chance to turn the tables on the attackers and understand more about the campaign was too good to pass up," he said.

What he discovered was darker than a single targeted attack. The phishing attempt turned out to be part of a sprawling campaign hitting thousands of Signal users worldwide. The tactics were consistent: impersonate Signal, manufacture fake security threats, trick users into handing over account access. It was mass production hacking.

The U.S. cybersecurity agency CISA, the UK's cybersecurity agency, and Dutch intelligence have all issued warnings about these attacks. They've attributed them to Russian government hackers. Der Spiegel, the German news magazine, reported that the Russian operatives had compromised several high-profile politicians within Germany. Signal itself has also warned users about similar phishing attempts targeting its platform.

## The Snowball Effect

Ó Cearbhaill's investigation revealed something unsettling about how the attackers operated. He identified over 13,500 targets, though he kept the specifics of his methodology close to the vest to avoid tipping off the hackers. What he did share was revealing.

Among the targets were journalists he'd worked with and colleagues. Ó Cearbhaill developed what he called a "snowball hypothesis" to explain the pattern. He suspected the attackers had compromised initial targets and then used those compromised accounts to harvest contact information from group chats. Each successful breach became a springboard to identify new victims. It's a clever, low-effort way to scale an attack without needing to do much original reconnaissance.

The technical backbone of the operation was something called "ApocalypseZ," an automated system designed to orchestrate mass phishing campaigns with minimal human intervention. Ó Cearbhaill found that the codebase and operator interface were in Russian, and the system was automatically translating victim communications into Russian. All of this lined up with the broader intelligence community's assessment that this was a Russian government operation.

## What Actually Protects You

The researcher said he's continuing to monitor the campaign, and the attacks haven't stopped. That means the real victim count is almost certainly much higher than what he observed early in the year. The attackers are still operating, still hunting for new targets.

Ó Cearbhaill's closing remark had a certain dry humor to it. He said he doubts the hackers will bother targeting him again, and suspects they probably regret doing so in the first place. "I welcome future messages, especially if they have zero-days they would like to share," he quipped, referring to previously unknown security vulnerabilities that attackers often use.

For people actually worried about falling victim to this type of attack, Ó Cearbhaill offered practical advice: turn on Registration Lock, a feature that lets Signal users set a PIN for their account, preventing others from registering their phone number on a different device. It's a small thing, but it's one of the few defenses available against account takeovers at scale.

The bigger picture here is unsettling. A well-resourced state actor is running an industrialized phishing operation against messaging app users, and the only real friction they encountered came from accidentally targeting someone whose job it is to find them. For everyone else, the attack probably worked just fine.