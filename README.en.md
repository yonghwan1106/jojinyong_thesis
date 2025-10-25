# Catharsis Studies - Dr. Jinyong Jo's Dissertation Website

Beyond Aristotle: Three Dimensions of Catharsis - Ontological, Axiological, and Imaginary

## Project Overview

This website is an interactive web application that makes Dr. Jinyong Jo's doctoral dissertation "Catharsis Studies" accessible to the general public.

### Key Features

- 📚 **User-Friendly Content**: Complex philosophical terms translated into everyday language
- 🎬 **Modern Examples**: Classical theories explained through contemporary films and dramas
- 🎨 **Beautiful UI/UX**: Color scheme representing three types of catharsis
- ✨ **Animations**: Smooth scroll effects using Framer Motion
- 🔍 **Search Functionality**: Real-time search and filtering in glossary
- 📱 **Responsive Design**: Perfect support for mobile, tablet, and desktop
- 🌐 **Multilingual**: Korean and English support

## Pages

### Main Page
- Introduction to Catharsis
- Comparison of Three Types
- Literary Work Examples
- Explanation of Significance

### Detailed Catharsis Type Pages
1. **Ontological Catharsis** - The Shock of Discovering Truth
2. **Axiological Catharsis** - The Satisfaction of Justice Served
3. **Imaginary Catharsis** - The Ecstasy of Impossible Dreams

### Literary Work Analysis
1. **Hamlet** (Shakespeare) - Catharsis of Unknowability
2. **Tess** (Thomas Hardy) - Catharsis of Revenge
3. **Moby-Dick** (Herman Melville) - Catharsis of Obsessive Pursuit

### Glossary
- 30+ philosophical and literary terms
- Real-time search and category filtering
- Related term links

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Internationalization**: next-intl
- **Deployment**: Vercel

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm start
```

## Color System

- 🔵 **Ontological**: Blue (#3b82f6) - Truth, Enlightenment
- 🔴 **Axiological**: Red (#ef4444) - Justice, Passion
- 🟣 **Imaginary**: Purple (#a855f7) - Mystery, Imagination

## Author

**Jinyong Jo**
- Ph.D. in English Literature, Kyungguk National University
- Dissertation: "Catharsis Studies" (February 2025)

## Project Structure

```
website/
├── app/                        # Next.js App Router pages
│   ├── page.tsx               # Main page
│   ├── about/                 # About the author
│   ├── catharsis/             # Catharsis type details
│   │   ├── ontological/
│   │   ├── axiological/
│   │   └── imaginary/
│   ├── works/                 # Literary work analysis
│   │   ├── hamlet/
│   │   ├── tess/
│   │   └── moby-dick/
│   └── glossary/              # Term glossary
├── components/
│   ├── layout/                # Header, Footer
│   └── sections/              # Page sections
├── data/
│   └── glossary.ts           # Glossary data (30+ terms)
└── messages/                  # i18n translation files
    ├── ko.json
    └── en.json
```

## Key Concepts

### Three Types of Catharsis

1. **Ontological Catharsis**
   - Experience of discovering or failing to discover truth
   - Example: The twist in "The Sixth Sense"
   - Literary work: Hamlet

2. **Axiological Catharsis**
   - Satisfaction when justice is served
   - Example: Villain's defeat in "Avengers"
   - Literary work: Tess

3. **Imaginary Catharsis**
   - Ecstasy of immersion in powerful fantasy
   - Example: Space exploration in "Interstellar"
   - Literary work: Moby-Dick

## Academic Contribution

This research:
- Critiques Aristotelian limitations
- Discovers the "axiological gap" in classical theory
- Proposes a comprehensive tripartite model
- Provides new interpretations of canonical works

## License

© 2025 Jinyong Jo. All rights reserved.

## Contact

For inquiries about the dissertation or website: [Contact Information]
