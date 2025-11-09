# SPYLT Design System - Theme Guide

## Overview

This guide explains how to use the centralized theme configuration system for the SPYLT website. All colors, typography, and design tokens are now managed from a single source of truth: `theme.js`.

## Benefits

- **Consistency**: All colors and design tokens are defined in one place
- **Maintainability**: Easy to update colors across the entire application
- **Type Safety**: Clear structure for theme values
- **DRY Principle**: No repeated color values across components
- **Easy Theming**: Simplified process for creating new themes or variants

## File Structure

```
src/constants/
├── theme.js          # Main theme configuration
├── index.js          # Re-exports theme + other constants
└── THEME_GUIDE.md    # This file
```

## Importing the Theme

There are two ways to import the theme:

### Method 1: Direct Import (Recommended)
```javascript
import theme from "../constants/theme";
```

### Method 2: Named Import from Constants
```javascript
import { theme } from "../constants";
```

## Theme Structure

### 1. Colors

The theme provides a comprehensive color palette organized by purpose:

#### Primary Colors
```javascript
theme.colors.primary.black       // #222123
theme.colors.primary.mainBg      // #232224
theme.colors.primary.white       // #ffffff
theme.colors.primary.milk        // #faeade
```

#### Brown Shades
```javascript
theme.colors.brown.dark          // #523122
theme.colors.brown.mid           // #a26833
theme.colors.brown.light         // #e3a458
theme.colors.brown.red           // #7f3b2d
theme.colors.brown.yellow        // #a26833
theme.colors.brown.tan           // #c88e64
theme.colors.brown.darker        // #2E2D2F
```

#### Milk & Cream Shades
```javascript
theme.colors.milk.base           // #faeade
theme.colors.milk.yellow         // #e3d3bc
theme.colors.milk.cream          // #fce1cd
theme.colors.milk.light          // #fdebd2
theme.colors.milk.border         // #e8ddca
```

#### Accent Colors
```javascript
theme.colors.accent.red          // #a02128
theme.colors.accent.yellow       // #FED775
```

#### Utility Colors
```javascript
theme.colors.utility.border           // #C89C6E
theme.colors.utility.borderLight      // #D9D9D9
theme.colors.utility.placeholder      // #999999
theme.colors.utility.text             // #865720
theme.colors.utility.nutritionText    // #513022
```

#### Overlay Colors (with opacity)
```javascript
theme.colors.overlay.milkFaded       // #faeade10
theme.colors.overlay.milkSubtle      // #faeade33
theme.colors.overlay.whiteSemi       // #ffffff1a
```

#### Gradient Colors
```javascript
theme.colors.gradient.start          // #f3ece2
theme.colors.gradient.end            // #dcccb0
```

### 2. Typography

```javascript
// Fonts
theme.typography.fonts.heading       // "Antonio", sans-serif
theme.typography.fonts.body          // "ProximaNova, sans-serif"

// Sizes
theme.typography.sizes.hero["2xl"]   // 8.5rem
theme.typography.sizes.hero.md       // 6.5rem
theme.typography.sizes.hero.sm       // 3.3rem

// Line Heights
theme.typography.lineHeight.tight    // 105%
theme.typography.lineHeight.base     // 115%
theme.typography.lineHeight.hero     // 9vw

// Letter Spacing
theme.typography.letterSpacing.tight    // -.35vw
theme.typography.letterSpacing.tighter  // -.4vw
```

### 3. Spacing & Layout

```javascript
// Border Widths
theme.spacing.borderWidth.base       // .5vw

// Rotations
theme.spacing.rotation.light         // 1deg
theme.spacing.rotation.lightNeg      // -1deg
theme.spacing.rotation.medium        // 3deg
theme.spacing.rotation.mediumNeg     // -3deg
theme.spacing.rotation.heavy         // 5deg
theme.spacing.rotation.heavyNeg      // -5deg

// Button Sizes
theme.spacing.buttonSize.social.md   // 5vw
theme.spacing.buttonSize.social.sm   // 3.5rem
theme.spacing.buttonSize.play        // 9vw
```

### 4. Section-Specific Presets

Pre-configured color combinations for each section:

```javascript
// Benefit Section Titles
theme.presets.benefitTitles.shelfStable
theme.presets.benefitTitles.proteinCaffeine
theme.presets.benefitTitles.recyclable
theme.presets.benefitTitles.lactoseFree

// Section Colors
theme.presets.messageSection
theme.presets.footerSection
theme.presets.nutritionSection
theme.presets.heroSection
theme.presets.flavorSection
theme.presets.benefitSection
theme.presets.testimonialSection
```

