import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import {
  LayoutDashboard,
  UtensilsCrossed,
  ShoppingBag,
  Calendar,
  Users,
  BarChart3,
  Megaphone,
  Settings,
  LogOut,
} from 'lucide-react'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  const handleSignOut = async () => {
    'use server'
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/auth/login')
  }

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white">
        <div className="flex h-16 items-center gap-2 border-b px-6">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600" />
          <span className="text-xl font-bold">RestaurantOS</span>
        </div>
        
        <nav className="space-y-1 p-4">
          <NavLink href="/dashboard" icon={<LayoutDashboard className="h-5 w-5" />}>
            Dashboard
          </NavLink>
          <NavLink href="/dashboard/menu" icon={<UtensilsCrossed className="h-5 w-5" />}>
            Menu
          </NavLink>
          <NavLink href="/dashboard/orders" icon={<ShoppingBag className="h-5 w-5" />}>
            Orders
          </NavLink>
          <NavLink href="/dashboard/bookings" icon={<Calendar className="h-5 w-5" />}>
            Bookings
          </NavLink>
          <NavLink href="/dashboard/customers" icon={<Users className="h-5 w-5" />}>
            Customers
          </NavLink>
          <NavLink href="/dashboard/analytics" icon={<BarChart3 className="h-5 w-5" />}>
            Analytics
          </NavLink>
          <NavLink href="/dashboard/marketing" icon={<Megaphone className="h-5 w-5" />}>
            Marketing
          </NavLink>
          <NavLink href="/dashboard/settings" icon={<Settings className="h-5 w-5" />}>
            Settings
          </NavLink>
        </nav>

        <div className="absolute bottom-0 w-64 border-t bg-white p-4">
          <form action={handleSignOut}>
            <Button variant="ghost" className="w-full justify-start" type="submit">
              <LogOut className="mr-2 h-5 w-5" />
              Sign Out
            </Button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}

function NavLink({
  href,
  icon,
  children,
}: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
    >
      {icon}
      <span className="text-sm font-medium">{children}</span>
    </Link>
  )
}
