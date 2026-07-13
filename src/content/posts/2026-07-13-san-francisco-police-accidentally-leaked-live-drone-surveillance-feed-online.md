---
layout: post
title: "San Francisco Police Accidentally Leaked Live Drone Surveillance Feed Online"
description: "Security researchers discovered SFPD's real-time drone footage, thermal imaging, and pilot details publicly accessible on the internet for six months."
date: 2026-07-13 16:00:32 +0530
author: adam
image: "https://images.unsplash.com/photo-1765707886613-f4961bbd07dd?q=80&w=988"
video_embed:
tags: ["tech", "surveillance", "privacy", "security"]
tags_color: "#000000"
---

In mid-June, two security researchers stumbled upon something that should have stayed hidden: San Francisco police livestreaming their drone surveillance operations to the entire internet. The discovery exposed dozens of arrests, searches, and tracked individuals captured from above, all without any password protection or access restrictions.

Sam Curry and Maik Robert found the leak almost by accident while investigating how widely Skydio drones had been deployed across US police departments. Using a standard tool that archives web addresses, they pulled up an unprotected link that gave them real-time access to footage from five SFPD surveillance drones. What they saw was startling: color video feeds, thermal imaging, GPS coordinates, and the names and email addresses of six police pilots, all publicly available.

## How Did This Happen?

According to the researchers, someone within SFPD used Skydio's software to create a shareable link with zero authentication requirements and a one-year expiration date set for December 2024. That link somehow ended up in AlienVault Open Threat Exchange, an open-source database typically used by security researchers. By the time Curry and Robert discovered it, the feed had already been exposed for approximately six months.

The archived footage they captured tells a detailed story of police [tech](https://infeeds.com/tags/tech) operations over 48 hours. Sixty videos from 20 separate flights. More than three hours of color footage and an equal amount of thermal imaging. Telemetry logs tracking over 44 miles of drone flight paths with precise GPS coordinates. In a single frame hovering over a downtown intersection, detection software counted 34 people crossing the street.

The mission that kicked off the exposure was mundane on its surface: an alleged auto theft or parts stripping incident. Yet the drone response was remarkably comprehensive. One aircraft tracked a black SUV, zoomed in on its license plate, locked it at the center of its video frame, and followed it through traffic. When the driver abandoned the vehicle and ran, another Skydio drone took over surveillance from a second angle. Four separate drones tracked this single suspect within an hour, all while officers closed in from the ground.

## Privacy Questions That Won't Go Away

The footage raises uncomfortable questions about surveillance scope and necessity. In one incident, a drone watched two young men in a car described as "suspicious persons in a vehicle," only to lose interest when the suspects drove to a basketball court and started playing. Another drone, dispatched for a "prowler" investigation, zoomed in on a young person sitting alone on a rooftop wearing headphones, apparently unaware they were being watched from above.

"That one felt like an invasion of privacy," Curry reflected. "Like this person thinks they're by themselves and has gotten away from everybody, and then there's a police drone watching them."

The timing is particularly relevant. SFPD's drone program began in 2024 and has grown explosively: from six drones to 98 within roughly two years. Officers logged more than 1,400 launches between May 2024 and March 2026. While the city maintains a transparency portal for drone flight logs after they occur, this livestream wasn't part of that system.

When confronted with the exposure, SFPD called the link an "internal restricted link" that had been "improperly obtained and accessed by individuals without authorization." But Curry and Robert didn't bypass any security, hack any systems, or authenticate illegally. They simply clicked a link that anyone with the URL could access. SFPD also claimed it has no information about other individuals accessing the feed, though it remained exposed for half a year.

Skydio, the San Mateo-based drone manufacturer, didn't respond to requests for comment. The company's ReadyLink feature allows users to generate shareable access to live drone feeds, but the burden of properly securing those links falls on the user.

Policewatching organizations have long recognized drone surveillance as a privacy battleground. Even police departments themselves have fought releasing drone footage under freedom of information laws, arguing it exposes sensitive investigatory details and private information about people caught on camera.

This leak suggests the real problem isn't the technology itself, but the careless [tech](https://infeeds.com/tags/tech) practices and inadequate oversight surrounding its deployment. When the tools designed to help police coordinate operations can accidentally broadcast those operations to the world, we're reminded that surveillance infrastructure is only as secure as the people managing it.

*Source: WIRED*