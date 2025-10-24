import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Ontological colors
    { pattern: /bg-ontological-(50|100|500|600|700)/ },
    { pattern: /text-ontological-(50|100|500|600|700)/ },
    { pattern: /border-ontological-(50|100|300|500|600|700)/ },
    { pattern: /from-ontological-(50|100|500|600|700)/ },
    { pattern: /to-ontological-(50|100|500|600|700)/ },
    { pattern: /via-ontological-(50|100|500|600|700)/ },
    { pattern: /hover:bg-ontological-(50|100|500|600|700)/ },
    // Axiological colors
    { pattern: /bg-axiological-(50|100|500|600|700)/ },
    { pattern: /text-axiological-(50|100|500|600|700)/ },
    { pattern: /border-axiological-(50|100|300|500|600|700)/ },
    { pattern: /from-axiological-(50|100|500|600|700)/ },
    { pattern: /to-axiological-(50|100|500|600|700)/ },
    { pattern: /via-axiological-(50|100|500|600|700)/ },
    { pattern: /hover:bg-axiological-(50|100|500|600|700)/ },
    // Imaginary colors
    { pattern: /bg-imaginary-(50|100|500|600|700)/ },
    { pattern: /text-imaginary-(50|100|500|600|700)/ },
    { pattern: /border-imaginary-(50|100|300|500|600|700)/ },
    { pattern: /from-imaginary-(50|100|500|600|700)/ },
    { pattern: /to-imaginary-(50|100|500|600|700)/ },
    { pattern: /via-imaginary-(50|100|500|600|700)/ },
    { pattern: /hover:bg-imaginary-(50|100|500|600|700)/ },
  ],
  theme: {
    extend: {
      colors: {
        ontological: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        axiological: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        imaginary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        },
      },
    },
  },
  plugins: [],
};
export default config;
