# 🖥️ DevBoard — Developer Task Dashboard

A clean and interactive developer task management dashboard built with **vanilla HTML, CSS, and JavaScript**, styled with **Tailwind CSS** and **DaisyUI**. DevBoard helps developers track their assigned tasks, monitor deadlines, log activity, and discover new learning content — all in one place.

🌐 **Live Demo:** [mesbahtoha.github.io/Assignment-5-DevBoard](https://mesbahtoha.github.io/Test-Ass-5-/)
📦 **Repository:** [github.com/mesbahtoha/DevBoard](https://github.com/mesbahtoha/DevBoard)

---

## ✨ Features

- 📋 **Task Cards** — View 6 developer tasks with company name, description, and deadline
- ✅ **Complete Tasks** — Mark tasks as completed with a single click
- 📝 **Activity Log** — Automatically logs each task completion with a timestamp
- 🗑️ **Clear History** — Reset the activity log with one click
- 📅 **Live Date Display** — Shows the real current day and date dynamically
- 🌙 **Theme Toggle** — Switch between light and dark background themes
- 🔢 **Task Counter** — Live count of total and assigned tasks in the navbar
- 📖 **Discover Page** — A dedicated blog page covering JavaScript DOM concepts with Q&A

---

## 📁 Project Structure

```
DevBoard/
│
├── index.html              # Main dashboard page
├── discover.html           # Blog / DOM concepts Q&A page
├── tailwind.config.js      # Tailwind CSS configuration
│
├── assets/                 # Icons and images
│   ├── logo.png
│   ├── checkbox.png
│   ├── board.png
│   ├── calender.png
│   ├── activity.png
│   └── theme-btn.png
│
├── styles/                 # Custom CSS
│   ├── styles.css          # Main styles for index.html
│   └── discover.css        # Styles for discover.html
│
└── script/                 # Vanilla JavaScript files
    ├── activityLog.js      # Logs task completions to the Activity Log
    ├── changeThemeColor.js # Toggles light/dark theme
    ├── realDate.js         # Displays the current real-time date
    └── backDeskBtn.js      # Handles 'Back to Desk' button on discover page
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and markup |
| CSS3 | Custom styling |
| JavaScript (Vanilla) | Interactivity and DOM manipulation |
| Tailwind CSS (CDN) | Utility-first responsive styling |
| DaisyUI (CDN) | Pre-built UI components (buttons, etc.) |
| Google Fonts — Poppins | Typography |

> ⚡ No build tools, no frameworks, no npm required — just open in a browser!

---

## 📄 Pages

### 🏠 `index.html` — Main Dashboard
The primary page of the application. It contains:

- **Navbar** — Logo, task counter badge, and theme toggle icon
- **Task Summary Card** — Shows number of tasks assigned (6)
- **Discover Card** — Quick link to the Discover/Blog page
- **Date Card** — Displays the real current day and date
- **Task Cards (6 total)** — Each card includes:
  - Client/company name tag (ShopEase, CloudSync, SwiftPay, Meta, Google LLC, Glassdoor)
  - Task title and short description
  - Deadline date
  - "Completed" button that logs to the Activity Log
- **Activity Log sidebar** — Tracks all completed tasks with a Clear History button

### 📖 `discover.html` — Blog / Learn Page
A secondary page with educational content covering JavaScript DOM topics:

1. Different ways to select DOM elements
2. Difference between `innerHTML`, `innerText`, and `textContent`
3. What is event delegation?
4. What is event bubbling?
5. How to create, add, and remove elements using JavaScript

---

## 🚀 Getting Started

No installation or build step needed. Just clone and open!

### 1. Clone the Repository

```bash
git clone https://github.com/mesbahtoha/DevBoard.git
cd DevBoard
```

### 2. Open in Browser

Simply open `index.html` in your browser:

```bash
# On macOS
open index.html

# On Windows
start index.html

# Or just drag the file into your browser
```

> You can also use the **Live Server** extension in VS Code for a better development experience.

---

## 🎮 How to Use

1. **View your tasks** — 6 task cards are displayed on the main dashboard
2. **Mark as completed** — Click the blue **"Completed"** button on any card
3. **Check the Activity Log** — The right sidebar logs each completion automatically
4. **Clear the log** — Click **"Clear History"** to reset the activity log
5. **Toggle theme** — Click the theme icon in the navbar to switch background color
6. **Discover content** — Click the **"Discover Something New Today!"** card to visit the blog page
7. **Go back** — Use the **"Back to Desk"** button on the Discover page to return to the dashboard

---

## 🌍 Deployment

This is a static site with no backend — deploy it anywhere for free:

**GitHub Pages (recommended):**
1. Go to your repo → **Settings** → **Pages**
2. Set source to `main` branch, root folder
3. Your site will be live at `https://<username>.github.io/<repo-name>/`

**Other options:** Netlify, Vercel, Surge.sh

---

## 🤝 Contributing

Contributions and suggestions are welcome!

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

**Md.Mesbahul Alam**
- GitHub: [@mesbahtoha](https://github.com/mesbahtoha)
- Email: mesbahulalam017@gmail.com
- Live Project: [mesbahtoha.github.io/Assignment-5-DevBoard](https://mesbahtoha.github.io/Test-Ass-5-/)

---

> ⭐ If you found this project helpful, please give it a star!
