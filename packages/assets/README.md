# @karponents-ui/assets

Shared assets for Karponents UI design system including icons, images, and illustrations.

## Package Structure

```
@karponents-ui/assets/
├── package.json
├── README.md
├── icons/          # SVG icons and small graphics
├── images/         # Photos and raster images
└── illustrations/  # Complex SVG illustrations
```

## Usage

### Icons
```typescript
// Import SVG as React component using SVGR
import { ReactComponent as SearchIcon } from '@karponents-ui/assets/icons/search.svg';

function MyComponent() {
  return <SearchIcon />;
}
```

### Images
```typescript
// Import as URL for raster images
import heroImage from '@karponents-ui/assets/images/hero.png';

function MyComponent() {
  return <img src={heroImage} alt="Hero" />;
}
```

## File Organization Guidelines

### Icons (`/icons`)
- SVG format only
- Small, simple graphics (typically under 2KB)
- Monochromatic designs preferred
- Use kebab-case naming: `search-icon.svg`

### Images (`/images`)  
- PNG, JPG, WebP formats
- Photos and complex raster graphics
- Optimized for web delivery
- Use descriptive names: `hero-banner.jpg`

### Illustrations (`/illustrations`)
- Complex SVG graphics
- Multi-color illustrations and graphics
- Brand illustrations and decorative elements
- Use descriptive names: `empty-state.svg`

## Development

This package contains only static assets and requires no build process. Assets are consumed directly by other packages in the monorepo.