# Migration Plan: npm to Bun

## Overview

This document outlines the plan to migrate the current npm-based build system to Bun. This change will replace the package manager while maintaining all existing dependencies and project functionality. Bun is designed to be a faster, more efficient alternative to npm that maintains compatibility with existing Node.js projects.

## Current npm Setup Analysis

- **Package Manager**: npm (as evidenced by `package-lock.json`)
- **Scripts in package.json**:
  - `dev`: `next dev`
  - `build`: `next build`
  - `start`: `next start`
  - `lint`: `eslint .`
  - `prepare`: `husky install`
- **Dependencies**: Standard Next.js project dependencies with contentlayer, React, TypeScript, Tailwind CSS, and various dev dependencies
- **Husky Integration**: Uses npm scripts in `.husky/pre-commit` hook (`npm run lint`)

## Migration Complexity Level: LOW

This migration is relatively straightforward because:
- Bun maintains compatibility with existing npm workflows and package.json
- No code changes are required in the project
- Bun can read npm's configuration and automatically convert lockfiles
- The project is a standard Next.js application without complex npm-specific configurations

## What Needs to be Changed

### 1. Package Manager Installation

**Changes Required:**
- Install Bun on the development and production systems
- No changes needed to package.json dependencies

### 2. Development Workflow Commands

**Changes Required:**
- Replace `npm install` with `bun install`
- Replace `npm run <script>` with `bun <script>`
- Replace `npm exec <bin>` with `bun <bin>`
- Replace `npx <package>` with `bunx <package>`

**Command Mapping:**
- `npm install` → `bun install` or `bun i`
- `npm run dev` → `bun dev`
- `npm run build` → `bun build`
- `npm run start` → `bun start`
- `npm run lint` → `bun lint`

### 3. Husky Git Hook

**Changes Required:**
- Update `.husky/pre-commit` to use Bun instead of npm
- Change `npm run lint` to `bun lint`

### 4. Lockfile Migration

**Changes Required:**
- Bun will automatically convert `package-lock.json` to `bun.lockb` (Bun's binary lockfile)
- The original `package-lock.json` can be removed after successful migration
- Add `bun.lockb` to version control

### 5. Build and Deployment Configuration

**Changes Required:**
- Update Dockerfile if it relies on npm commands
- Update any CI/CD pipelines that use npm commands
- Update any documentation referencing npm commands

## Step-by-Step Migration Process

### Phase 1: Environment Setup (Day 1)
1. Install Bun on development machine(s)
2. Verify Bun installation: `bun --version`
3. Test Bun compatibility with current project: `bun install`
4. Run development server: `bun dev`
5. Run build: `bun build`
6. Run linting: `bun lint`

### Phase 2: Script and Hook Updates (Day 1)
1. Update `.husky/pre-commit` to use Bun:
   ```
   #!/usr/bin/env sh
   . "$(dirname -- "$0")/_/husky.sh"
   
   bun lint
   ```
2. Verify Husky hooks work with Bun

### Phase 3: Lockfile Migration (Day 1)
1. Run `bun install` to generate `bun.lockb`
2. Remove `package-lock.json` from version control
3. Add `bun.lockb` to version control
4. Test clean installation in a new directory

### Phase 4: Deployment Configuration (Day 2)
1. Update Dockerfile to use Bun commands instead of npm
2. Update any CI/CD pipeline scripts
3. Test deployment with Bun
4. Update documentation to reflect Bun usage

## Command Comparison

| npm | Bun |
|-----|-----|
| `npm install` | `bun install` or `bun i` |
| `npm install <package>` | `bun add <package>` |
| `npm install --save-dev <package>` | `bun add --dev <package>` or `bun add -d <package>` |
| `npm uninstall <package>` | `bun remove <package>` or `bun rm <package>` |
| `npm run <script>` | `bun <script>` |
| `npm exec <command>` | `bun <command>` |
| `npx <package>` | `bunx <package>` |
| `npm update <package>` | `bun update <package>` |
| `npm outdated` | `bun outdated` |

## Advantages of Bun

1. **Speed**: Bun is significantly faster than npm for installing packages and running scripts
2. **Efficiency**: Uses hardlinks to conserve disk space and installation times
3. **Compatibility**: Maintains full compatibility with existing npm workflows
4. **Automatic conversion**: Automatically converts npm lockfiles to Bun format
5. **All-in-one tool**: Bun includes a package manager, runtime, bundler, and test runner
6. **Better performance**: Simultaneous operations instead of sequential processing

## Potential Issues and Solutions

### Issue 1: Binary Dependencies
- Some packages with pre-compiled binaries may need reinstallation
- **Solution**: Run `bun install` to ensure all binaries are properly downloaded

### Issue 2: Husky Compatibility
- Husky may need to work with Bun instead of npm
- **Solution**: Tested during migration; update hook commands as needed

### Issue 3: CI/CD Pipeline
- Build servers may not have Bun installed
- **Solution**: Install Bun in CI environment or use Bun Docker images

### Issue 4: Team Adoption
- Team members need to install Bun
- **Solution**: Provide clear documentation and installation instructions

## Rollback Plan

If issues arise during or after the migration:
1. Restore `package-lock.json` from version control backup
2. Reinstall using npm: `npm install`
3. Revert `.husky/pre-commit` to use `npm run lint`
4. Test functionality with original npm setup

## Post-Migration Verification

- [ ] `bun install` completes successfully
- [ ] `bun dev` starts development server
- [ ] `bun build` completes successfully
- [ ] `bun start` runs production build
- [ ] `bun lint` executes without errors
- [ ] Git hooks (Husky) work properly
- [ ] All dependencies are installed correctly
- [ ] Application functions as expected
- [ ] Deployment process works with Bun

## Timeline

**Estimated Duration:** 2-3 days
- **Phase 1:** 1 day (Environment setup and basic testing)
- **Phase 2:** Half day (Script and hook updates)
- **Phase 3:** Half day (Lockfile migration)
- **Phase 4:** 1 day (Deployment configuration and documentation)

## Success Criteria

- All npm commands successfully replaced with Bun equivalents
- Development workflow remains unchanged for developers
- Build process completes faster or at least as fast as before
- Deployment process continues to work without issues
- Git hooks continue to function properly
- No breaking changes to application functionality
- Improved performance in dependency installation and script execution