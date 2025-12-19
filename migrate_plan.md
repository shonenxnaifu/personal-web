# Migration Plan: Next.js to TanStack Router

## Overview

This document outlines the plan to migrate the current Next.js application to use TanStack Router instead of Next.js's built-in routing system. The goal is to replace only the routing functionality while keeping other libraries and components intact. This document provides detailed configuration and implementation steps for the migration. The migration involves significant architectural changes affecting the build system, routing structure, data fetching, and component patterns.

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

#### 1.1 Dependency Management

##### Step 1: Install TanStack Router Dependencies
```bash
# Install core TanStack Router packages
npm install @tanstack/react-router

# If using TanStack Start (recommended for new projects)
npm install @tanstack/start

# Install development dependencies
npm install -D @tanstack/router-generator @tanstack/router-cli
```

##### Step 2: Remove Next.js Dependencies
```bash
npm uninstall next
```

##### Step 3: Update Package.json Scripts
Before:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

After:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "generate": "tsx --jsx preserve ./scripts/generate-routes.ts",
    "validate": "tsx --jsx preserve ./scripts/validate-routes.ts"
  }
}
```

#### 1.2 Vite Configuration

Create `vite.config.ts` in the project root:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  build: {
    outDir: './dist',
  },
  server: {
    port: 3000,
    host: true,
  },
})
```

Install required Vite plugins:
```bash
npm install -D @vitejs/plugin-react vite-tsconfig-paths
```

#### 1.3 TypeScript Configuration

Update `tsconfig.json` to support Vite aliases:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    /* Path aliases */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src", "vite.config.ts"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

#### 1.4 Contentlayer Configuration for TanStack

Update `contentlayer.config.ts` to work with Vite:

```typescript
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the blog post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the blog post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'Description for the blog post',
    },
    published: {
      type: 'boolean',
      description: 'Whether the post is published',
      default: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
      rehypePrism,
    ],
  },
})
```

### Phase 2: Core Route Migration (Days 3-5)
1. Migrate root layout to __root.tsx
2. Migrate homepage
3. Migrate blog listing page
4. Migrate blog post page with dynamic routes
5. Update navigation components (Header, Footer)

#### 2.1 Root Route Migration

##### Step 1: Create Root Route
Convert `src/app/layout.tsx` to `src/app/__root.tsx`:

Before (`layout.tsx`):
```tsx
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

After (`__root.tsx`):
```tsx
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  ),
})
```

#### 2.2 Home Route Migration

Convert `src/app/page.tsx` to `src/app/index.tsx`:

Before:
```tsx
import { getHomePageData } from '@/lib/data-fetching'

export default async function HomePage() {
  const data = await getHomePageData()

  return (
    <div>
      <h1>Welcome to My Site</h1>
      {/* Render home page content */}
    </div>
  )
}
```

After:
```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
  loader: async () => {
    // Data fetching logic here
    return {
      // Return data for the component
    }
  }
})

function HomePage() {
  const data = Route.useLoaderData()

  return (
    <div>
      <h1>Welcome to My Site</h1>
      {/* Render home page content using data */}
    </div>
  )
}
```

#### 2.3 Blog Routes Migration

##### Step 1: Blog Index Route
Convert `src/app/blog/page.tsx` to `src/app/blog.index.tsx`:

Before:
```tsx
import { allBlogs } from 'contentlayer/generated'

export default function BlogIndexPage({
  searchParams
}: {
  searchParams: { q?: string }
}) {
  const searchQuery = searchParams.q || ''
  const filteredBlogs = allBlogs
    .filter(blog =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div>
      {/* Blog listing content */}
    </div>
  )
}
```

After:
```tsx
import { createFileRoute } from '@tanstack/react-router'
import { allBlogs } from 'contentlayer/generated'

