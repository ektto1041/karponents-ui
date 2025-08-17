# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Karponents UI is a React-based design system built as a monorepo using:
- **pnpm** for package management with workspace configuration  
- **Turborepo** for build orchestration and caching
- **TypeScript** for type safety across all packages
- **Rollup** with Babel for library bundling
- **React 19** as the target framework

## Monorepo Structure

```
karponents-ui/
└── packages/          # Reusable UI component packages
    └── karpotic/      # Main UI library package (@karponents-ui/karpotic)
```

Note: The `apps/playground/` directory referenced in git history is not currently present in the active codebase.

## Essential Commands

### Development
- `pnpm build` - Build all packages using Turbo (only available command at root level)
- `pnpm --filter=@karponents-ui/karpotic build` - Build specific package using Rollup
- `pnpm --filter=@karponents-ui/karpotic dev` - Watch mode for package development
- `pnpm --filter=@karponents-ui/karpotic type-check` - TypeScript type checking

### Package Management
- `pnpm install` - Install dependencies across entire workspace
- `pnpm add <package>` - Add dependency to root
- `pnpm add <package> --filter=@karponents-ui/karpotic` - Add to specific package

### Testing
- `turbo test` - Run tests across all packages (depends on build completion)

## Architecture

### Component Library (`packages/karpotic`)
- **Entry Point**: `src/index.ts` - Barrel exports for all components
- **Build System**: Rollup with Babel transpilation
- **Output Formats**: Dual ESM (`dist/index.js`) and CJS (`dist/index.cjs.js`) builds
- **TypeScript**: Declaration files generated via separate `tsc` process
- **External Dependencies**: React and React-DOM are marked as externals

### Build Configuration
- **Rollup**: Base config in `rollup.config.base.js` with Babel, CommonJS, and Node resolve plugins
- **Babel**: Configured for React, TypeScript, and runtime transforms with upward root mode
- **TypeScript**: Project references architecture with separate build configs
- **Package Exports**: Modern package.json exports field with conditional imports/requires

### TypeScript Configuration
- **Root**: Project references architecture (`tsconfig.json` references package build configs)
- **Base Config**: Shared TypeScript settings in `tsconfig.base.json` with ES2022 target
- **Package Config**: Composite builds with declaration generation in separate `tsconfig.build.json`
- **Strict Mode**: Enabled across all packages with experimental decorators support

## Development Workflow

1. **Component Development**: Work in `packages/karpotic/src/` with TypeScript
2. **Build Library**: Run `pnpm build` from root or package-specific build commands
3. **Type Checking**: Use `type-check` script for TypeScript validation without emit
4. **Watch Mode**: Use `dev` script in package for development with file watching