## Usage Examples

### Example 1: Using Colors in Inline Styles

```javascript
import theme from "../constants/theme";

const MyComponent = () => {
  return (
    <div
      style={{
        backgroundColor: theme.colors.brown.dark,
        color: theme.colors.primary.milk,
        borderColor: theme.colors.utility.border,
      }}
    >
      Content here
    </div>
  );
};
```

### Example 2: Using Section Presets

```javascript
import theme from "../constants/theme";

const BenefitTitle = () => {
  return (
    <ClipPathTitle
      title="Shelf stable"
      color={theme.presets.benefitTitles.shelfStable.color}
      bg={theme.presets.benefitTitles.shelfStable.bg}
      borderColor={theme.presets.benefitTitles.shelfStable.borderColor}
    />
  );
};
```

### Example 3: Using Colors in GSAP Animations

```javascript
import theme from "../constants/theme";
import gsap from "gsap";

const AnimatedComponent = () => {
  useGSAP(() => {
    gsap.to(".element", {
      color: theme.presets.messageSection.text,
      backgroundColor: theme.presets.messageSection.background,
      ease: "power1.in",
    });
  });

  return <div className="element">Animated content</div>;
};
```

### Example 4: Dynamic Style Objects

```javascript
import theme from "../constants/theme";

const DynamicComponent = ({ variant }) => {
  const styles = {
    primary: {
      background: theme.colors.primary.milk,
      color: theme.colors.brown.dark,
    },
    accent: {
      background: theme.colors.brown.red,
      color: theme.colors.primary.white,
    },
  };

  return (
    <div style={styles[variant]}>
      Dynamic styling
    </div>
  );
};
```

## Best Practices

### ✅ DO

1. **Always use theme colors** instead of hardcoded hex values
```javascript
// Good
backgroundColor: theme.colors.primary.milk

// Bad
backgroundColor: "#faeade"
```

2. **Use semantic presets** when available
```javascript
// Good
theme.presets.footerSection.background

// Acceptable
theme.colors.primary.black
```

3. **Import theme once** at the top of your component
```javascript
import theme from "../constants/theme";
```

4. **Use descriptive color names** from the theme
```javascript
// Good
color: theme.colors.brown.dark

// Bad
color: theme.colors.brown.brown1  // If this existed
```

### ❌ DON'T

1. **Don't hardcode color values**
```javascript
// Bad
backgroundColor: "#222123"

// Good
backgroundColor: theme.colors.primary.black
```

2. **Don't create one-off colors** without adding them to theme
```javascript
// Bad
const customColor = "#abc123";

// Good - Add to theme.js first, then use it
backgroundColor: theme.colors.custom.newColor
```

3. **Don't mix theme usage with hardcoded values**
```javascript
// Bad - Inconsistent
backgroundColor: theme.colors.primary.milk
borderColor: "#999999"

// Good - Consistent
backgroundColor: theme.colors.primary.milk
borderColor: theme.colors.utility.placeholder
```

## Relationship with CSS

The theme.js file complements the CSS custom properties defined in `index.css`. The CSS properties (like `--color-black`) are used with Tailwind classes (like `bg-black`), while the theme.js values are used in JavaScript/JSX inline styles and GSAP animations.

### CSS Custom Properties (for Tailwind)
```css
@theme {
  --color-black: #222123;
  --color-milk: #faeade;
  /* etc */
}
```

### JavaScript Theme (for inline styles & JS logic)
```javascript
theme.colors.primary.black  // #222123
theme.colors.primary.milk   // #faeade
```

## Extending the Theme

To add new colors or design tokens:

1. Open `src/constants/theme.js`
2. Add your new values to the appropriate section
3. Export them as part of the theme object
4. Document them in this guide

### Example: Adding a New Color

```javascript
// In theme.js
export const colors = {
  // ... existing colors ...
  
  brand: {
    primary: "#new-color-hex",
    secondary: "#another-color-hex",
  },
};
```

## Migration from Hardcoded Colors

If you find hardcoded colors in the codebase:

1. Identify the hex color value
2. Check if it exists in `theme.js`
3. If yes, replace with theme reference
4. If no, add it to `theme.js` first, then use it

## Support

For questions or issues with the theme system, please refer to:
- The theme.js file for available values
- This guide for usage patterns
- The existing components for practical examples

---

**Last Updated**: November 2025
**Maintained By**: Development Team

