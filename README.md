# 🧵 Reddit-like Nested Comment Section

A Reddit-inspired threaded comment system built with **React**, **Vite**, **Tailwind CSS**, **TypeScript**, and **Context API**. It supports deep nested replies, edit/delete functionality, upvotes/downvotes, and more—all with dummy data and local state.

---

## 🚀 Features

- ✅ Nested/threaded comments (unlimited depth)
- ✅ Add new top-level comments
- ✅ Reply to existing comments
- ✅ Expand/collapse nested threads
- ✅ Edit and delete comments
- ✅ Upvote/downvote system
- ✅ Responsive and clean UI
- ✅ State managed via Context API
- ✅ Dummy data initialized on load

---

## 🧱 Tech Stack

- ⚛️ **React**
- ⚡ **Vite**
- 💨 **Tailwind CSS**
- ⛓ **TypeScript**
- 💬 **React Context API**

---

## 🛠 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/reddit-comments.git
cd reddit-comments
```

### 2.Install dependencies

```bash
npm install
# or
yarn
```

### 3. Start the development server

```bash
npm run dev
Visit http://localhost:5173 to see the app in your browser.
```

## ✨ How It Works

- Each comment includes: `id, parentId, author, content, timestamp, votes`.

- Top-level comments have parentId: null.

- Comments are rendered recursively using the Comment component.

- Context API manages the global comment state.

- Upvote/Downvote count is stored and restricted per comment via localStorage.

- Comments can be expanded/collapsed to view nested replies.

- Dummy data is loaded on app start for demonstration.

## 🔗 Live Demo

🌐 [Click here to view live demo](https://reddit-nested-structure.netlify.app/)

## 👨‍💻 Author

**Ankush Thakur**  
Javascript Full Stack Developer
Location: Chandigarh, India

- [LinkedIn] (https://www.linkedin.com/in/ankush-thakur-bba3521a0/)

- [GitHub](https://github.com/AnkushThakur08/)
