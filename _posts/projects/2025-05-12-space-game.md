---
#Project Details
layout: project
title: Space Game
author: matheus
slug: space-game
category: projects
tags: [game, programming, development, game-jam]

#Project Assets
description: A retro pixelated 2D/3D shooter built in Unity for a Grade 9 technology course, featuring a custom upgrade system and wave-based enemy spawning.
short-description: A fast-paced 2D/3D space shooter where players explore, battle enemies, and upgrade their ship to survive increasingly difficult waves.
imgs:
  - cover.png
  - img1.png
  - img2.png
  - img3.png

#Project Specs
platforms: [PC]
stack: [Unity, C#, Git, Blender]
status: Completed
role: Developer
done-date: 2025-05-12
links: 
  - name: Itch.io
    icon: fa-itch-io
    url: https://matheusboscariol.itch.io/space-game
  - name: Github
    icon: fa-github
    url: https://github.com/matheusbosc/SpaceGame
---

## The Assignment

This one came out of Grade 9 Technology — the required intro course before Computer Science in Grades 10 through 12. It's not a programming class specifically, and the default tool for the final project was Scratch. I hate Scratch. Block-based coding is limiting, and I've always preferred typing code over dragging blocks around with a mouse.

So I asked my teacher if I could use Unity instead. She said yes — and that decision made a pretty big difference in what I was able to build.

## What I Built

A retro-style shooter, built in Unity with C#. The retro look comes from a pixelation filter applied over the whole game, giving it that low-res, old-school feel without actually building low-res assets.

Two systems ended up being the real substance of the project:

- **An upgrade/shop system** — connecting individual upgrades to the specific parts of the game they affected, and handling the transitions between gameplay and the shop cleanly
- **A wave system** — checkpoint-based, spawning different enemy types randomly at each stage

## The Hard Part

The upgrade system was the most involved piece by far. It wasn't just adding items to a shop — I had to:

- Design the shop itself, front to back
- Wire each upgrade to the exact game systems it was supposed to affect
- Handle the transitions between game → shop → game without breaking state

That took real thought to plan out properly, and by the deadline I'd only managed to implement 3 upgrades — there just wasn't time for more.

The wave system was more approachable, but it was still a first for me — I'd never built a checkpoint-based wave spawner with randomized enemy types before, so there was a real learning curve even though it came together more smoothly than the shop did.

## How It Landed

Since everyone else in the class was working in Scratch, the gap in complexity was obvious. More detail, more systems actually talking to each other, a genre and style nobody else attempted — it ended up being the class favorite, by a clear margin.