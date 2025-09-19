---
title: "Documentation Standards"
description: "Standards and guidelines for writing clear, consistent, and professional Markdown documentation at vRuby."
last_updated: "2025-09-19"
author: "vRuby Team"
contributors: []
keywords: ["Documentation", "Standards", "Markdown", "vRuby LMS"]
sidebar_label: "Documentation Standards"
toc: true
hide_title: false
product: "vRuby LMS"
version: "v1.2"
---

# 📑 Documentation Standards

This guide defines how to write **clear, consistent, and professional documentation** in the vRuby LMS.  
Following these standards ensures that all docs look uniform and are easy for interns, employees, and contributors to follow.

---

## ✍️ File Conventions
- All files must be **Markdown (`.md`)**, `.json`, or `.yml`.  
- No `.html`, `.css`, `.js`, or `.mdx` files.  
- Each file should begin with **front-matter**:

    ```yaml
    ---
    title: "Page Title"
    description: "Short description of the file"
    last_updated: "YYYY-MM-DD"
    author: "vRuby Team"
    ---
    ```

---

## 📂 Folder Conventions
- Use `Title_Case_With_Underscores` for folder names.
- Keep related docs and assets together.
- Use clear, descriptive names for folders.

**Examples**
- `Onboarding/`
- `Admin_Guides/`
- `assets/images/`

---

## 🖼 Image Guidelines
- Store images in `/assets/` folders.
- Use **relative links** for images.
- Optimize images for web use (e.g., compressed JPEGs, PNGs).

**Examples**
- `![Alt text](assets/images/image-file.png)`
- `![Diagram](../assets/diagrams/diagram-file.svg)`

---

## 1) Headings, Spacing, Lists
- Start files with a `#` H1.
- Leave **one blank line** above and below headings and lists.
- Keep paragraphs short (≈ 3–4 lines).

```md
# Section Title

Intro sentence.

## Subsection

- Bullet A
- Bullet B
```
