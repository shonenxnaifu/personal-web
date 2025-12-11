# Build Process Investigation

## Issue
Website successfully deployed and run using bun runtime in the server but when accessed the website some js file have latency issues, this does not happen in nodejs environment

## Findings

After reviewing the Dockerfiles and configuration files, I found several key differences that likely contribute to the JavaScript latency issues:

### 1. Dockerfile Differences
- **Dockerfile.dev (Node.js)**: Uses `node:current-alpine` base image with standard Node.js runtime
- **Dockerfile.dev.bun**: Uses `oven/bun:canary-slim` base image with Bun runtime

### 2. Runtime Configuration Differences
- **Node.js version**: The Node.js Dockerfile uses a stable alpine-based image
- **Bun version**: The Bun Dockerfile uses a canary (development) version, which may have stability issues

### 3. Startup Command Differences
- **Node.js**: Uses explicit `CMD ["node", "server.js"]` command
- **Bun**: Uses only `CMD ["server.js"]` without specifying the runtime, which could lead to different execution behavior

### 4. Environment Variable Handling
- **Node.js**: Does not explicitly set NODE_ENV in build stages
- **Bun**: Sets `ENV NODE_ENV=development` in both builder and runner stages, which could affect the build optimization

### 5. Production vs Development Build
The issue appears to stem from the fact that:
- In the Bun Dockerfile, NODE_ENV is set to "development" even in the final runner stage
- This means the Next.js application is running in development mode with HMR, debugging tools, and unoptimized bundles
- Node.js Dockerfile doesn't set NODE_ENV in the final stage, allowing it to default to production mode

## API-Related Issues Identified

Additional investigation revealed specific API-related and runtime compatibility issues:

### 1. Missing Explicit Runtime Command
- The Bun Dockerfile uses `CMD ["server.js"]` which may not execute with Bun runtime in all environments
- Should use `CMD ["bun", "server.js"]` for consistency

### 2. Canary Version Instability
- Using `oven/bun:canary-slim` introduces potential performance regressions
- Canary versions are development builds that may have bugs affecting performance

### 3. Contentlayer Compatibility
- This project uses contentlayer2 for blog content generation
- Bun's compatibility with contentlayer's Node.js-specific APIs may be imperfect
- Content generation and hydration may behave differently in Bun runtime

### 4. Standalone Output Compatibility
- Next.js standalone output may have subtle compatibility differences between Node.js and Bun runtimes
- Some Node.js-specific APIs might not translate perfectly to Bun

## Root Cause
The primary cause of JS file latency issues in the Bun deployment is that the application is running in development mode instead of production mode. This results in:
- Unoptimized JavaScript bundles
- Development-time checks and warnings
- Hot Module Replacement overhead
- Larger bundle sizes due to development-specific code not being stripped out

Secondary issues include:
- Inconsistent runtime execution due to missing explicit Bun command
- Potential compatibility issues with contentlayer2 in Bun environment
- Using unstable canary version of Bun which may have performance regressions

## Solution
Update the `Dockerfile.dev.bun` to ensure proper production environment and runtime consistency:

```dockerfile
FROM oven/bun:latest AS dependency

WORKDIR /app
COPY package.json .
COPY bun.lock .
RUN bun install --frozen-lockfile

FROM oven/bun:latest AS builder
WORKDIR /app
COPY . .
COPY --from=dependency /app/node_modules ./node_modules
ENV NODE_ENV=production
RUN bun run build

FROM oven/bun:latest AS runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
ENV NODE_ENV=production
CMD ["bun", "server.js"]
```

The key changes are:
1. Use stable `bun:latest` instead of `canary` version
2. Set `NODE_ENV=production` in the builder stage
3. Set `NODE_ENV=production` in the runner stage
4. Use explicit `CMD ["bun", "server.js"]` to ensure Bun runtime execution
5. This ensures Next.js builds and runs with production optimizations

## Additional Considerations
- The canary version of Bun may have performance bugs compared to stable releases
- Contentlayer2 may have subtle compatibility differences in Bun runtime vs Node.js
- Verify that Bun's compatibility layer properly handles all Next.js features, especially those used by contentlayer
- Consider testing with Bun's stable release rather than canary builds

## TODOs Completed
- ✅ Review Dockerfile.dev and Dockerfile.dev.bun
- ✅ Check for any API endpoints and how they behave differently in Bun vs Node
- ✅ Investigate potential runtime compatibility issues between Bun and Next.js API routes
- ✅ Look for any missing dependencies or configuration that might cause API errors
- ✅ Document root cause and solution for JS file latency issues
