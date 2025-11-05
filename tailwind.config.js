/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,css,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Yeckanbakh: "yekanbakh",
    },
    colors: {
      // 1. رنگ‌های برند (Primary Brand Colors)
      brand: {
        DEFAULT: "#307FE2", // Primary
        dark: "#185EB5", // dark-blue
        accent: "#437BE3", // hover line
        link: "#4E91E6", // app download link
        light: "#598DE3", // light utility blue
        subtle: "#BAD3FF", // lightest link/bg
      },

      // 2. رنگ‌های متنی (Text Colors)
      text: {
        heading: "#081F3C", // Nav text, Main Titles
        subhead: "#253035", // Slider Title
        muted: "#718E9C", // Secondary text
      },

      // 3. رنگ‌های وضعیت و سیستم (Status & System)
      success: {
        DEFAULT: "#00AB84", // Span BG, Card Theme
        text: "#00BD92", // Mixed text
      },

      // 4. رنگ‌های پس‌زمینه (Background Colors)
      bg: {
        base: "#EDF4FC", // Light background for elements
        "save-teal": "#E5F7F4", // Save section bg 1
        "save-rose": "#FBF2F3", // Save section bg 2
      },

      // 5. رنگ‌های تم کارت‌ها (Utility/Theme Colors)
      theme: {
        danger: "#FF0D3B", // Card color (Red)
        violet: "#6558B1", // Card color (Violet)
        warning: "#FFD100", // Card color (Yellow)
        rose: "#E1A6AD", // Card color (Rose)
        dark: "#333333", // Card color (Dark)
      },

      // 6. رنگ بوردرها (Border Colors)
      border: {
        base: "#E4EAEC", // General borders
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
      },
      screens: {
        xl: "1200px",
      },
    },
    screens: {
      xs: "380px",
      mobile: "570px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
