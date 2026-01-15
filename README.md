# 🍽️ RestaurantOS - Complete Restaurant Management System

A modern, full-stack SaaS platform for restaurants to manage their entire operations - from online ordering to table bookings, menu management, and analytics.

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

### Database Schema

The complete database schema is in \`packages/database/schema.sql\`. It includes:

- **restaurants** - Restaurant information and settings
- **menu_items** - Menu items with pricing and availability
- **menu_categories** - Menu organization
- **orders** - Customer orders with status tracking
- **bookings** - Table reservations
- **customers** - Customer database with loyalty points

### Authentication

Authentication is handled by Supabase Auth with:
- Email/password signup and login
- Email verification
- Password reset
- Session management

### API Routes

API routes are in \`apps/web/app/api/\`:
- \`/api/menu\` - Menu management
- \`/api/orders\` - Order processing
- \`/api/bookings\` - Booking management
- \`/api/payments\` - Payment processing

## 🎨 Customization

### Branding
Each restaurant can customize:
- Logo and banner images
- Primary and secondary colors
- Restaurant information
- Custom subdomain

### Menu
- Add unlimited menu items
- Organize by categories
- Set prices and availability
- Upload food photos
- Mark items as veg/non-veg

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

\`\`\`bash
vercel
\`\`\`

### Environment Variables in Production

Make sure to add all environment variables from \`.env.example\` in your Vercel project settings.

## 📊 Pricing Tiers

### Starter - ₹2,999/month
- Custom website (subdomain)
- Digital menu (unlimited items)
- Online ordering (WhatsApp)
- QR code table ordering
- Basic analytics
- Up to 200 orders/month

### Pro - ₹5,999/month
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

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📧 Contact

For questions or support, reach out to:
- Email: abhinavtapaskar@gmail.com
- GitHub: [@abhinavtapaskar-afk](https://github.com/abhinavtapaskar-afk)

---

Built with ❤️ for restaurant owners who want to own their customers and data.
