# 🛠️ Complete Setup Guide

This guide will walk you through setting up RestaurantOS from scratch.

## Prerequisites

Before you begin, make sure you have:

- ✅ Node.js 18 or higher installed
- ✅ pnpm package manager installed
- ✅ Git installed
- ✅ A Supabase account (free tier is fine)
- ✅ A code editor (VS Code recommended)

## Step 1: Clone and Install

\`\`\`bash
# Clone the repository
git clone https://github.com/abhinavtapaskar-afk/restaurant-os.git
cd restaurant-os

# Install dependencies
pnpm install
\`\`\`

## Step 2: Set Up Supabase

### Create a New Project

1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in:
   - **Name**: RestaurantOS (or any name)
   - **Database Password**: Choose a strong password
   - **Region**: Choose closest to your users
4. Click "Create new project"
5. Wait for the project to be ready (2-3 minutes)

### Run Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy the entire contents of \`packages/database/schema.sql\`
4. Paste into the SQL editor
5. Click "Run" (or press Ctrl/Cmd + Enter)
6. You should see "Success. No rows returned"

### Get Your API Keys

1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like \`https://xxxxx.supabase.co\`)
   - **anon public** key (starts with \`eyJ...\`)
   - **service_role** key (starts with \`eyJ...\`)

## Step 3: Configure Environment Variables

\`\`\`bash
cd apps/web
cp .env.example .env.local
\`\`\`

Open \`.env.local\` and fill in your Supabase credentials:

\`\`\`env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_DOMAIN=localhost:3000

# Razorpay (Optional - can add later)
NEXT_PUBLIC_RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

# WhatsApp (Optional - can add later)
WHATSAPP_API_KEY=

# SMS (Optional - can add later)
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
\`\`\`

## Step 4: Run the Development Server

\`\`\`bash
# From the root directory
cd ../..
pnpm dev
\`\`\`

You should see:

\`\`\`
> web@0.1.0 dev
> next dev

  ▲ Next.js 14.0.4
  - Local:        http://localhost:3000
  - Ready in 2.3s
\`\`\`

## Step 5: Test the Application

1. Open [http://localhost:3000](http://localhost:3000)
2. You should see the landing page
3. Click "Get Started" or "Sign Up"
4. Create an account with your email
5. Check your email for verification link
6. Click the verification link
7. You'll be redirected to the dashboard

## Step 6: Create Your First Restaurant

1. Go to **Settings** in the dashboard
2. Fill in your restaurant details:
   - Restaurant name
   - Subdomain (e.g., \`my-cafe\`)
   - Description
   - Address
   - Phone number
3. Upload a logo (optional)
4. Choose your brand colors
5. Click "Save"

## Step 7: Add Menu Items

1. Go to **Menu** in the dashboard
2. Click "Add Item"
3. Fill in:
   - Item name
   - Description
   - Price
   - Category
   - Veg/Non-veg
   - Upload image (optional)
4. Click "Save"
5. Repeat for more items

## Step 8: Test Customer Ordering

1. Open a new incognito/private window
2. Go to \`http://your-subdomain.localhost:3000\`
3. You should see your restaurant's website
4. Browse the menu
5. Add items to cart
6. Place a test order

## Common Issues

### Issue: "Invalid API key"
**Solution**: Double-check your Supabase URL and keys in \`.env.local\`

### Issue: "Database error"
**Solution**: Make sure you ran the schema.sql file in Supabase SQL Editor

### Issue: "Port 3000 already in use"
**Solution**: Kill the process using port 3000 or use a different port:
\`\`\`bash
pnpm dev -- -p 3001
\`\`\`

### Issue: Subdomain not working
**Solution**: Subdomains don't work on localhost. You need to:
1. Add to your hosts file: \`127.0.0.1 your-subdomain.localhost\`
2. Or deploy to Vercel for real subdomain support

## Next Steps

Now that you have the basic setup working:

1. ✅ Add more menu items
2. ✅ Customize your restaurant branding
3. ✅ Set up payment integration (Razorpay)
4. ✅ Configure WhatsApp notifications
5. ✅ Deploy to production (see DEPLOYMENT.md)

## Need Help?

- 📖 Check the [main README](../README.md)
- 🐛 [Open an issue](https://github.com/abhinavtapaskar-afk/restaurant-os/issues)
- 📧 Email: abhinavtapaskar@gmail.com
