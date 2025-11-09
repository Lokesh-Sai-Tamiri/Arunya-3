# Theme System - Before & After Examples

This document shows side-by-side comparisons of code before and after the theme migration.

## Example 1: BenefitSection Component

### Before (Hardcoded Colors)

```javascript
// BenefitSection.jsx - OLD
import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";

const BenefitSection = () => {
  // ... GSAP code ...
  
  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <ClipPathTitle
            title={"Shelf stable"}
            color={"#faeade"}              // ❌ Hardcoded
            bg={"#c88e64"}                 // ❌ Hardcoded
            borderColor={"#222123"}        // ❌ Hardcoded
          />
          <ClipPathTitle
            title={"Protein + Caffeine"}
            color={"#222123"}              // ❌ Hardcoded
            bg={"#faeade"}                 // ❌ Hardcoded
            borderColor={"#222123"}        // ❌ Hardcoded
          />
        </div>
      </div>
    </section>
  );
};
```

### After (Using Theme)

```javascript
// BenefitSection.jsx - NEW
import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";
import theme from "../constants/theme";   // ✅ Import theme

const BenefitSection = () => {
  // ... GSAP code ...
  
  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <ClipPathTitle
            title={"Shelf stable"}
            color={theme.presets.benefitTitles.shelfStable.color}         // ✅ From theme
            bg={theme.presets.benefitTitles.shelfStable.bg}               // ✅ From theme
            borderColor={theme.presets.benefitTitles.shelfStable.borderColor}  // ✅ From theme
          />
          <ClipPathTitle
            title={"Protein + Caffeine"}
            color={theme.presets.benefitTitles.proteinCaffeine.color}    // ✅ From theme
            bg={theme.presets.benefitTitles.proteinCaffeine.bg}          // ✅ From theme
            borderColor={theme.presets.benefitTitles.proteinCaffeine.borderColor}  // ✅ From theme
          />
        </div>
      </div>
    </section>
  );
};
```

### Benefits
- ✅ **Maintainable**: Change all "shelf stable" colors in one place
- ✅ **Consistent**: Guaranteed same colors across components
- ✅ **Semantic**: Clear naming shows purpose
- ✅ **Discoverable**: IDE autocomplete shows available presets

---

## Example 2: MessageSection GSAP Animation

### Before (Hardcoded Colors)

```javascript
// MessageSection.jsx - OLD
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const MessageSection = () => {
  useGSAP(() => {
    gsap.to(firstMsgSplit.words, {
      color: "#faeade",           // ❌ Hardcoded
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });
    
    gsap.to(secMsgSplit.words, {
      color: "#faeade",           // ❌ Hardcoded
      ease: "power1.in",
      stagger: 1,
    });
  });
  
  // ...
};
```

### After (Using Theme)

```javascript
// MessageSection.jsx - NEW
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import theme from "../constants/theme";   // ✅ Import theme

const MessageSection = () => {
  useGSAP(() => {
    gsap.to(firstMsgSplit.words, {
      color: theme.presets.messageSection.text,  // ✅ From theme
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });
    
    gsap.to(secMsgSplit.words, {
      color: theme.presets.messageSection.text,  // ✅ From theme
      ease: "power1.in",
      stagger: 1,
    });
  });
  
  // ...
};
```

### Benefits
- ✅ **Animation-friendly**: Works seamlessly with GSAP
- ✅ **Consistent**: Same color as static message section text
- ✅ **Flexible**: Easy to create variants (hover, active, etc.)

---

## Example 3: FooterSection Form Styling

### Before (Hardcoded Colors)

```javascript
// FooterSection.jsx - OLD
const FooterSection = () => {
  return (
    <section className="footer-section">
      <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5">
        {/* ❌ Hardcoded in Tailwind class */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full placeholder:text-[#999999]"
          {/* ❌ Hardcoded in Tailwind class */}
        />
      </div>
    </section>
  );
};
```

### After (Using Theme)

```javascript
// FooterSection.jsx - NEW
import theme from "../constants/theme";   // ✅ Import theme

const FooterSection = () => {
  return (
    <section className="footer-section">
      <div
        className="flex justify-between items-center border-b py-5"
        style={{ borderColor: theme.presets.footerSection.border }}
        {/* ✅ From theme */}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full placeholder:font-sans"
          style={{ color: theme.presets.footerSection.placeholder }}
          {/* ✅ From theme */}
        />
      </div>
    </section>
  );
};
```

### Benefits
- ✅ **Dynamic**: Can be changed at runtime if needed
- ✅ **Testable**: Easy to mock theme for testing
- ✅ **Themed**: Can switch between light/dark modes

---

## Example 4: Creating New Components

### Before (No Theme System)

```javascript
// NewComponent.jsx - OLD
const NewComponent = () => {
  return (
    <div style={{
      backgroundColor: "#faeade",    // ❌ What color is this?
      color: "#523122",              // ❌ Is this the right brown?
      borderColor: "#999999",        // ❌ Which border color to use?
    }}>
      {/* Content */}
    </div>
  );
};
```

