# MindFlow 🧠✨

A modern, fast, and interactive Mind Map Generator built with pure vanilla HTML, CSS, and JavaScript. Zero external dependencies required to run!

![MindFlow Banner](https://img.shields.io/badge/MindFlow-Interactive%20MindMap%20Generator-indigo?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)

---

## 🌟 Key Features

- **Infinite Canvas Navigation**:
  - Smooth click-and-drag panning
  - Focal point mouse-wheel zooming and touch pinch-to-zoom
  - Zoom controls: Zoom In (`+`), Zoom Out (`-`), Zoom 100%, **Fit to Screen**, and **Recenter**

- **Multiple Tree Layouts**:
  - 🔄 **Balanced Mind Map**: Classic bilateral branching (Left & Right)
  - ➡️ **Rightward Tree**: Standard left-to-right hierarchy
  - ⬇️ **Downward Hierarchy**: Organizational chart tree

- **Interactive Node Operations**:
  - **Inline Editing**: Double-click any node (or press `F2`) to edit text directly in-place
  - **Quick Add Button (`+`)**: Hover over nodes to quickly spawn a child branch
  - **Collapsible Subtrees**: Fold and unfold child branches with count badges (`-` / `+N`)
  - **Context Menu**: Right-click any node for instant actions, color swatches, and deletion

- **Export & Import Suite**:
  - 🖼️ **Export as PNG**: High-resolution 2x retina snapshot
  - 📄 **Export as PDF**: Printable landscape PDF document
  - 📐 **Export as SVG**: Standalone, infinitely scalable vector graphic
  - 💾 **Save / Load JSON**: Complete state backup & restoration
  - 📝 **Markdown Outline**: Export to Markdown list or paste any indented Markdown outline to generate a mind map instantly

- **Theming & Personalization**:
  - **6 Curated Color Palettes**: Vibrant Flow, Ocean Breeze, Sunset Glow, Forest Fresh, Soft Pastel, Slate Minimal
  - **Individual Node Colors**: Pick specific accent colors for nodes and sub-branches
  - **Dark Mode & Light Mode**: Smooth theme transition with `localStorage` memory

- **Starter Templates**:
  - 💡 Product Brainstorming
  - 🚀 Project Roadmap
  - 📊 SWOT Analysis
  - 📝 Meeting Sync Notes
  - ✨ Clean Canvas

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| --- | --- |
| <kbd>Tab</kbd> | Add a child node |
| <kbd>Enter</kbd> | Add a sibling node |
| <kbd>Double Click</kbd> or <kbd>F2</kbd> | Edit node text in-place |
| <kbd>Delete</kbd> or <kbd>Backspace</kbd> | Delete selected node & subtree |
| <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> | Navigate across parent, siblings, and children |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Undo last change |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> | Redo change |
| <kbd>Ctrl</kbd> + <kbd>F</kbd> | Search nodes in map |
| <kbd>Ctrl</kbd> + <kbd>0</kbd> | Reset zoom / center map |
| <kbd>?</kbd> | Open keyboard shortcuts modal |

---

## 🚀 Getting Started

No build tools or node package installations required.

### Option 1: Open directly in your browser
Simply double-click `index.html` to open it in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Run a local static server
Using Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
