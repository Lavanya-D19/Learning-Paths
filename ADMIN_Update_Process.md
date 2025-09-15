# 🟡 Admin Update Process (Central Responsibility)

This process applies **repo-wide** to all sections of the Learning Paths repo:  
**Onboarding, AI, AR, VR, Media, Policies, and any future sections.**

---

## 🔄 Frequency
- **Day 1 of every month at 10:00 AM IST** → Admin must review all `README.md` files (Onboarding, AI, AR, VR, Policies, Media).  
- **Quarterly deep update** → Refresh learning resources (AI/AR/VR).  
- **Yearly HR update** → Refresh policies (leave, holidays, email).  

> **NOTE:** Even if no content changes are needed, still bump the version/date once per month.

---

## 🔼 Version Control
- Every `README.md` starts with a version line, e.g.:  
  `Version v1.2 — Updated September 2025`  
- Always bump version by +0.1 (v1.1 → v1.2 → v1.3 …).  
- Update the month/year to the current one.  
- Do not skip versions. Each PR = one version bump.  

---

## 📂 Workflow
1. Create a new branch:  
   `git checkout -b update-sept-2025`
2. Edit the relevant `README.md` files.  
3. Update the version line at the top.  
4. Commit with a clear message, e.g.:  
   `chore: bump version to v1.2 — Updated September 2025`
5. Push branch → Open PR → Request HR/PM review.  
6. Once approved → Merge to `main`.  

---

## 👥 Ownership
- **Primary:** HR / PM  
- **Secondary:** Tech Lead (backup)  

---

## ✅ Output
- All `README.md` files show the **latest version and date**.  
- Interns/employees always follow the **master copy** in GitHub Pages.  
- Admins must log updates in [`ADMIN_Update_Log.md`](./ADMIN_Update_Log.md).  

---

## 🤖 Reusable Prompt for AI
Copy this prompt into ChatGPT, Cursor, or Copilot when running monthly updates:

> You are the Admin Assistant for the Learning Paths repo.  
> Run this process on **Day 1 of every month**.  
> 
> 1. Open all section READMEs (Onboarding, AI, AR, VR, Policies).  
> 2. Check the version line at the top (e.g., `Version v1.2 — Updated September 2025`).  
> 3. If outdated, bump the version by +0.1 and update to the current month/year.  
> 4. Review all links (Company links, tutorials, videos). Suggest updates if broken or outdated.  
> 5. Ensure "Source of Truth" points to central files.  
> 6. For HR policies: confirm max 12 holidays. Flag if list is missing dates.  
> 7. At the end, output the updated file(s) with new version header(s).  
> 8. Suggest the proper commit message(s) for each file updated.  
> 9. Remind the admin to log this update in `ADMIN_Update_Log.md` with PR link, commit hash, and prompt used.  
> 
> Safety Rule: **Do not overwrite old files. Always bump version + log changes in ADMIN_Update_Log.md.**

---

## 📝 Changelog
- **v1.1 — September 2025** → Initial onboarding update (Slack → Discord, Trello → Notion, Leave Policy).  
- **v1.2 — October 2025** → Central admin process file created and linked from Onboarding README.  

---

## 🔗 Next Step
After every update, add details (PR link, commit hash, prompt used) in  
[`ADMIN_Update_Log.md`](./ADMIN_Update_Log.md).
