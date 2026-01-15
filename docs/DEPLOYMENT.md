# 🚀 Deployment Guide

This guide covers deploying RestaurantOS to production using Vercel.

## Prerequisites

- ✅ GitHub account
- ✅ Vercel account (free tier is fine)
- ✅ Your code pushed to GitHub
- ✅ Supabase project set up

## Option 1: Deploy with Vercel (Recommended)

### Step 1: Push to GitHub

\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: \`apps/web\`
   - **Build Command**: \`cd ../.. && pnpm build\`
   - **Output Directory**: \`.next\`

### Step 3: Add Environment Variables

In Vercel project settings, add these environment variables:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NEXT_PUBLIC_DOMAIN=your-domain.vercel.app
\`\`\`

### Step 4: Deploy

1. Click "Deploy"
2. Wait for deployment to complete (2-3 minutes)
3. Your app will be live at \`https://your-project.vercel.app\`

### Step 5: Configure Custom Domain (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your custom domain (e.g., \`restaurantos.com\`)
3. Follow DNS configuration instructions
4. Wait for DNS propagation (can take up to 48 hours)

## Option 2: Deploy with Docker

### Create Dockerfile

\`\`\`dockerfile
FROM node:18-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/
RUN pnpm install --frozen-lockfile

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/web/public ./apps/web/public
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "apps/web/server.js"]
\`\`\`

### Build and Run

\`\`\`bash
docker build -t restaurant-os .
docker run -p 3000:3000 restaurant-os
\`\`\`

## Subdomain Configuration

### For Vercel

Vercel automatically supports wildcard subdomains. To enable:

1. Add wildcard domain: \`*.your-domain.com\`
2. Configure DNS:
   \`\`\`
   Type: CNAME
   Name: *
   Value: cname.vercel-dns.com
   \`\`\`

### For Custom Server

Update \`next.config.js\`:

\`\`\`javascript
async rewrites() {
  return [
    {
      source: '/:path*',
      has: [
        {
          type: 'host',
          value: '(?<subdomain>.*)\\.yourdomain\\.com',
        },
      ],
      destination: '/customer/:subdomain/:path*',
    },
  ]
}
\`\`\`

## Environment-Specific Configuration

### Production

\`\`\`env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_DOMAIN=your-domain.com
\`\`\`

### Staging

\`\`\`env
NODE_ENV=staging
NEXT_PUBLIC_APP_URL=https://staging.your-domain.com
NEXT_PUBLIC_DOMAIN=staging.your-domain.com
\`\`\`

## Post-Deployment Checklist

- [ ] Test authentication (signup, login, logout)
- [ ] Test menu management
- [ ] Test order placement
- [ ] Test booking system
- [ ] Test payment integration
- [ ] Test subdomain routing
- [ ] Check analytics tracking
- [ ] Verify email notifications
- [ ] Test on mobile devices
- [ ] Check page load speeds
- [ ] Set up monitoring (Vercel Analytics)
- [ ] Configure error tracking (Sentry)

## Monitoring and Analytics

### Vercel Analytics

1. Go to your project in Vercel
2. Click "Analytics" tab
3. Enable Web Analytics
4. Add to your app:

\`\`\`tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
\`\`\`

### Error Tracking with Sentry

\`\`\`bash
pnpm add @sentry/nextjs
\`\`\`

Configure in \`sentry.client.config.js\`:

\`\`\`javascript
import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
})
\`\`\`

## Scaling Considerations

### Database
- Monitor Supabase usage
- Upgrade to Pro plan when needed
- Set up database backups
- Configure connection pooling

### CDN
- Use Vercel's built-in CDN
- Optimize images with Next.js Image
- Enable caching headers

### Performance
- Enable Next.js caching
- Use ISR for static pages
- Implement lazy loading
- Optimize bundle size

## Backup Strategy

### Database Backups
Supabase automatically backs up your database daily. For additional safety:

1. Set up manual backups:
   \`\`\`bash
   pg_dump -h db.xxxxx.supabase.co -U postgres -d postgres > backup.sql
   \`\`\`

2. Store backups in S3 or similar

### Code Backups
- Keep code in GitHub
- Tag releases
- Maintain changelog

## Rollback Procedure

If something goes wrong:

1. In Vercel, go to "Deployments"
2. Find the last working deployment
3. Click "..." → "Promote to Production"
4. Deployment will be rolled back instantly

## Support

For deployment issues:
- 📖 [Vercel Documentation](https://vercel.com/docs)
- 📖 [Next.js Deployment](https://nextjs.org/docs/deployment)
- 🐛 [Open an issue](https://github.com/abhinavtapaskar-afk/restaurant-os/issues)
