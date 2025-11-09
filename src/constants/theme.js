/**
 * SPYLT Design System - Theme Configuration
 * Centralized theme configuration for colors, typography, spacing, and other design tokens
 */

// ============================================
// COLOR PALETTE
// ============================================

export const colors = {
  // Primary Colors
  primary: {
    black: "#1a2e1a",        // Dark forest green
    mainBg: "#1b2e1b",       // Deep green background
    white: "#ffffff",
    milk: "#e8f5e8",         // Light mint green (replaces milk/cream)
  },

  // Green Shades (replaces Brown)
  brown: {
    dark: "#2d5016",         // Dark forest green
    mid: "#5a8f3a",          // Mid sage green
    light: "#8fbc5f",        // Light grass green
    red: "#3d6b2d",          // Deep pine green
    yellow: "#6b9f4a",       // Yellow-green
    tan: "#9bc76d",          // Tan green
    darker: "#1f3d1f",       // Darker forest green
  },

  // Light Green & Mint Shades (replaces Milk)
  milk: {
    base: "#e8f5e8",         // Pale mint
    yellow: "#d4ebc4",       // Yellow-tinted mint
    cream: "#daf2cd",        // Cream mint
    light: "#e5f5d8",        // Very light mint
    border: "#d8ecc8",       // Border mint
  },

  // Accent Colors
  accent: {
    red: "#4a7c2d",          // Emerald green accent
    yellow: "#b8e66f",       // Bright lime accent
  },

  // Utility Colors
  utility: {
    border: "#7fb359",       // Green border
    borderLight: "#c8e0b8",  // Light green border
    placeholder: "#8a9a8a",  // Green-gray placeholder
    text: "#4a6b3a",         // Dark green text
    nutritionText: "#3d5a2d", // Nutrition text green
  },

  // Opacity Variations (for overlays and backgrounds)
  overlay: {
    milkFaded: "#e8f5e810",  // Faded mint
    milkSubtle: "#e8f5e833", // Subtle mint
    whiteSemi: "#ffffff1a",
  },

  // Gradient Colors
  gradient: {
    start: "#e8f5e2",        // Light mint gradient start
    end: "#c5e0b0",          // Deeper mint gradient end
  },
};

// ============================================
// TYPOGRAPHY
// ============================================

export const typography = {
  fonts: {
    heading: '"Antonio", sans-serif',
    body: '"ProximaNova, sans-serif"',
  },

  sizes: {
    hero: {
      "2xl": "8.5rem",
      md: "6.5rem",
      sm: "3.3rem",
    },
    general: {
      "2xl": "8.5rem",
      xl: "8xl",
      base: "5xl",
    },
    testimonial: {
      base: "20.5vw",
    },
    flavor: {
      md: "6xl",
      sm: "3xl",
    },
  },

  lineHeight: {
    tight: "105%",
    base: "115%",
    hero: "9vw",
  },

  letterSpacing: {
    tight: "-.35vw",
    tighter: "-.4vw",
  },
};

// ============================================
// SPACING & LAYOUT
// ============================================

export const spacing = {
  borderWidth: {
    base: ".5vw",
  },

  rotation: {
    light: "1deg",
    lightNeg: "-1deg",
    medium: "3deg",
    mediumNeg: "-3deg",
    heavy: "5deg",
    heavyNeg: "-5deg",
    flavors: {
      left: "-8deg",
      right: "8deg",
    },
  },

  buttonSize: {
    social: {
      md: "5vw",
      sm: "3.5rem",
    },
    play: "9vw",
    circleText: "15vw",
  },
};

// ============================================
// THEME PRESETS
// ============================================

// Benefit Section Title Presets
export const benefitTitlePresets = {
  shelfStable: {
    color: colors.primary.milk,
    bg: colors.brown.tan,
    borderColor: colors.primary.black,
  },
  proteinCaffeine: {
    color: colors.primary.black,
    bg: colors.primary.milk,
    borderColor: colors.primary.black,
  },
  recyclable: {
    color: colors.primary.milk,
    bg: colors.brown.red,
    borderColor: colors.primary.black,
  },
  lactoseFree: {
    color: colors.brown.darker,
    bg: colors.accent.yellow,
    borderColor: colors.primary.black,
  },
};

// Message Section Colors
export const messageSectionColors = {
  background: colors.brown.red,
  text: colors.primary.milk,
  textFaded: colors.overlay.milkFaded,
  border: colors.brown.red,
};

// Footer Section Colors
export const footerSectionColors = {
  background: colors.primary.black,
  text: colors.primary.milk,
  border: colors.utility.borderLight,
  placeholder: colors.utility.placeholder,
  socialBorder: colors.overlay.milkSubtle,
  socialHover: colors.overlay.whiteSemi,
};

// Nutrition Section Colors
export const nutritionSectionColors = {
  title: colors.utility.nutritionText,
  text: colors.utility.text,
  boxBg: colors.milk.light,
  boxBorder: colors.milk.border,
  spacerBorder: colors.utility.border,
  sectionBorder: colors.milk.yellow,
  gradient: {
    from: colors.gradient.start,
    to: colors.gradient.end,
  },
};

// Hero Section Colors
export const heroSectionColors = {
  background: colors.primary.milk,
  title: colors.brown.dark,
  subtitle: colors.milk.cream,
  subtitleBg: colors.brown.mid,
  button: {
    bg: colors.brown.light,
    text: colors.brown.dark,
  },
};

// Flavor Section Colors
export const flavorSectionColors = {
  background: colors.primary.milk,
  title: colors.brown.dark,
  drinkLabel: colors.primary.milk,
};

// Benefit Section Colors
export const benefitSectionColors = {
  background: colors.primary.black,
  text: colors.primary.milk,
  playBtn: colors.overlay.whiteSemi,
};

// Testimonial Section Colors
export const testimonialSectionColors = {
  background: colors.primary.milk,
  cardBorder: colors.primary.milk,
};

// ============================================
// EXPORT DEFAULT THEME
// ============================================

const theme = {
  colors,
  typography,
  spacing,
  presets: {
    benefitTitles: benefitTitlePresets,
    messageSection: messageSectionColors,
    footerSection: footerSectionColors,
    nutritionSection: nutritionSectionColors,
    heroSection: heroSectionColors,
    flavorSection: flavorSectionColors,
    benefitSection: benefitSectionColors,
    testimonialSection: testimonialSectionColors,
  },
};

export default theme;

