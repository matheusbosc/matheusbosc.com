---
#Project Details
layout: project
title: Chat Plus Plus
author: matheus
slug: chat-plus-plus
category: projects
tags: [programming, development, utility]

#Project Assets
description: A terminal-based chat app in modern C++, featuring a custom client-server architecture, a plugin system, and a crash-safe TUI.
short-description: A terminal-based chat app in modern C++ featuring a custom client-server architecture, a plugin system, and a crash-safe TUI, deployed via a Jenkins CI/CD pipeline.
imgs:
  - cover.png
  - img1.png
  - img2.png
  - img3.png

#Project Specs
platforms: [PC]
stack: [C++, CMake, JSON, Jenkins]
status: Completed
role: Developer
done-date: 2026-03-01
links: 
  - name: Github Repo
    icon: fa-github
    url: https://github.com/matheusbosc/Chat-plus-plus
---

## The Idea

I wanted a break from the routine I'd fallen into with Unity — same engine, same patterns, project after project. C++ had been on my radar for a while; it's one of the most widely used languages out there, and I figured it was worth learning properly, both for the challenge and for what it'd mean for my future as a developer.

But I didn't want to build another boring starter project just to check a box. After a few tutorials to get the basic syntax down, I decided I wanted something with real substance — something that would force me to actually understand the language instead of just copying examples. Networking felt like the right kind of hard, and from there, the idea for a chat application was obvious.

## Building It

I started with the core: a server, and a CLI client that could connect to it. Once that base was working, I kept layering features on top:

- Rooms
- Nicknames
- A proper terminal UI

Somewhere in there, the codebase started to get messy, so before adding more, I stopped and refactored everything to be modular first. That decision paid off once I moved into building the client, which had its own backend and frontend logic tied together through a main class and a set of listeners.

A few things turned out to be harder than expected:

- **Real-time communication** — building a stable, low-latency custom client-server architecture was the core technical challenge, and everything else (rooms, nicknames, the plugin system) built on top of it once it worked reliably.
- **The interface** — I built it with FTXUI, and managing a dynamic terminal UI meant designing a state-driven flow with event-triggered loop restarts to transition cleanly between screens.
- **Shutdown handling** — blocking sockets and background threads don't die gracefully by default, so I had to implement proper `shutdown()`/`close()` calls, atomic run flags, and controlled thread joins to guarantee the app could exit safely every time.

Eventually, it was done. Or so I thought.

## Coming Back to It

A few weeks later, I was deep into DevOps and CI/CD experiments on my [homelab](/projects/homelab), and Chat++ became the perfect testbed. I:

- Installed Jenkins and set up a full build/deploy workflow — which took longer than expected, but taught me a lot about structuring CI/CD for a C++ project
- Containerized the app with Docker, and wired that build into the same workflow

That's when it actually felt finished.

## What I Learned

Chat++ taught me more than just C++ syntax and CMake:

- My first real experience building a networked application and handling multithreading safely — trickier than I expected going in
- A deeper understanding of CI/CD, this time applied to a language and build system I'd never worked with before