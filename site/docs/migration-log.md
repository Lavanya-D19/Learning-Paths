---
title: "Migration Log"
description: "Tracks structural changes, file movements, and system migrations in the vRuby LMS."
last_updated: "2025-09-19"
author: "vRuby Admin Team"
contributors: []
keywords: ["Migration Log", "Repo Changes", "vRuby LMS"]
sidebar_label: "Migration Log"
toc: true
hide_title: false
product: "vRuby LMS"
version: "v1.2"
---

# 🔄 Migration Log

This log records **major migrations or structural changes** in the vRuby LMS.  
It is separate from the [Admin Update Log](admin-update-log.md), focusing only on **system-wide moves, reorganizations, or framework changes**.

---

## 📅 Migration History

### 2025-09-17 — Migration to Docusaurus v3
- Migrated site to **Docusaurus v3** with TypeScript support.  
- Moved assets to `site/static/images` and `site/static/downloads`.  
- Updated Markdown links for images and downloads.  
- Cleaned folder structure under `/docs`.  

---

### 2025-09-12 — Repo Reorganization
- Centralized content into `LEARNING-PATHS/` folder.  
- Created dedicated folders for `AR/`, `VR/`, `AI/`, and `Onboarding/`.  
- Introduced `Forms/` directory for progress, feedback, and quizzes.  
- Established `assets/` for screenshots and diagrams.  

---

### 2025-09-01 — Initial Migration Setup
- Created initial repo structure for LMS.  
- Added placeholder files for **Dashboard, README, and Onboarding**.  
- Configured `_config.yml` and `.markdownlint.json`.  

---

## ✅ Migration Logging Rules
- Use **date headers (YYYY-MM-DD)**.  
- Describe **why** and **what changed**.  
- Keep entries concise, one bullet per change.  
- Only log **structural or system-level** changes, not content edits.  

---

## ✅ Outcomes
This log provides:
- A clear history of **repo and site migrations**.  
- Transparency for contributors during transitions.  
- A reference for future upgrades and audits.  
