# ThirtyFour Portfolio

A modern full-stack portfolio application built with **React + TypeScript + Chakra UI** (frontend) and **FastAPI + Python** (backend).

**Live Site**: [https://thirty-four.co.in](https://thirty-four.co.in)  
**API Docs**: [https://api.thirty-four.co.in/docs](https://api.thirty-four.co.in/docs)

## 📑 Table of Contents

- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Development](#-development)
- [Deployment to Render](#-deployment-to-render)
- [Custom Domain Setup](#-custom-domain-setup)
- [Troubleshooting](#-troubleshooting)

## 🏗️ Project Structure

\`\`\`
thirtyfour-frontend/
├── frontend/ # React + TypeScript frontend
│ ├── src/
│ │ ├── assets/ # Theme, resume data (JSON)
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Page components
│ │ ├── router/ # React Router setup
│ │ └── config.ts # Environment configuration
│ └── index.html # HTML template
├── backend/ # FastAPI + Python backend
│ ├── app/
│ │ ├── routes/ # API routes
│ │ ├── models/ # Data models & schemas
│ │ └── config.py # Configuration & CORS
│ ├── main.py # FastAPI entry point
│ └── requirements.txt # Python dependencies
├── render.yaml # Render deployment config
└── README.md # This file
\`\`\`

## 🎨 Tech Stack

### Frontend

- React 18 + TypeScript
- Vite 5.4.8
- Chakra UI 2.10.2
- React Router 6.27
- Framer Motion

### Backend

- FastAPI 0.115
- Uvicorn 0.32
- Pydantic 2.9
- Python 3.11+

## 🚀 Quick Start

### Prerequisites

- Node.js (v20+)
- Python (3.11+)
- Git

### 1. Clone & Install

\`\`\`bash
git clone https://github.com/TheWeekendTechWork/thirtyfour-frontend.git
cd thirtyfour-frontend
npm install
\`\`\`

### 2. Run Application

**Frontend** (Terminal 1):
\`\`\`bash
npm run dev

# → http://localhost:3000

\`\`\`

**Backend** (Terminal 2):
\`\`\`bash
cd backend
source venv/bin/activate
uvicorn main:app --reload --port 8000

# → http://localhost:8000

\`\`\`

## 🛠️ Development

### Commands

\`\`\`bash

# Frontend

npm run dev # Start dev server
npm run build # Build for production
npm run lint # Run ESLint

# Backend

cd backend
source venv/bin/activate
uvicorn main:app --reload # Development mode
pip install <package> && pip freeze > requirements.txt # Add dependency
\`\`\`

### Resume Data

Edit \`frontend/src/assets/resume-data.json\` to update:

- Personal information & contact
- Work experience
- Education
- Skills (categorized)
- Projects & hobbies

## 🚀 Deployment to Render

### Using Blueprint with Auto-Deploy (Recommended)

1. **Push to GitHub** (Already Done! ✅)
   \`\`\`bash
   git add .
   git commit -m "Deploy to Render"
   git push origin main
   \`\`\`

2. **Deploy on Render**

   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click **New +** → **Blueprint**
   - Connect your GitHub repository
   - Select \`thirtyfour-frontend\`
   - Render auto-detects \`render.yaml\` and deploys both services

3. **Add Environment Variables** (Backend service)
   \`\`\`
   ALLOWED_ORIGINS=https://thirty-four.co.in,https://www.thirty-four.co.in
   DEBUG=False
   \`\`\`

4. **Auto-Deploy is Active!** 🎉
   - Every push to \`main\` branch automatically deploys
   - Deployment takes ~3-5 minutes
   - Monitor progress in Render Dashboard
   - See detailed guide: [RENDER-AUTO-DEPLOY.md](./RENDER-AUTO-DEPLOY.md)

Your services will be live at:

- Frontend: \`https://thirtyfour-frontend.onrender.com\`
- Backend: \`https://thirtyfour-backend.onrender.com\`
- API Docs: \`https://thirtyfour-backend.onrender.com/docs\`

⚠️ **Free Tier**: Services sleep after 15 min inactivity (~50s wake time)

## 🌍 Custom Domain Setup

### Domain Structure

- **Frontend**: https://thirty-four.co.in
- **API**: https://api.thirty-four.co.in
- **WWW**: https://www.thirty-four.co.in (redirects)

### Quick Steps

#### 1. Add Custom Domains in Render

**Frontend:**

- Render Dashboard → thirtyfour-frontend → Settings → Custom Domain
- Add: \`thirty-four.co.in\`
- Copy A and AAAA record values

**Backend:**

- Render Dashboard → thirtyfour-backend → Settings → Custom Domain
- Add: \`api.thirty-four.co.in\`
- Copy A and AAAA record values

#### 2. Configure DNS in Namecheap

Login to Namecheap → Domain List → thirty-four.co.in → Manage → **Advanced DNS**

Add these records:

**Frontend:**
\`\`\`
Type: A Record | Host: @ | Value: [Render Frontend IPv4]
Type: AAAA Record | Host: @ | Value: [Render Frontend IPv6]
\`\`\`

**Backend API:**
\`\`\`
Type: A Record | Host: api | Value: [Render Backend IPv4]
Type: AAAA Record | Host: api | Value: [Render Backend IPv6]
\`\`\`

**WWW (Optional):**
\`\`\`
Type: CNAME Record | Host: www | Value: thirty-four.co.in
\`\`\`

#### 3. Wait for DNS Propagation

\`\`\`bash

# Check DNS (30-60 minutes)

nslookup thirty-four.co.in
nslookup api.thirty-four.co.in

# Or use: https://dnschecker.org/

\`\`\`

#### 4. SSL Certificates

✅ Automatically issued by Render (Let's Encrypt)  
✅ HTTP → HTTPS redirect enabled  
✅ Auto-renewal before expiration

#### 5. Test Domains

- ✅ https://thirty-four.co.in (website with 🔒)
- ✅ https://api.thirty-four.co.in (API message)
- ✅ https://api.thirty-four.co.in/docs (API docs)

### Configuration Files (Already Updated)

- ✅ \`frontend/src/config.ts\` → API URL: \`https://api.thirty-four.co.in\`
- ✅ \`backend/app/config.py\` → CORS allows: \`https://thirty-four.co.in\`
- ✅ \`render.yaml\` → Routes configured

## 🐛 Troubleshooting

### DNS Not Resolving

- Wait 30-60 minutes for propagation
- Verify IPs match Render dashboard
- Check: https://dnschecker.org/
- Clear cache: \`sudo dscacheutil -flushcache\` (macOS)

### SSL Certificate Issues

- Ensure DNS fully propagated first
- Check status in Render → Custom Domain section
- If stuck: remove and re-add domain

### CORS Errors

- Verify domain in \`backend/app/config.py\` ALLOWED_ORIGINS
- Redeploy backend after changes
- Test: \`curl https://api.thirty-four.co.in/health\`

### Build Failures

- Check logs in Render dashboard
- Verify dependencies versions
- Test locally: \`npm run build\` (frontend) or \`pip install -r requirements.txt\` (backend)

## ⚡ Build Size Optimization

### Current Build Performance

- **Build Output**: 516KB total
- **Gzipped**: ~163KB (what users actually download)
- **Deployment**: ~80-90MB (includes production node_modules)

### Optimizations Implemented

#### 1. Code Splitting

Vendor libraries are split into separate chunks for better caching:

- **react chunk**: React, React DOM, Router (~200KB → 64.55KB gzipped)
- **chakra chunk**: Chakra UI & Emotion (~160KB → 51.46KB gzipped)
- **motion chunk**: Framer Motion (~113KB → 36.11KB gzipped)
- **icons chunk**: React Icons (~3KB → 1.18KB gzipped)

#### 2. Production Minification

\`vite.config.ts\` configured with Terser:

- Removes \`console.log\` statements in production
- Removes debugger statements
- Aggressive minification

#### 3. Efficient Dependencies

\`render.yaml\` uses optimized build command:
\`\`\`bash
npm ci --omit=dev && npm run build
\`\`\`

Benefits:

- \`npm ci\`: Faster, uses package-lock.json
- \`--omit=dev\`: Skips devDependencies (~30% smaller)
- Sets \`NODE_ENV=production\`

### Monitor Bundle Size

\`\`\`bash

# Check build size

npm run build
du -sh dist/

# Analyze bundle composition

npx vite-bundle-visualizer
\`\`\`

### Performance Metrics

- ✅ Initial Load: 163KB gzipped
- ✅ Time to Interactive: <2s on 3G
- ✅ Deployment Time: ~5-6 seconds (with optimizations)

## 📡 API Documentation

- **Swagger UI**: http://localhost:8000/docs (dev) or https://api.thirty-four.co.in/docs (prod)
- **ReDoc**: http://localhost:8000/redoc

**Endpoints:**

- \`GET /\` - Welcome message
- \`GET /health\` - Health check
- \`GET /api/example\` - Example endpoint

## 🔐 Environment Variables

### Frontend (\`frontend/src/config.ts\`)

\`\`\`typescript
apiUrl: import.meta.env.PROD
? "https://api.thirty-four.co.in"
: "http://localhost:8000"
\`\`\`

### Backend (\`backend/.env\`)

\`\`\`env
DEBUG=False
APP_NAME=ThirtyFour API
ALLOWED_ORIGINS=https://thirty-four.co.in,https://www.thirty-four.co.in
\`\`\`

## 📊 Features

### Frontend

- 🎨 Custom retroGreen theme
- 📱 Fully responsive
- ✨ Framer Motion animations
- 📄 Dynamic JSON-based resume
- 🎴 Postcard-style About page

### Backend

- ⚡ Fast async FastAPI
- 📝 Auto-generated API docs
- 🔒 CORS security
- ❤️ Health check endpoint

## 🔗 Useful Links

- [React Docs](https://react.dev/)
- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [Chakra UI Docs](https://chakra-ui.com/)
- [Render Docs](https://render.com/docs)
- [DNS Checker](https://dnschecker.org/)

## 👤 Author

**TheWeekendTechWork**

- GitHub: [@TheWeekendTechWork](https://github.com/TheWeekendTechWork)
- Website: [thirty-four.co.in](https://thirty-four.co.in)

---

**Last Updated**: October 25, 2025 | **Happy Coding! 🚀**