export const Route = createFileRoute('/blog')({
  component: BlogIndexPage,
  loader: async ({ search }) => {
    const searchQuery = search.q || ''
    const filteredBlogs = allBlogs
      .filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )

    return { filteredBlogs, searchQuery }
  }
})

function BlogIndexPage() {
  const { filteredBlogs, searchQuery } = Route.useLoaderData()

  return (
    <div>
      {/* Blog listing content using filteredBlogs */}
    </div>
  )
}
```

##### Step 2: Dynamic Blog Post Route
Convert `src/app/blog/[slug]/page.tsx` to `src/app/blog/$slug.tsx`:

Before:
```tsx
import { allBlogs } from 'contentlayer/generated'

export default function BlogPostPage({
  params
}: {
  params: { slug: string }
}) {
  const blog = allBlogs.find(b => b._raw.flattenedPath === params.slug)

  if (!blog) {
    return <div>Blog post not found</div>
  }

  return (
    <article>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.body.html }} />
    </article>
  )
}

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog._raw.flattenedPath,
  }))
}
```

After:
```tsx
import { createFileRoute } from '@tanstack/react-router'
import { allBlogs } from 'contentlayer/generated'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
  loader: async ({ params }) => {
    const blog = allBlogs.find(b => b._raw.flattenedPath === params.slug)

    if (!blog) {
      throw new Error('Blog post not found')
    }

    return { blog }
  },
  staticData: {
    // Define static paths for SSG
    staticPaths: allBlogs.map(blog => blog._raw.flattenedPath)
  }
})

function BlogPostPage() {
  const { blog } = Route.useLoaderData()

  return (
    <article>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.body.html }} />
    </article>
  )
}
```

### Phase 3: Data Handling and Features (Days 6-8)
1. Replace server component data fetching with loaders
2. Update contentlayer integration
3. Fix dynamic route parameter handling
4. Update metadata generation
5. Test blog search and filtering functionality

#### 3.1 Navigation Components Update

Update `Header.tsx`:

Before:
```tsx
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  return (
    <header>
      <nav>
        <Link href="/" className={pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link href="/blog" className={pathname.startsWith('/blog') ? 'active' : ''}>
          Blog
        </Link>
      </nav>
    </header>
  )
}
```

After:
```tsx
import { Link, useMatchRoute } from '@tanstack/react-router'

export function Header() {
  const matchRoute = useMatchRoute()

  return (
    <header>
      <nav>
        <Link
          to="/"
          activeProps={{ className: 'active' }}
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Home
        </Link>
        <Link
          to="/blog"
          activeProps={{ className: 'active' }}
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Blog
        </Link>
      </nav>
    </header>
  )
}
```

#### 3.2 Data Fetching Integration

Update contentlayer integration for client-side fetching:

Create `src/lib/content-client.ts`:
```typescript
// Client-side content fetching utility
import { allBlogs } from 'contentlayer/generated'

export const contentClient = {
  getBlogBySlug: (slug: string) => {
    return allBlogs.find(blog => blog._raw.flattenedPath === slug)
  },

  getAllBlogs: () => {
    return allBlogs
  },

  getPublishedBlogs: () => {
    return allBlogs.filter(blog => blog.published !== false)
  },

  searchBlogs: (query: string) => {
    if (!query) return contentClient.getPublishedBlogs()

    const lowerQuery = query.toLowerCase()
    return allBlogs.filter(blog =>
      blog.published !== false &&
      (blog.title.toLowerCase().includes(lowerQuery) ||
       blog.description?.toLowerCase().includes(lowerQuery))
    )
  }
}
```

#### 3.3 Metadata Generation

Create `src/lib/metadata.ts` for metadata handling:

```typescript
import { MetaDescriptor } from '@tanstack/react-router'

