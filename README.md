# 🍽️ RestaurantOS - Complete Restaurant Management System

A modern, full-stack SaaS platform for restaurants to manage their entire operations - from online ordering to table bookings, menu management, and analytics.

## 🚀 ONE-CLICK DEPLOY

Deploy to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fabhinavtapaskar-afk%2Frestaurant-os&project-name=restaurant-os&repository-name=restaurant-os&root-directory=apps/web&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY,SUPABASE_SERVICE_ROLE_KEY&envDescription=Supabase%20credentials%20required%20for%20database%20and%20authentication&envLink=https%3A%2F%2Fsupabase.com%2Fdashboard%2Fproject%2F_%2Fsettings%2Fapi)

**Before deploying**: Get your Supabase credentials from [supabase.com/dashboard](https://supabase.com/dashboard)

---

## 🚀 Features

### For Restaurant Owners
- **🌐 Custom Branded Website** - Each restaurant gets their own subdomain (e.g., `cafe-name.restaurantos.com`)
- **📱 Online Ordering** - Accept orders directly without commission fees
- **📋 Menu Management** - Easy-to-use interface to manage menu items, categories, and pricing
- **🍽️ Table Bookings** - Let customers book tables online with QR code ordering
- **📊 Analytics Dashboard** - Track sales, popular items, peak hours, and customer behavior
- **👥 Customer Management** - Build your customer database with loyalty programs
- **💳 Payment Integration** - Accept UPI, cards, and cash with Razorpay
- **📈 Marketing Tools** - Run campaigns, offers, and loyalty programs

### For Customers
- **Beautiful Menu Display** - Browse menu with photos and descriptions
- **Easy Ordering** - Add to cart, customize items, and place orders
- **Order Tracking** - Real-time order status updates
- **Table Ordering** - Scan QR code and order directly from your table
- **Booking System** - Reserve tables online

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful, accessible components
- **Lucide Icons** - Modern icon library

### Backend
- **Supabase** - PostgreSQL database, authentication, and real-time subscriptions
- **Next.js API Routes** - Serverless API endpoints
- **Row Level Security** - Database-level security policies

### Infrastructure
- **Vercel** - Hosting and deployment
- **Turborepo** - Monorepo management
- **pnpm** - Fast, efficient package manager

## 📦 Project Structure

\`\`\`
restaurant-os/
├── apps/
│   └── web/                    # Main Next.js application
│       ├── app/
│       │   ├── (auth)/        # Authentication pages
│       │   ├── dashboard/     # Owner dashboard
│       │   ├── customer/      # Customer-facing pages
│       │   └── api/           # API routes
│       ├── components/        # React components
│       ├── lib/               # Utilities and helpers
│       └── types/             # TypeScript types
├── packages/
│   └── database/              # Database schema and migrations
└── docs/                      # Documentation
\`\`\`

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- pnpm installed (\`npm install -g pnpm\`)
- Supabase account (free tier works)
- Razorpay account (for payments)

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/abhinavtapaskar-afk/restaurant-os.git
cd restaurant-os
\`\`\`

### 2. Install Dependencies

\`\`\`bash
pnpm install
\`\`\`

### 3. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the schema from \`packages/database/schema.sql\`
3. Copy your project URL and anon key

### 4. Configure Environment Variables

\`\`\`bash
cd apps/web
cp .env.example .env.local
\`\`\`

Edit \`.env.local\` and add your credentials:

\`\`\`env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Razorpay (Optional for now)
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_DOMAIN=localhost:3000
\`\`\`

### 5. Run Development Server

\`\`\`bash
cd ../..  # Back to root
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Documentation

- **[Quick Start Guide](QUICKSTART.md)** - Get running in 10 minutes
- **[Setup Guide](docs/SETUP.md)** - Detailed setup instructions
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Deploy to production
- **[API Documentation](docs/API.md)** - Complete API reference
- **[One-Click Deploy](DEPLOY_BUTTON.md)** - Deploy with one click

## 🚢 Deployment

### Deploy to Vercel

Click the button above or:

1. Push your code to GitHub
2. Import project in Vercel
3. Set Root Directory to \`apps/web\`
4. Add environment variables
5. Deploy!

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

## 📊 Pricing Tiers

### Starter - ₹2,999/month
- Custom website (subdomain)
- Digital menu (unlimited items)
- Online ordering (WhatsApp)
- QR code table ordering
- Basic analytics
- Up to 200 orders/month

### Pro - ₹5,999/month (Most Popular)
- Everything in Starter
- Custom domain
- Online payments (UPI/Card)
- Customer database & CRM
- Loyalty program
- Marketing automation
- Up to 1,000 orders/month

### Premium - ₹12,999/month
- Everything in Pro
- Multi-location management
- Inventory management
- Staff management
- Kitchen Display System
- Unlimited orders

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📧 Contact

For questions or support:
- Email: abhinavtapaskar@gmail.com
- GitHub: [@abhinavtapaskar-afk](https://github.com/abhinavtapaskar-afk)

---

Built with ❤️ for restaurant owners who want to own their customers and data.
