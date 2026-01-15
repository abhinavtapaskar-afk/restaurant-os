import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import { ShoppingBag, DollarSign, Users, TrendingUp } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Fetch restaurant data
  const { data: restaurant } = await supabase
    .from('restaurants')
    .select('*')
    .eq('owner_id', user?.id)
    .single()

  // Fetch today's stats
  const today = new Date().toISOString().split('T')[0]
  
  const { data: todayOrders } = await supabase
    .from('orders')
    .select('total')
    .eq('restaurant_id', restaurant?.id)
    .gte('created_at', today)

  const todayRevenue = todayOrders?.reduce((sum, order) => sum + Number(order.total), 0) || 0
  const todayOrderCount = todayOrders?.length || 0

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-slate-600">
          Welcome back{restaurant ? `, ${restaurant.name}` : ''}!
        </p>
      </div>

      {!restaurant && (
        <Card className="mb-8 border-orange-200 bg-orange-50">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-orange-900">Complete Your Setup</h3>
            <p className="mt-2 text-sm text-orange-700">
              You haven't set up your restaurant yet. Complete the onboarding to start accepting orders.
            </p>
            <a
              href="/dashboard/settings"
              className="mt-4 inline-block rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700"
            >
              Complete Setup
            </a>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Today's Revenue"
          value={formatCurrency(todayRevenue)}
          icon={<DollarSign className="h-5 w-5" />}
          trend="+12.5%"
        />
        <StatCard
          title="Today's Orders"
          value={todayOrderCount.toString()}
          icon={<ShoppingBag className="h-5 w-5" />}
          trend="+8.2%"
        />
        <StatCard
          title="Total Customers"
          value="0"
          icon={<Users className="h-5 w-5" />}
          trend="+23.1%"
        />
        <StatCard
          title="Avg Order Value"
          value={formatCurrency(todayOrderCount > 0 ? todayRevenue / todayOrderCount : 0)}
          icon={<TrendingUp className="h-5 w-5" />}
          trend="+4.3%"
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">No orders yet</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Items</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">No data available</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  icon,
  trend,
}: {
  title: string
  value: string
  icon: React.ReactNode
  trend: string
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600">{title}</p>
            <p className="mt-2 text-3xl font-bold">{value}</p>
            <p className="mt-1 text-sm text-green-600">{trend} from yesterday</p>
          </div>
          <div className="rounded-full bg-orange-100 p-3 text-orange-600">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