export const generateMetaTags = (title: string, description: string, path: string): MetaDescriptor[] => [
  { title: `${title} | My Website` },
  { name: 'description', content: description },
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },
  { property: 'og:url', content: `https://yoursite.com${path}` },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: title },
  { name: 'twitter:description', content: description },
]
```

Update routes to include metadata:

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { generateMetaTags } from '@/lib/metadata'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
  loader: async ({ params }) => {
    // ... loader logic
  },
  meta: ({ data }) => {
    if (!data?.blog) return []
    return generateMetaTags(
      data.blog.title,
      data.blog.description || '',
      `/blog/${data.blog._raw.flattenedPath}`
    )
  }
})
```

### Phase 4: Testing and Optimization (Days 9-10)
1. Thorough testing of all routes and navigation
2. SEO and accessibility testing
3. Performance optimization
4. Bug fixes and refinements

#### 4.1 Route Preloading Strategy

Configure route preloading in `src/main.tsx`:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createRouter,
  RouterProvider,
} from '@tanstack/react-router'
import { routeTree } from '@/app/routeTree.gen'

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent', // Preload on hover intent
  // Track manifest load progress
  transformer: {}, // Add custom transformer if needed
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
```

#### 4.2 Performance Optimizations

Create `src/components/LazyComponent.tsx`:

```tsx
import { Suspense, lazy } from 'react'

interface LazyComponentProps {
  componentPath: string
  fallback?: React.ReactNode
}

export const LazyComponent = ({
  componentPath,
  fallback = <div>Loading...</div>
}: LazyComponentProps) => {
  const Lazy = lazy(() => import(componentPath))

  return (
    <Suspense fallback={fallback}>
      <Lazy />
    </Suspense>
  )
}
```

#### 4.3 Error Boundaries

Create `src/components/ErrorBoundary.tsx`:

```tsx
import { Component, PropsWithChildren } from 'react'

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<PropsWithChildren, State> {
  constructor(props: PropsWithChildren) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => window.location.reload()}>
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
```

Add error boundary to root route:

```tsx
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export const Route = createRootRoute({
  component: () => (
    <ErrorBoundary>
      <div className="app">
        <Outlet />
      </div>
    </ErrorBoundary>
  ),
})
```

#### 4.4 Development Configuration

Create `vite-env.d.ts`:

```ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_TITLE: string
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

Add contentlayer plugin to Vite config:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { contentLayerPlugin } from 'vite-plugin-content-layer'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    contentLayerPlugin(),
  ],
  build: {
    outDir: './dist',
  },
  server: {
    port: 3000,
    host: true,
  },
})
```

Install content layer plugin:
```bash
npm install -D vite-plugin-content-layer
```

## Testing Checklist

### Before Each Phase:
- [ ] Verify basic build functionality
- [ ] Test navigation between routes
- [ ] Check data loading and display
- [ ] Validate metadata and SEO elements

### Phase-Specific Tests:

**Phase 1:**
- [ ] Vite build completes successfully
- [ ] Basic routing works (home page loads)
- [ ] Development server runs properly

**Phase 2:**
- [ ] All routes accessible
- [ ] Route parameters work correctly
- [ ] Dynamic route loading works
- [ ] Layouts render properly

**Phase 3:**
- [ ] Navigation links work
- [ ] Active link highlighting
- [ ] Search functionality
- [ ] Data fetching works as expected

**Phase 4:**
- [ ] Error boundaries catch errors
- [ ] Performance optimizations work
- [ ] Metadata generates correctly
- [ ] Production build works

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

## Rollback Plan

If any phase causes critical issues:

1. **Immediate Action**: Switch back to the latest working commit
2. **Partial Rollback**: If only specific routes fail, temporarily redirect to Next.js versions
3. **Feature Flag Approach**: Use environment variables to conditionally load old/new routing
4. **Gradual Cutover**: Run both systems in parallel during transition period

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
- Build verification: Test development build with `npm run dev` and production build with `npm run build && npm run preview`
- Deployment configuration: Update your deployment pipeline to use Vite build commands and ensure compatibility with your hosting platform