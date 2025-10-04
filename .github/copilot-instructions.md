# Leticia Amen Portfolio - AI Coding Instructions

## Project Architecture

This is a **single-page portfolio website** built with Vite + React + TypeScript, using shadcn/ui components and Tailwind CSS. The project is optimized for development on the Lovable platform.

### Key Stack Components
- **Vite** with React SWC plugin for fast builds (`npm run dev` on port 8080)
- **shadcn/ui** design system with Radix UI primitives
- **TanStack Query** for data fetching (though currently unused)
- **React Router** with single Index route + 404 fallback
- **Tailwind CSS** with custom design tokens in CSS variables

## Critical Patterns & Conventions

### Component Structure
- **Single-page layout**: All content sections are rendered in `src/pages/Index.tsx` as stacked components
- **Section-based navigation**: Each major component has an `id` prop for smooth scrolling (`scrollToSection` pattern used in `Navbar.tsx` and `Hero.tsx`)
- **Component naming**: PascalCase files matching export names (`Hero.tsx` exports `Hero`)

### Design System (src/index.css)
```css
/* All colors MUST be HSL format */
--primary: 220 70% 20%;    /* Dark blue */
--secondary: 250 60% 55%;  /* Purple */
--accent: 185 80% 50%;     /* Cyan */

/* Custom gradients available via CSS variables */
--gradient-hero: linear-gradient(180deg, hsl(220 25% 97%) 0%, hsl(220 30% 93%) 100%);
--gradient-primary: linear-gradient(135deg, hsl(220 70% 20%) 0%, hsl(250 60% 35%) 100%);
```

### Styling Patterns
- Use `bg-gradient-to-r from-primary to-accent` for gradient text/backgrounds
- Custom shadows: `--shadow-soft`, `--shadow-medium`, `--shadow-glow`
- Section structure: `<section id="name" className="py-24">` with container wrapping
- Animation classes: `animate-fade-in` used for entrance effects

### Import Aliases (components.json)
```typescript
"@/components" → src/components
"@/lib/utils" → src/lib/utils.ts (cn utility)
"@/assets" → src/assets
"@/hooks" → src/hooks
```

## Development Workflow

### Commands
- `npm run dev` - Development server (port 8080, host "::")
- `npm run build` - Production build
- `npm run build:dev` - Development mode build
- `npm run lint` - ESLint check
- `npm run preview` - Preview production build

### File Organization
- **Pages**: Single route in `src/pages/Index.tsx`
- **Components**: Functional components in `src/components/` (Hero, About, Projects, etc.)
- **UI Components**: shadcn/ui components in `src/components/ui/`
- **Assets**: Images in `src/assets/` (currently `hero-developer.jpg`)

### Component Implementation
When creating new sections:
1. Add to `src/components/` with PascalCase naming
2. Import and add to `src/pages/Index.tsx` in logical order
3. Add section `id` for navigation if needed
4. Follow the `py-24` section padding pattern
5. Use container classes: `container mx-auto px-6`

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Grid layouts: `lg:grid-cols-2` pattern common
- Responsive text: `text-5xl md:text-6xl lg:text-7xl`

## Integration Points

### Lovable Platform
- Project uses `lovable-tagger` plugin in development mode
- Assets should reference the public folder correctly
- Changes pushed to git are reflected in Lovable automatically

### shadcn/ui Components
- Pre-configured with slate base color and CSS variables
- Use `cn()` utility from `@/lib/utils` for conditional classes
- All UI components follow Radix UI patterns with custom styling

### Smooth Scrolling Navigation
Pattern used across components:
```typescript
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
```

## Content Context

This is a **Spanish-language portfolio** for Leticia Amen, a software developer specializing in:
- Java & Spring Boot backend development
- Cloud technologies (AWS, Google Cloud)
- Cybersecurity (Cisco certifications)
- Database technologies

When adding content, maintain the professional tone and Spanish language consistency established in existing components.