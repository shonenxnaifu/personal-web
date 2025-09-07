# npm install Issue Solution

## Problem
When running `npm install` on Linux (Ubuntu), the following error occurs:

```
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error 
npm error While resolving: next-contentlayer@0.3.4
npm error Found: next@14.1.4
npm error node_modules/next
npm error   next@\"14.1.4\" from the root project
npm error 
npm error Could not resolve dependency:
npm error peer next@\"^12 || ^13\" from next-contentlayer@0.3.4
npm error node_modules/next-contentlayer
npm error   next-contentlayer@\"^0.3.4\" from the root project
npm error 
npm error Conflicting peer dependency: next@13.5.11
npm error node_modules/next
npm error   peer next@\"^12 || ^13\" from next-contentlayer@0.3.4
npm error   node_modules/next-contentlayer
npm error     next-contentlayer@\"^0.3.4\" from the root project
```

## Root Cause
The issue is caused by a peer dependency conflict between:
- `next-contentlayer@0.3.4` which requires `next@^12 || ^13`
- Your project using `next@14.1.4`

This is a dependency versioning conflict where `next-contentlayer` hasn't been updated to support Next.js 14.

## Solution
Use the `--legacy-peer-deps` flag when installing dependencies:

```bash
npm install --legacy-peer-deps
```

This flag tells npm to ignore peer dependency conflicts, which allows the installation to proceed despite the version mismatch.

## Why It Works on macOS and Your Server
Different environments might have:
1. Different npm versions with varying strictness in dependency resolution
2. Different default npm configurations
3. Cached node_modules that bypass the dependency resolution issue
4. Different Node.js versions that handle dependencies differently

## Permanent Fix
To avoid needing the `--legacy-peer-deps` flag every time, you can configure npm to always use legacy peer dependencies by adding this to your `.npmrc` file:

```
legacy-peer-deps=true
```

Alternatively, consider upgrading to a newer version of `next-contentlayer` that supports Next.js 14, or look for alternative content management solutions that are actively maintained and compatible with the latest Next.js versions.