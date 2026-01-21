# Nebula Parallax

**Nebula Parallax** is a modern, controller-friendly video editor designed for desktop PCs and handheld devices like the Steam Deck.
It focuses on clarity, performance, and accessibility, without the complexity and intimidation of traditional professional NLEs.

Parallax is part of the **Nebula** ecosystem and is built with a native media core, proxy-based workflows, and a dual-mode UI that supports both keyboard and mouse and full controller navigation.

---

## Vision

Nebula Parallax aims to answer a simple question:

> What if editing a video felt as natural as navigating a game menu?

The goal is not to replace tools like Premiere or DaVinci Resolve, but to provide a fast, focused editor for:

* Game trailers
* YouTube videos and Shorts
* Devlogs
* Social media clips
* Lightweight cinematic edits

All while running comfortably on hardware ranging from high-end PCs to handheld devices.

---

## Key Features

### Dual UI Modes

* **Desktop Mode**: Traditional timeline layout with keyboard and mouse support
* **Big Picture Mode**: Controller-first UI designed for Steam Deck and couch editing

### Performance-Focused Editing

* Proxy-based playback for smooth 4K and higher resolution editing
* Background media analysis and caching
* Asynchronous jobs for proxies, thumbnails, waveforms, and exports

### Timeline Editing

* Multi-track timeline
* Non-destructive trimming and cuts
* Snap-based editing
* Optional ripple editing

### Media Pipeline

* Video, audio, and image import
* Automatic proxy generation
* Preview frame caching
* Hardware-accelerated export where available

### Export Presets

* YouTube 1080p and 4K
* Shorts and vertical video
* Steam trailers
* Custom presets planned

---

## Architecture Overview

Nebula Parallax is built with a **native-first architecture**.

### UI Layer

* Tauri application
* Web-based UI for rapid iteration
* Controller and keyboard navigation
* Focus-driven interaction model

### Core Layer (Rust)

* Project and timeline model
* Job system for proxies, exports, and analysis
* File and cache management
* IPC boundary between UI and media engine

### Media Engine

* Powered by FFmpeg
* Handles decode, encode, proxy generation, thumbnails, and waveforms
* Designed to evolve toward GPU-accelerated preview and rendering

The UI is intentionally kept thin, while the core owns all critical logic and performance-sensitive work.

---

## Project Structure (Planned)

apps/

* nebula-parallax
  Tauri UI application

crates/

* nebula_core
  Timeline, projects, job system
* nebula_media
  FFmpeg integration, proxies, export
* nebula_ipc
  Shared IPC types and events

assets/

* icons
* controller-glyphs

---

## Controller Philosophy

Controller support is a first-class feature, not an afterthought.

Planned mapping (subject to iteration):

* Left stick: scrub timeline
* Right stick: move focus
* Triggers: zoom timeline
* Bumpers: jump between cuts
* A: select or confirm
* B: back
* X: cut
* Y: context menu

All UI elements are designed to be focusable and readable at handheld viewing distances.

---

## Development Status

Nebula Parallax is currently in **active early development**.

Initial milestones:

* Headless media core prototype
* Proxy generation pipeline
* Preview frame requests
* Basic export flow
* Tauri UI shell

Expect rapid iteration and breaking changes during early development.

---

## Roadmap (High Level)

* Core media pipeline
* Timeline playback and scrubbing
* Controller-first UI
* Proxy management UI
* Export presets
* Effects and transitions
* Text and titles
* Optional AI-assisted features
* Plugin and extension support long-term

---

## License

Nebula Parallax is released under the **MIT License**.
See the LICENSE file for details.

---

## Nebula Ecosystem

Nebula Parallax is part of the broader **Nebula Project**, a collection of tools designed for modern, accessible, and user-focused creative workflows.

More details coming soon.
