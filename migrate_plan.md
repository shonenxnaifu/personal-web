# Migration Plan: Next.js to TanStack Router

## Overview

This document outlines the plan to migrate the current Next.js application to use TanStack Router instead of Next.js's built-in routing system. The goal is to replace only the routing functionality while keeping other libraries and components intact.

## Current Stack Analysis

- **Framework**: Next.js 14 with App Router
- **Routing**: File-based routing using `/src/app` directory structure
- **Current Routes**:
  - Homepage: `/` (src/app/page.tsx)
  - Blog: `/blog` (src/app/blog/page.tsx)
  - Blog Posts: `/blog/[slug]` (src/app/blog/[slug]/page.tsx)
- **Navigation**: Using Next.js `Link` and `usePathname` for navigation
- **Data Fetching**: Server components with contentlayer for blog content

## Migration Complexity Level: HIGH

This migration involves a significant architectural change that affects:
- Project structure and file naming conventions
- Routing system and navigation patterns
- Data fetching methods
- Build system (from Next.js to Vite)

## What Needs to be Replaced/Adjusted

### 1. Project Dependencies and Build System

**Changes Required:**
- Remove Next.js dependencies (`next`)
- Install TanStack Router dependencies (`@tanstack/react-router`, `@tanstack/start`, etc.)
- Replace Next.js build scripts with Vite-based scripts
- Update configuration files (remove `next.config.mjs`, add `vite.config.ts`)

**Files Affected:**
- `package.json` - update dependencies and scripts
- `next.config.mjs` - remove
- New `vite.config.ts` - add

### 2. Route Structure and File Naming

**Changes Required:**
- Convert Next.js App Router structure to TanStack Router conventions
- Change `layout.tsx` to `__root.tsx`
- Change `page.tsx` to `index.tsx`
- Change dynamic routes from `[slug]` format to `$slug` format

**Files Affected:**
- `src/app/layout.tsx` → `src/app/__root.tsx`
- `src/app/page.tsx` → `src/app/index.tsx`
- `src/app/blog/page.tsx` → `src/app/blog/index.tsx`
- `src/app/blog/[slug]/page.tsx` → `src/app/blog/$slug.tsx`

### 3. Component Structure

**Changes Required:**
- Replace Next.js component export with TanStack Router Route definitions
- Use `createFileRoute` and `createRootRoute` for route configuration
- Update component structure to use Outlet for nested content

**Code Changes:**
- Replace `export default function ComponentName() {}` with TanStack Route definitions
- Add route configurations using `createFileRoute`/`createRootRoute`

### 4. Navigation and Linking

**Changes Required:**
- Replace `next/link` imports with `@tanstack/react-router` imports
- Change `Link href="/path"` to `Link to="/path"`
- Update navigation components (Header, Footer, etc.)

**Code Changes:**
```tsx
// Before
import Link from "next/link"
<Link href="/blog">Blog</Link>

// After
import { Link } from "@tanstack/react-router"
<Link to="/blog">Blog</Link>
```

### 5. Path Hooks and Navigation

**Changes Required:**
- Replace `usePathname` with TanStack Router hooks
- Use `Route.useParams()` for dynamic route parameters
- Update navigation state management

**Code Changes:**
```tsx
// Before
import { usePathname } from "next/navigation"
const pathName = usePathname()

// After
import { useLocation } from "@tanstack/react-router"
const { pathname } = useLocation()
```

### 6. Data Fetching

**Changes Required:**
- Replace server component data fetching with TanStack Router loaders
- Use `loader` property in route definitions
- Adapt contentlayer integration to work with TanStack loaders

**Code Changes:**
```tsx
// Before
export default async function BlogList({ searchParams }) {
  const blogs = allBlogs.filter(/* filter logic */)
  return <div>{/* render blogs */}</div>
}

// After
export const Route = createFileRoute('/blog')({
  component: BlogList,
  loader: async ({ context }) => {
    // fetch data logic here
    return { blogs: /* filter logic */ }
  }
})

function BlogList() {
  const { blogs } = Route.useLoaderData()
  return <div>{/* render blogs */}</div>
}
```

### 7. Static Path Generation

**Changes Required:**
- Replace `generateStaticParams` with TanStack Router's static data generation
- Adjust blog post slug generation for dynamic routes

### 8. Metadata Generation

**Changes Required:**
- Replace `generateMetadata` with TanStack Router's meta functionality
- Update SEO metadata handling

### 9. Image Component

**Changes Required:**
- Consider replacing `next/image` with alternative image optimization
- Options: `@unpic/react`, standard `img` tags, or other image optimization libraries

### 10. Server Functions (if any)

**Changes Required:**
- Replace `'use server'` functions with TanStack's server functions
- If using server actions, adapt to TanStack's server function approach

## Step-by-Step Migration Process

### Phase 1: Setup and Configuration (Days 1-2)
1. Install TanStack Router dependencies
2. Create Vite configuration file
3. Update package.json scripts
4. Set up basic routing structure
5. Test basic setup with a simple route

### Phase 2: Core Route Migration (Days 3-5)
1. Migrate root layout to __root.tsx
2. Migrate homepage
3. Migrate blog listing page
4. Migrate blog post page with dynamic routes
5. Update navigation components (Header, Footer)

### Phase 3: Data Handling and Features (Days 6-8)
1. Replace server component data fetching with loaders
2. Update contentlayer integration
3. Fix dynamic route parameter handling
4. Update metadata generation
5. Test blog search and filtering functionality

### Phase 4: Testing and Optimization (Days 9-10)
1. Thorough testing of all routes and navigation
2. SEO and accessibility testing
3. Performance optimization
4. Bug fixes and refinements

## Risks and Mitigation

### High Risk Areas:
1. **Contentlayer Integration** - May need special handling for static site generation
2. **Blog Post Rendering** - MDX components and content rendering
3. **Search Functionality** - URL parameters and filtering
4. **SEO Metadata** - OpenGraph and Twitter meta tags

### Mitigation Strategies:
1. Perform incremental migration with parallel routing during transition
2. Maintain backward compatibility where possible during migration
3. Thorough testing at each phase
4. Have a rollback plan with version control

## Timeline

**Estimated Duration:** 10-14 days
- **Phase 1:** 2 days
- **Phase 2:** 3 days
- **Phase 3:** 3 days
- **Phase 4:** 2-4 days (including testing and bug fixes)

## Success Criteria

- All existing routes work as expected
- Navigation works properly across the site
- Blog content renders correctly
- SEO metadata is preserved
- Search and filtering functionality works
- No broken links or navigation issues
- All existing features remain functional
- Performance is maintained or improved

## Post-Migration Tasks

- Update deployment configuration
- Verify build process works correctly
- Test in production environment
- Document any new processes or conventions
- Update any documentation or README files