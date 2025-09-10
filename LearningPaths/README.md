mkdir -p LearningPaths
cat > LearningPaths/README.md <<'MD'
# 📚 Learning Paths (AR · VR · AI/ML) — v1.0
This single page is the source of truth for all paths. No duplicates.

**Quick links:** [AR](#ar) · [VR](#vr) · [AI/ML](#aiml)

---

## AR
**Outcome (Week 12):** Mobile AR demo + 2–3 min video + README.
### 🟢 Beginner → 🟡 Intermediate → 🔵 Advanced
*(Placeholders — add tutorials later.)*
### 📋 Submissions
- ✅ **Quiz (AR):** https://YOUR_AR_QUIZ_FORM_URL

---

## VR
**Outcome (Week 12):** Mini VR scene/game + short video + README.
### 🟢 Beginner → 🟡 Intermediate → 🔵 Advanced
*(Placeholders — add tutorials later.)*
### 📋 Submissions
- ✅ **Quiz (VR):** https://YOUR_VR_QUIZ_FORM_URL

---

## AI/ML
**Outcome (Week 12):** Deployed mini-app (Streamlit/FastAPI) + README.
### 🟢 Beginner → 🟡 Intermediate → 🔵 Advanced
*(Placeholders — add tutorials later.)*
### 📋 Submissions
- ✅ **Quiz (AI/ML):** https://YOUR_AI_QUIZ_FORM_URL
MD
git add LearningPaths/README.md
git commit -m "docs(paths): add single-file Learning Paths (AR/VR/AI-ML)"
