
# How to Use ChatGPT & GitHub Copilot (v1.1 – Sept 2025)

> Goal: Help you use AI tools (ChatGPT & Copilot) effectively, ethically, and reproducibly in this repo and during your internship.

---

## Overview
ChatGPT and GitHub Copilot are powerful AI assistants that can help you code, document, debug, and learn faster. Use them to:
- Generate and explain code
- Summarize documentation or research
- Refactor and review code
- Scaffold tests and boilerplate
- Brainstorm solutions and unblock yourself

---

## When to use which tool

| Tool              | Best for...                                              |
|-------------------|---------------------------------------------------------|
| **ChatGPT**       | Research, docs, code explanations, troubleshooting, writing prompts, brainstorming, summarizing, generating checklists, reviewing code, learning concepts |
| **Copilot**       | In-editor code suggestions, autocompleting code, generating functions, refactoring, test scaffolding, converting comments to code, quick code fixes |

---

## Key features


### ChatGPT: Features in detail

- **Natural language Q&A:**
	- Ask questions about programming, concepts, or documentation in plain English.
	- Example: “What is the difference between a list and a tuple in Python?”
- **Code generation and explanation:**
	- Generate code snippets, functions, or even full scripts in many languages.
	- Example: “Write a JavaScript function to debounce an input event.”
	- Paste code and ask for an explanation or step-by-step breakdown.
- **Debugging and troubleshooting:**
	- Paste error messages or buggy code and ask for fixes or explanations.
	- Example: “Why am I getting a KeyError in this Python code?”
- **Summarizing documentation or research:**
	- Paste long docs or articles and ask for a summary or key points.
	- Example: “Summarize the main features of React 18.”
- **Checklist and content drafting:**
	- Ask for onboarding checklists, meeting agendas, or draft emails.
	- Example: “Create a checklist for onboarding a new developer.”
- **Session memory:**
	- ChatGPT remembers context within a session, so you can ask follow-up questions without repeating details.

---


### GitHub Copilot: Features in detail

- **In-editor code suggestions:**
	- As you type, Copilot suggests code completions, lines, or even entire functions.
	- Example: Start typing `def fibonacci(` and Copilot will suggest the full function.
- **Comment-to-code conversion:**
	- Write a comment describing what you want, and Copilot generates the code below it.
	- Example:
		```python
		# Calculate the factorial of a number
		def factorial(n):
				# Copilot will suggest the implementation here
		```
- **Multi-line and whole-function completions:**
	- Copilot can complete several lines or an entire function based on context.
- **Copilot Chat (in VS Code):**
	- Open the chat panel to ask for code explanations, refactoring, or help with errors directly in your editor.
	- Example: “Explain what this function does and suggest improvements.”
- **Test scaffolding:**
	- Ask Copilot to generate unit tests for your functions.
	- Example: “Write pytest tests for this function.”
- **Supports many languages:**
	- Python, JavaScript, TypeScript, C#, Java, Go, and more.

---

---

## Best practices & rules
1. **Be transparent:** Add a note in PRs/issues when AI helped (see sample below).
2. **Never paste secrets:** Don’t share .env keys, tokens, or private URLs with AI tools.
3. **Verify everything:** Run, lint, and test all AI-generated code before merging.
4. **Cite your sources:** Link to docs or references for facts/commands copied from the web.
5. **Use clear prompts:** Be specific about your task, context, and requirements for best results.

---

## Prompt patterns that work

**Task framing:**
> "Write a Python function to parse a CSV file and return a list of dictionaries."

**Code fix:**
> "Fix this TypeError in my function and explain the cause."

**Tutorial curation:**
> "Summarize the top 3 tutorials for learning React with TypeScript."

**Refactor:**
> "Refactor this function to improve readability and add error handling."

**Explain:**
> "Explain what this regular expression does."

---

## Copilot in VS Code: Quick setup & usage
1. Install **GitHub Copilot** & **Copilot Chat** extensions from the VS Code Marketplace.
2. Sign in with your company GitHub account.
3. Open the Command Palette → “Copilot: Chat” to start a chat session.
4. Use inline `// comment prompts` above a function or block to get targeted suggestions.
5. Use Copilot Chat to:
	- Ask for code explanations
	- Refactor code
	- Generate tests
	- Get step-by-step help

---

## Quality checklist before commit
- [ ] I ran/previewed the output locally (or in GitHub Pages).
- [ ] No secrets in prompts or code.
- [ ] I added a brief “AI Assisted” note in PR description.
- [ ] I cited sources or linked docs for non-trivial facts.
- [ ] I reviewed and tested all AI-generated code.

---

## Appendix: Sample “AI Assisted” PR note
> *AI Assisted:* Drafted initial README section with ChatGPT; validated links and structure manually; edited wording; final copy reviewed by me.

---

## More resources
- [GitHub Copilot documentation](https://docs.github.com/en/copilot)
- [ChatGPT official help](https://help.openai.com/en/)
- [Copilot Labs (experimental features)](https://githubnext.com/projects/copilot-labs/)
