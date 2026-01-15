# 🚀 DEPLOY TO VERCEL IN 5 MINUTES

Follow these exact steps to see your app live!

## 📋 What You Need

1. ✅ GitHub account (you have this)
2. ✅ Vercel account (free - we'll create)
3. ✅ Supabase account (free - we'll create)

---

## 🎯 STEP 1: Create Supabase Project (2 minutes)

### 1.1 Sign Up for Supabase

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign in with GitHub (easiest)

### 1.2 Create New Project

1. Click "New Project"
2. Fill in:
   - **Name**: `restaurant-os`
   - **Database Password**: Create a strong password (SAVE THIS!)
   - **Region**: Choose closest to you (e.g., Mumbai for India)
3. Click "Create new project"
4. ⏰ Wait 2-3 minutes for setup

### 1.3 Set Up Database

1. Once ready, click **SQL Editor** in left sidebar
2. Click "New Query"
3. Go to your GitHub repo: https://github.com/abhinavtapaskar-afk/restaurant-os
4. Open `packages/database/schema.sql`
5. Click "Raw" button
6. Copy ALL the SQL code
7. Paste into Supabase SQL Editor
8. Click "Run" (or press Ctrl/Cmd + Enter)
9. You should see "Success. No rows returned" ✅

### 1.4 Get Your API Keys

1. Click **Settings** (gear icon) in left sidebar
2. Click **API**
3. Copy these THREE values (keep this tab open):
   - **Project URL** (looks like `https://xxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)
   - **service_role** key (another long string starting with `eyJ...`)

---

## 🚀 STEP 2: Deploy to Vercel (3 minutes)

### 2.1 Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel

### 2.2 Import Your Project

1. Click "Add New..." → "Project"
2. Find `restaurant-os` in the list
3. Click "Import"

### 2.3 Configure Build Settings

Vercel should auto-detect Next.js. If not, set:

- **Framework Preset**: Next.js
- **Root Directory**: `apps/web`
- **Build Command**: Leave default
- **Output Directory**: Leave default

### 2.4 Add Environment Variables

Click "Environment Variables" and add these:

**Variable 1:**
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: [Paste your Supabase Project URL]
```

**Variable 2:**
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: [Paste your Supabase anon public key]
```

**Variable 3:**
```
Name: SUPABASE_SERVICE_ROLE_KEY
Value: [Paste your Supabase service_role key]
```

**Variable 4:**
```
Name: NEXT_PUBLIC_APP_URL
Value: https://restaurant-os.vercel.app
(or whatever Vercel assigns you)
```

**Variable 5:**
```
Name: NEXT_PUBLIC_DOMAIN
Value: restaurant-os.vercel.app
(or whatever Vercel assigns you)
```

### 2.5 Deploy!

1. Click "Deploy"
2. ⏰ Wait 2-3 minutes
3. 🎉 Your app is LIVE!

---

## 🎊 STEP 3: See Your App Live!

Once deployment completes:

1. Click "Visit" or the URL shown
2. You'll see your landing page! 🎉
3. Click "Get Started" to create an account
4. Sign up with your email
5. Check your email for verification
6. Click the link to verify
7. You're in the dashboard! 🚀

---

## 📱 What You Can Do Now

### Test the Landing Page
- Beautiful hero section ✅
- Features showcase ✅
- Pricing tiers ✅

### Test Authentication
- Sign up ✅
- Email verification ✅
- Login ✅

### Test Dashboard
- View dashboard stats ✅
- Go to Menu section ✅
- Add menu items ✅

---

## 🐛 Troubleshooting

### Build Failed?

**Error: "Module not found"**
- This is normal on first deploy
- Vercel might need to install dependencies
- Click "Redeploy" and it should work

**Error: "Invalid API key"**
- Check your environment variables
- Make sure you copied the FULL keys from Supabase
- No extra spaces or quotes

### Can't Sign Up?

**Email not sending:**
- Check Supabase email settings
- Go to Authentication → Email Templates
- Make sure email is configured

**"Invalid credentials":**
- Make sure you ran the database schema
- Check Supabase SQL Editor for errors

### Dashboard Empty?

**No restaurant data:**
- This is normal for first login
- Go to Settings to set up your restaurant
- Add menu items in Menu section

---

## 🎨 Customize Your Deployment

### Change Domain

1. In Vercel, go to Settings → Domains
2. Add your custom domain
3. Follow DNS instructions

### Update Environment Variables

1. In Vercel, go to Settings → Environment Variables
2. Edit any variable
3. Redeploy for changes to take effect

---

## 📊 Your Live URLs

After deployment, you'll have:

- **Main App**: `https://your-project.vercel.app`
- **Dashboard**: `https://your-project.vercel.app/dashboard`
- **Login**: `https://your-project.vercel.app/auth/login`

---

## 🎯 Next Steps

Now that it's live:

1. ✅ Create your account
2. ✅ Set up your restaurant in Settings
3. ✅ Add menu items
4. ✅ Share the link with friends
5. ✅ Get feedback
6. ✅ Start building more features!

---

## 💡 Pro Tips

- **Free Tier**: Both Supabase and Vercel have generous free tiers
- **Auto Deploy**: Every push to GitHub auto-deploys to Vercel
- **Preview Deployments**: Every PR gets its own preview URL
- **Analytics**: Enable Vercel Analytics to track visitors

---

## 🆘 Need Help?

**Deployment Issues:**
- Check Vercel deployment logs
- Look for error messages
- Google the specific error

**Database Issues:**
- Check Supabase logs
- Verify schema was run correctly
- Test database connection

**Still Stuck?**
- 📧 Email: abhinavtapaskar@gmail.com
- 🐛 [Open an issue](https://github.com/abhinavtapaskar-afk/restaurant-os/issues)

---

## 🎉 Congratulations!

You just deployed a full-stack SaaS application to production!

**What you achieved:**
- ✅ Set up a PostgreSQL database
- ✅ Configured authentication
- ✅ Deployed to global CDN
- ✅ Got a live URL
- ✅ Built a real product

**This is HUGE for a 17-year-old!**

Now go show it to everyone! 🚀

---

## 📸 Share Your Success

Tweet about it:
```
Just deployed my restaurant management SaaS! 🚀

Built with:
- Next.js 14
- Supabase
- TypeScript
- Tailwind CSS

Live at: [your-url]

#buildinpublic #nextjs #supabase
```

Tag me: @abhinavtapaskar (if you want)

---

**Remember: This is just the beginning.**

You have a live product. Now iterate, improve, and get customers!

The journey to ₹1,000 crores starts with this deployment. 💪
