# 🚀 ONE-CLICK DEPLOY TO VERCEL

## ⚡ FASTEST WAY TO DEPLOY

Click this button to deploy RestaurantOS to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fabhinavtapaskar-afk%2Frestaurant-os&project-name=restaurant-os&repository-name=restaurant-os&root-directory=apps/web&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY,SUPABASE_SERVICE_ROLE_KEY&envDescription=Supabase%20credentials%20required%20for%20database%20and%20authentication&envLink=https%3A%2F%2Fsupabase.com%2Fdashboard%2Fproject%2F_%2Fsettings%2Fapi)

---

## 📋 WHAT THIS BUTTON DOES:

1. ✅ Automatically sets Root Directory to `apps/web`
2. ✅ Detects Next.js framework
3. ✅ Prompts you for environment variables
4. ✅ Deploys to Vercel
5. ✅ Gives you a live URL

---

## 🔑 BEFORE CLICKING THE BUTTON:

### Get Your Supabase Keys (2 minutes)

1. **Go to**: https://supabase.com/dashboard
2. **Open your project** (or create one if you haven't)
3. **Click Settings** → **API**
4. **Copy these 3 values**:
   - Project URL (e.g., `https://xxxxx.supabase.co`)
   - anon public key (starts with `eyJ...`)
   - service_role key (starts with `eyJ...`)

### Set Up Database (if not done)

1. In Supabase, go to **SQL Editor**
2. Click **New Query**
3. Copy this URL and open in new tab:
   - https://github.com/abhinavtapaskar-afk/restaurant-os/blob/main/packages/database/schema.sql
4. Click **Raw** button
5. Copy ALL the SQL
6. Paste in Supabase SQL Editor
7. Click **Run**

---

## 🚀 AFTER CLICKING THE BUTTON:

### Step 1: Sign in to Vercel
- Use your GitHub account

### Step 2: Configure Repository
- Vercel will clone the repo to your account
- Click "Create" (it's already configured!)

### Step 3: Add Environment Variables

You'll see a form asking for:

**NEXT_PUBLIC_SUPABASE_URL**
```
Paste your Supabase Project URL here
Example: https://xxxxx.supabase.co
```

**NEXT_PUBLIC_SUPABASE_ANON_KEY**
```
Paste your anon public key here
Example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**SUPABASE_SERVICE_ROLE_KEY**
```
Paste your service_role key here
Example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 4: Deploy!
- Click "Deploy"
- Wait 3-5 minutes
- 🎉 Your app is LIVE!

---

## 🎊 THAT'S IT!

The button handles:
- ✅ Root directory configuration
- ✅ Framework detection
- ✅ Build settings
- ✅ Everything technical

You just need to:
- 🔑 Provide Supabase keys
- 🚀 Click Deploy

---

## 🐛 TROUBLESHOOTING

### "Repository already exists"
- The button tries to fork the repo
- If you already have it, use manual deploy instead

### "Build failed"
- Check if you added all 3 environment variables
- Make sure keys are complete (no spaces)
- Try redeploying

### "Can't connect to database"
- Verify Supabase keys are correct
- Make sure you ran the database schema
- Check Supabase project is active

---

## 🎯 ALTERNATIVE: MANUAL DEPLOY (5 MINUTES)

If the button doesn't work, follow this simple guide:

### 1. Go to Vercel
https://vercel.com/new

### 2. Import Git Repository
- Select `restaurant-os`

### 3. Configure
- **Root Directory**: `apps/web` ← Click Edit and select this!
- **Framework**: Next.js

### 4. Add Environment Variables
- Add the 3 Supabase keys

### 5. Deploy
- Click Deploy button

---

## 💡 NEED YOUR SUPABASE KEYS?

### Quick Access:
1. https://supabase.com/dashboard
2. Select your project
3. Settings → API
4. Copy the 3 keys

### Don't have Supabase yet?
1. Go to https://supabase.com
2. Sign up (free)
3. Create new project
4. Run the database schema
5. Get your keys

---

## 🆘 STILL STUCK?

Tell me:
1. **Do you have a Supabase account?** (Yes/No)
2. **Do you have a Vercel account?** (Yes/No)
3. **What's blocking you?** (Describe the issue)

I'll create a custom solution for you!

---

**Click the button above to deploy now!** 🚀
