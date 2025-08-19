---
title: "Local RAG App"
date: 2025-08-19
draft: false
weight: 10

summary: "A fully offline Retrieval-Augmented Generation app using Mistral 7B (llama.cpp), packaged with Docker + Streamlit."
description: "Run RAG on your own machine, no API keys or cloud required. One-click scripts for Windows/macOS/Linux; first run downloads the model and opens a Streamlit UI."
tags: ["LLM", "RAG", "Docker", "Streamlit", "Mistral"]

links:
  - icon: github
    name: "Source"
    url: "https://github.com/AlejandroBeltranA/Local-RAG-App"

cover:
  image: "/projects/local-rag-app/cover.png"
  alt: "Local RAG App — Streamlit UI"
  caption: "Runs locally via Docker; opens at http://localhost:8501"
---

A fully local RAG system that uses **Mistral‑7B‑Instruct (GGUF) via `llama.cpp`**, bundled with Docker and a **Streamlit** frontend.

### Features
- One‑click scripts for **Windows**, **macOS**, and **Linux** (`run.bat`, `run.command`, `run.sh`).
- First run builds the Docker image, downloads the ~4–5 GB model, and launches the app at **http://localhost:8501**.
- Bring your own documents; everything works **offline** after the initial model download.

### Quick start
```bash
# Windows
run.bat

# macOS
./run.command

# Linux
./run.sh

# App opens at:
# http://localhost:8501
```

### Repository
- GitHub: https://github.com/AlejandroBeltranA/Local-RAG-App

