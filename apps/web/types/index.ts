export interface Restaurant {
  id: string
  name: string
  slug: string
  subdomain: string
  logo_url?: string
  banner_url?: string
  description?: string
  address?: string
  phone?: string
  email?: string
  primary_color?: string
  secondary_color?: string
  owner_id: string
  subscription_tier: 'starter' | 'pro' | 'premium'
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface MenuItem {
  id: string
  restaurant_id: string
  name: string
  description?: string
  price: number
  image_url?: string
  category: string
  is_veg: boolean
  is_available: boolean
  preparation_time?: number
  created_at: string
  updated_at: string
}

export interface MenuCategory {
  id: string
  restaurant_id: string
  name: string
  description?: string
  display_order: number
  created_at: string
}

export interface Order {
  id: string
  restaurant_id: string
  customer_id?: string
  customer_name: string
  customer_phone: string
  customer_email?: string
  order_type: 'delivery' | 'pickup' | 'dine-in'
  table_number?: string
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled'
  items: OrderItem[]
  subtotal: number
  tax: number
  delivery_fee: number
  discount: number
  total: number
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded'
  payment_method?: 'cash' | 'card' | 'upi' | 'online'
  special_instructions?: string
  delivery_address?: string
  created_at: string
  updated_at: string
}

export interface OrderItem {
  menu_item_id: string
  name: string
  quantity: number
  price: number
  modifiers?: OrderModifier[]
}

export interface OrderModifier {
  name: string
  value: string
  price: number
}

export interface Booking {
  id: string
  restaurant_id: string
  customer_name: string
  customer_phone: string
  customer_email?: string
  date: string
  time: string
  guests: number
  table_number?: string
  status: 'pending' | 'confirmed' | 'seated' | 'completed' | 'cancelled'
  special_requests?: string
  created_at: string
  updated_at: string
}

export interface Customer {
  id: string
  restaurant_id: string
  name: string
  phone: string
  email?: string
  total_orders: number
  total_spent: number
  loyalty_points: number
  created_at: string
  last_order_at?: string
}

export interface Analytics {
  total_revenue: number
  total_orders: number
  average_order_value: number
  top_items: {
    item_name: string
    quantity_sold: number
    revenue: number
  }[]
  revenue_by_day: {
    date: string
    revenue: number
    orders: number
  }[]
  peak_hours: {
    hour: number
    orders: number
  }[]
}
