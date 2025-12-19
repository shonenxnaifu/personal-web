# Detailed Migration Guide: Next.js to TanStack Router

## Overview

This document provides detailed configuration and implementation steps for migrating from Next.js to TanStack Router. The migration involves significant architectural changes affecting the build system, routing structure, data fetching, and component patterns.

## Phase 1: Setup and Configuration (Days 1-2)

### 1.1 Dependency Management

#### Step 1: Install TanStack Router Dependencies
```bash
# Install core TanStack Router packages
npm install @tanstack/react-router

# If using TanStack Start (recommended for new projects)
npm install @tanstack/start

# Install development dependencies
npm install -D @tanstack/router-generator @tanstack/router-cli
```

#### Step 2: Remove Next.js Dependencies
```bash
npm uninstall next
```

#### Step 3: Update Package.json Scripts
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

### 1.2 Vite Configuration

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

### 1.3 TypeScript Configuration

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

### 1.4 Contentlayer Configuration for TanStack

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

## Phase 2: Route Structure and File Migration (Days 3-5)

### 2.1 Root Route Migration

#### Step 1: Create Root Route
Convert `src/app/layout.tsx` to `src/routes/__root.tsx`:

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

### 2.2 Home Route Migration

Convert `src/app/page.tsx` to `src/routes/index.tsx`:

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

### 2.3 Blog Routes Migration

#### Step 1: Blog Index Route
Convert `src/app/blog/page.tsx` to `src/routes/blog.index.tsx`:

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

#### Step 2: Dynamic Blog Post Route
Convert `src/app/blog/[slug]/page.tsx` to `src/routes/blog.$slug.tsx`:

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

## Phase 3: Navigation and Component Updates (Days 6-8)

### 3.1 Navigation Components Update

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

### 3.2 Data Fetching Integration

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

### 3.3 Metadata Generation

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

## Phase 4: Advanced Configuration and Optimizations (Day 9-10)

### 4.1 Route Preloading Strategy

Configure route preloading in `src/main.tsx`:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createRouter,
  RouterProvider,
} from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

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

### 4.2 Performance Optimizations

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

### 4.3 Error Boundaries

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

### 4.4 Development Configuration

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

## Rollback Plan

If any phase causes critical issues:

1. **Immediate Action**: Switch back to the latest working commit
2. **Partial Rollback**: If only specific routes fail, temporarily redirect to Next.js versions
3. **Feature Flag Approach**: Use environment variables to conditionally load old/new routing
4. **Gradual Cutover**: Run both systems in parallel during transition period

## Post-Migration Validation

### Build Verification
```bash
# Test development build
npm run dev

# Test production build
npm run build
npm run preview
```

### Deployment Configuration
Update your deployment pipeline to use Vite build commands and ensure compatibility with your hosting platform.