# API Documentation

RestaurantOS provides a RESTful API for managing restaurants, menus, orders, and bookings.

## Authentication

All API requests require authentication using Supabase JWT tokens.

### Get Auth Token

\`\`\`typescript
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password'
})

const token = data.session?.access_token
\`\`\`

### Use Token in Requests

\`\`\`typescript
fetch('/api/menu', {
  headers: {
    'Authorization': \`Bearer \${token}\`
  }
})
\`\`\`

## Endpoints

### Restaurants

#### GET /api/restaurants
Get all restaurants for the authenticated user.

**Response:**
\`\`\`json
{
  "restaurants": [
    {
      "id": "uuid",
      "name": "The Coffee House",
      "slug": "the-coffee-house",
      "subdomain": "coffee-house",
      "logo_url": "https://...",
      "primary_color": "#FF6B35",
      "subscription_tier": "pro"
    }
  ]
}
\`\`\`

#### POST /api/restaurants
Create a new restaurant.

**Request:**
\`\`\`json
{
  "name": "The Coffee House",
  "subdomain": "coffee-house",
  "description": "Best coffee in town",
  "address": "123 Main St",
  "phone": "+91 9876543210",
  "email": "info@coffeehouse.com"
}
\`\`\`

**Response:**
\`\`\`json
{
  "restaurant": {
    "id": "uuid",
    "name": "The Coffee House",
    "slug": "the-coffee-house",
    "subdomain": "coffee-house"
  }
}
\`\`\`

### Menu Items

#### GET /api/menu
Get all menu items for a restaurant.

**Query Parameters:**
- \`restaurant_id\` (required): Restaurant UUID

**Response:**
\`\`\`json
{
  "items": [
    {
      "id": "uuid",
      "name": "Cappuccino",
      "description": "Classic Italian coffee",
      "price": 150,
      "category": "Beverages",
      "is_veg": true,
      "is_available": true,
      "image_url": "https://..."
    }
  ]
}
\`\`\`

#### POST /api/menu
Create a new menu item.

**Request:**
\`\`\`json
{
  "restaurant_id": "uuid",
  "name": "Cappuccino",
  "description": "Classic Italian coffee",
  "price": 150,
  "category": "Beverages",
  "is_veg": true,
  "image_url": "https://..."
}
\`\`\`

#### PUT /api/menu/:id
Update a menu item.

**Request:**
\`\`\`json
{
  "name": "Cappuccino",
  "price": 180,
  "is_available": false
}
\`\`\`

#### DELETE /api/menu/:id
Delete a menu item.

### Orders

#### GET /api/orders
Get all orders for a restaurant.

**Query Parameters:**
- \`restaurant_id\` (required): Restaurant UUID
- \`status\` (optional): Filter by status
- \`limit\` (optional): Number of results (default: 50)
- \`offset\` (optional): Pagination offset

**Response:**
\`\`\`json
{
  "orders": [
    {
      "id": "uuid",
      "customer_name": "John Doe",
      "customer_phone": "+91 9876543210",
      "order_type": "delivery",
      "status": "confirmed",
      "items": [
        {
          "menu_item_id": "uuid",
          "name": "Cappuccino",
          "quantity": 2,
          "price": 150
        }
      ],
      "total": 300,
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "total": 100,
  "limit": 50,
  "offset": 0
}
\`\`\`

#### POST /api/orders
Create a new order.

**Request:**
\`\`\`json
{
  "restaurant_id": "uuid",
  "customer_name": "John Doe",
  "customer_phone": "+91 9876543210",
  "customer_email": "john@example.com",
  "order_type": "delivery",
  "items": [
    {
      "menu_item_id": "uuid",
      "quantity": 2,
      "price": 150
    }
  ],
  "delivery_address": "123 Main St",
  "special_instructions": "Extra hot"
}
\`\`\`

#### PUT /api/orders/:id
Update order status.

**Request:**
\`\`\`json
{
  "status": "preparing"
}
\`\`\`

### Bookings

#### GET /api/bookings
Get all bookings for a restaurant.

**Query Parameters:**
- \`restaurant_id\` (required): Restaurant UUID
- \`date\` (optional): Filter by date (YYYY-MM-DD)
- \`status\` (optional): Filter by status

**Response:**
\`\`\`json
{
  "bookings": [
    {
      "id": "uuid",
      "customer_name": "Jane Smith",
      "customer_phone": "+91 9876543210",
      "date": "2024-01-20",
      "time": "19:00",
      "guests": 4,
      "status": "confirmed",
      "table_number": "T5"
    }
  ]
}
\`\`\`

#### POST /api/bookings
Create a new booking.

**Request:**
\`\`\`json
{
  "restaurant_id": "uuid",
  "customer_name": "Jane Smith",
  "customer_phone": "+91 9876543210",
  "customer_email": "jane@example.com",
  "date": "2024-01-20",
  "time": "19:00",
  "guests": 4,
  "special_requests": "Window seat preferred"
}
\`\`\`

#### PUT /api/bookings/:id
Update booking status.

**Request:**
\`\`\`json
{
  "status": "confirmed",
  "table_number": "T5"
}
\`\`\`

### Analytics

#### GET /api/analytics
Get analytics data for a restaurant.

**Query Parameters:**
- \`restaurant_id\` (required): Restaurant UUID
- \`start_date\` (optional): Start date (YYYY-MM-DD)
- \`end_date\` (optional): End date (YYYY-MM-DD)

**Response:**
\`\`\`json
{
  "total_revenue": 125000,
  "total_orders": 450,
  "average_order_value": 278,
  "top_items": [
    {
      "item_name": "Cappuccino",
      "quantity_sold": 120,
      "revenue": 18000
    }
  ],
  "revenue_by_day": [
    {
      "date": "2024-01-15",
      "revenue": 5000,
      "orders": 18
    }
  ],
  "peak_hours": [
    {
      "hour": 12,
      "orders": 45
    }
  ]
}
\`\`\`

## Error Responses

All endpoints return standard HTTP status codes:

- \`200\` - Success
- \`201\` - Created
- \`400\` - Bad Request
- \`401\` - Unauthorized
- \`403\` - Forbidden
- \`404\` - Not Found
- \`500\` - Internal Server Error

**Error Response Format:**
\`\`\`json
{
  "error": {
    "message": "Error description",
    "code": "ERROR_CODE"
  }
}
\`\`\`

## Rate Limiting

API requests are rate-limited based on subscription tier:

- **Starter**: 100 requests/minute
- **Pro**: 500 requests/minute
- **Premium**: 2000 requests/minute

## Webhooks

RestaurantOS can send webhooks for important events:

- \`order.created\`
- \`order.updated\`
- \`booking.created\`
- \`booking.confirmed\`

Configure webhooks in your restaurant settings.

## SDKs

Official SDKs coming soon for:
- JavaScript/TypeScript
- Python
- PHP

## Support

For API support:
- 📧 Email: abhinavtapaskar@gmail.com
- 🐛 [Report issues](https://github.com/abhinavtapaskar-afk/restaurant-os/issues)
