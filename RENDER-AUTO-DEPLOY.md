# Render Auto-Deploy Setup Guide

Your code is now pushed to GitHub! Follow these steps to set up automatic deployment on Render.

## 🚀 Quick Setup (5 minutes)

### Step 1: Connect GitHub to Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** in the top right
3. Select **"Blueprint"**
4. Click **"Connect GitHub"** (if not already connected)
5. Authorize Render to access your GitHub repositories

### Step 2: Deploy Using Blueprint

1. After connecting GitHub, you'll see your repositories
2. Find and select **`TheWeekendTechWork/thirtyfour-frontend`**
3. Render will detect the `render.yaml` file automatically
4. Review the services:
   - ✅ **thirtyfour-backend** (Web Service - Python)
   - ✅ **thirtyfour-frontend** (Static Site - Node.js)
5. Click **"Apply"** to start deployment

### Step 3: Monitor Deployment

Render will now:
- Create both services
- Install dependencies
- Build the frontend
- Start the backend
- Assign URLs to both services

**Initial deployment takes 5-10 minutes.**

### Step 4: Configure Environment Variables

Once deployed, add environment variables to the backend service:

1. Go to **thirtyfour-backend** service
2. Click **Environment** tab
3. Add these variables:
   ```
   ALLOWED_ORIGINS=https://thirty-four.co.in,https://www.thirty-four.co.in,https://thirtyfour-frontend.onrender.com
   DEBUG=False
   ```
4. Click **Save Changes**
5. Service will automatically redeploy

## ✨ Auto-Deploy is Now Active!

### How It Works

From now on, whenever you push to GitHub:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

**Render will automatically:**
1. 🔔 Detect the push to `main` branch
2. 🔄 Pull the latest code
3. 📦 Install/update dependencies
4. 🏗️ Build the frontend
5. 🚀 Deploy both services
6. ✅ Run health checks

**Deployment time: ~3-5 minutes per push**

### Viewing Deployment Status

**Option 1: Render Dashboard**
- Go to https://dashboard.render.com/
- Click on your service
- See real-time logs and deployment status

**Option 2: GitHub Integration**
- Go to your GitHub repo
- Click on **"Environments"** tab
- See deployment history and status

**Option 3: Email Notifications**
- Render sends email notifications for:
  - ✅ Successful deployments
  - ❌ Failed deployments
  - ⚠️ Build warnings

## 🎯 Your Live URLs

After deployment completes:

- **Frontend**: https://thirtyfour-frontend.onrender.com
- **Backend API**: https://thirtyfour-backend.onrender.com
- **API Docs**: https://thirtyfour-backend.onrender.com/docs
- **Health Check**: https://thirtyfour-backend.onrender.com/health

## 🌍 Custom Domain (Next Step)

After your services are deployed, set up your custom domain:

1. **Add Custom Domains in Render:**
   - Frontend: `thirty-four.co.in`
   - Backend: `api.thirty-four.co.in`

2. **Configure DNS in Namecheap:**
   - Follow the instructions in README.md under "Custom Domain Setup"

3. **Wait for SSL:**
   - SSL certificates are auto-issued within 5-10 minutes after DNS propagates

## 🔧 Deployment Settings

### Branch Protection
- Only pushes to `main` branch trigger auto-deploy
- To deploy from other branches, configure in Render service settings

### Manual Deploy
If you need to redeploy without pushing:
1. Go to Render Dashboard → Service
2. Click **"Manual Deploy"** → **"Deploy latest commit"**

### Rollback
To rollback to a previous version:
1. Go to Render Dashboard → Service
2. Click **"Events"** tab
3. Find the successful deployment you want to rollback to
4. Click **"Redeploy"**

## 📊 Monitoring

### View Logs
```bash
# Real-time logs in Render Dashboard
Dashboard → Service → Logs (live tail)
```

### Service Status
- 🟢 Green = Running
- 🟡 Yellow = Building/Deploying
- 🔴 Red = Failed/Down

### Performance
- Free tier services sleep after 15 min inactivity
- First request after sleep: ~50 seconds wake time
- Subsequent requests: Fast response

## 🐛 Common Issues

### Build Fails After Push
1. Check logs in Render Dashboard
2. Ensure dependencies are correct in `package.json` and `requirements.txt`
3. Test build locally: `npm run build`

### Auto-Deploy Not Triggering
1. Check Render has GitHub access
2. Verify service is connected to correct repo
3. Check branch settings (must be `main`)
4. Check webhook status in GitHub repo settings

### Environment Variables Not Applied
1. Must click "Save Changes" in Render
2. Service redeploys automatically after saving
3. Wait for deployment to complete

## 💡 Pro Tips

### 1. Use Commit Messages for Tracking
```bash
git commit -m "feat: Add new feature"     # New features
git commit -m "fix: Fix bug in API"       # Bug fixes
git commit -m "docs: Update README"       # Documentation
git commit -m "style: Update UI colors"   # Style changes
```

### 2. Test Locally Before Pushing
```bash
# Always test before pushing
npm run build          # Test frontend build
cd backend && pytest   # Run backend tests (if configured)
```

### 3. Enable Deploy Notifications
- Render Dashboard → Account Settings → Notifications
- Enable Slack/Discord webhooks for team notifications

### 4. Review Logs After Deploy
- Always check logs after auto-deploy
- Verify no errors or warnings
- Test critical endpoints

## 🔒 Security Checklist

After setting up auto-deploy:

- [ ] `DEBUG=False` in production backend
- [ ] CORS configured with specific origins (no wildcards)
- [ ] Secrets stored as environment variables (not in code)
- [ ] `.env` files in `.gitignore` (never committed)
- [ ] HTTPS enabled (automatic with Render)
- [ ] Health check endpoint working

## 📞 Need Help?

- **Render Docs**: https://render.com/docs
- **Render Status**: https://status.render.com/
- **GitHub Issues**: Report bugs in your repository
- **Render Community**: https://community.render.com/

---

## ✅ Setup Complete!

Your auto-deploy is now configured. Every push to `main` branch will automatically deploy to Render!

**Test it:**
```bash
# Make a small change
echo "# Test auto-deploy" >> README.md
git add README.md
git commit -m "test: Verify auto-deploy"
git push origin main

# Watch it deploy in Render Dashboard!
```

**Next Steps:**
1. ✅ Code pushed to GitHub
2. 🔄 Deploy using Render Blueprint
3. 🌍 Set up custom domain (thirty-four.co.in)
4. 🚀 Start building features!

---

**Happy Deploying! 🎉**
