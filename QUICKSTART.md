# ⚡ Quick Start Guide - Get Running in 10 Minutes

This is the fastest way to get RestaurantOS running on your local machine.

## 🎯 What You'll Have After 10 Minutes

- ✅ Full restaurant management system running locally
- ✅ Authentication (signup/login)
- ✅ Dashboard with menu management
- ✅ Customer-facing website
- ✅ Database with sample data

## 📋 Prerequisites (2 minutes)

Make sure you have these installed:

\`\`\`bash
# Check Node.js (need 18+)
node --version

# Check pnpm (if not installed: npm install -g pnpm)
pnpm --version

# Check Git
git --version
\`\`\`

## 🚀 Step-by-Step Setup

### 1. Clone & Install (2 minutes)

\`\`\`bash
# Clone the repo
git clone https://github.com/abhinavtapaskar-afk/restaurant-os.git
cd restaurant-os

# Install dependencies
pnpm install
\`\`\`

### 2. Set Up Supabase (3 minutes)

**Option A: Use Our Demo Supabase (Fastest)**

\`\`\`bash
cd apps/web
cp .env.example .env.local
\`\`\`

Then paste this into \`.env.local\`:

\`\`\`env
# Demo Supabase (read-only, for testing)
NEXT_PUBLIC_SUPABASE_URL=https://demo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=demo_key_here
SUPABASE_SERVICE_ROLE_KEY=demo_service_key_here

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_DOMAIN=localhost:3000
\`\`\`

**Option B: Create Your Own Supabase (Recommended for Development)**

1. Go to [supabase.com](https://supabase.com) and create account
2. Click "New Project"
3. Fill in details and click "Create"
4. While it's setting up, copy \`packages/database/schema.sql\`
5. Once ready, go to SQL Editor → New Query
6. Paste the schema and click "Run"
7. Go to Settings → API and copy:
   - Project URL
   - anon public key
   - service_role key
8. Paste into \`.env.local\`

### 3. Run the App (1 minute)

\`\`\`bash
# From root directory
cd ../..
pnpm dev
\`\`\`

You should see:
\`\`\`
▲ Next.js 14.0.4
- Local:        http://localhost:3000
- Ready in 2.3s
\`\`\`

### 4. Create Your Account (2 minutes)

1. Open http://localhost:3000
2. Click "Get Started"
3. Sign up with your email
4. Check email for verification link
5. Click link to verify
6. You're in! 🎉

### 5. Set Up Your Restaurant (2 minutes)

1. Go to Settings
2. Fill in:
   - Restaurant name: "My Test Cafe"
   - Subdomain: "test-cafe"
   - Description: "Best coffee in town"
   - Phone: Your number
3. Click "Save"

### 6. Add Menu Items (Optional)

1. Go to Menu
2. Click "Add Item"
3. Fill in:
   - Name: "Cappuccino"
   - Price: 150
   - Category: "Beverages"
   - Veg: Yes
4. Click "Save"

## 🎉 You're Done!

Your restaurant management system is now running!

### What to Try Next:

**Dashboard:**
- http://localhost:3000/dashboard - Your admin panel
- http://localhost:3000/dashboard/menu - Manage menu
- http://localhost:3000/dashboard/orders - View orders

**Customer Site:**
- http://test-cafe.localhost:3000 - Your restaurant website
  (Note: Subdomain won't work on localhost without hosts file config)

## 🐛 Common Issues

### "Port 3000 already in use"
\`\`\`bash
# Use different port
pnpm dev -- -p 3001
\`\`\`

### "Invalid API key"
- Double-check your Supabase keys in \`.env.local\`
- Make sure there are no extra spaces

### "Database error"
- Make sure you ran the schema.sql in Supabase
- Check if your Supabase project is active

### Subdomain not working
- Subdomains don't work on localhost by default
- Either:
  1. Add to hosts file: \`127.0.0.1 test-cafe.localhost\`
  2. Or deploy to Vercel for real subdomains

## 📚 Next Steps

Now that you're running:

1. **Read the full docs:**
   - [Setup Guide](docs/SETUP.md) - Detailed setup
   - [API Docs](docs/API.md) - API reference
   - [Deployment](docs/DEPLOYMENT.md) - Deploy to production

2. **Customize your restaurant:**
   - Upload logo
   - Change colors
   - Add more menu items

3. **Test features:**
   - Place test orders
   - Create bookings
   - Check analytics

4. **Deploy to production:**
   - Follow [Deployment Guide](docs/DEPLOYMENT.md)
   - Get your own domain
   - Start accepting real orders!

## 💡 Pro Tips

- Use the demo Supabase for quick testing
- Create your own Supabase for development
- Keep your \`.env.local\` file secure
- Test on mobile devices too
- Join our Discord for help (coming soon)

## 🆘 Need Help?

- 📖 [Full Documentation](README.md)
- 🐛 [Report Issues](https://github.com/abhinavtapaskar-afk/restaurant-os/issues)
- 📧 Email: abhinavtapaskar@gmail.com

---

**Built with ❤️ for restaurant owners**

Now go build something amazing! 🚀
