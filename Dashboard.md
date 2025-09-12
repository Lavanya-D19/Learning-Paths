---
title: "vRuby LMS Dashboard"
description: "Central dashboard for learning paths, tutorials, and resources."
topic: "overview"
last_updated: "2025-09-12"
author: "vRuby Team"
contributors: []
keywords: ["Dashboard", "Learning Paths", "vRuby", "LMS"]
sidebar_label: "Dashboard"
toc: false
hide_title: false
product: "vRuby LMS"
version: "v1"
---

<!-- Microsoft Learn-Inspired Styles -->
<style>
  .vruby-navbar {
    display: flex; align-items: center; justify-content: space-between;
    background: #004578; color: #fff;
    padding: 1em 2em; border-bottom: 1px solid #00335a;
    font-family: 'Segoe UI', 'Arial', sans-serif;
  }
  .vruby-navbar a {
    color: #fff; text-decoration: none; margin-right: 1.5em; font-weight: 500;
    transition: color 0.2s;
  }
  .vruby-navbar a:last-child { margin-right: 0; }
  .vruby-navbar a:hover { color: #50a7f7; }
  .vruby-sidebar {
    width: 220px; min-width: 180px; background: #F3F2F1;
    border-right: 1px solid #e0e0e0; padding: 2em 1em 2em 2em; height: 70vh;
    font-family: 'Segoe UI', 'Arial', sans-serif;
  }
  .vruby-sidebar ul { list-style: none; padding: 0; font-size: 1.1em; }
  .vruby-sidebar li { margin-bottom: 1.2em; }
  .vruby-sidebar a {
    color: #0067B8; text-decoration: none; padding: 0.2em 0.7em; border-radius: 4px;
    display: block; transition: background 0.2s;
  }
  .vruby-sidebar a:hover {
    background: #E1DFDD; color: #004578;
  }
  .vruby-card {
    background: #fff; border-radius: 10px; box-shadow: 0 2px 12px #e0e0e0;
    padding: 2em; min-width: 280px; flex: 1 1 300px;
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .vruby-card:hover {
    box-shadow: 0 6px 24px #b3b3b3; transform: translateY(-4px) scale(1.03);
  }
  .vruby-card h2 {
    color: #0067B8; font-family: 'Segoe UI', 'Arial', sans-serif; font-weight: bold;
    margin-top: 0;
  }
  .vruby-main h1 {
    font-size: 2em; color: #222; margin-bottom: 1.5em;
    font-family: 'Segoe UI', 'Arial', sans-serif; font-weight: bold;
  }
  .vruby-main ul li a { color: #0067B8; text-decoration: none; }
  .vruby-main ul li a:hover { text-decoration: underline; }
</style>

<!-- Top Navigation Bar -->
<div class="vruby-navbar">
  <div style="display: flex; align-items: center;">
    <img src="../assets/company-intro.png" alt="vRuby Logo" style="height: 40px; margin-right: 1em;" />
    <span style="font-size: 1.5em; font-weight: bold; letter-spacing: 1px;">vRuby LMS</span>
  </div>
  <div>
    <a href="/Onboarding/README.md">Onboarding</a>
    <a href="/LearningPaths/README.md">Learning Paths</a>
    <a href="/Forms/Weekly_Progress.md">Progress</a>
    <a href="/Forms/Feedback.md">Feedback</a>
  </div>
</div>

<!-- Global Search Bar -->
<div style="display: flex; justify-content: center; align-items: center; margin: 2em 0 1.5em 0;">
  <input type="text" placeholder="Search vRuby LMS..." style="width: 40vw; padding: 0.7em; font-size: 1.1em; border-radius: 4px; border: 1px solid #ccc; font-family: 'Segoe UI', 'Arial', sans-serif;" />
  <button style="margin-left: 1em; padding: 0.7em 2em; font-size: 1.1em; border-radius: 4px; background: #0067B8; color: #fff; border: none; font-family: 'Segoe UI', 'Arial', sans-serif; font-weight: 500;">Search</button>
</div>

<div style="display: flex;">
  <!-- Sidebar Navigation -->
  <nav class="vruby-sidebar">
    <ul>
      <li><a href="/AR/README.md">AR</a></li>
      <li><a href="/VR/README.md">VR</a></li>
      <li><a href="/AI/README.md">AI</a></li>
      <li><a href="/LearningPaths/README.md">Learning Paths</a></li>
      <li><a href="/Onboarding/README.md">Onboarding</a></li>
      <li><a href="/Forms/Quiz.md">Quiz</a></li>
      <li><a href="/Forms/Feedback.md">Feedback</a></li>
    </ul>
  </nav>

  <!-- Central Content: Card Layout -->
  <main class="vruby-main" style="flex: 1; padding: 2em 3em;">
    <h1>Welcome to vRuby LMS Dashboard</h1>
    <div style="display: flex; flex-wrap: wrap; gap: 2em;">
      <!-- Card 1: Learning Paths -->
      <div class="vruby-card">
        <h2>Learning Paths</h2>
        <p>Explore AR, VR, and AI/ML learning journeys designed for all skill levels.</p>
        <ul>
          <li><a href="/AR/README.md">AR Path</a></li>
          <li><a href="/VR/README.md">VR Path</a></li>
          <li><a href="/AI/README.md">AI/ML Path</a></li>
        </ul>
      </div>
      <!-- Card 2: Tutorials -->
      <div class="vruby-card">
        <h2>Tutorials</h2>
        <p>Step-by-step guides and hands-on labs to build your skills.</p>
        <ul>
          <li><a href="/LearningPaths/README.md">All Tutorials</a></li>
          <li><a href="/Onboarding/How_to_Use_ChatGPT_and_Copilot.md">AI Tools Guide</a></li>
        </ul>
      </div>
      <!-- Card 3: Resources -->
      <div class="vruby-card">
        <h2>Resources</h2>
        <p>Access forms, checklists, and support to track your progress.</p>
        <ul>
          <li><a href="/Forms/Weekly_Progress.md">Weekly Progress</a></li>
          <li><a href="/Forms/Quiz.md">Quiz</a></li>
          <li><a href="/Forms/Feedback.md">Feedback</a></li>
        </ul>
      </div>
    </div>
  </main>
</div>

---

> [!TIP]
> Use the sidebar and top navigation to quickly access any part of the LMS. Search for topics, tutorials, or resources using the global search bar above.
