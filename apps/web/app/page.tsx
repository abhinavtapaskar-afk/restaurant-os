import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600" />
            <span className="text-xl font-bold">RestaurantOS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-orange-600">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-orange-600">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-orange-600">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Your Restaurant,
          <br />
          <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Your Rules
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Stop paying 20-30% commission to food delivery apps. Get your own branded website,
          manage orders, bookings, and grow your business.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="/auth/signup">
            <Button size="lg" className="h-12 px-8">
              Start Free Trial
            </Button>
          </Link>
          <Link href="#demo">
            <Button size="lg" variant="outline" className="h-12 px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          No credit card required • Setup in 10 minutes
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-center text-3xl font-bold">Everything You Need</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Complete restaurant management system in one platform
        </p>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <h2 className="text-center text-3xl font-bold">Simple, Transparent Pricing</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Choose the plan that fits your restaurant
        </p>
        
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border p-8 ${
                plan.popular ? 'border-orange-600 shadow-lg' : 'bg-white'
              }`}
            >
              {plan.popular && (
                <span className="inline-block rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="mt-4 text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-slate-600">{plan.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold">₹{plan.price}</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/auth/signup" className="mt-8 block">
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600" />
                <span className="text-xl font-bold">RestaurantOS</span>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Complete restaurant management system for modern restaurants.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Product</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li><Link href="#features">Features</Link></li>
                <li><Link href="#pricing">Pricing</Link></li>
                <li><Link href="#demo">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li><Link href="#about">About</Link></li>
                <li><Link href="#contact">Contact</Link></li>
                <li><Link href="#blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Legal</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li><Link href="#privacy">Privacy</Link></li>
                <li><Link href="#terms">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-slate-600">
            © 2024 RestaurantOS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: '🌐',
    title: 'Your Own Website',
    description: 'Get a beautiful, branded website with your own domain or subdomain.',
  },
  {
    icon: '📱',
    title: 'Online Ordering',
    description: 'Accept orders directly from your website. No commission fees.',
  },
  {
    icon: '📋',
    title: 'Menu Management',
    description: 'Update your menu in seconds. Add photos, prices, and descriptions.',
  },
  {
    icon: '🍽️',
    title: 'Table Bookings',
    description: 'Let customers book tables online. Manage reservations easily.',
  },
  {
    icon: '📊',
    title: 'Analytics',
    description: 'Track sales, popular items, peak hours, and customer behavior.',
  },
  {
    icon: '💳',
    title: 'Payments',
    description: 'Accept UPI, cards, and cash. Instant settlements to your account.',
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small cafes',
    price: '2,999',
    popular: false,
    features: [
      'Custom website (subdomain)',
      'Digital menu (unlimited items)',
      'Online ordering (WhatsApp)',
      'QR code table ordering',
      'Basic analytics',
      'Up to 200 orders/month',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    description: 'For established restaurants',
    price: '5,999',
    popular: true,
    features: [
      'Everything in Starter',
      'Custom domain',
      'Online payments (UPI/Card)',
      'Customer database & CRM',
      'Loyalty program',
      'Marketing automation',
      'Advanced analytics',
      'Up to 1,000 orders/month',
      'Priority support',
    ],
  },
  {
    name: 'Premium',
    description: 'For multi-location chains',
    price: '12,999',
    popular: false,
    features: [
      'Everything in Pro',
      'Multi-location management',
      'Inventory management',
      'Staff management',
      'Kitchen Display System',
      'Delivery integration',
      'API access',
      'Unlimited orders',
      'Dedicated account manager',
    ],
  },
]