**Problems:**
- 😕 Developer must remember/look up color codes
- 😕 Risk of using slightly different shades
- 😕 No IDE autocomplete for colors
- 😕 Hard to maintain consistency

### After (With Theme System)

```javascript
// NewComponent.jsx - NEW
import theme from "../constants/theme";

const NewComponent = () => {
  return (
    <div style={{
      backgroundColor: theme.colors.primary.milk,        // ✅ Clear name
      color: theme.colors.brown.dark,                    // ✅ Semantic
      borderColor: theme.colors.utility.placeholder,     // ✅ Purpose-based
    }}>
      {/* Content */}
    </div>
  );
};
```

**Advantages:**
- 😊 Clear, semantic color names
- 😊 IDE autocomplete shows all options
- 😊 Guaranteed consistency
- 😊 Easy to discover available colors

---

## Example 5: Using Section Presets

### Creating a New Section

```javascript
// CustomSection.jsx - Using Theme Presets

import theme from "../constants/theme";

const CustomSection = () => {
  // Option 1: Use existing section preset
  const sectionColors = theme.presets.heroSection;
  
  return (
    <section style={{
      backgroundColor: sectionColors.background,
      color: sectionColors.title,
    }}>
      <h1 style={{ color: sectionColors.title }}>
        Title
      </h1>
      <button style={{
        backgroundColor: sectionColors.button.bg,
        color: sectionColors.button.text,
      }}>
        Click Me
      </button>
    </section>
  );
};
```

---

## Example 6: Color Variations

### Before (Multiple Hardcoded Values)

```javascript
// Different opacity values hardcoded
const styles = {
  overlay1: { backgroundColor: "#faeade10" },   // ❌ 10% opacity
  overlay2: { backgroundColor: "#faeade33" },   // ❌ 33% opacity
  overlay3: { backgroundColor: "#ffffff1a" },   // ❌ 1a% opacity
};
```

### After (Organized Theme Values)

```javascript
import theme from "../constants/theme";

const styles = {
  overlay1: { 
    backgroundColor: theme.colors.overlay.milkFaded    // ✅ 10% opacity
  },
  overlay2: { 
    backgroundColor: theme.colors.overlay.milkSubtle   // ✅ 33% opacity
  },
  overlay3: { 
    backgroundColor: theme.colors.overlay.whiteSemi    // ✅ 1a% opacity
  },
};
```

---

## Example 7: Refactoring Utility

### Search & Replace Strategy

**Step 1**: Find all hardcoded colors
```bash
# Old approach - manual search
grep -r "#faeade" src/
```

**Step 2**: Replace with theme
```javascript
// Find this pattern:
style={{ backgroundColor: "#faeade" }}

// Replace with:
style={{ backgroundColor: theme.colors.primary.milk }}
```

---

## Theme Structure Overview

```javascript
import theme from "./constants/theme";

// Access patterns:
theme.colors.primary.milk        // Base colors
theme.colors.brown.dark          // Brown variations
theme.colors.utility.border      // Utility colors
theme.colors.overlay.milkFaded   // Opacity variants
theme.typography.fonts.heading   // Typography
theme.spacing.borderWidth.base   // Spacing
theme.presets.heroSection        // Section presets
```

---

## Best Practices Summary

### ✅ DO

1. **Import theme at the top**
   ```javascript
   import theme from "../constants/theme";
   ```

2. **Use semantic names**
   ```javascript
   color: theme.colors.brown.dark  // ✅ Clear
   ```

3. **Use presets when available**
   ```javascript
   {...theme.presets.footerSection}
   ```

4. **Document new colors**
   - Add to theme.js
   - Update THEME_GUIDE.md
   - Add examples

### ❌ DON'T

1. **Don't hardcode colors**
   ```javascript
   color: "#523122"  // ❌ Bad
   ```

2. **Don't mix approaches**
   ```javascript
   // ❌ Inconsistent
   backgroundColor: theme.colors.primary.milk
   color: "#523122"  // Should use theme
   ```

3. **Don't create one-off colors**
   ```javascript
   const myColor = "#abc123";  // ❌ Add to theme first
   ```

---

## Migration Checklist

- [x] Create `theme.js` with all colors
- [x] Create `THEME_GUIDE.md` documentation
- [x] Update `BenefitSection.jsx`
- [x] Update `MessageSection.jsx`
- [x] Update `FooterSection.jsx`
- [x] Update `constants/index.js`
- [x] Update `README.md`
- [x] Test all components
- [x] Verify no linting errors
- [ ] Team training on theme usage
- [ ] Update style guide
- [ ] Consider TypeScript types

---

**Pro Tip**: Use your IDE's autocomplete feature! Type `theme.` and see all available options.

```javascript
import theme from "../constants/theme";

// Just type: theme.
// Your IDE will show:
//   - theme.colors
//   - theme.typography
//   - theme.spacing
//   - theme.presets

// Then type: theme.colors.
// IDE shows all color categories:
//   - theme.colors.primary
//   - theme.colors.brown
//   - theme.colors.milk
//   - etc.
```

This makes development faster and reduces errors! 🚀

