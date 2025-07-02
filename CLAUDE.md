# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern financial services website for Outlive Financial Planning built with Next.js 14, React, TypeScript, and Tailwind CSS. It features server-side rendering, responsive design, and professional financial advisory content.

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture

### Framework Stack
- **Next.js 14** with App Router (using experimental appDir)
- **React 18** with TypeScript (strict mode disabled)
- **Tailwind CSS** for styling with custom color system
- **Heroicons** for iconography

### Project Structure
```
app/
├── components/          # Reusable React components
│   ├── Navigation.tsx   # Main navigation with mobile menu
│   ├── Hero.tsx         # Landing page hero section
│   ├── Footer.tsx       # Site footer
│   └── [others].tsx     # Other UI components
├── about/              # About page route
├── services/           # Services page route
├── globals.css         # Global styles and Tailwind imports
├── layout.tsx          # Root layout with Navigation/Footer
└── page.tsx            # Homepage with all sections
```

### Key Architecture Patterns

1. **App Router Structure**: Uses Next.js 13+ App Router with file-based routing
2. **Component Organization**: Components are centralized in `app/components/` and imported across pages
3. **Layout System**: Root layout (`layout.tsx`) wraps all pages with Navigation and Footer
4. **Custom Styling**: Extensive Tailwind customization with brand-specific color palette and typography

### Brand Colors (Tailwind Config)
- **Primary**: `#27344B` (dark blue-gray)
- **Secondary**: `#909C79` (sage green) 
- **Accent**: `#DDA248` (gold)
- **Alert**: `#CB4109` (orange-red)
- **Neutral**: `#E9E4E1` (warm gray)

### Image Configuration
- Next.js Image component configured for external domain: `7saturdaysfinancial.com`
- Local images stored in `public/images/`

### Content Focus
The site emphasizes "financial life design" over traditional financial planning, with messaging around living intentionally and not delaying life goals. Content includes personal branding for "Zach Rodriguez" as the financial advisor.

## Development Notes

- TypeScript strict mode is disabled (`"strict": false`)
- Uses Inter font family from Google Fonts
- Mobile-responsive design patterns throughout
- Professional financial services styling and layout conventions