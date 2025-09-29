````md
# Markdown Previewer (React + Vite)

A simple React application that lets you write Markdown and see a live preview side by side.

---

## 🔧 Features

- Type Markdown in the **Editor** pane  
- See rendered HTML instantly in the **Preview** pane  
- Maximize / minimize each pane independently  
- Supports headings, bold, italic, lists, code blocks, images, links, and more  

---

## 🚀 Setup & Run

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
````

Open your browser at `http://localhost:3000` (or whatever port Vite uses).

---

## 🌐 Live Demo

Here’s a live demo you can check out:

[Markdown Previewer Live](https://markdown-previewer-40au.onrender.com/)

You can deploy your app (e.g. with Vercel, Netlify, or GitHub Pages) and replace this link.

---

## 🗂️ Project Structure

```
public/
  └── index.html
src/
  ├── App.jsx
  ├── index.jsx
  └── App.css
package.json
README.md
```

* `App.jsx` contains the main logic (editor, preview, toggles)
* `App.css` handles styling
* `index.jsx` is the React entry point

---

## ✏️ Usage

1. Write your Markdown in the editor pane
2. Watch the preview pane update in real time
3. Click the maximize / minimize icon in a pane to expand or collapse it

