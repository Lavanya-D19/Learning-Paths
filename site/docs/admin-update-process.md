---
title: "Admin Update Process"
description: "Step-by-step workflow for admins to update, review, and publish changes to the vRuby LMS."
last_updated: "2025-09-19"
author: "vRuby Admin Team"
contributors: []
keywords: ["Admin", "Update Process", "vRuby LMS", "Contributions"]
sidebar_label: "Update Process"
toc: true
hide_title: false
product: "vRuby LMS"
version: "v1.2"
---

# 🧑‍💻 Admin Update Process

This guide explains how **admins should update the vRuby LMS**.  
It ensures updates are done consistently, safely, and professionally.

---

## 🔄 Update Workflow

1. **Pull latest changes**  
   - Sync your local repo with GitHub before starting.  

2. **Edit content**  
   - Update only **Markdown (`.md`)**, `.json`, or `.yml` files.  
   - Never add `.html`, `.css`, or `.js`.  

3. **Follow Documentation Standards**  
   - See [Documentation Standards](Documentation-Standards.md).  
   - Ensure front-matter metadata is updated (`last_updated`).  

4. **Update logs**  
   - Add a new entry in [Admin Update Log](ADMIN_Update_Log.md).  
   - Increment version number if major content changes.  

5. **Commit properly**  
   - Use **Conventional Commit messages**:  
     - `feat(docs): …` → new/updated content  
     - `fix(docs): …` → corrections  
     - `chore(docs): …` → maintenance  

6. **Push changes**  
   - Push to GitHub → triggers site rebuild (Docusaurus).  

---

## 📝 Example Commit Flow

```bash
git pull origin main
# ... make changes ...
git add .
git commit -m "feat(docs): update admin process"
git push origin main
```

---

## ✅ Roles & Responsibilities
- **Admins** maintain structure, enforce rules, and approve PRs.  
- **Contributors** suggest changes via PR → admins review.  
- **Interns** can add content but must follow standards.  

---

## 📌 Best Practices
- Keep commit messages short, clear, and meaningful.  
- Always test site locally with `npm start` before pushing.  
- Never leave broken links or missing references.  

---

## ✅ Outcomes
By following this process, admins will:
- Maintain a **clean, consistent repo**.  
- Ensure every update is tracked and reviewed.  
- Keep the LMS professional and reliable.
