/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Include all files in the app directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include components directory
  ],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: "#1f2937", // Dark background
        secondary: "#4b5563", // Lighter gray
        accent: "#10b981", // Green accent
      },
    },
  },
  plugins: [],
};