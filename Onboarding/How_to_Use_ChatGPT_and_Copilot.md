# How to Use ChatGPT & GitHub Copilot (v1.0 – Sept 2025)

> Goal: Help you use AI effectively, ethically, and reproducibly in this repo and during the internship.

## ✅ When to use which
- **ChatGPT (Plus/Business)**: research summaries, prompts, docs, checklists, code reviews, troubleshooting.
- **GitHub Copilot**: in-editor code suggestions, test scaffolding, refactors, comments-to-code.

## 🚦 Rules of use (must follow)
1. **Be transparent**: Add a short note in PRs/issues when AI helped.  
2. **Never paste secrets**: .env keys, tokens, private URLs → ✗  
3. **Verify**: Run, lint, and test AI-generated code.  
4. **Cite**: Link sources for facts/commands copied from the web.

## 🧪 Prompt patterns that work
**Task framing**

**Code fix**

**Tutorial curation**

## 🛠️ Copilot in VS Code (quick setup)
1. Install **GitHub Copilot** & **Copilot Chat** extensions.  
2. Sign in with your company GitHub.  
3. In VS Code: open Command Palette → “Copilot: Chat”.  
4. Use inline `// comment prompts` above a function to get better suggestions.

## 🧰 Quality checklist before commit
- [ ] I ran/previewed the output locally (or in GitHub Pages).  
- [ ] No secrets in prompts or code.  
- [ ] I added a brief “AI Assisted” note in PR description.  
- [ ] I cited sources or linked docs for non-trivial facts.

## 📎 Appendix: Sample “AI Assisted” PR note
> *AI Assisted:* Drafted initial README section with ChatGPT; validated links and structure manually; edited wording; final copy reviewed by me.
