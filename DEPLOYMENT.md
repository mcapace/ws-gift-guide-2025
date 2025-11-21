# Deploying Wine Spectator Holiday Gift Guide to Vercel

## Quick Deploy Instructions

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Login to Vercel** (run this command in your terminal):
   ```bash
   vercel login
   ```
   This will open a browser for authentication.

2. **Deploy to Preview** (first deployment):
   ```bash
   vercel
   ```
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? Select your account/team
   - Link to existing project? **No** (first time) or **Yes** (if exists)
   - What's your project's name? `ws-gift-guide-2025`
   - In which directory is your code located? `./`
   - Want to override the settings? **No**

3. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard (Web UI)

1. Go to [https://vercel.com/new](https://vercel.com/new)

2. **Import Git Repository**:
   - Click "Import Git Repository"
   - Select GitHub
   - Find: `mcapace/ws-gift-guide-2025`

3. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (if needed):
   - None required for this project currently

5. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)

### Option 3: Connect GitHub for Auto-Deployments

1. Go to [https://vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Select branch: `claude/wine-spectator-holiday-landing-01FE2DVgo4yEAEQRxjwQVVB9`
5. Vercel will automatically deploy on every push to this branch

## What Happens During Deployment

1. **Vercel detects Next.js 15** automatically
2. **Installs dependencies**: `npm install`
3. **Runs build**: `npm run build`
4. **Optimizes assets**: Images, CSS, JavaScript
5. **Deploys to Edge Network**: Globally distributed
6. **Generates preview URL**: e.g., `ws-gift-guide-2025-xxx.vercel.app`

## After Deployment

### Your site will be available at:
- **Preview URL**: `https://ws-gift-guide-2025-<random>.vercel.app`
- **Production URL** (if deployed to prod): `https://ws-gift-guide-2025.vercel.app`

### Custom Domain (Optional)
To add a custom domain like `holiday.winespectator.com`:
1. Go to your project in Vercel dashboard
2. Click "Settings" > "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### 404 Error After Deployment
- **Check build logs** in Vercel dashboard
- **Verify the build succeeded** (should show green checkmark)
- **Ensure correct branch** is deployed

### Build Fails
- Check that `npm run build` works locally first
- Review Vercel build logs for specific errors
- Verify all dependencies are in `package.json`

### Performance Issues
- Images should be in `/public/images/` directory
- Use Next.js `<Image>` component for optimization
- Check Core Web Vitals in Vercel Analytics

## Current Status

✅ **Build Status**: Passing locally
✅ **All Dependencies**: Installed
✅ **TypeScript**: No errors
✅ **ESLint**: Passing
✅ **Production Build**: Tested and working

## Deployment Checklist

- [x] Code committed to git
- [x] Build passes locally (`npm run build`)
- [x] TypeScript errors resolved
- [x] ESLint warnings fixed
- [x] Dependencies installed
- [x] `.vercelignore` configured
- [x] `vercel.json` configured
- [ ] Vercel CLI authenticated (`vercel login`)
- [ ] Initial deployment (`vercel`)
- [ ] Production deployment (`vercel --prod`)

## Need Help?

- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Support: https://vercel.com/support

---

**Built for Wine Spectator Holiday 2025** 🍷✨
