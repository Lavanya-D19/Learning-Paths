# 🟡 Update Process (Admin Responsibility)

This document explains how admins should keep the onboarding materials up to date.

---

## 🔄 Frequency
- Updates should be reviewed **monthly**.
- HR/PM is responsible for triggering the update cycle.

> **NOTE:** Even if there are no changes, still confirm the version number and date once per month.

---

## 🔗 Update Link
- Maintain a section in this file or a Notion page called **“Update Link”**.
- Refresh it at the start of every month with the PR link or commit reference.

---

## 🔼 Version Control
- At the top of `/Onboarding/README.md`, increment the version and update the month.
- Example:
- Always bump **version** (`v1.1 → v1.2 → v1.3 …`) and **month**.

> **NOTE:** Do not skip versions. Each PR = +0.1 increment.

---

## 📂 Workflow
1. Create a new branch:
2. Edit `/Onboarding/README.md` and any related assets.
3. Update the version header at the top.
4. Commit with a clear message:
5. Push branch → Open PR → Request HR/PM review.
6. Once approved → Merge to `main`.

---

## 👥 Ownership
- **Primary:** HR/PM  
- **Secondary:** Tech Lead (backup)

---

## ✅ Output
- `/Onboarding/README.md` always shows the **latest version**.  
- Interns/employees always follow the master copy.

> **NOTE:** The README is the **single source of truth**. Outdated docs, slides, or local files must not be used.
