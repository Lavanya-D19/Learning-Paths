---
title: "vRuby Learning Paths Repository"
description: "Central hub for onboarding, AR/VR/AI learning paths, and forms for vRuby interns and team members."
topic: "overview"
last_updated: "2025-09-11"
author: "vRuby Team"
contributors: []
keywords: ["Learning Paths", "AR", "VR", "AI/ML", "vRuby"]
sidebar_label: "Home"
toc: true
hide_title: false
product: "vRuby LMS"
version: "v1"
---


# vRuby Learning Platform

> **Learning for everyone, everywhere.**
>
> Explore vRuby product documentation, training, credentials, Q&A, code references, and more.

---

<div align="center">
	<input type="text" placeholder="Search vRuby LMS" style="width: 60%; padding: 0.5em; font-size: 1.1em; border-radius: 4px; border: 1px solid #ccc; margin-bottom: 1em;" />
	<button style="padding: 0.5em 1.5em; font-size: 1.1em; border-radius: 4px; background: #0067b8; color: #fff; border: none;">Search</button>
</div>

---

<table width="100%">
<tr>
<td valign="top" width="33%">
<b>Discover AR, VR, and AI/ML essentials</b><br>
<ul>
	<li><a href="AR/README.md">AR Learning Path</a></li>
	<li><a href="VR/README.md">VR Learning Path</a></li>
	<li><a href="AI/README.md">AI/ML Learning Path</a></li>
	<li><a href="Onboarding/README.md">Onboarding Guide</a></li>
</ul>
</td>
<td valign="top" width="33%">
<b>Popular technical resources and training</b><br>
<ul>
	<li><a href="LearningPaths/README.md">All Learning Paths Overview</a></li>
	<li><a href="Onboarding/How_to_Use_ChatGPT_and_Copilot.md">How to use ChatGPT & Copilot</a></li>
	<li><a href="Forms/Quiz.md">Quiz Form</a></li>
	<li><a href="Forms/Weekly_Progress.md">Weekly Progress Form</a></li>
</ul>
</td>
<td valign="top" width="33%">
<b>Ask questions & earn credentials</b><br>
<ul>
	<li><a href="Onboarding/Policies.md">Policies & FAQ</a></li>
	<li><a href="Onboarding/Intern_90_Day_Checklist.md">Intern 90-Day Checklist</a></li>
	<li><a href="Forms/Feedback.md">Feedback Form</a></li>
</ul>
</td>
</tr>
</table>

---

> [!TIP]
> **Create a personalized learning plan**
>
> We'll help you create a plan that adapts to your goals, skill level, and pace, providing tailored recommendations to upskill, earn certifications, or solve tech challenges faster. It only takes a few minutes to fill out the form.

<div align="left">
	<a href="Forms/Quiz.md"><button style="padding: 0.5em 1.5em; font-size: 1.1em; border-radius: 4px; background: #0067b8; color: #fff; border: none;">Create plan with AI</button></a>
</div>

---

# Markdown-Only LMS

This repository is a pure Markdown-based Learning Management System (LMS).

## Policy
- Only `.md`, `.yml`/`.yaml`, `.json`, `.gitignore`, `LICENSE`, and `README.md` files are allowed.
- No HTML, CSS, JS, TS, MDX, or other source files.
- All navigation is managed via `/config/nav.yml` and `/config/site.json`.
- Images are stored in `/docs/assets/` and referenced with Markdown syntax.

## Structure
```
/docs/
  index.md
  overview.md
  lms-paths/
    ar.md
    vr.md
    ai.md
  onboarding/
    README.md
    policies.md
    checklist.md
  resources/
    videos.md
    tutorials.md
  assets/
/config/
  nav.yml
  site.json
```

## Migration
See `MIGRATION_LOG.md` for details on deleted, converted, and updated files.

---

## Related
- [Learning Paths Overview](LearningPaths/README.md)
- [Onboarding Guide](Onboarding/README.md)



