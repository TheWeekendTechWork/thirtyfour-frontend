# ThirtyFour Portfolio

A modern, retro-styled full-stack portfolio application built with **React + TypeScript + Chakra UI** and served via **Node.js**.

**Live Site**: [https://thirty-four.co.in](https://thirty-four.co.in)

## 🌟 Overview

This portfolio combines modern web technologies with a nostalgic **Windows 95/Retro aesthetic**. It features a fully functional **Admin Dashboard** for dynamic content management, allowing real-time updates to the site's data without code changes.

## 🛠️ Tech Stack & Tools

### **Frontend**
-   **Core**: React 18, TypeScript, Vite
-   **Styling**: Chakra UI, Emotion (CSS-in-JS), Vanilla CSS (Retro Effects)
-   **Animations**: Framer Motion
-   **Routing**: React Router DOM v6
-   **State Management**: React Context API (`DataContext`)

### **Backend & Services**
-   **Server**: Node.js + Express (Acts as an API Proxy & Static File Server)
-   **Database**: [JSONBin.io](https://jsonbin.io) (NoSQL JSON Storage)
-   **Deployment**: [Render](https://render.com) (Web Service)
-   **CI/CD**: GitHub Actions (Automated Linting & Builds)

## ✨ UI & Design Features

-   **Retro/Pixel aesthetic**: Custom 'Press Start 2P' fonts and pixelated borders.
-   **Glassmorphism**: Modern translucent cards mixed with retro elements.
-   **Admin Dashboard**:
    -   Secure Login (Dynamic Password)
    -   Tabbed Editors (Home Data & Resume Data)
    -   "Save & Publish" functionality
-   **Responsive Design**: Optimized for Desktop, Tablet, and Mobile.

## 🏗️ Project Structure

```bash
thirtyfour-frontend/
├── frontend/             # React Application
│   ├── src/
│   │   ├── components/   # UI Components (Admin, Layout, etc.)
│   │   ├── context/      # Global State (DataContext)
│   │   ├── pages/        # Main Pages (Home, Admin, etc.)
│   │   ├── router/       # Route Definitions
│   │   └── assets/       # Static Assets & Default JSON
│   └── index.html
├── dist/                 # Production Build Output
├── server.js             # Node.js Express Server (API Proxy)
├── render.yaml           # Render Deployment Config
├── eslint.config.js      # Linting Configuration
├── package.json          # Project Dependencies & Scripts
└── README.md             # Project Documentation
```

## 🚀 Quick Start

### Prerequisites
-   Node.js (v20+)
-   Git

### 1. Clone & Install
```bash
git clone https://github.com/TheWeekendTechWork/thirtyfour-frontend.git
cd thirtyfour-frontend
npm install
```

### 2. Run Locally

**Option A: Dev Mode (Frontend Only)**
```bash
npm run dev
# Runs Vite server at http://localhost:5173
# Note: Admin Save features require the backend server.
```

**Option B: Full Stack (Frontend + Backend)**
```bash
npm run dev:full
# Runs both Node server (port 3001) and Vite (port 5173) concurrently.
```

**Option C: Production Preview**
```bash
npm run build
npm start
# Serves the built app at http://localhost:3001
```

## 🔐 Environment Variables

The application uses **JSONBin.io** for data storage. In production (Render), these keys should be set in the Environment settings.

| Variable | Description |
| :--- | :--- |
| `PORT` | Server port (default: 3001) |
| `JSONBIN_MASTER_KEY` | Master Key for API access |
| `JSONBIN_HOME_ID` | Bin ID for Home Data |
| `JSONBIN_RESUME_ID` | Bin ID for Resume Data |

*(Note: Currently, keys are configured in `server.js` for simplicity, but moving them to `.env` is recommended for security.)*

## 📦 Deployment

This project is configured for **Render** as a **Node.js Web Service**.

1.  **Push to GitHub.**
2.  **Create Web Service on Render** (or use Blueprints).
3.  **Build Command:** `npm install && npm run build`
4.  **Start Command:** `npm start`

See [render.yaml](./render.yaml) for the blueprint configuration.

## 👤 Author

**TheWeekendTechWork**
-   Website: [thirty-four.co.in](https://thirty-four.co.in)
-   GitHub: [@TheWeekendTechWork](https://github.com/TheWeekendTechWork)

---
*Built with ❤️ and pixels.*
